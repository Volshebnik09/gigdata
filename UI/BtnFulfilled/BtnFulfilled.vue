<template>
  <button type="submit" v-if="type === 'submit'">{{ text }}</button>
  <router-link v-else :to="to" class="BtnFulfilled">{{ text }} </router-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

type TBtnType = 'submit' | undefined
export default Vue.extend({
  name: 'BtnFulfilled',
  props: {
    text: String,
    type: String as PropType<TBtnType>,
    to: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.BtnFulfilled {
  text-align: center;
  user-select: none;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  white-space: nowrap;
  /* white */

  color: #ffffff;
  display: inline-block;
  padding: 20px 40px;
  background: #0049b7;
  border-radius: 80px;
  &:hover {
    background: #4a93ff;
  }
  &:active {
    background: #00327d;
  }
  &:disabled {
    color: #404c5c;
    background: #b0bed3;
  }
}
@media (max-width: 641px) {
  .BtnFulfilled {
    font-weight: 600;
    font-size: 16px;
    padding: 20px 40px;
    line-height: 22px;
    color: #ffffff;
  }
}
</style>
