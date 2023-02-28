<template>
  <transition name="fade">
    <div class="navMobileBLock" v-if="openOrClose" ref="navMobile">
      <div class="navMobile__shadow" :style="`height: ${getHeight()}px`"></div>
      <div class="navMobile" >
        <div class="container">
          <div class="navMobile__header">
            <router-link to="/">
              <img :src="require('@/images/logo.svg')" alt="">
            </router-link>
            <img :src="require('@/images/Frame 608.svg')" alt="" @click="closeNav">
          </div>
          <NavC class="navMobile__nav" ref="closeBtn" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import NavC from "@/components/HeaderC/NavC/NavC.vue";
import Vue from "vue";
export default Vue.extend({
  props: {
    openOrClose: Boolean
  },
  components:{
    NavC
  },
  methods: {
    closeNav:function(){
      this.$emit("closeNavEvent")
    },
    getHeight: function (){
      return document.body.clientHeight
    }
  }


})
</script>

<style lang="scss" scoped>
.navMobileBLock{
  width: 100%;
  z-index: 1000;
  left: 0;
  top:0;
  position: absolute;
}
.navMobile__shadow{
  position: absolute;
  top:0;
  left: 0;
  width: 100vw;
  background: rgba(0, 0, 0, 0.29);
}
.navMobile{
  z-index: 100;
  position: relative;
  background: linear-gradient(263.89deg, #E5E1FF 18.89%, #DEE9FF 110.43%);

  &__header {
    position: relative;
    z-index: 101;
    padding: 10% 0;
    display: flex;
    justify-content: space-between;
    a{
      display: flex;
      align-items: center;
    }
    a img {
      width: 20vw;
      min-width: 100px;
    }
  }
  &__nav {
    margin-top: 20px;
    position: relative;
    z-index: 101;
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: 0.4s;
  transform: translateX(0);
}
.fade-enter, .fade-leave-to  {
  transform: translateX(100%);
}
</style>
