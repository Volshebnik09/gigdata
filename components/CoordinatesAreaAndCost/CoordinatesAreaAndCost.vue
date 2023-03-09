<template>
  <section class="coordinatesAreaAndCost">
    <div class="container">
      <div class="coordinatesAreaAndCost__card">
        <h2>Координаты, площадь и стоимость</h2>
        <p>
          Координаты есть у 97% домов в Москве, 91% в Санкт-Петербурге, 69% в
          других городах-миллиониках и 47% по остальной России
        </p>
        <p>Площадь и стоимость есть у 70% квартир в России</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoordinatesAreaAndCost',
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.coordinatesAreaAndCost {
  margin-top: 140px;
  &__card {
    padding: 20px;
    background: #ffffff;
    border-radius: 40px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    h2 {
      color: $colorH3blue;
    }
  }
}
@media (max-width: 640px) {
  .coordinatesAreaAndCost {
    margin-top: 80px;
    &__card {
      padding: 20px 10px;
    }
  }
}
</style>
