<template>
  <div class="PassportData__card">
    <h3 class="PassportData__card__title">{{ card.title }}</h3>
    <p class="PassportData__card__subtitle">{{ card.text }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

type TCard = {
  title: string
  text: string
}
export default Vue.extend({
  name: 'PassportData',
  props: {
    card: Object as PropType<TCard>,
  },
})
</script>
<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.PassportData__card {
  background: linear-gradient(263.89deg, #e5e1ff 18.89%, #dee9ff 110.43%);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 17px 37px;
  gap: 20px;
  width: 100%;
  border: 3px solid transparent;
  transition: 0.2s;
  cursor: pointer;
  &__title {
    color: $colorH3Violet;
  }
  &:hover {
    border: 3px solid #b6c8ec;
    border-radius: 40px;
  }
}
@media (max-width: 641px) {
  .PassportData__card {
    border-radius: 20px;
    min-height: 180px;
    padding: 17px;
  }
}
</style>
