import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import AccountView from '../views/account/AccountView.vue';
import ProfileSection from '../views/account/ProfileSection.vue';
import EditProfile from '../views/account/EditProfile.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView,
    children: [
    {
      path: 'profile',
      name: 'account.profile',
      component: ProfileSection
    },
    {
      path: 'profile/edit',
      name: 'account.profile.edit',
      component: EditProfile
    }
  ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
