<template>
  <div class="inputUI-holder">
    <input
      :placeholder="placeholder"
      class="inputUI"
      :disabled="disable"
      @input="inputEmit"
      :value="text"
      :type="type ? type : 'text'"
    />
    <span v-if="notify">{{ notify.message }}</span>
    <img
      :src="require('@/images/Group (3).svg')"
      alt=""
      v-if="notify?.type === 1"
    />
    <img
      :src="require('@/images/Group (4).svg')"
      alt=""
      v-if="notify?.type === 2"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

enum ENotification {
  Error = 'Error',
  Succeed = 'Succeed',
}

type TNotify = {
  type: ENotification
  message: string
}

type TInputType = 'email' | 'password' | 'tel' | 'text' | 'number' | undefined
export default Vue.extend({
  name: 'InputUI',
  props: {
    placeholder: String,
    text: String,
    disable: Boolean,
    type: String as PropType<TInputType>,
    notify: Object as PropType<TNotify>,
  },
  methods: {
    inputEmit: function (e: Event) {
      this.$emit('input', e)
    },
  },
})
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.inputUI {
  border: 3px solid #0049b7;
  padding: 7px 17px;
  border-radius: 50px;
  background: transparent;
  width: 100%;

  font-family: 'Mulish', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.015em;
  transition: 0.2s;
  /* Text */
  color: #001223;
  &::placeholder {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.015em;

    color: #404c5c;
  }
  &:hover {
    background: #cce0ff;
    &::placeholder {
      color: #003260;
    }
  }
  &:focus {
    background: #ffffff;
  }
  &:disabled {
    background: #f2f7fe;
    &::placeholder {
      color: #69696a;
    }
  }
}
@media (max-width: 640px) {
  .inputUI {
    padding: 8px 8px;
    border-width: 2px;
    border-radius: 54px;
    height: 34px;
    &::placeholder {
      @include smallText;
      color: #404C5C;
    }
  }
}
</style>
