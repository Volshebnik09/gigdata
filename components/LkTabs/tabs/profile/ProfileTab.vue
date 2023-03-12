<template>
  <fragment>
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
  </fragment>
</template>

<script>
import {Fragment} from "vue-frag";
import InputUI from "~/UI/InputUI/InputUI.vue";
import KeysC from "~/components/LkTabs/tabs/profile/KeysC.vue";

export default {
  name: "ProfileTab",
  components: {KeysC, InputUI, Fragment},
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

@media (max-width: 640px){
  .lkTabs__block__tab__personalInfo__input-container::v-deep{
    input{
      height: 48px;
      @include mainText;
    }
  }
}
</style>
