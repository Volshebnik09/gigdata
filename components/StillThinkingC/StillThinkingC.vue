<template>
  <section class="stillThinkingC">
    <div class="container">
      <h2>
        Вы всё ещё думаете?
      </h2>
      <h3>
        Просто попробуйте.
      </h3>
      <BtnFulfilled to="#" text="Попробовать бесплатно"/>
    </div>
  </section>
</template>

<script>
import BtnFulfilled from "@/UI/BtnFulfilled/BtnFulfilled.vue";

export default {
  name: "StillThinkingC",
  components: {BtnFulfilled}
}
</script>

<style lang="scss" scoped>
.stillThinkingC{
  margin-top: 140px;
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 66px;
    /* identical to box height */

    text-align: center;
  }
  h3{
    font-style: normal;
    font-weight: 800;
    font-size: 52px;
    line-height: 71px;
    /* identical to box height */

    text-align: center;

    /* Color H3 blue */
  }
  a{
    margin-top: 40px;
  }
}
@media (max-width: 1200px) and (min-width: 641px) {
  .stillThinkingC{
    margin-top: 10%;
  }
}
@media (max-width: 640px) {
  .stillThinkingC{
    margin-top: 80px;
    h2{
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 100%;
      /* identical to box height, or 22px */

      text-align: center;
    }
    h3{
      font-style: normal;
      font-weight: 800;
      font-size: 28px;
      line-height: 100%;
      /* identical to box height, or 28px */

      text-align: center;
      letter-spacing: 0.005em;

    }
  }
}
</style>