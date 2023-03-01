<template>
  <section class="possibilitiesC">
    <div class="container">
      <h2>Возможности</h2>
      <div class="possibilitiesC__card-holder">
        <PassportData v-for="card in cards" :card="card" :key="card.id"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

import PassportData from "~/UI/PassportData/PassportData.vue";

export default {
  name: "PossibilitiesC",
  components: {PassportData},
  data: function (){
    return {
      cards: [
        {
          id: 1,
          title: "Персональные данные",
          text: "Проверяет и разбирает ФИО из строки, определяет пол"
        },
        {
          id: 2,
          title: "Контакты",
          text: "Проверяет телефон по базам Россвязи, отсеевает временные адреса электронной почты"
        },
        {
          id: 3,
          title: "Адреса",
          text: "Автоматически проверяет, исправляет и геокодирует адреса"
        },
        {
          id: 4,
          title: "Должности",
          text: "Справочник должностей"
        },
        {
          id: 5,
          title: "Компании",
          text: "Выдает всю информацию по организации, ИП"
        },
        {
          id: 6,
          title: "Подсказки",
          text: "Помогают человеку быстро и корректно ввести ФИО, контакты, адреса, реквизиты компании"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.possibilitiesC{
  margin-top: 130px;
  &__card-holder {
    margin-top: 3%;
    display: grid;
    gap:20px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
    justify-items: center;
    flex-wrap: wrap;
     & > div {
      min-height: 240px;
    }

  }
}
@media (max-width: 1200px) and (min-width: 641px) {
  .possibilitiesC{
    margin-top: 12%;
    &__card-holder {
      margin-top: 6%;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
}

@media (max-width: 641px){
  .possibilitiesC{
    margin-top: 24%;
    &__card-holder {
      margin-top: 12%;
      grid-template-columns: 1fr;
      & >div {
        min-height: 180px;
      }
    }
  }
}

</style>
