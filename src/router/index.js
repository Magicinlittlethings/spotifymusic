import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../views/HomeView.vue'
import Seeall from '../views/SeeAll.vue'
import Searchview from '../views/SearchView.vue'
import Playlistsview from '../views/PlaylistsView.vue'
import Pagenotfound from '../views/pagenotFound.vue'
import Favoriteartists from '../views/FavoriteArtists'
import Profileview from '../views/profileView'


const routes = [
  {
    path:'/',
    name:'Homeview',
    component:Homeview
  },
  {
    path:'/see-all',
    name:'Seeall',
    component:Seeall
  },
  {
    path:'/search',
    name:'Searchview',
    component:Searchview
  },
  {
    path:'/playlists',
    name:'Playlistsview',
    component:Playlistsview
  },
  {
    path:'/favorite-artists',
    name:'Favoriteartists',
    component:Favoriteartists
  },
  {
    path:'/profile',
    name:'Profileview',
    component:Profileview
  },
  {
    path:'/:catchAll(.*)',
    name:'Pagenotfound',
    component:Pagenotfound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
