import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EventList from "@/views/EventList.vue";
import EventDetails from "@/views/event/Details.vue";
import EventLayout from "@/views/event/Layout.vue";
import EventEdit from "@/views/event/Edit.vue";
import EventRegister from "@/views/event/Register.vue";
import NotFound from "@/views/NotFound.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: (route) => ({ page: route.query.page || 1 }),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/event/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "EventEdit",
        name: "EventEdit",
        component: EventEdit,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
