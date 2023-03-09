<template>
  <section class="howToConnect2">
    <div class="container">
      <h2>Как подключить</h2>
      <p class="howToConnect2__subtitle">
        Чтобы внедрить подсказку, вставьте код на ваш сайт
      </p>
      <CodeHolder :code="addressSnippet" />
      <div class="howToConnect2__bottom">
        <p>Параметр token — это API-ключ, который указан в вашем</p>
        <router-link to="#">личном кабинете</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import CodeHolder from '~/UI/CodeHolder/CodeHolder.vue'
import addressSnippet from '~/static/addressSnippet'

export default {
  name: 'HowToConnect2',
  components: { CodeHolder },
  data() {
    return {
      addressSnippet,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.howToConnect2 {
  margin-top: 140px;
  .codeHolder {
    margin-top: 40px;
  }
  &__subtitle {
    margin-top: 20px;
  }
  &__bottom {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    a {
      @include links;
    }
  }
}
@media (max-width: 640px) {
  .howToConnect2 {
    margin-top: 80px;
    &__bottom {
      a {
        text-align: center;
        width: 100%;
      }
    }
  }
}
</style>
