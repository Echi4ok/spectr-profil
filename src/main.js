import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'



import HomeViews from '@/components/views/HomeViews.vue'
import AboutViews from '@/components/views/AboutViews.vue'
import ProizvodstvoViews from '@/components/views/ProizvodstvoViews.vue'
import ContactsViews from '@/components/views/ContactsViews.vue'
import PriceViews from '@/components/views/PriceViews.vue'
import OrdersViews from '@/components/views/OrdersViews.vue'



const routes = [
    { path: '/', component: HomeViews},
    { path: '/about', component: AboutViews },
    { path: '/proizvodstvo', component: ProizvodstvoViews },
    { path: '/price', component: PriceViews },
    { path: '/contact', component: ContactsViews },
    { path: '/order', component: OrdersViews }
]




const router = createRouter({
    history: createWebHistory(), // Используйте `import.meta.env.BASE_URL` для Vite
    routes,

    scrollBehavior() {
        // Вернуться в начало страницы
        return { top: 0 };
      }
})



const app = createApp(App)

app.use(autoAnimatePlugin)

app.use(router)

app.mount('#app')
