import { Menu } from "@/types/menu";
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Languages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "English",
        path: "/en",
        newTab: false,
      },
      {
        id: 42,
        title: "Spanish",
        path: "/es",
        newTab: false,
      },
      {
        id: 43,
        title: "Portuguese",
        path: "/pt",
        newTab: false,
      },
    ],
  },
];
export default menuData;
