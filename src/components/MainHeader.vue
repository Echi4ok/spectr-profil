<script setup>
import {ref} from 'vue'


const isOpenMenu = ref(false);

const changeValueMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
}
</script>

<template>
    <header class="bg-stone-500 custom-shadow fixed top-0 left-0 right-0 z-50 h-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex-shrink-0 flex items-center">
                    <router-link to="/"><img class="h-20 mt-4" src="/logo.png" alt="Логотип"></router-link>
                    <router-link to="/"><div class=" text-black text-sm sm:text-base md:text-lg">
                        <p class="text-white italic">Надежный партнер</p>
                        <p class="text-white italic">вашего бизнеса</p>
                    </div></router-link>
                </div>
                <div class="xl:hidden" @click="changeValueMenu"> <!-- Изменено с md:hidden на xl:hidden -->
                    <button 
                        id="menu-button" 
                        :class="['text-gray-700 hover:text-gray-900 focus:outline-none rounded-lg']"
                        aria-label="Open menu">
                        <svg class="w-6 h-6 rounded-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <nav id="menu" class="hidden xl:flex space-x-4 rounded-lg"> <!-- Изменено с md:flex на xl:flex -->
                    <router-link to="/" class="text-white transition duration-300 ease-in-out hover:bg-stone-400  px-3 py-2 rounded-md text-sm font-medium">Главная</router-link>
                    <router-link to="/about" class="text-white transition duration-300 ease-in-out hover:bg-stone-400  px-3 py-2 rounded-md text-sm font-medium">О компании</router-link>
                    <router-link to="/proizvodstvo" class="text-white transition duration-300 ease-in-out hover:bg-stone-400  px-3 py-2 rounded-md text-sm font-medium">Производство</router-link>
                    <router-link to="/price" class="text-white transition duration-300 ease-in-out hover:bg-stone-400  px-3 py-2 rounded-md text-sm font-medium">Прайс лист</router-link>
                    <router-link to="/contact" class="text-white transition duration-300 ease-in-out hover:bg-stone-400  px-3 py-2 rounded-md text-sm font-medium">Контакты</router-link>
                
                </nav>
            </div>
        </div>

        <!-- Мобильное меню с фоном и заполнением -->
        <div 
            class="xl:hidden transition-all duration-500 ease-in-out bg-stone-400" 
            :class="isOpenMenu ? 'max-h-screen opacity-100 ease-in duration-500' : 'max-h-0 opacity-0 overflow-hidden'"
            @click.self="changeValueMenu" 
            :aria-hidden="!isOpenMenu">
            
            <nav class="flex flex-col space-y-2 p-4"> <!-- Отступы для меню -->
                <router-link @click="changeValueMenu" to="/" class="text-white transition duration-300 ease-in-out hover:bg-stone-500  px-3 py-2 rounded-md text-sm font-medium">Главная</router-link>
                <router-link @click="changeValueMenu" to="/about" class="text-white transition duration-300 ease-in-out hover:bg-stone-500  px-3 py-2 rounded-md text-sm font-medium">О компании</router-link>
                <router-link @click="changeValueMenu" to="/proizvodstvo" class="text-white transition duration-300 ease-in-out hover:bg-stone-500  px-3 py-2 rounded-md text-sm font-medium">Производство</router-link>
                <router-link @click="changeValueMenu" to="/price" class="text-white transition duration-300 ease-in-out hover:bg-stone-500  px-3 py-2 rounded-md text-sm font-medium">Прайс лист</router-link>
                <router-link @click="changeValueMenu" to="/contact" class="text-white transition duration-300 ease-in-out hover:bg-stone-500  px-3 py-2 rounded-md text-sm font-medium">Контакты</router-link>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.custom-shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Настройте значение по своему усмотрению */
}

</style>


