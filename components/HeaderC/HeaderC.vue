<template>
  <fragment>
    <header class="header">
      <div class="container">
        <router-link to="/">
          <img
            :src="require('@/images/logo.svg')"
            class="header__logo"
            alt=""
          />
        </router-link>
        <NavC class="header__nav" />
        <div class="header__right-block">
          <AccountC
            v-if="false"
            :name="windowWidth > 1200 ? 'Иван иванов' : ''"
          />
          <BtnSmall
            text="Войти"
            v-else-if="windowWidth > 1200"
            @click="openLoginForm"
          />
          <router-link to="#" v-else>
            <img :src="require('@/images/Group (2).svg')" alt="" />
          </router-link>
          <img
            :src="require('@/images/Frame 607.svg')"
            alt=""
            class="header__right-block__navMobileC-btn"
            @click="openNavMobile()"
          />
        </div>
      </div>
      <NavMobileC
        :open-or-close="isNavMobileOpen"
        @closeNavEvent="closeNavMobile()"
        :style="windowWidth < 1200 ? '' : 'display:none;'"
      />
    </header>
    <teleport v-if="isLoginFormOpen" to="html">
      <LoginPopupC @closeEvent="() => (isLoginFormOpen = false)" />
    </teleport>
  </fragment>
</template>

<script>
import NavC from '@/components/HeaderC/NavC/NavC.vue'
import AccountC from '@/components/HeaderC/AccountC/AccountC.vue'
import BtnSmall from '@/UI/BtnSmall/BtnSmall.vue'
import NavMobileC from '@/components/HeaderC/NavMobileC/NavMobileC.vue'
import { Fragment } from 'vue-frag'
import Teleport from 'vue2-teleport'

export default {
  name: 'HeaderC',
  components: { NavMobileC, BtnSmall, AccountC, NavC, Fragment, Teleport },
  data: function () {
    return {
      isNavMobileOpen: false,
      isLoginFormOpen: false,
    }
  },
  computed: {
    windowWidth: {
      get() {
        return this.$store.getters.windowWidth
      },
    },
  },
  methods: {
    openNavMobile: function () {
      this.isNavMobileOpen = true
    },
    closeNavMobile: function () {
      this.isNavMobileOpen = false
    },
    openLoginForm: function () {
      this.isLoginFormOpen = true
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 70px;
  .container {
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__right-block {
    &__navMobileC-btn {
      display: none;
      cursor: pointer;
    }
  }
}

@media (max-width: 1200px) and (min-width: 641px) {
  .header {
    padding-top: 5.8%;
    &__right-block {
      display: flex;
      gap: 50px;
      &__navMobileC-btn {
        display: block;
      }
    }
    &__nav {
      display: none;
    }
    .account-c {
      p {
        display: none;
      }
    }
  }
}

@media (max-width: 640px) {
  .header {
    padding-top: 7.8%;
    &__logo {
      width: 100px;
    }
    &__nav {
      display: none;
    }
    &__right-block {
      display: flex;
      gap: 25px;
      &__navMobileC-btn {
        display: block;
        width: 13vw;
        max-width: 60px;
      }
    }
    .account-c {
      p {
        display: none;
      }
    }
  }
}
</style>
