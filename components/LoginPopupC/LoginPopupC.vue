<template>
  <div class="loginPopup">
    <form class="loginPopup__form" ref="form">
      <div class="loginPopup__form__header">
        <img :src="require('@/images/logo.svg')" alt="" />
        <img @click="closeEmit" :src="require('@/images/закрыть.svg')" alt="" />
      </div>
      <h2>Войдите</h2>
      <div class="loginPopup__form__email">
        <h4>E-mail</h4>
        <InputUI
          placeholder="Введите адрес электронной почты"
          :text="email"
          :type="'email'"
          @input="(e) => (email = e.target.value)"
        />
      </div>
      <div class="loginPopup__form__password">
        <h4>Пароль</h4>
        <InputUI
          placeholder="Введите пароль"
          :text="password"
          :type="'password'"
          @input="(e) => (password = e.target.value)"
        />
      </div>
      <div class="loginPopup__form__rememberMeAndForgotPassword">
        <CheckBoxUI
          :text="'Запомнить меня'"
          :checked="rememberMeCheck"
          @click="rememberMeToggle"
        />
        <BtnWithUnderlining> Забыли пароль? </BtnWithUnderlining>
      </div>
      <BtnFulfilled
        type="sumbit"
        class="loginPopup__form__submitBtn"
        text="Войти"
      />
      <BtnWithUnderlining class="loginPopup__form__IDontHaveAccount">
        У меня нет аккаунта
      </BtnWithUnderlining>
    </form>
  </div>
</template>

<script>
import InputUI from '~/UI/InputUI/InputUI.vue'
import CheckBoxUI from '~/UI/CheckBoxUI/CheckBoxUI.vue'
import { nextTick } from 'vue'
import BtnWithUnderlining from '~/UI/BtnWithUnderlining/BtnWithUnderlining.vue'
import BtnFulfilled from '~/UI/BtnFulfilled/BtnFulfilled.vue'

export default {
  name: 'LoginPopupC',
  components: { BtnFulfilled, BtnWithUnderlining, CheckBoxUI, InputUI },
  mounted() {
    this.defaultBodyPosition = document.body.position
    this.defaultBodyOverflow = document.body.overflow
    document.body.position = 'fixed'
    document.body.overflow = 'hidden'
    nextTick(() => {
      this.setFlexAlignItems(this.windowHeight)
    })
  },
  beforeDestroy() {
    this.closeEmit()
    document.body.position = this.defaultBodyPosition
    document.body.overflow = this.defaultBodyOverflow
  },
  data: function () {
    return {
      email: '',
      password: '',
      rememberMeCheck: false,
      flexAlignItems: 'center',
      defaultBodyPosition: '',
      defaultBodyOverflow: '',
    }
  },
  computed: {
    windowHeight: {
      get() {
        return this.$store.getters.windowHeight
      },
    },
  },
  watch: {
    windowHeight(newWindowHeight) {
      this.setFlexAlignItems(newWindowHeight)
    },
  },
  methods: {
    closeEmit: function (e) {
      this.$emit('closeEvent', e)
    },
    setFlexAlignItems: function (newWindowHeight) {
      if (newWindowHeight <= this.$refs.form.clientHeight)
        this.flexAlignItems = 'flex-start'
      else this.flexAlignItems = 'center'
    },
    rememberMeToggle: function () {
      console.log(this.rememberMeCheck)
      this.rememberMeCheck = !this.rememberMeCheck
    },
  },
}
</script>

<style lang="scss" scoped>
.loginPopup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10010;
  display: flex;
  justify-content: center;
  align-items: v-bind(flexAlignItems);
  background: rgb(0, 0, 0, 0.2);
  overflow-y: scroll;

  &__form {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: linear-gradient(
        265.14deg,
        rgba(185, 178, 226, 0.3) 10.77%,
        rgba(182, 200, 236, 0.3) 99.08%
      ),
      #ffffff;
    border-radius: 40px;
    padding: 40px;
    &__header {
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img:nth-child(2) {
        cursor: pointer;
      }
    }
    h2 {
      margin-top: 40px;
      text-align: center;
    }
    &__email,
    &__password {
      margin-top: 40px;
      h4 {
        margin-bottom: 21px;
      }
    }
    &__rememberMeAndForgotPassword {
      display: flex;
      align-items: center;
      margin-top: 20px;
      justify-content: space-between;
    }
    &__submitBtn {
      margin-top: 40px;
      align-self: center;
    }
    &__IDontHaveAccount {
      margin-top: 40px;
      align-self: center;
    }
  }
}
</style>
