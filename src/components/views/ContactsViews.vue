<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-200 rounded-lg shadow-md mb-20" style="margin-top: 140px;">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6 ">Контакты</h1>

    <div class="mb-4 bg-gray-100 p-5 shadow rounded-lg">
      <h2 class="text-lg font-semibold mb-2">Телефон для связи</h2>
      <p>Вы можете позвонить по номеру: 
        <a href="tel:+74742379433" class="text-blue-400 hover:underline">8-4742-37-94-33</a>
      </p>
      <p>Также заказ можно оформить через оператора по телефону 
        <a href="tel:+74742379433" class="text-blue-400 hover:underline">+7(4742)37-94-33</a> или на сайте.
      </p>
    </div>

    <div class="mb-4 bg-gray-100 p-5 shadow rounded-lg">
      <h2 class="text-lg font-semibold mb-2">Реквизиты компании</h2>
      <p><strong>ООО «ПК СпектрПрофиль»</strong></p>
      <p>ИНН: 4826134397</p>
      <p>КПП: 482601001</p>
      <p>ОГРН: 1174827022040</p>
      <p>Юр. адрес: 398902, Липецкая область, город Липецк, улица Юношеская, дом 50, лит. Е.</p>
      <p>Тел.: <a href="tel:+74742379433" class="text-blue-400 hover:underline">+7(4742) 37-94-33</a></p>
      <p>E-mail: <a href="mailto:info@spectr-profil.ru" class="text-blue-400 hover:underline">info@spectr-profil.ru</a></p>
    </div>


    <div class="mb-6 text-center bg-gray-100 p-5 shdow rounded-lg">
      <h2 class="text-lg font-semibold mb-4">Оставить заявку</h2>
      <p>Чтобы получить более подробную информацию, вы можете оставить заявку, нажав на кнопку ниже:</p>
      <router-link to="/price" class="inline-block mt-4 bg-stone-500 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition">
        Перейти к прайс-листу
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Дополнительные стили для адаптивности и визуала */
@media (max-width: 768px) {
  .text-lg {
    font-size: 1.25rem;
  }
  .max-w-4xl {
    max-width: 100%;
    margin: 0 1rem; /* Добавить отступы на мобильных */
  }
}
</style>

