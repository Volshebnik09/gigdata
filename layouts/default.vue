<template>
  <fragment>
    <headerC/>
    <Nuxt />
    <footer-c/>
  </fragment>
</template>

<script>
import {Fragment} from "vue-frag";
import throttle from "~/helpers/throttle";
let onResizeThrottled;
export default {
  components: {Fragment},
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
}
</script>

<style lang="scss">
@import "@/styles/global.scss";
</style>
