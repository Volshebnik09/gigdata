<template>
  <section class="opportunitiesAndLimitations">
    <div class="container">
      <div class="opportunitiesAndLimitations__card">
        <h2>Возможности</h2>
        <ul>
          <li>Работает по всем странам мира (по России и Белоруссии до дома, по остальным странам — до города)</li>
          <li>Работает с историческими назаниями и синонимами</li>
          <li>Находит по частичному совпадению последнего слова в запросе</li>
          <li>Исправляет опечатки и меняет текст в неправильной раскладке</li>
          <li>Работает с земельными участками</li>
          <li>Определяет город по IP-адресу</li>
        </ul>
      </div>
      <div class="opportunitiesAndLimitations__card">
        <h2>Ограничения</h2>
        <ul>
          <li>Для иностранных адресов заполнен ограниченный набор полей, вне зависимости от тарифного плана: почтовый индекс, страна, регион, населенный пункт, часовой пояс и геокоординаты</li>
          <li>В беспланой версии присутсвует логотип GigData</li>
          <li>Количество запросов в день — в соответствии с тарифным планом</li>
          <li>Длина запроса — не более 300 символов.</li>
          <li>Количество условий (параметр locations) — до 10</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:"OpportunitiesAndLimitations"
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
@import "@/styles/variables.scss";

.opportunitiesAndLimitations{
  margin-top: 140px;
  .container{
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
  &__card{
    background: #FFFFFF;
    border-radius: 40px;
    padding: 40px 20px;
    h2{
      color:$colorH3blue
    }
    ul {
      margin-top: 20px;
      li {
        position: relative;
        list-style: none;
        @include mainText;
        font-weight: 300;
        padding-left: 30px;
        &:before{
          width: 10px;
          position: absolute;
          content: '';
          height: 10px;
          background: linear-gradient(265.14deg, #E2DDFF 10.77%, #B6C8EC 99.08%);
          border-radius: 3px;
          left:0;
          top:10px;
        }
      }

    }
    li + li {
      margin-top: 20px;
    }
  }
}

@media (max-width: 640px) {
  .opportunitiesAndLimitations{
    margin-top: 80px;
    .container{
      grid-template-columns: 1fr;
      gap: 40px;
    }
    &__card{
      padding: 20px 10px;
    }
  }
}
</style>
