<template>
  <h4 :class="active?'active':''" @click="clickEmit">
    {{text}}
  </h4>
</template>

<script>
export default {
  name: "TabUI1",
  props: {
    text: String,
    active: Boolean,
  },
  methods:{
    clickEmit:function (e){
      this.$emit('click',e)
    }
  }
}
</script>

<style lang="scss" scoped>
h4 {
  display: flex;
  user-select: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  position: relative;
  color: #8FA0B7;
  cursor: pointer;
  width: 260px;
  &.active{
    color: #001223;
    padding-bottom: 20px;
    &:after {
      width: 95%;
      background: #0049B7;
      height: 3px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
      content: '';
    }
  }
}
</style>
