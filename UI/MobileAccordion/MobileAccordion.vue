<template>
  <div :class="`mobileAccordion ${open?'open':''}`" @click="toggle">
    <h3>{{card.title}}</h3>
      <ul class="mobileAccordion__ul">
        <li v-for="li in card.ul" :key="li.id">
          {{li.text}}
        </li>
      </ul>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";

type TCard = {
  title : string;
  ul : {
    id: number,
    text: string;
  }[]
}

export default Vue.extend({
  name: "MobileAccordion",
  props: {
    card: Object as PropType<TCard>
  },
  data: function () {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open =!this.open
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.mobileAccordion {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  z-index: 1;
  gap: 0;
  width: 100%;
  min-height: 88px;
  display: flex;
  flex-direction: column;
  transition:  .5s;
  flex: 0 0 auto;
  justify-content: center;
  h3{
    text-align: center;
    width: 100%;
  }
  ul {
    list-style: none;
    z-index: -100;
    flex-direction: column;
    gap: 21px;
    transition:  .5s;
    max-height: 0;
    display: flex;
    opacity: 0;
    li {
      position: relative;
      padding-left: 30px;
      @include mainText;
      font-weight: 300;
      &:before {
        content: "";
        position: absolute;
        background: linear-gradient(265.14deg, #E2DDFF 10.77%, #B6C8EC 99.08%);
        border-radius: 3px;
        left: 0;
        top: 11px;
        width: 10px;
        height: 10px;
      }
    }
  }
}

.mobileAccordion.open {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background: #FFFFFF;
  border-radius: 20px;
  ul {
    display: flex;
    opacity: 1;
    max-height: 600px;
  }
}



</style>