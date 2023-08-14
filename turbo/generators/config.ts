import type {PlopTypes} from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('locale', {
    description: 'Adds a new locale',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{pascalCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'append',
        path: 'index.tsx',
        pattern: /(\/\/ component exports)/g,
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  })
}
