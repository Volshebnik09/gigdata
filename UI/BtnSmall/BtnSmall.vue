<template>
  <a v-if="!to" @click="clickEmit" class="BtnSmall">{{ text }}</a>
  <router-link v-else :to="to" class="BtnSmall" @click="clickEmit">{{
    text
  }}</router-link>
</template>

<script>
export default {
  name: 'BtnSmall',
  props: {
    text: String,
    to: String,
  },
  methods: {
    clickEmit: function (e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.BtnSmall {
  user-select: none;
  text-align: center;
  border: 3px solid #0049b7;
  border-radius: 80px;
  padding: 10px 40px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;

  /* Text */

  color: #001223;
  &:hover {
    background: #cce0ff;
  }
  &:active {
    background: #0049b7;
    color: #ffffff;
  }
  &:disabled {
    border-color: #b0bed3;
    color: #404c5c;
  }
}
@media (max-width: 641px) {
  .BtnSmall {
    font-style: normal;
    font-weight: 600;
    padding: 10px 0;
    font-size: 16px;
    line-height: 22px;
    color: #001223;
  }
}
</style>
