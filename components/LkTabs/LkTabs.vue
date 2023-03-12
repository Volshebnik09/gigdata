<template>
  <section class="lkTabs">
    <div class="container">
      <h1>Личный кабинет</h1>
      <div class="lkTabs__block">
        <nav class="lkTabs__block__nav">
          <ul>
            <li v-for="(tab) in tabs"
                @click="currentTabId=tab.id"
            ><TabUI2
              :active="currentTabId===tab.id"
            >{{tab.tabName}}</TabUI2></li>
          </ul>
        </nav>
        <div class="lkTabs__block__tabs">
          <component
            :is="tabs.find(el=>el.id===currentTabId).tabComponent"
          />
        </div>
      </div>

      <div class="lkTabs__cards">
        <div class="lkTabs__cards__card">
          <h3>Финансы</h3>
          <span>1 000 000</span> ₽ на счету
          <btn-with-underlining
            class="lkTabs__cards__card__a"
          >
            Пополнить
          </btn-with-underlining>
        </div>

        <div class="lkTabs__cards__card">
          <h3>Подписка</h3>
          <p>Осталось 250 000 запросов на сегодня</p>
          <p>Тариф «Максимальный», действует бессрочно</p>
          <btn-with-underlining
            class="lkTabs__cards__card__a"
          >
            Изменить тариф
          </btn-with-underlining>
        </div>

        <div class="lkTabs__cards__card">
          <h3>Вне подписки</h3>
          <p>Осталось 100 запросов, затем 0.1₽ за запись.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TabUI2 from "~/UI/TabUI2/TabUI2.vue";
import InputUI from "~/UI/InputUI/InputUI.vue";
import ReloadBtn from "~/UI/ReloadBtn/ReloadBtn.vue";
import CopyBtn from "~/UI/CopyBtn/CopyBtn.vue";
import ProfileTab from "~/components/LkTabs/tabs/profile/ProfileTab.vue";
import PaymentHistory from "~/components/LkTabs/tabs/PaymentHistory/PaymentHistory.vue";
import FinanceCard from "~/components/LkTabs/FinanceCard/FinanceCard.vue";
import BtnWithUnderlining from "~/UI/BtnWithUnderlining/BtnWithUnderlining.vue";

export default {
  name: "LkTabs",
  components: {BtnWithUnderlining, FinanceCard, CopyBtn, ReloadBtn, InputUI, TabUI2},
  data: function (){
    return{
      currentTabId: 0,
      tabs: [
        {
          tabName: "Профиль",
          tabComponent: ProfileTab,
          id: 0,
        },
        // {
        //   tabName: "Статистика",
        //   tabComponent: ProfileTab,
        //   id: 1,
        // },
        {
          tabName: "История платежей",
          tabComponent: PaymentHistory,
          id: 2,
        },
        // {
        //   tabName: "РеквQизиты для акта",
        //   tabComponent: ProfileTab,
        //   id: 3,
        // },
        // {
        //   tabName: "Счёт на оплату",
        //   tabComponent: ProfileTab,
        //   id: 4,
        // }
      ]
    }
  }


}
</script>

<style lang="scss" scoped>
@import "styles/variables";
@import "styles/mixins";
.lkTabs{
  margin-top: 80px;
  &__block{
    margin-top: 80px;
    display: flex;
    &__tabs{
      width: 100%;
    }
    &__nav {
      margin-right: 34px;
      flex-shrink: 0;
      ul {
        min-width: 280px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        li {
          font-family: 'Manrope', sans-serif;
          list-style: none;
          font-style: normal;
          font-weight: 800;
          font-size: 28px;
          line-height: 100%;
          /* identical to box height, or 28px */

          letter-spacing: 0.005em;

          /* Text */

          color: #001223;
        }
      }
    }
  }
  &__cards{
    display: grid;
    margin-top: 140px;
    gap:30px;
    grid-template-areas: "finance subscription outOfSubscription";
    grid-template-columns: 1fr 1fr 1fr;
    &__card:nth-child(1){
      grid-area: finance;
    }
    &__card:nth-child(2){
      grid-area: subscription;
    }
    &__card:nth-child(3){
      grid-area: outOfSubscription;
      padding-bottom: 40px;
    }
    &__card{
      width: 100%;
      background: linear-gradient(263.89deg, #E5E1FF 18.89%, #DEE9FF 110.43%);
      border-radius: 40px;
      position: relative;
      padding: 20px 40px 92px;
      @include mainText;
      span{
        font-family: 'Manrope', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 100%;
        /* identical to box height, or 24px */

        letter-spacing: 0.005em;

        /* Color H3 blue */

        color: #2400FF;
      }
      h3{
        margin-bottom: 20px;
        color:$colorH3Violet
      }
      &__a{
        position: absolute;
        bottom: 20px;
        left:40px
      }
      p{
        @include mainText
      }
      p:nth-child(3){
        margin-top: 20px;
        @include smallText
      }
    }
  }
}



@media (max-width: 1200px) and (min-width: 641px){
  .lkTabs__block{
    flex-wrap: wrap;
    margin-top: 50px;
    &__nav{
      width: 100%;
      margin-bottom: 50px;
      ul {
        flex-direction: row;
        flex-wrap: wrap;
        gap:40px 10%;
        justify-content: space-between;
      }
    }
  }
  .lkTabs {
    &__cards {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "finance subscription"
                           "outOfSubscription outOfSubscription";
    }
  }
}
@media (max-width: 640px){
  .lkTabs__block{
    flex-wrap: wrap;
    margin-top: 50px;
    &__nav{
      width: 100%;
      margin-bottom: 50px;
      ul {
        flex-direction: row;
        flex-wrap: wrap;
        gap:20px 10%;
        justify-content: space-between;
      }
    }
  }
  .lkTabs {
    margin-top: 40px;
    &__cards {
      margin-top: 80px;
      grid-template-columns: 1fr;
      grid-template-areas: "finance"
                           "subscription "
                           "outOfSubscription";
      &__card{
        padding: 20px 20px 80px;
        &__a{
          left:20px;
        }
      }
    }
  }
  .lkTabs__block__tab__personalInfo__input-container::v-deep{
    input{
      height: 48px;
      @include mainText;
    }
  }
  .lkTabs__block__tab{
    padding: 20px;
  }
}

</style>
