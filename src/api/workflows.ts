import {join as joinPath} from 'node:path'
import {readFile} from 'node:fs/promises'
import {load as loadYaml, dump as dumpYaml} from 'js-yaml'
import {getRootPath} from '../util/getRootPath'
import {writeFormattedFile} from '../util/writeFormattedFile'
import {aiTranslateWorkflowSchema} from '../schemas'
import {getLocaleRegistry} from './registry'

const WORKFLOWS_RELATIVE_PATH = joinPath('.github', 'workflows')
const AI_TRANSLATE_WORKFLOW_FILENAME = 'ai-translate.yml'

/**
 * Used as a placeholder for the "all" option in the workflow input choices,
 * which allows us to pass it to the CLI command and ignore it there.
 *
 * @internal
 */
const WILDCARD_FLAG = 'ALL'

/**
 * Reconcile the `.github/workflows/ai-translate.yml` file to include all the registered locales
 * and namespaces as input choices to the workflow, allowing us to trigger the workflow in a more
 * specific way.
 *
 * @internal
 */
export async function reconcileAutoTranslateWorkflow(): Promise<void> {
  const rootPath = await getRootPath()
  const locales = await getLocaleRegistry()

  const workflowPath = joinPath(rootPath, WORKFLOWS_RELATIVE_PATH, AI_TRANSLATE_WORKFLOW_FILENAME)
  const workflowYaml = loadYaml(await readFile(workflowPath, 'utf-8'), {
    filename: AI_TRANSLATE_WORKFLOW_FILENAME,
  })

  const workflow = aiTranslateWorkflowSchema.parse(workflowYaml)
  workflow.on.workflow_dispatch.inputs.locale.default = WILDCARD_FLAG
  workflow.on.workflow_dispatch.inputs.locale.options = [
    WILDCARD_FLAG,
    ...locales.map((locale) => locale.id),
  ]

  const newWorkflowYaml = dumpYaml(workflow)
  await writeFormattedFile(workflowPath, newWorkflowYaml)
}
