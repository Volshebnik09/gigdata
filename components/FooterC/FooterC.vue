<template>
  <footer class="footer">
    <div class="container">
      <img :src="require('@/images/logo.svg')" alt="" class="footer__logo">
      <ul class="footer__add-links">
        <li><a href="#">Тарифы</a></li>
        <li><a href="#">Партнёрская программа</a></li>
        <li><a href="#">Политика конфиденциальности</a></li>
      </ul>
      <div class="footer__possibilities">
        <h4 @click="(e)=>toggleClassOpenInParent(e)">
          Возможности
        </h4>
        <ul>
          <li><a href="#">Подсказки</a></li>
          <li><a href="#">Адреса по координатам</a></li>
          <li><a href="#">Организация по ИНН</a></li>
          <li><a href="#">Проверка ФИО</a></li>
          <li><a href="#">Проверка телефона</a></li>
          <li><a href="#">Проверка e-mail</a></li>
        </ul>
      </div>
      <div class="footer__legal-information">
        <h4 @click="(e)=>toggleClassOpenInParent(e)">Юридическая информация</h4>
        <ul>
          <li>ООО «Прикладное программное обеспечение»</li>
          <li>ИНН:6829051230</li>
          <li>ОГРН:1086829010872</li>
        </ul>
      </div>
      <div class="footer__contacts">
        <h4
            @click="(e)=>toggleClassOpenInParent(e)"
        >Контакты</h4>
        <ul>
          <li>8-800-700-30-60 по России бесплатно</li>
          <li>info@appsoftware.ru</li>
          <li>392003, Тамбов, ул. Советская, 191Б</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterC",
  methods: {
    toggleClassOpenInParent(e){
      e.path[1].classList.toggle("open");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.footer {
  margin-top: 100px;
  padding: 40px 0;
  background: linear-gradient(263.89deg, #E5E1FF 18.89%, #DEE9FF 110.43%);
  .container {
    padding: 0 44px;
    display: grid;
    grid-template-columns: 27% 26%;
    grid-template-areas:  "logo possibilities legal-information"
                          "add-links possibilities legal-information"
                          "add-links possibilities contacts";
    grid-template-rows: 75px .8fr 1fr;

  }
  ul {
    margin-top: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 28px;
    li {
      @include mainText;
    }
    a {
      @include mainText;
    }
  }
  &__logo {
    grid-area: logo;
  }
  &__possibilities {
    grid-area: possibilities;
    a{
      border-bottom: 2px solid #0049B7;
      display: inline-block;
      padding: 2px 0;
    }
  }
  &__legal-information {
    grid-area: legal-information;
    ul {
      gap: 10px;
    }
  }
  &__add-links {
    grid-area: add-links;
    a{
      border-bottom: 2px solid #0049B7;
      display: inline-block;
      padding: 2px 0;
      max-width: 300px;
    }
  }
  &__contacts {
    grid-area: contacts;
    ul {
      gap: 10px;
    }
  }

  h4 {
    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height */


    color: #2400FF;
  }
}
@media (max-width: 1200px) and (min-width: 641px) {
  .footer{
    margin-top: 13%;
    .container {
      padding: 0 24px;
      grid-template-areas: "logo possibilities"
                           "add-links possibilities"
                           "legal-information legal-information"
                           "contacts contacts";
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 80px;
      gap: 40px 0 ;
    }
  }
}

@media (max-width: 640px) {
  .footer{
    margin-top: 13%;
    .container {
      padding: 0 24px;
      grid-template-areas: "logo"
                           "add-links"
                           "possibilities"
                           "legal-information"
                           "contacts";
      grid-template-columns: 1fr;
      grid-template-rows: 20px;
      gap: 40px 0 ;
      a{
        border: none;
      }

    }
    h4 {
      font-family: 'Mulish', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height */

      letter-spacing: -0.015em;

      /* Color H3 blue */

      color: #2400FF;
    }
    &__possibilities, &__legal-information, &__contacts{
      transition: .5s;
      max-height: 40px;
      h4{
        position: relative;
        &::after{
          content: '';
          position: absolute;
          right: 0;
          background: url("@/images/Vector.svg");
          top:5px;
          height: 10px;
          width: 18px;
          transition: .5s;
        }
      }
      ul {
        max-height: 0;
        height: auto;
        opacity: 0;
        transition: .5s;
        overflow: hidden;
      }
      &.open {
        max-height: 400px;
        h4::after{
          transform: rotate(180deg);
        }
        ul {
          opacity: 1;
          max-height: 100%;
        }
      }
    }
  }
}
</style>
