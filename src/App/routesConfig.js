import Home from './Pages/Home';
import { Tacos, Bus, Cart } from './Pages/Tacos';
import Category from './Pages/Category';
import Item from './Pages/Item';

const RoutesConfig = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  },
  {
    path: "/category",
    component: Category,
    exact: true
  },
  {
    path: "/category/:item",
    component: Item,
  }
];

export default RoutesConfig;