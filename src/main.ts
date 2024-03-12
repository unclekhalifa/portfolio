import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import HelloWorld from "./components/HelloWorld.vue";
import App from "./App.vue";
import Home from "./components/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/hello", component: HelloWorld },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
