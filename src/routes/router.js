import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import JobCallInfo from '../views/JobCallInfo.vue';
import OpenedJobCalls from '../views/OpenedJobCalls.vue';
import CV from '../views/CV.vue'
const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/', component: Home, children: [
      { path: '/opened-job-calls', component: OpenedJobCalls },
      { path: '/job-call-info', component: JobCallInfo }
    ]
  },
  { path: '/cv', component: CV }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;