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
import { useAuthStore } from '@/store/auth.store.js';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView,
    children: [
    {
      path: 'profile/:id',
      name: 'account.profile',
      component: ProfileSection
    },
    {
      path: 'profile/edit',
      name: 'account.profile.edit',
      component: EditProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'profile/add-song',
      name: 'account.profile.add-song',
      component: AddSong,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'profile/delete-song',
      name: 'account.profile.delete-song',
      component: DeleteSong,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'profile/add-video',
      name: 'account.profile.add-video',
      component: AddVideo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'profile/delete-video',
      name: 'account.profile.delete-video',
      component: DeleteVideo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'profile/add-post',
      name: 'account.profile.add-post',
      component: AddPost,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'profile/edit-post/:id',
      name: 'account.profile.edit-post',
      component: EditPost,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'profile/posts',
      name: 'account.profile.posts',
      component: PostList
    },
    {
      path: 'profile/post/:id',
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

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  if(to.meta.requiresAuth && !auth.auth.isLoggedIn) {
    next({ name: 'login' });
  } else if(to.meta.requiresGuest && auth.auth.isLoggedIn) {
    next({ name: 'home' });
  } else {
    next();
  }
});


export default router;
