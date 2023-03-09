<template>
  <div class="checkBox" @click="clickEmit">
    <div :class="`checkBox__input-holder ` + (checked ? 'checked' : '')">
      <input type="checkbox" class="checkBox__input" :checked="checked" />
    </div>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'CheckBoxUI',
  props: {
    text: String,
    checked: Boolean,
  },
  methods: {
    clickEmit: function () {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.checkBox {
  display: flex;
  gap: 20px;
  user-select: none;
  cursor: pointer;
  input {
    display: none;
  }
  &__input-holder {
    position: relative;
    border: 3px solid #1700a5;
    border-radius: 5px;
    width: 25px;
    height: 25px;
  }
  align-items: center;
  span {
    @include mainText;
  }
  &:hover &__input-holder {
    background: #cce0ff;
    border: 3px solid #1700a5;
    border-radius: 5px;
  }
  &__input-holder.checked::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 13.5px;
    width: 13.5px;
    content: '';
    background: #1700a5;
    border-radius: 5px;
  }
}
</style>
