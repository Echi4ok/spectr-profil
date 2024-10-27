<script setup>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <div>
    <MainHeader />
    
    <main class="h-full">
      <router-view></router-view>
    </main>
    
    <MainFooter />
  </div>
</template>


<style>
/* Добавьте здесь стили, если необходимо */
</style>



