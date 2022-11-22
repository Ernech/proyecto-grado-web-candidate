import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import JobCallInfo from '../views/JobCallInfo.vue';
import TeacherJobCallInfo from '../views/TeacherJobCallInfo.vue';
import OpenedJobCalls from '../views/OpenedJobCalls.vue';
import CandidateAppliesList from '../views/CandidateAppliesList.vue'
import CV from '../views/CV.vue'
import { useUserStore } from "../store/user";
const requireAuth = (to, from, next) => {
  const userStore = useUserStore()
  const authToken = userStore.accessToken
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
   path:'/', component: Home,redirect: '/opened-job-calls',children: [
      { path: '/opened-job-calls', component: OpenedJobCalls },
      { path: '/applied-job-calls', component: CandidateAppliesList,beforeEnter:requireAuth },
      { path: '/job-call-info/:id', component: JobCallInfo, name: 'job-call-info' },
      { path: '/teacher-job-call-info/:id', component: TeacherJobCallInfo, name: 'teacher-job-call-info' }
    ]
  },
  { path: '/cv', component: CV,beforeEnter:requireAuth }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;