<template>
  <div class="codeHolder">
    <pre>{{ code }}</pre>
    <div
      class="codeHolder__copyBtn"
      @click="copyCodeToClipboard()"
      @mouseleave="copied = false"
    >
      <div :class="'codeHolder__copyBtn__text ' + (copied ? 'closed' : '')">
        Скопировать
      </div>
      <div :class="'codeHolder__copyBtn__text ' + (!copied ? 'closed' : '')">
        <img :src="require('@/images/bi_check2.svg')" alt="" />
        Скопировано
      </div>
      <img :src="require('@/images/Group (5).svg')" alt="" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'CodeHolder',

  data: function () {
    return {
      copied: false,
    }
  },
  props: {
    code: String,
  },
  methods: {
    copyCodeToClipboard: function () {
      this.copied = true
      navigator.clipboard.writeText(this.code)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.codeHolder {
  position: relative;
  background: #ffffff;
  border-radius: 40px;
  padding: 20px;
  pre {
    @include mainText;
    word-break: break-word;
    white-space: break-spaces;
  }
  &__copyBtn {
    cursor: pointer;
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 175px;
    display: flex;
    justify-content: flex-end;
    &__text {
      position: absolute;
      right: 40px;
      top: 50%;
      transform: translateY(-56%) scaleX(1);
      @include smallText;
      background: #e0dbff;
      border-radius: 25px 0px 0px 25px;
      padding: 6px 10px;
      overflow: hidden;
      opacity: 0;
      transition: 0.3s;
      display: flex;
      gap: 4px;
      justify-content: center;
    }
    &:hover &__text {
      opacity: 1;
    }
    &:hover &__text.closed {
      opacity: 0;
    }
  }
}
.codeHolder__copyBtn__text-enter-active,
.codeHolder__copyBtn__text-leave-active {
  transition: opacity 0.5s ease;
}

.codeHolder__copyBtn__text-enter-from,
.codeHolder__copyBtn__text-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .codeHolder {
    pre {
      @include smallText;
    }
    &__copyBtn {
      display: none;
    }
  }
}
</style>
