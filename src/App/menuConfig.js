const MenuConfig = [
  {
    path: "/",
    name: "Head",
  },
  {
    path: "/tacos",
    name: "Tacos"
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