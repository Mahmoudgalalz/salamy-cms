export default ({ env }) => ({

    "fuzzy-search": {
        enabled: true,
        config: {
          contentTypes: [
            {
              uid: "api::article.article",
              modelName: "article",
              transliterate: true,
              fuzzysortOptions: {
                characterLimit: 300,
                threshold: -600,
                limit: 10,
                keys: [
                  {
                    name: "title",
                    weight: 100,
                  },
                  {
                    name: "description",
                    weight: -100,
                  },
                ],
              },
            },
            {
              uid: "api::main-category.main-category",
              modelName: "main-category",
              fuzzysortOptions: {
                characterLimit: 500,
                keys: [
                  {
                    name: "name",
                    weight: 200,
                  },
                  {
                    name: "description",
                    weight: -200,
                  },
                ],
              },
            },
            {
                uid: "api::category.category",
                modelName: "category",
                fuzzysortOptions: {
                  characterLimit: 500,
                  keys: [
                    {
                      name: "name",
                      weight: 200,
                    },
                    {
                      name: "description",
                      weight: -200,
                    },
                  ],
                },
              },
              {
                uid: "api::article-group.article-group",
                modelName: "category",
                fuzzysortOptions: {
                  characterLimit: 500,
                  keys: [
                    {
                      name: "name",
                      weight: 200,
                    },
                    {
                      name: "description",
                      weight: -200,
                    },
                  ],
                },
              },
          ],
        },
      },
    

    'protected-populate':{
        enabled:true,
        config:{
            ['auto-populate']:true
        }
    },
    slugify:{
        enabled:true,
        config:{
            contentTypes:{
                article:{
                    field:'slug',
                    references: 'Title'
                }
            }
        }
    }
})