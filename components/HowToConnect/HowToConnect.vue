<template>
  <section class="howToConnect">
    <div class="container">
      <div class="howToConnect__card">
        <h2>Как подключить?</h2>
        <p>Чтобы внедрить на сайт быстрый ввод данных, используя “Подсказки”, необходимо выполнить несколько шагов. Мы подготоили для вас подробную инструкцию, как это сделать</p>
        <btn-big :text="windowWidth>640? 'Прочитать инструкцию':'купить'" to="#"/>
      </div>
    </div>
  </section>
</template>

<script>
import BtnBig from "~/UI/BtnBig/BtnBig.vue";

export default {
  name: "HowToConnect",
  components: {BtnBig},
  computed: {
    windowWidth: {
      get() {
        return this.$store.getters.windowWidth
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.howToConnect{
  &__card{
    margin-top:140px;
    padding: 40px;
    background: linear-gradient(263.89deg, #E5E1FF 18.89%, #DEE9FF 110.43%);
    border-radius: 40px;
    h2{
      color: #2400FF;
    }
    p{
      margin-top:20px;
      max-width: 815px;
    }
    a{
      margin-top: 40px;
    }
  }
}
@media (max-width: 640px) {
  .howToConnect{
    &__card{
      margin-top: 80px;
      padding: 20px;
      a{
        width: 100%;
      }
    }
  }
}
</style>
