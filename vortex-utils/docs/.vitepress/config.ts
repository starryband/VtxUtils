import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "VTXUtils",
    description: "Documentation for VTXUtils",

    themeConfig: {
        nav: [
            {text: "Docs", link: "/guide/"},
            {text: "API", link: "/api/"}
        ],

        sidebar: [
            {
                text: "Guide",
                items: [
                    {text: "Getting Started", link: "/guide/"}
                ]
            }
        ],

        socialLinks: [
            {icon: "github", link: "https://github.com/"}
        ]
    }
})
