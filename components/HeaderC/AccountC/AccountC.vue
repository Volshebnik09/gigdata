<template>
  <a class="account-c">
    <p class="account-c__name" v-if="name">
      {{name}}
    </p>
    <img :src="require('@/images/Group (1).svg')" alt="" class="account-c__img">
  </a>
</template>

<script>
/**
 * Иконка с профилем + имя
 * Со ссылкой на лк
 */
export default {
  name:"AccountC",
  props: {
    name: String,
  }
}
</script>

<style lang="scss" scoped>
.account-c {
  display: flex;
  gap:10px;
  align-items: center;
  &__name{

  }
  &__img{

  }
}
</style>
