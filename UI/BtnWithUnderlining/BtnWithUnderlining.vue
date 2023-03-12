<template>
  <a>
    <slot />
  </a>
</template>

<script>
export default {
  name: 'BtnWithUnderlining',
  props: {
    text: String,
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
@import '@/styles/variables.scss';
a {
  @include mainText;
  cursor: pointer;
  text-align: center;
  border-bottom: 3px solid $colorH3blue;
  transition: 0.2s;
  user-select: none;
  padding: 0 10px 3px;
  &:hover {
    color: #104576;
  }
  &:active {
    color: #3a79b4;
  }
}
</style>
