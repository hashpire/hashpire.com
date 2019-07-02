import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Technologies from '../Pages/Technologies';
import Post from '../Pages/Post';
import Contact from '../Pages/Contact';
import Tag from '../Pages/Tag';
import News from '../Pages/News';

const RoutesConfig = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/projects",
    component: Projects,
    exact: true
  },
  {
    path: "/technologies",
    component: Technologies,
    exact: true
  },
  {
    path: "/posts/:id",
    component: Post
  },
  {
    path: '/contact',
    component: Contact,
    exact: true
  },
  {
    path: "/tags/:id",
    component: Tag,
  },
  {
    path: '/news',
    component: News,
  }
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // },
  // {
  //   path: "/category",
  //   component: Category,
  //   exact: true
  // },
  // {
  //   path: "/category/:item",
  //   component: Item,
  // },
];

export default RoutesConfig;