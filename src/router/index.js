import { createRouter, createWebHistory  } from 'vue-router'
import Home from "@/views/Home.vue";
import Mollies from "@/views/Mollies.vue"
import Castrates from "@/views/Castrates.vue"
import InMemoriam from "@/views/InMemoriam.vue"
import News from "@/views/News.vue"
import KittenBasket from "@/views/KittenBasket.vue"
import KittenInfo from "@/views/KittenInfo.vue"
import Breeder from "@/views/Breeder.vue"
import Contact from "@/views/Contact.vue"
import Pentue1 from "@/views/Pentue1.vue"
import Pentue2 from "@/views/Pentue2.vue"
import Pentue3 from "@/views/Pentue3.vue"
import Pentue4 from "@/views/Pentue4.vue"
import Pentue5 from "@/views/Pentue5.vue"

const routes = [
  {
    path: "/Humming",
    name: "Home",
    component: Home,
  },
  {
    path: "/Mollies",
    name: "Mollies",
    component: Mollies,
  },
  {
    path: "/Castrates",
    name: "Castrates",
    component: Castrates,
  },
  {
    path: "/InMemoriam",
    name: "InMemoriam",
    component: InMemoriam,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
  {
    path: "/KittenBasket",
    name: "KittenBasket",
    component: KittenBasket,
  },
  {
    path: "/KittenInfo",
    name: "KittenInfo",
    component: KittenInfo,
  },
  {
    path: "/Breeder",
    name: "Breeder",
    component: Breeder,
  },
  {
    path: "/Contact",
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
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
