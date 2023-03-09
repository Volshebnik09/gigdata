<template>
  <section class="mainScreenC3">
    <div class="container">
      <div class="mainScreenC3__card">
        <breadcrumbsUI :breadcrumbs="breadcrumbs" />
        <h1>Подсказки: <span>адреса</span></h1>
        <p>Выберите готовую интеграцию или подключите jquery-плагин</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import BreadcrumbsUI, { breadcrumb } from '~/UI/BreadcrumbsUI/BreadcrumbsUI.vue'

export default {
  name: 'MainScreenC3',
  components: { BreadcrumbsUI },
  data: function () {
    return {
      breadcrumbs: [
        {
          to: '/hints',
          title: 'Подсказки',
        },
        {
          to: '/hints/howToConnect',
          title: 'Как подключить',
        },
        {
          to: '/hints/howToConnect/hints-address',
          title: 'Адреса',
        },
      ] as breadcrumb[],
    }
  },
}
</script>

<style lang="scss" scoped>
.mainScreenC3 {
  margin-top: 68px;
  &__card {
    padding: 40px;
    background: linear-gradient(
        265.14deg,
        rgba(185, 178, 226, 0.3) 10.77%,
        rgba(182, 200, 236, 0.3) 99.08%
      ),
      #ffffff;
    border-radius: 40px;
    h1 {
      margin-top: 40px;
      span {
        color: #2400ff;
      }
    }
    p {
      margin-top: 20px;
    }
  }
}
@media (max-width: 1200px) and (min-width: 641px) {
  .mainScreenC3 {
    margin-top: 80px;
  }
}
@media (max-width: 640px) {
  .mainScreenC3 {
    margin-top: 35px;
    &__card {
      padding: 20px;
      h1 {
        margin-top: 20px;
      }
    }
  }
}
</style>
