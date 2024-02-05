import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/pets/": "structure",
  "/zh/": [
    "",
    {
      text: "Pets",
      icon: "laptop-code",
      prefix: "pets/",
      link: "pets/",
      children: ["index", "Dark/", "Dragon/", "Electric", "Fire", "Grass/", "Ground/", "Ice/", "Neutral/", "Water/"],
    }
  ],
});
