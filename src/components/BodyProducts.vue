<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const products = ref([
    { id: 0, title: 'ПРОФЛИСТ', imageUrl: '/profnastil.jpg' },
    { id: 1, title: 'СЭНДВИЧ ПАНЕЛИ', imageUrl: '/paneli.webp' },
    { id: 2, title: 'РУЛОННАЯ СТАЛЬ И ШТРИПС', imageUrl: '/stal.jpg' },
    { id: 3, title: 'ТРУБНЫЙ ПРОКАТ', imageUrl: '/trubn.jpg' },
    { id: 4, title: 'СОРТОВОЙ ПРОКАТ', imageUrl: '/sortovoi.jpg' },
    { id: 5, title: 'ФАСОННЫЙ ПРОКАТ', imageUrl: '/fasonniy.jpg' },
    { id: 6, title: 'МЕТАЛЛОЧЕРПИЦА', imageUrl: '/cherepica.webp' },
    { id: 7, title: 'МЕТАЛЛОСАЙДИНГ', imageUrl: '/saiding.jpg' },
    { id: 8, title: 'ДОБОРНЫЕ ЭЛЕМЕНТЫ', imageUrl: '/dobornie-el.webp' },
    { id: 9, title: 'ВОДОСТОЧНЫЕ СИСТЕМЫ', imageUrl: '/vod-system.jpeg' },
    { id: 10, title: 'ИЗОЛЯЦИОННЫЕ МАТЕРИАЛЫ', imageUrl: '/izolation.jpg' },
    { id: 11, title: 'КРЕПЁЖ', imageUrl: '/krepesh.jpg' },
]);

const router = useRouter();

function clickProduct(product) {
    // Используйте router.push для перехода по маршруту
    router.push({ name: 'ProductsView', params: { id: product.id } });  // Убедитесь, что 'ProductsView' соответствует вашему маршруту
}
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" :class="{'mt-20': 'xl'}">
        <h2 class="text-2xl font-bold mb-6 text-center">Продукция компании СпектрПрофиль</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
                @click="clickProduct(product)"
                v-for="product in products"
                :key="product.id"
                class="relative border border-gray-300 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
            >
                <img :src="product.imageUrl" :alt="product.title" class="bg-brown-500 opacity-80 w-full h-40 object-cover transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-stone-700 transition-colors duration-300 opacity-50 flex items-center justify-center hover:bg-stone-900">
                    <h3 class="text-lg font-semibold text-white text-center">{{ product.title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Дополнительные стили по необходимости */
</style>



