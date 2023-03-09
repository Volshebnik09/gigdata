<template>
  <section class="howToConnectHints">
    <div class="container">
      <div class="howToConnectHints__card">
        <h1>Как подключить подсказки</h1>
        <p>Выберите готовую интеграцию или подключите jquery-плагин</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowToConnectHintsC',
}
</script>

<style lang="scss" scoped>
.howToConnectHints {
  &__card {
    background: linear-gradient(
        265.14deg,
        rgba(185, 178, 226, 0.3) 10.77%,
        rgba(182, 200, 236, 0.3) 99.08%
      ),
      #ffffff;
    border-radius: 40px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 80px;
    h1 {
      max-width: 550px;
    }
  }
}

@media (max-width: 640px) {
  .howToConnectHints {
    &__card {
      gap: 20px;
      margin-top: 50px;
    }
  }
}
</style>
