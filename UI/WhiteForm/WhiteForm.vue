<template>
  <div class="whiteForm">
    <h3>{{card.title}}</h3>
    <ul>
      <li v-for="li in card.ul" :key="li.id">{{ li.text }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";

type TCard = {
  title: string,
  ul: {
    id:number,
    text:string,
  }[]
}
export default Vue.extend({
  props: {
    card: Object as PropType<TCard>
  }
})
</script>

<style lang="scss" scoped>

@import "@/styles/mixins.scss";
.whiteForm {
  background: #FFFFFF;
  width: 100%;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 20px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 21px;
    margin-top: 16px;
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
</style>
