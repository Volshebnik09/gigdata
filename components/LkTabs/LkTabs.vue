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
    </div>
  </section>
</template>

<script>
import TabUI2 from "~/UI/TabUI2/TabUI2.vue";
import InputUI from "~/UI/InputUI/InputUI.vue";
import ReloadBtn from "~/UI/ReloadBtn/ReloadBtn.vue";
import CopyBtn from "~/UI/CopyBtn/CopyBtn.vue";
import ProfileTab from "~/components/LkTabs/tabs/profile/ProfileTab.vue";

export default {
  name: "LkTabs",
  components: {CopyBtn, ReloadBtn, InputUI, TabUI2},
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
        // {
        //   tabName: "История платежей",
        //   tabComponent: ProfileTab,
        //   id: 2,
        // },
        // {
        //   tabName: "Реквизиты для акта",
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
        display: flex;
        flex-direction: column;
        gap: 40px;
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
        gap:40px 10%;
        justify-content: space-between;
      }
    }
  }
}

@media (max-width: 640px){
  .lkTabs{
    margin-top: 40px;
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
