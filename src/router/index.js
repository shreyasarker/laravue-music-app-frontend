import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import AccountView from '../views/account/AccountView.vue';
import ProfileSection from '../views/account/ProfileSection.vue';
import EditProfile from '../views/account/EditProfile.vue';
import AddSong from '../views/account/AddSong.vue';
import DeleteSong from '../views/account/DeleteSong.vue';
import AddVideo from '../views/account/AddVideo.vue';
import DeleteVideo from '../views/account/DeleteVideo.vue';
import AddPost from '../views/account/AddPost.vue';
import EditPost from '../views/account/EditPost.vue';
import PostList from '../views/account/PostList.vue';
import PostById from '../views/account/PostById.vue';

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
    },
    {
      path: 'profile/add-song',
      name: 'account.profile.add-song',
      component: AddSong
    },
    {
      path: 'profile/delete-song',
      name: 'account.profile.delete-song',
      component: DeleteSong
    },
    {
      path: 'profile/add-video',
      name: 'account.profile.add-video',
      component: AddVideo
    },
    {
      path: 'profile/delete-video',
      name: 'account.profile.delete-video',
      component: DeleteVideo
    },
    {
      path: 'profile/add-post',
      name: 'account.profile.add-post',
      component: AddPost
    },
    {
      path: 'profile/edit-post',
      name: 'account.profile.edit-post',
      component: EditPost
    },
    {
      path: 'profile/posts',
      name: 'account.profile.posts',
      component: PostList
    },
    {
      path: 'profile/post-by-id',
      name: 'account.profile.post-by-id',
      component: PostById
    }
  ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
