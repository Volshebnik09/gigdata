<template>
  <router-link :to="to" class="BtnFulfilled">{{text}}</router-link>
</template>

<script>
export default {
  name: "BtnFulfilled",
  props:{
    text: String,
    to: {
      require: true,
      type: String
    },
  }
}
</script>

<style lang="scss" scoped>
.BtnFulfilled{
  text-align: center;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  white-space: nowrap;
  /* white */

  color: #FFFFFF;
  display: inline-block;
  padding: 20px 40px;
  background: #0049B7;
  border-radius: 80px;
  &:hover{
    background: #4A93FF;
  }
  &:active{
    background: #00327D;
  }
  &:disabled{
    color: #404C5C;
    background: #B0BED3;
  }
}
@media (max-width: 641px) {
  .BtnFulfilled {
    font-weight: 600;
    font-size: 16px;
    padding: 20px 40px;
    line-height: 22px;
    color: #FFFFFF;
  }
}
</style>