<template>
  <section class="instructionsForConnectingHints">
    <div class="container">
      <h2>Иструкции по подключению «Подсказок»</h2>
      <div class="instructionsForConnectingHints__cards">
        <router-link to="#"><h4>ФИО</h4></router-link>
        <router-link to="#"><h4>Адреса</h4></router-link>
        <router-link to="#"><h4>ОКТМО</h4></router-link>
        <router-link to="#"><h4>E-mail</h4></router-link>
        <router-link to="#"><h4>ОКВЭД</h4></router-link>
        <router-link to="#"><h4>Организации и ИП</h4></router-link>
        <router-link to="#"><h4>Телефон</h4></router-link>
        <router-link to="#"><h4>ОКПД</h4></router-link>
        <router-link to="#"><h4>Почтовые отделения</h4></router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:"InstructionsForConnectingHintsC"
}
</script>

<style lang="scss" scoped>
.instructionsForConnectingHints{
  margin-top: 140px;
  &__cards{
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    a{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: linear-gradient(263.89deg, #E5E1FF 18.89%, #DEE9FF 110.43%);
      border-radius: 40px;
      min-width: 350px;
      max-width: 390px;
      width: 33%;
      h4{
        color: #8100AE;
      }
    }
  }
}
@media (max-width: 640px) {
  .instructionsForConnectingHints{
    margin-top: 80px;
    &__cards{
      a{
        min-width: unset;
        width: 100%;
      }
    }
  }
}

</style>
