<template>
  <section class="mainScreenC2">
    <div class="container">
      <div class="mainScreenC2__inner">
        <h1 class="mainScreenC2__title">Подсказки</h1>
        <p class="mainScreenC2__mainText">
          Быстрый ввод адресов, компаний, ФИО, e-mail, исключающий всевозможные
          ошибки
        </p>
        <img
          :src="require('@/images/phone.png')"
          alt=""
          class="mainScreenC2__phone"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BtnFulfilled from '@/UI/BtnFulfilled/BtnFulfilled.vue'
import BtnBig from '@/UI/BtnBig/BtnBig.vue'

export default {
  name: 'MainScreenC2',
  components: { BtnBig, BtnFulfilled },
}
</script>

<style lang="scss" scoped>
.mainScreenC2 {
  margin-top: 70px;
  &__inner {
    overflow: hidden;
    padding: 70px 50% 80px 40px;
    background: linear-gradient(
        265.14deg,
        rgba(185, 178, 226, 0.3) 10.77%,
        rgba(182, 200, 236, 0.3) 99.08%
      ),
      #ffffff;
    border-radius: 40px;
    justify-content: center;
    flex-direction: column;
    display: flex;
    height: 508px;
    gap: 40px;
    position: relative;
  }
  &__phone {
    position: absolute;
    right: 60px;
    bottom: 0;
  }
}
@media (max-width: 1200px) and (min-width: 960px) {
  .mainScreenC2 {
    margin-top: 10.8%;
    &__inner {
      padding: 70px 50% 80px 40px;
    }
    &__phone {
      position: absolute;
    }
  }
}
@media (max-width: 960px) and (min-width: 641px) {
  .mainScreenC2 {
    margin-top: 10.8%;
    &__inner {
      padding: 40px;
      display: flex;
      justify-content: unset;
      gap: 20px;
      height: 620px;
    }
    &__phone {
      position: absolute;
      width: 49%;
      right: 30%;
      max-width: 400px;
    }
    &__title {
    }
  }
}
@media (max-width: 640px) {
  .mainScreenC2 {
    margin-top: 10%;
    &__inner {
      height: auto;
      padding: 40px;
      gap: 20px;
      border-radius: 20px;
    }
    &__phone {
      display: none;
    }
  }
}
</style>
