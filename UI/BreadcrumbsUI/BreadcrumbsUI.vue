<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__item" v-for="breadcrumb in breadcrumbs"><span>/</span>
      <router-link :to="breadcrumb.to">{{ breadcrumb.title }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";

export type breadcrumb = {
  to: string,
  title: string,
}
export default Vue.extend({
  props: {
    breadcrumbs: Array as PropType<breadcrumb[]>
  }
})
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
@import "@/styles/variables.scss";
.breadcrumbs{
  display: flex;
  flex-wrap: wrap;
  a,span {
    @include smallText;
    white-space: nowrap;
  }
  a{
    margin: 0 4px;
  }
  span{
  }
  &__item:last-child {
    a{
      color:$stroke;
    }
  }
  &__item:first-child{
    span{
      display: none;
    }
  }
}
</style>
