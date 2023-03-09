<template>
  <section class="ETRDWE">
    <div class="container">
      <h2>Ввод необходимых данных без ошибок</h2>
      <div class="ETRDWE__card-holder">
        <PassportData v-for="card in cards" :card="card" :key="card.id" />
      </div>
    </div>
  </section>
</template>

<script>
import PassportData from '~/UI/PassportData/PassportData.vue'

export default {
  name: 'ETRDWE',
  components: { PassportData },
  data: function () {
    return {
      cards: [
        {
          id: 1,
          title: 'Адрес',
          text: 'По России и всему миру. Без опечаток, с почтовым индексом, привязкой к ФИАС (ГАР), районом города, метро и координатами.',
        },
        {
          id: 2,
          title: 'Реквизиты компаний и ИП',
          text: 'Название организации, адрес, ИНН, КПП, ОГРН, ОКВЭД, руководитель и прочее от налоговой',
        },
        {
          id: 3,
          title: 'ФИО',
          text: 'Исправляет ошибки в ФИО и определяет пол',
        },
        {
          id: 4,
          title: 'Контакты',
          text: 'Корректный ввод номера телефона и e-mail',
        },
        {
          id: 5,
          title: 'Другие справочники',
          text: 'Почтовые отделения, метро,  страны, валюты и много других. Можно подключать собственные!',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.ETRDWE {
  margin-top: 135px;
  &__card-holder {
    margin-top: 40px;
    display: grid;
    grid-template-areas:
      'a b c'
      'a b d'
      'e e e';
    gap: 20px;

    & > div:nth-child(1) {
      grid-area: a;
    }
    & > div:nth-child(2) {
      grid-area: b;
    }
    & > div:nth-child(3) {
      grid-area: c;
    }
    & > div:nth-child(4) {
      grid-area: d;
    }
    & > div:nth-child(5) {
      grid-area: e;
    }
  }
}

@media (max-width: 960px) and (min-width: 641px) {
  .ETRDWE {
    margin-top: 18%;
    h2 {
      max-width: 500px;
    }
    &__card-holder {
      margin-top: 6%;
      grid-template-areas:
        'a b'
        'c d'
        'e e';
    }
  }
}

@media (max-width: 640px) {
  .ETRDWE {
    margin-top: 18%;
    &__card-holder {
      margin-top: 16%;
      grid-template-areas: unset;
      grid-template-columns: 1fr;
      gap: 20px;
      & > div {
        grid-area: unset !important;
      }
    }
  }
}
</style>
