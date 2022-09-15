import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
const routes = [
  {path:'/login',component:Login},
  {path:'/register',component:Register}
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;