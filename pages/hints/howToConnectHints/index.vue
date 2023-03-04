<template>
  <fragment>
    <headerC/>
    <how-to-connect-hints-c/>
    <InstructionsForConnectingHintsC/>
    <CostC2/>
    <FooterC/>
  </fragment>
</template>

<script>
import throttle from "~/helpers/throttle";
import {Fragment} from "vue-frag"
let onResizeThrottled
export default {
  name: 'howToConnectHintsPage',
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
