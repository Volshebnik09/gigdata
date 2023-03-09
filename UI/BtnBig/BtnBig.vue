<template>
  <router-link :to="to" class="BtnBig">{{ text }}</router-link>
</template>

<script>
export default {
  name: 'BtnBig',
  props: {
    text: String,
    to: {
      require: true,
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.BtnBig {
  text-align: center;
  user-select: none;
  border-radius: 80px;
  padding: 20px 40px;
  border: 3px solid #1700a5;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  display: inline-block;

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
  .BtnBig {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #001223;
  }
}
</style>
