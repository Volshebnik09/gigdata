<template>
  <section class="lkTabs">
    <div class="container">
      <h1>Личный кабинет</h1>
      <div class="lkTabs__block">
        <nav class="lkTabs__block__nav">
          <ul>
            <li><TabUI2>Профиль</TabUI2></li>
            <li><TabUI2>Статистика</TabUI2></li>
            <li><TabUI2>История платежей</TabUI2></li>
            <li><TabUI2>Реквизиты для акта</TabUI2></li>
            <li><TabUI2>Счёт на оплату</TabUI2></li>
          </ul>
        </nav>
        <div class="lkTabs__block__tabs">
          <div class="lkTabs__block__tab">
            <div class="lkTabs__block__tab__personalInfo">
              <h3>Персональная информация</h3>
              <div class="lkTabs__block__tab__personalInfo__input-container">
                <div class="lkTabs__block__tab__personalInfo__input-title">ФИО</div>
                <InputUI
                  placeholder="Иванов Иван Иванович"
                  class="lkTabs__block__tab__keys__input"
                />
              </div>
              <div class="lkTabs__block__tab__personalInfo__input-container">
                <div class="lkTabs__block__tab__personalInfo__input-title">Компания</div>
                <InputUI
                  placeholder="ООО им. Иванова Ивана Ивановича"
                  class="lkTabs__block__tab__keys__input"
                />
              </div>
              <div class="lkTabs__block__tab__personalInfo__input-container">
                <div class="lkTabs__block__tab__personalInfo__input-title">E-mail</div>
                <InputUI
                  placeholder="ivanovii@emai.com"
                  class="lkTabs__block__tab__keys__input"
                />
              </div>
              <div class="lkTabs__block__tab__personalInfo__input-container">
                <div class="lkTabs__block__tab__personalInfo__input-title">Телефон</div>
                <InputUI
                  placeholder="+7 (999) 999-99-99"
                  class="lkTabs__block__tab__keys__input"
                />
              </div>
            </div>
            <KeysC v-if="windowWidth>640"/>
          </div>
          <KeysC v-if="windowWidth<=640"/>
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
import KeysC from "~/components/LkTabs/KeysC.vue";

export default {
  name: "LkTabs",
  components: {KeysC, CopyBtn, ReloadBtn, InputUI, TabUI2},
  computed: {
    windowWidth:{
      get(){
        return this.$store.getters.windowWidth
      }
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

.lkTabs__block__tab{
  background: #FFFFFF;
  border-radius: 40px;
  width: 100%;
  padding: 40px;
  &__personalInfo, &__keys{
    h3{
      color:$colorText;
    }
    &__input-container{
      margin-top: 20px;
    }
    &__input-title{
      margin-bottom: 10px;
      @include mainText;
    }
    &__input-reload{
      margin-top: 10px;
      grid-area: reload;
    }
    &__input {
      grid-area: input;
    }
    &__input-copyBtn::v-deep{
      grid-area: copy;
      margin-left: 10px;
      .copyBtn__text{
        display: none;
      }
    }
  }
  &__personalInfo{
      max-width: 520px;
  }
  &__keys{
    margin-top: 40px;
    &__input-container{
      margin-top: 20px;
      align-items: center;
      position: relative;
      margin-right: 50px;
      max-width: 680px;
    }
    &__input-copyBtn{
      position: absolute;
      top:45px;
      right: -50px;
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
