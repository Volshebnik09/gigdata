<template>
  <section class="administrativeAndMunicipalDivision">
    <div class="container">
      <div class="administrativeAndMunicipalDivision__card">
        <h2>Административное и муниципальное деление</h2>
        <p>Подсказки могут возвращать адрес в административном либо в муниципальном делении. Это регулирует параметр запроса division:</p>
        <div class="administrativeAndMunicipalDivision__card__tabbed">
          <p>administrative — административное;</p>
          <p>municipal — муниципальное.</p>
        </div>
        <p>Если параметр не задан, используется административное деление</p>
        <p>В муниципальном делении возвращаются поля area* (муниципальный район) и sub_area* (муниципальное поселение). Поля city_district* (административный район города), напротив, скрываются</p>
        <p>В административном делении возвращаются поля area* (административный район региона) и city_district* (административный район города). Поля sub_area* (муниципальное поселение), напротив, скрываются</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:"AdministrativeAndMunicipalDivision"
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.administrativeAndMunicipalDivision{
  margin-top: 140px;
  &__card{
    padding: 20px;
    background: #FFFFFF;
    border-radius: 40px;
    display: flex;
    gap:20px;
    flex-direction: column;
    h2{
      color: $colorH3blue;
    }
    &__tabbed{
      display: flex;
      gap:10px;
      flex-direction: column;
      padding-left: 40px;
    }
  }
}
@media (max-width: 640px) {
  .administrativeAndMunicipalDivision{
    margin-top: 80px;
    &__card{
      padding: 20px 10px;
    }
  }
}
</style>
