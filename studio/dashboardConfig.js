export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a666e0f4c2b545ca90fac7',
                  title: 'Sanity Studio',
                  name: 'lo-kitchen-sink-studio',
                  apiId: 'a61120da-4149-49a2-ba3c-492068cc333f'
                },
                {
                  buildHookId: '60a666e00d064649440f55cb',
                  title: 'Blog Website',
                  name: 'lo-kitchen-sink',
                  apiId: 'de656dbb-df8f-483a-b048-950a5b439799'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lowisren/lo-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lo-kitchen-sink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
