<template>
  <section class="boxedVersion">
    <div class="container">
      <div class="boxedVersion__card">
        <h2>Коробочная версия</h2>
        <p>Устанавливается на ваш сервер.</p>
        <p>
          Подходит, если больше 1 млн запросов в день, или отдел безопасности
          запрещает использовать «облака».
        </p>
        <p>Включает виджет для пользователей и API для программ.</p>
        <p>Подключается к любым корпоративным справочникам</p>
        <h3>Стоимость</h3>
        <p>
          825 тыс. ₽ за адреса или 1500 тыс. ₽ за все компоненты. Включает
          лицензию и обновления на 3 года.
        </p>
        <img
          :src="require('@/images/10 1.png')"
          alt=""
          class="boxedVersion__card__img"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BoxedVersion',
}
</script>

<style lang="scss" scoped>
.boxedVersion {
  margin-top: 140px;
  &__card {
    position: relative;
    background: #ffffff;
    border-radius: 40px;
    padding: 40px;
    overflow: hidden;
    img {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 31%;
    }
    p {
      margin-top: 10px;
    }
    h2 {
      color: #2400ff;
      margin-bottom: 20px;
    }
    h3 {
      color: #001223;
      margin-bottom: 20px;
      margin-top: 40px;
    }
    p,
    h2,
    h3 {
      max-width: 60%;
      width: 600px;
    }
  }
}
@media (max-width: 1200px) and (min-width: 641px) {
  .boxedVersion {
    &__card {
      p:nth-child(2),
      p:nth-child(3),
      p:nth-child(4),
      p:nth-child(5) {
        max-width: 80%;
        width: 1000px;
      }
    }
  }
}
@media (max-width: 640px) {
  .boxedVersion {
    &__card {
      padding: 20px;
      p,
      h2,
      h3 {
        max-width: 100%;
      }
      img {
        display: none;
      }
    }
  }
}
</style>
