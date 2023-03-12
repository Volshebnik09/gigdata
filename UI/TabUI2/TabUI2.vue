<template>
  <h4 :class="active?'active':''">
    <slot/>
  </h4>
</template>

<script>
export default {
  name: "TabUI2",
  props: {
    active: Boolean,
  }
}
</script>

<style lang="scss" scoped>

h4{
  cursor: pointer;
  padding: 10px 0;
  &:hover{
    color: #104576;
  }
  &.active{
    color: #3A79B4;
  }
}

</style>
