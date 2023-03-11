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
        <div class="lkTabs__block__tab">
          <div class="lkTabs__block__tab__personalInfo">
            <h3>Персональная информация</h3>
            <div class="lkTabs__block__tab__personalInfo__input-container">
              <div class="lkTabs__block__tab__personalInfo__input__title">ФИО</div>
              <InputUI
                placeholder="Иванов Иван Иванович"
              />
            </div>
            <div class="lkTabs__block__tab__personalInfo__input-container">
              <div class="lkTabs__block__tab__personalInfo__input__title">Компания</div>
              <InputUI
                placeholder="ООО им. Иванова Ивана Ивановича"
              />
            </div>
            <div class="lkTabs__block__tab__personalInfo__input-container">
              <div class="lkTabs__block__tab__personalInfo__input__title">E-mail</div>
              <InputUI
                placeholder="ivanovii@emai.com"
              />
            </div>
            <div class="lkTabs__block__tab__personalInfo__input-container">
              <div class="lkTabs__block__tab__personalInfo__input__title">Телефон</div>
              <InputUI
                placeholder="+7 (999) 999-99-99"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TabUI2 from "~/UI/TabUI2/TabUI2.vue";
import InputUI from "~/UI/InputUI/InputUI.vue";

export default {
  name: "LkTabs",
  components: {InputUI, TabUI2},

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
  &__personalInfo{
    h3{
      color:$colorText;
    }
    &__input-container{
      margin-top: 20px;
    }
    &__input__title{
      margin-bottom: 10px;
      @include mainText;
    }
  }
}
</style>
