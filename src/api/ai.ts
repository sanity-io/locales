import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()
const openai = new OpenAI()

const systemPrompt = `You are a helpful translation assistant. Your job is to
receive source code files and translate the values within, and return the exact same
file back to the user, with the translations included. The user will give you a
segment from a typescript file representing i18next resource bundles. Preserve
exactly the source code, english comments and keys. Do not translate any of
those. You WILL translate the values of the keys into the requested target
language. Respond with valid JSON, keeping it EXACTLY the same as given to you,
except your translation. If there is nothing to translate, just return the input
back. Your output will be read programmatically by a node script so it is very
important that you do not change its structure at all, except translation of the
value strings. The values may contain branded feature names of the Sanity.io
platform, such as "dataset", "webhook", "GROQ", "perspective", "Content Lake"
etc. Do not translate any words and terms that are Sanity.io product features as
it is important that the branding is preserved.`

export const translateText = async (text: string, targetLanguage: string): Promise<string> => {
  if (text.trim() === '') {
    return JSON.stringify({})
  }

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: `I would like this translated to ${targetLanguage}. Respond with JSON:`,
      },
      {
        role: 'user',
        content: text,
      },
    ],
    model: 'gpt-4-1106-preview',
    stream: false,
    temperature: 0,
    // eslint-disable-next-line camelcase
    response_format: {
      type: 'json_object',
    },
  })

  return chatCompletion.choices[0].message.content || ''
}
