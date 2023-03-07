<template>
  <nav>
    <router-link to="/hints">Подсказки</router-link>
    <router-link to="/API">API</router-link>
    <router-link to="/Тарифы">Тарифы</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavC"
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  gap: 60px;
}
</style>
