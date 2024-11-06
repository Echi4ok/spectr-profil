<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-200 rounded-lg shadow-md mb-20" style="margin-top: 140px; padding-bottom: 40px;" >
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Прайс-лист</h1>

    <section class="mb-8">
      <p class="text-gray-700">
        В компании ООО «ПК СпектрПрофиль» мы предлагаем широкий ассортимент строительных материалов по доступным ценам. 
        Наши услуги включают, но не ограничиваются: профнастилом, металлочерепицей, сэндвич-панелями и другими изделиями. 
        Прайс на наши товары может варьироваться в зависимости от объема заказа и индивидуальных требований клиента.
      </p>
      <p class="text-gray-700 mt-4">
        Чтобы получить более точную информацию о ценах, пожалуйста, заполните форму ниже, и наш менеджер свяжется с вами в кратчайшие сроки для согласования всех деталей и уточнения стоимости.
      </p>
    </section>

    <!-- тут начинается форма которую пользователь будет заполнять -->
    <form class="bg-gray-300 p-5 rounded-lg shadow">
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">Оставьте заявку</h2>
  <div class="grid gap-4">
    <input v-model="name" type="text" placeholder="Ваше имя" required class="p-3 border border-gray-300 rounded-lg"/>
    <input v-model="email" type="email" placeholder="Ваш Email" required class="p-3 border border-gray-300 rounded-lg"/>
    <input v-model="city" type="text" placeholder="Город" required class="p-3 border border-gray-300 rounded-lg"/>
    <input v-model="number" type="tel" placeholder="Телефон" required class="p-3 border border-gray-300 rounded-lg"/>
    <textarea v-model="message" placeholder="Сообщение" rows="4" class="p-3 border border-gray-300 rounded-lg"></textarea>
  </div>
  <button @click="postData" type="submit" class="mt-4 w-full bg-stone-500 text-white p-3 rounded-lg hover:bg-gray-500 transition">Отправить заявку</button>
</form>

  </div>
</template>

<script setup>
import {ref} from 'vue'

const name = ref('')  
const email = ref('')
const city = ref('')
const number = ref('')
const message = ref('')


// postData это функция которая должна отправлять данные
async function postData () {
try {
  if(name.value  && email.value  && city.value  && number.value) { // тут мы проверяем чтобы все инпуты строки были заполнены
    const obj = {   // тут мы создаем обьект в который помещаем наши данные, тебе придется с ним работать
    name: name.value,
    email: email.value,
    city: city.value,
    number: number.value,
    message: message.value
   } 
   console.log(obj) // тут он выводится в консоли, можешь глянуть
  } else {
      throw new Error('Заполните все поля')
  }
  } catch (err) {
    console.log(err.message)
    alert('Заполните все поля')
  }
}
// давай лех я в тебя верю 

</script>

<style scoped>

</style>
