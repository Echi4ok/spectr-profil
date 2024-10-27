<script setup>



</script>





<template>

  <div class="relative mt-20 hidden xl:block" id="backVideo">
    <!-- Фоновое видео -->
    <video
      class="top-0 left-0 w-full h-auto object-cover -z-10 "
      playsinline
      muted
      loop
      autoplay
      style="pointer-events: none;"
    >
      <source src="/Video4.mp4" type="video/mp4">
      Ваш браузер не поддерживает видео.
    </video>

    <!-- Контент на фоне видео -->
    <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 class="text-title text-shadow mb-4">Производитель профлиста</h1>
      <p class="text-description mb-6 text-shadow">Мы предлагаем лучшие продукты для вас</p>
      <router-link to="/about"><button class="hidden xl:block bg-stone-500 text-white py-2 px-4 rounded hover:bg-gray-500 transition">
        Узнать больше
      </button></router-link>
    </div>
  </div>
</template>

<style scoped>
/* Стили для текста с тенями */
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

/* Заголовки на разных экранах */
.text-title {
  font-size: 4vw; /* Используем vw для адаптивного размера */
}

/* Описание на разных экранах */
.text-description {
  font-size: 3vw; /* Используем vw для адаптивного размера */
}

/* Стили для кнопки */
button {
  transition: background-color 0.3s ease;
}

/* Адаптивные стили для мобильных устройств */
@media (max-width: 768px) {
  .text-title {
    font-size: 5vw; /* Увеличиваем размер на мобильных экранах */
  }
  
  .text-description {
    font-size: 4vw; /* Увеличиваем размер на мобильных экранах */
  }
}
</style>





  


