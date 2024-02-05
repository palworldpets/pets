import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'

// https://v2.vuepress.vuejs.org/zh/reference/config.html
export default defineUserConfig({
    base: "/",
    title: 'Palworld Pets',
    description: 'The most comprehensive guide to all pets in Palworld.',
    theme,
    vite: {
        plugins: [
            searchProPlugin({}),
            externalLinkIconPlugin({}),
        ]
    },
    locales: {
        "/en/": {
            lang: "en-US",
            title: "Palworld Pets",
            description: "A docs demo for vuepress-theme-hope",
        },
        "/zh/": {
            lang: "zh-CN",
            title: "幻兽帕鲁的宠物们",
            description: "vuepress-theme-hope 的文档演示",
        },
    },
})
