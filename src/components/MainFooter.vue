<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.async = true;
  script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa0711e97f17197187b9f492810f3473eb5d851c62f53603f33fc603f94b920d5&&lang=ru_RU&scroll=true";

  script.onerror = () => {
    console.error('Не удалось загрузить скрипт карты Яндекс.');
  };

  document.getElementById('yandex-map').appendChild(script);
});
</script>

<template>
  <footer class="bg-stone-500 text-white py-10">
    <div class="container mx-auto px-4 md:px-8">
      <div class="flex flex-col md:flex-row mb-8">
        <div class="md:w-1/2 mb-4 md:mb-0">
          <h2 class="text-lg font-semibold mb-2">Контакты</h2>
          <p>Телефон для связи: <a href="tel:+74742379433" class="text-blue-400 hover:underline">8-4742-37-94-33</a></p>
          <p>
            Вы можете оформить заказ через оператора по телефону 
            <a href="tel:+74742379433" class="text-blue-400 hover:underline"> +7(4742)37-94-33</a> или на сайте:
          </p>
        </div>
        
        <div class="md:w-1/2">
          <h2 class="text-lg font-semibold mb-2">Реквизиты компании</h2>
          <p><strong>ООО «ПК СпектрПрофиль»</strong></p>
          <p>ИНН: 4823079067</p>
          <p>КПП: 482301001</p>
          <p>ОГРН: 1204800007048</p>
          <p>Юр. адрес: 398902, Липецкая область, город Липецк, улица Алмазная, влд 18, ОФИС 304</p>
          <p>Тел.: <a href="tel:+74742379433" class="text-blue-400 hover:underline">+7(4742) 37-94-33</a></p>
          <p>E-mail: <a href="mailto:info@spectr-profil.ru" class="text-blue-400 hover:underline">info@spectr-profil.ru</a></p>
        </div>
      </div>

      <div class="text-center mt-8">
        <h2 class="relative text-lg font-semibold mb-2">
          <span class="absolute -inset-1 bg-stone-900 opacity-50 rounded"></span> 
          <span class="relative z-10 ">Схема проезда</span>
        </h2>
        <div id="yandex-map" class="mb-4" style="width: 100%; height: 400px;"></div>
        <p>г. Липецк, улица Алмазная, влд 18, ОФИС 304.</p>
      </div>
    </div>
    
    <div class="bg-stone-700 text-center py-2">
      <p class="text-xs">© 2017 ООО «ПК СпектрПрофиль». Все права защищены.</p>
    </div>
  </footer>
</template>


<style scoped>
.text-outline {
  text-shadow: 1px 1px 0px black, -1px -1px 0px black,
               1px -1px 0px black, -1px 1px 0px black;
}
</style>

  
  