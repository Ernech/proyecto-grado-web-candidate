import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import JobCallInfo from '../views/JobCallInfo.vue';
import OpenedJobCalls from '../views/OpenedJobCalls.vue';
import CV from '../views/CV.vue'
import { useUserStore } from "../store/user";
const requireAuth = (to, from, next) => {

  if (authToken) {
    next()
  } else {
    next('/login')
  }

}
const notRequireAuth = (to, from, next) => {
  const userStore = useUserStore()
  const authToken = userStore.accessToken
    if (!authToken) {
      next()
    }else{

      next('/opened-job-calls')
    }
  

}
const toOpenedJobCalls = (to, from, next)=>{
  next('/opened-job-calls')
}
const routes = [
  { path: '/login', component: Login ,beforeEnter:notRequireAuth},
  { path: '/register', component: Register,beforeEnter:notRequireAuth },
  {
   path:'/', component: Home,children: [
      { path: '/opened-job-calls', component: OpenedJobCalls },
      { path: '/job-call-info/:id', component: JobCallInfo, name: 'job-call-info' }
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