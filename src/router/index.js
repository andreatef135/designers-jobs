import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Job from "../views/Job.vue";
import AddJob from "../views/AddJob.vue";
import New from "../views/New.vue";
import ErrorPage from "../views/ErrorPage.vue";
// import page from "../views/page.vue";

const routes = [

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "Job",
    props: true,
    component: Job,
  },
  {
    path: "/add",
    name: "AddJob",
    component: AddJob,
  },
  {
    path: "/new",
    name: "New",
    component: New,
  },
  {
    path: "/404",
    name: "404",
    component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "ErrorPage",
    component: ErrorPage,
  },

  // {
  //   path: "/page/:id",
  //   name: "page",
  //   props: true,
  //   component: page,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
