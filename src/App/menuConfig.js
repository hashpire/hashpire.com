const MenuConfig = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects"
  },
  {
    path: "/technologies",
    name: "Technologies"
  },
  {
    path: '/category',
    name: 'Category',
    sub: [
      {
        path: '/category/item1',
        name: 'Item1'
      },
      {
        path: '/category/item2',
        name: 'Item2'
      }
    ]
  }
];

export default MenuConfig;