import { navbar } from "vuepress-theme-hope"

export const zhNavbar = navbar([
    "/zh/",
    {
        text: "帕鲁大全",
        icon: "lightbulb",
        prefix: "/zh/pets/",
        children: ["Dark/", "Dragon/", "Electric", "Fire", "Grass/", "Ground/", "Ice/", "Neutral/", "Water/"],
    },
])