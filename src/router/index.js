import { createRouter, createWebHistory } from '@ionic/vue-router';
// import HomePage from '../views/HomePage.vue'
// import ProduitView fro../components/ProduitView.vuevue'
import MenuPage from '../components/MenuPage.vue'
import ProduitComponent from '../components/ProduitComponent.vue'
import VenteComponent from '../components/VenteComponent.vue'
import HomePage from '../views/HomePage.vue'
const routes = [
  // {
  //   path: '',
  //   name: 'Home',
  //   component: HomePage
  // },
  // {
  //   path: '/produit',
  //   name: 'Produit',
  //   component: ProduitView
  // },
  // {
  //   path: '/vente',
  //   name: 'Vente ',
  //   component: VenteView
  // },
  {
    path: '/',
    component: MenuPage,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: HomePage
      },
      
      {
        path: 'produit',
        component: ProduitComponent
      },
      {
        path: 'vente',
        component: VenteComponent
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
