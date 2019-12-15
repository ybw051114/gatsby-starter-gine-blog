module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/ybw051114/59f7d1c3bca140b6966b335250655f66?v=689af3e844724400a6fde58352adcd94"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/ybw051114/9aab05b737dc49b09839fff0cadf4957?v=219c22ee3af74ca0ba5c2acdfb12fb17"
            }
        }
    ],
}
