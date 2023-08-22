export default ({ env }) => ({
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
                    references: 'Tsitle'
                }
            }
        }
    }
})