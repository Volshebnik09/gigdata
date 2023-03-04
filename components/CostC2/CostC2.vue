<template>
  <section class="costC2">
    <div class="container">
      <div class="costC2__card">
        <h2>
          Стоимость
        </h2>
        <p>
          Бесплатно до 10 тысяч запросов в день. Больше — в составе годовой подписки
        </p>
        <BtnBig to="#" :text="windowWidth>764? 'Посмотреть тарифы':'купить'"/>
      </div>
    </div>
  </section>
</template>

<script>
import BtnBig from "@/UI/BtnBig/BtnBig.vue";

export default {
  name: "CostC2",
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

.costC2 {
  margin-top: 140px;

  &__card {
    padding: 40px;
    background: #FFFFFF;
    border-radius: 40px;

    h2 {
      color: $colorH3blue;
    }

    p {
      margin-top: 20px;
      max-width: 850px;
    }

    a {
      margin-top: 40px;
    }
  }
}

@media (max-width: 1200px) and (min-width: 641px) {
  .costC2 {
    margin-top: 17%;
  }
}

@media (max-width: 640px) {
  .costC2 {
    margin-top: 80px;
    &__card {
      a {
        width: 100%;
      }
    }
  }
}
</style>
