import Home from "@pages/Home";
import Article from "@pages/Article";
const menuList = [
  {
    path: "/home",
    key: "/home",
    label: "home",
    role: [],
    component: Home,
  },
  {
    path: "/article",
    key: "/article",
    label: "article",
    role: [],
    children: [
      {
        path: "/article",
        key: "/article",
        label: "article",
        component: Article,
      },
    ],
  },
];

export default menuList;
