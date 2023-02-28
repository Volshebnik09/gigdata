<template>
  <section class="mainScreenC1">
    <div class="container">
      <div class="mainScreenC1__inner">
        <h1 class="mainScreenC1__title">
          Собрали <span>все данные</span> о Ваших клиентах
        </h1>
        <p class="mainScreenC1__mainText">
          Только корректная информация о контактах, адресах и компаниях из открытых источников. Для комфортного ведения бизнеса в интернете
        </p>
        <div class="mainScreenC1__buttons">
          <BtnFulfilled text="Попробовать бесплатно" to="#"/>
          <btn-big text="Купить" to="#"/>
        </div>
        <img :src="require('@/images/Image.png')" alt="" class="mainScreenC1__hands">
      </div>
    </div>
  </section>
</template>

<script>
import BtnFulfilled from "@/UI/BtnFulfilled/BtnFulfilled.vue";
import BtnBig from "@/UI/BtnBig/BtnBig.vue";

export default {
  name: "MainScreenC1",
  components: {BtnBig, BtnFulfilled},
}
</script>

<style lang="scss" scoped>
.mainScreenC1 {
  margin-top: 70px;
  &__inner {
    overflow: hidden;
    padding: 80px 50% 80px 40px;
    background: linear-gradient(265.14deg, rgba(185, 178, 226, 0.3) 10.77%, rgba(182, 200, 236, 0.3) 99.08%), #FFFFFF;
    border-radius: 40px;
    position: relative;
  }
  &__hands {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &__mainText{
    margin-top: 40px;
  }
  &__buttons{
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px
  }
}
@media (max-width: 1200px) and (min-width:960px){
  .mainScreenC1{
    margin-top: 10.8%;
    &__inner{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px 50% 80px 40px;
    }
    &__hands{
      position: absolute;
      width: 50%;
    }
    &__mainText{
      margin-top: 20px;
    }
    &__buttons{
      margin-top: 30px;
    }
    &__title{
    }
  }
}
@media (max-width: 960px) and (min-width:641px) {
  .mainScreenC1{
    margin-top: 10.8%;
    &__inner{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 40px 520px;
    }
    &__hands{
      position: absolute;
    }
    &__mainText{
      margin-top: 20px;
    }
    &__buttons{
      margin-top: 30px;
    }
    &__title{
    }
  }
}
@media (max-width: 640px) {
  .mainScreenC1{
    margin-top: 10%;
    &__inner{
      padding: 20px;
      border-radius: 20px;
    }
    &__mainText{
      margin-top: 20px;

    }
    &__buttons{
      margin-top: 40px;
      flex-direction: column;
      a{
        padding: 20px 0;
      }
    }
    &__hands {
      display: none;
    }
  }
}


</style>
