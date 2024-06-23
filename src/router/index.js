import { createRouter, createWebHistory  } from 'vue-router'
import Home from "../views/Home.vue";
import Mollies from "../views/Mollies.vue"
import Castrates from "../views/Castrates.vue"
import InMemoriam from "../views/InMemoriam.vue"
import News from "../views/News.vue"
import KittenBasket from "../views/KittenBasket.vue"
import KittenInfo from "../views/KittenInfo.vue"
import Breeder from "../views/Breeder.vue"
import Contact from "../views/Contact.vue"
import Pentue1 from "../views/Pentue1.vue"
import Pentue2 from "../views/Pentue2.vue"
import Pentue3 from "../views/Pentue3.vue"
import Pentue4 from "../views/Pentue4.vue"
import Pentue5 from "../views/Pentue5.vue"
import Pentue6 from "../views/Pentue6.vue"

const routes = [
  {
    path: "/",
    redirect: "/Humming",
  },
  {
    path: "/Humming",
    name: "Home",
    component: Home,
  },
  {
    path: "/Naaraat",
    name: "Mollies",
    component: Mollies,
  },
  {
    path: "/Kastraatit",
    name: "Castrates",
    component: Castrates,
  },
  {
    path: "/Muistoissa",
    name: "InMemoriam",
    component: InMemoriam,
  },
  {
    path: "/Uutiset",
    name: "News",
    component: News,
  },
  {
    path: "/Pentukori",
    name: "KittenBasket",
    component: KittenBasket,
  },
  {
    path: "/Pentu-info",
    name: "KittenInfo",
    component: KittenInfo,
  },
  {
    path: "/Kasvattaja",
    name: "Breeder",
    component: Breeder,
  },
  {
    path: "/OtaYhteytta",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/1pentue",
    name: "1pentue",
    component: Pentue1,
  },
  {
    path: "/2pentue",
    name: "2pentue",
    component: Pentue2,
  },
  {
    path: "/3pentue",
    name: "3pentue",
    component: Pentue3,
  },
  {
    path: "/4pentue",
    name: "4pentue",
    component: Pentue4,
  },
  {
    path: "/5pentue",
    name: "5pentue",
    component: Pentue5,
  },
  {
    path: "/6pentue",
    name: "6pentue",
    component: Pentue6,
  },
  // {
  //   path: '/:pathMatch(.*)',
  //   component: NotFoundComponent
  // }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router
