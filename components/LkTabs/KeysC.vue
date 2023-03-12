<template>
  <fragment>
    <div class="lkTabs__block__tab__keys">
      <h3>Ключи</h3>
      <div class="lkTabs__block__tab__keys__input-container">
        <div class="lkTabs__block__tab__keys__input-title">API-ключ</div>
        <InputUI
          :disable="true"
          :text="APIKey"
          class="lkTabs__block__tab__keys__input"
        />
        <ReloadBtn
          class="lkTabs__block__tab__keys__input-reload"
        />
        <CopyBtn
          class="lkTabs__block__tab__keys__input-copyBtn"
          :text="APIKey"
        />
      </div>
      <div class="lkTabs__block__tab__keys__input-container">
        <div class="lkTabs__block__tab__keys__input-title">Секретный ключ</div>
        <InputUI
          :text="SecretKey"
          :disable="true"
          class="lkTabs__block__tab__keys__input"
        />
        <ReloadBtn
          class="lkTabs__block__tab__keys__input-reload"
        />
        <CopyBtn
          class="lkTabs__block__tab__keys__input-copyBtn"
          :text="SecretKey"
        />
      </div>
    </div>
  </fragment>
</template>

<script>
import {Fragment} from "vue-frag";
import CopyBtn from "~/UI/CopyBtn/CopyBtn.vue";
import ReloadBtn from "~/UI/ReloadBtn/ReloadBtn.vue";
import InputUI from "~/UI/InputUI/InputUI.vue";

export default {
  components: {InputUI, ReloadBtn, CopyBtn, Fragment},
  name:"KeysC",
  data: function (){
    return{
      APIKey: "052a4691c3f36ac824aa57c06a9b650a49c14b5e",
      SecretKey: "052a4691c3f36ac824aa57c06a9b650a49c14b5e"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "styles/variables";
@import "styles/mixins";
h3{
  color:$colorText;
}
.lkTabs__block__tab__keys__input-container{
  margin-top: 20px;
}
.lkTabs__block__tab__keys__input-title{
  margin-bottom: 10px;
  @include mainText;
}
.lkTabs__block__tab__keys__input-reload{
  margin-top: 10px;
  grid-area: reload;
}
.lkTabs__block__tab__keys__input {
  grid-area: input;
}
.lkTabs__block__tab__keys__input-copyBtn::v-deep{
  grid-area: copy;
  margin-left: 10px;
  .copyBtn__text{
    display: none;
  }
}
.lkTabs__block__tab__keys{
  margin-top: 40px;
  &__input-container{
    margin-top: 20px;
    align-items: center;
    position: relative;
    margin-right: 50px;
    max-width: 680px;
  }
  &__input-copyBtn{
    position: absolute;
    top:45px;
    right: -50px;
  }
}
@media (max-width: 640px) {
  .lkTabs__block__tab__keys__input-container::v-deep{
    margin-right: 0;
    input{
      font-family: 'Manrope', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;
      /* identical to box height, or 12px */

      letter-spacing: 0.005em;

      /* Text */

      color: #001223;
    }
  }
  .lkTabs__block__tab__keys__input-copyBtn::v-deep{
    right: 0;
    top:unset;
    bottom: 0;
    height: 40px;
    padding: 10px;
    svg{
      width: 20px;
    }
    .copyBtn__text{
      display: block;
    }
  }
}
</style>
