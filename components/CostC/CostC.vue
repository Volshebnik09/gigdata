<template>
  <section class="costC">
    <div class="container">
      <div class="costC__card">
        <h2>
          Стоимость
        </h2>
        <p>
          Сервисы GigData доступны по подписке. Бесплатный тариф позволяет
          протестировать сервис на практике и сформировать персональный список необходимых функций.
        </p>
        <BtnBig to="#" :text="windowWidth>764? 'Посмотреть тарифы':'купить'"/>
      </div>
    </div>
  </section>
</template>

<script>
import BtnBig from "@/UI/BtnBig/BtnBig.vue";

export default {
  name: "CostC",
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
@import "@/styles/variables.scss";
.costC{
  margin-top: 160px;
  &__card{
    padding: 40px;
    background: #FFFFFF;
    border-radius: 40px;
    h2{
      color: $colorH3blue;
    }
    p {
      margin-top: 20px;
      max-width: 850px;
    }
    a{
      margin-top: 40px;
    }
  }
}

@media (max-width: 1200px) and (min-width: 641px) {
  .costC{
    margin-top: 17%;
  }
}
@media (max-width: 641px) {
  .costC{
    &__card{
      a {
        width: 100%;
      }
    }
  }
}
</style>
