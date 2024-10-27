<script setup></script>

<template>
  <section class="about-section py-12">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-6 text-gray-700">
        О компании
      </h2>
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-6">
          <img
            src="/AI-photo2.jfif"
            alt="Компания СпектрПрофиль"
            class="opacity-80 w-full rounded-lg shadow-lg"
          />
        </div>
        <div class="md:w-1/2 md:ml-6">
          <div class="bg-gray-200 p-5 rounded-lg shadow">
            <h3 class="text-xl font-bold text-gray-700">О компании</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Компания ООО «СпектрПрофиль» создана как отдельное
              производственное предприятие по обработке металлов на территории
              завода ООО ПКФ "ОГНЕУПОРСТРОЙ-ЛИПЕЦК", основанного в 1999 году и
              поставляющего огнеупоры металлургическим комбинатам. Потребителями
              огнеупорной продукции являются ПАО "НЛМК", ОАО "ОЭМК", ООО "КДСМ",
              ОАО "Косогорский металлургический завод", ОАО "Волга-ФЭСТ" и
              другие крупные компании России и ближнего зарубежья. За время
              работы выстроены доверительные партнёрские отношения с крупнейшими
              игроками металлургической отрасли и согласованы взаимовыгодные
              условия по поставке рулонной стали и сортового проката в наш
              адрес.
            </p>
          </div>
          <div
            class="mission-goal mb-6 bg-gray-200 p-5 rounded-lg shadow mt-10"
          >
            <h3 class="text-xl font-bold text-gray-700">Миссия</h3>
            <p class="text-gray-600 mb-4">
              Мы работаем для повышения благосостояния наших покупателей,
              обеспечивая на 100% их потребности в высококачественной
              металлопродукции, совершенствуя технологические процессы для
              сокращения затрат покупателей, с максимальным уровнем сервиса.
            </p>
          </div>
          <div class="bg-gray-200 p-5 rounded-lg shadow mt-10">
            <h3 class="text-xl font-bold text-gray-700">Цель</h3>
            <p class="text-gray-600">
              Обеспечить стабильный и долгосрочный рост компании посредством
              своевременной и качественной адаптации технологий и представляемых
              услуг к требованиям изменяющихся условий рынка и приоритетов
              потребителей.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-8">
      <p class="font-semibold text-lg text-gray-800">
        ООО «СпектрПрофиль» - надёжный партнёр вашего бизнеса!
      </p>
      <router-link
        to="/contact"
        class="mt-4 inline-block px-6 py-2 bg-stone-500 text-white font-bold rounded hover:bg-gray-500 transition duration-300 shadow-md"
        >Связаться с нами</router-link
      >
    </div>
  </section>
</template>

<style scoped>
.about-section h2 {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Адаптивный дизайн */
@media (max-width: 768px) {
  .about-section {
    padding: 2rem 1rem;
  }
}
</style>
