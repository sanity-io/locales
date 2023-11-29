import {defineField, defineType} from 'sanity'

export const localizationTest = defineType({
  name: 'localizationTest',
  title: 'Localization test',
  description: 'A collection of field types, to showcase a wide range of localizable surfaces',
  type: 'document',
  fields: [
    defineField({
      name: 'string',
      title: 'String field',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {list: ['Fruit', 'Animal', 'Mountain']},
    }),
    defineField({
      name: 'number',
      title: 'Number',
      type: 'number',
      validation: (Rule) => Rule.required().min(42).max(1337),
    }),
    defineField({
      name: 'boolean',
      title: 'Boolean',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'array',
      title: 'Array of strings',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(2).unique(),
    }),
    defineField({
      name: 'arrayOfObjects',
      title: 'Array of objects',
      type: 'array',
      of: [{type: 'object', fields: [{name: 'name', type: 'string'}]}],
    }),
    defineField({
      name: 'object',
      title: 'Object',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'email',
          title: 'Email',
          type: 'email',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'reference',
      title: 'Reference',
      type: 'reference',
      to: [{type: 'localizationTest'}],
    }),
    // defineField({
    //   name: 'crossDatasetReference',
    //   title: 'Cross-dataset reference',
    //   type: 'crossDatasetReference',
    //   dataset: 'blog',
    //   to: [{type: 'author', preview: {select: {title: 'name'}}}],
    // }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().assetRequired(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      validation: (Rule) => Rule.required().assetRequired(),
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
          validation: (Rule) => Rule.required().lowercase(),
        }),
      ],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required().min('2023-01-01'),
    }),
    defineField({
      name: 'datetime',
      title: 'Date/time',
      type: 'datetime',
      validation: (Rule) => Rule.required().min('2023-06-03T13:00:00Z'),
    }),
    defineField({
      name: 'geopoint',
      title: 'Location',
      type: 'geopoint',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['https']}),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'string'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
      validation: (Rule) => Rule.required().min(3),
    }),
  ],
  preview: {
    select: {
      title: 'string',
    },
  },
})
