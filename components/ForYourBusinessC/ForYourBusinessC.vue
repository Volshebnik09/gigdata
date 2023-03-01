<template>
  <section class="forYourBusinessC">
    <div class="container">
      <h2>Для вашего бизнеса</h2>
      <div class="forYourBusinessC__card-holder">
        <template  v-if="windowWidth > 641">
          <whiteForm
              v-for="card in cards"
              :card="card"
              :key="card.id"
          />
        </template>
        <MobileAccordion
            v-else
            v-for="card in cards"
            :card="card"
            :key="card.id"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import WhiteForm from "@/UI/WhiteForm/WhiteForm.vue";
import MobileAccordion from "@/UI/MobileAccordion/MobileAccordion.vue";

export default Vue.extend({
  name:"ForYourBusinessC",
  components: {MobileAccordion, WhiteForm},
  computed: {
    windowWidth: {
      get() {
        return this.$store.getters.windowWidth
      }
    }
  },
  data: function (){
    return{
      cards: [
        {
          id: 1,
          title: "Интернет-магазина",
          ul: [
            {
              id:1,
              text: "Быстрый ввод адреса с индексом, районом и остановками"
            },
            {
              id:2,
              text: "Город посетителя по IP-адресу и адрес по координатам"
            },
            {
              id:3,
              text: "Район города, ближайшее метро и координаты дома"
            },
            {
              id:4,
              text: "Страны мира"
            },
          ]
        },
        {
          id: 2,
          title: "Облачного B2B и B2C-сервиса",
          ul: [
            {
              id:1,
              text: "Быстрый ввод персональных данных клиента"
            },
            {
              id:2,
              text: "Адрес с привязкой к ФИАС (ГАР)"
            },
            {
              id:3,
              text: "Все данные о юридическом лице по ИНН"
            },
            {
              id:4,
              text: "Аффилированные компании"
            },
          ]
        },
        {
          id: 3,
          title: "Производителя и дистрибьютера",
          ul: [
            {
              id:1,
              text: "Единая база торговых точек из разрозненных отчётов"
            },
            {
              id:2,
              text: "Правильные и постоянно используемые e-mail"
            },
            {
              id:3,
              text: "Все данные о юридическом лице по ИНН"
            },
            {
              id:4,
              text: "Пакетная обработка любых данных из Excel-файлов"
            },
          ]
        },
        {
          id: 4,
          title: "Курьерской службы",
          ul: [
            {
              id:1,
              text: "Район города, ближайшие станции метро или остановки и координаты дома"
            },
            {
              id:2,
              text: "Правильный почтовый адрес с индексом"
            },
            {
              id:3,
              text: "Обратное геокодирование"
            },
            {
              id:4,
              text: "Пакетная обработка ФИО, email и адресов через API"
            },
          ]
        },
        {
          id: 5,
          title: "Маркетолога",
          ul: [
            {
              id:1,
              text: "Корректные ФИО и пол клиента"
            },
            {
              id:2,
              text: "Полный адрес без опечаток и ошибок"
            },
            {
              id:3,
              text: "Единый список клиентов из пакета excel-файлов, без дубликатов и ошибок"
            }
          ]
        },
        {
          id: 6,
          title: "Разработчика",
          ul: [
            {
              id:1,
              text: "API с максимумом информации по ФИО"
            },
            {
              id:2,
              text: "API с максимумом информации по контактным данным клиентов"
            },
            {
              id:3,
              text: "Проверка паспортных данных по базе МВД"
            },
            {
              id:4,
              text: "Проверка наименования организации и её реквизитов"
            }
          ]
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>

@import "@/styles/mixins.scss";
.forYourBusinessC{
  margin-top: 140px;
  &__card-holder{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    grid-template-rows: repeat(3,1fr);
    justify-items: center;
    flex-wrap: wrap;
    margin-top: 3%;
  }
}

@media (max-width: 1200px) and (min-width: 641px) {
  .forYourBusinessC{
    margin-top: 17.6%;
    &__card-holder{
      margin-top: 6%;
    }
  }
}
@media (max-width: 640px) {
  .forYourBusinessC{
    margin-top: 17.6%;
    &__card-holder{
      margin-top: 13%;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
}

</style>
