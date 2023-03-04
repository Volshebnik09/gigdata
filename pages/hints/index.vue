<template>
  <fragment>
    <HeaderC/>
    <MainScreenC2/>
    <ETRDWE/>
    <ExperienceItYourself/>
    <HowToConnect/>
    <BoxedVersion/>
    <footerC/>
  </fragment>
</template>

<script>

import throttle from "@/helpers/throttle";
import {Fragment} from "vue-frag"
let onResizeThrottled
export default {
  name: 'hintsPage',

  mounted() {
    onResizeThrottled = throttle(()=>this.onResize(), 100)
    window.addEventListener("resize", onResizeThrottled);
    onResizeThrottled()
  },
  beforeDestroy() {
    window.removeEventListener("resize", onResizeThrottled)
  },
  methods: {
    onResize(){
      this.$store.commit("setWindowWidth", window.innerWidth)
    },
  },
  components: {Fragment},
}
</script>

<style lang="scss">
@import "@/styles/global.scss";
</style>
