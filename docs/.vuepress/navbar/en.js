import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
    "/",
    {
        text: "Pets",
        icon: "lightbulb",
        prefix: "/pets/",
        children: ["Dark/", "Dragon/", "Electric", "Fire", "Grass/", "Ground/", "Ice/", "Neutral/", "Water/"],
    },
]);