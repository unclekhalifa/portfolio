import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Posts from "./pages/Posts.vue";
import Projects from "./pages/Projects.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/posts", component: Posts },
  { path: "/projects", component: Projects },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
