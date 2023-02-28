<template>
  <header class="header">
    <div class="container">
      <router-link to="/">
        <img :src="require('@/images/logo.svg')" class="header__logo" alt="">
      </router-link>
      <NavC class="header__nav"/>
      <div class="header__right-block">
        <AccountC v-if="false"
                  :name="windowWidth > 1200? 'Иван иванов' : ''"
        />
        <BtnSmall to="#" text="Войти" v-else-if="windowWidth > 1200"/>
        <router-link to="#" v-else>
          <img :src="require('@/images/Group (2).svg')" alt="" >
        </router-link>
        <img :src="require('@/images/Frame 607.svg')" alt="" class="header__right-block__navMobileC-btn" @click="openNavMobile()">
      </div>
    </div>
    <NavMobileC
      :open-or-close="isNavMobileOpen"
      @closeNavEvent="closeNavMobile()"
    />
  </header>
</template>

<script>
import NavC from "@/components/HeaderC/NavC/NavC.vue";
import AccountC from "@/components/HeaderC/AccountC/AccountC.vue";
import BtnSmall from "@/UI/BtnSmall/BtnSmall.vue";
import Vue from "vue";
import NavMobileC from "@/components/HeaderC/NavMobileC/NavMobileC.vue";

export default {
  name:"HeaderC",
  components: {NavMobileC, BtnSmall, AccountC, NavC},
  data: function(){
    return {
      isNavMobileOpen: false
    }
  },
  computed: {
    windowWidth: {
      get() {
        console.log(this.$store.getters.windowWidth);
        return this.$store.getters.windowWidth
      }
    }
  },
  methods: {
    openNavMobile: function (){
      this.isNavMobileOpen = true
    },
    closeNavMobile: function (){
      this.isNavMobileOpen = false
    },
  }

}
</script>

<style lang="scss" scoped>

.header {
  padding-top: 3.8%;
  .container{
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__nav {
    position: absolute;
    left:50%;
    transform: translateX(-50%);
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__right-block{
    &__navMobileC-btn {
      display: none;
      cursor: pointer;
    }
  }
}


@media (max-width: 1200px) and (min-width: 641px) {
  .header {
    padding-top: 5.8%;
    &__right-block{
      display: flex;
      gap:50px;
      &__navMobileC-btn {
        display: block;
      }
    }
    &__nav{
      display: none;
    }
    .account-c {
      p{
        display: none;
      }

    }

  }
}

@media (max-width: 640px)  {
  .header {
    padding-top: 7.8%;
    &__logo{
      width: 100px;
    }
    &__nav{
      display: none;
    }
    &__right-block{
      display: flex;
      gap:25px;
      &__navMobileC-btn {
        display: block;
        width: 13vw;
        max-width: 60px;
      }
    }
    .account-c {
      p{
        display: none;
      }
    }
  }
}

</style>
