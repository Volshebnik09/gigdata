<template>
  <section class="experienceItYourself">
    <div class="container">
      <h2>Испытайте сами</h2>
      <div class="experienceItYourself__form">
        <div class="experienceItYourself__form__nav" >
          <TabUI1
            v-for="(page,index) in pages"
            :key="page.id"
            :text="page.title"
            :active="index===currentPage"
            @click="currentPage=index"
          />
        </div>
        <div class="experienceItYourself__form__body">
          <div class="experienceItYourself__form__body__input"
               v-for="input in pages[currentPage].body">
            <span>{{input.title}}</span>
            <InputUI
              :placeholder="input.placeholder"
              :disable="input.disable"
              :title="input.title"
              :text="input.text"
              @input="(e)=>input.text = e.target.value"
              :key="input.id"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import InputUI from "~/UI/InputUI/InputUI.vue";
import TabUI1 from "~/UI/TabUI1/TabUI1.vue";

type TInput = {
  id:number,
  title:string,
  text:string,
  placeholder:string,
  disable:boolean
}

type TPageBody = TInput[]

type TPage = {
  id:number,
  title:string,
  body:TInput[]
}
export default Vue.extend({
  name: "ExperienceItYourself",
  components: {TabUI1, InputUI},
  data: function (){
    return{
      pages: [
        {
          id:0,
          title:"Адрес по полям",
          body: [
            {
              id:0,
              title:"Индекс",
              text:"",
              placeholder:"Определяется автоматически",
              disable:true
            },
            {
              id:1,
              title:"Район/Регион",
              text:"",
              placeholder:"Введите регион или район ",
              disable:false
            },
            {
              id:1,
              title:"Город",
              text:"",
              placeholder:"Введите город",
              disable:false
            },
            {
              id:1,
              title:"Улица",
              text:"",
              placeholder:"Введите название улицы",
              disable:false
            },
            {
              id:1,
              title:"Дом",
              text:"",
              placeholder:"Введите номер дома",
              disable:false
            },
            {
              id:1,
              title:"Квартира (если есть)",
              text:"",
              placeholder:"Введите номер квартиры",
              disable:false
            },
          ]
        },
        {
          id:1,
          title:"ФИО по полям",
          body: [
            {
              id: 0,
              title:"Фамилия",
              placeholder: "Введите фамилию"
            },
            {
              id: 1,
              title:"Имя",
              placeholder: "Введите Имя"
            },
            {
              id: 2,
              title:"Отчество (если есть)",
              placeholder: "Введите Отчество"
            },
          ]
        },
        {
          id:2,
          title:"Организация",
          body: [
            {
              id:0,
              title: "Организация или ИП",
              placeholder: "Название в свободной форме"
            }
          ]
        },
        {
          id:3,
          title:"E-mail",
          body: [
            {
              id:0,
              title: "Email",
              placeholder: "Введите адрес электронной почты"
            }
          ]
        }
      ] as TPage[],
      currentPage: 0
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.experienceItYourself{
  h2{
    margin-top: 140px;
  }
  &__form {
    padding: 40px 40px;
    background: #FFFFFF;
    border-radius: 40px;
    margin-top: 36px;
    &__nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }
    &__body{
      display: flex;
      flex-direction: column;
      gap:20px;
      &__input{
        display: flex;
        flex-direction: column;
        gap:10px;
        span{
          @include mainTextBold;
        }
        &::v-deep input {
          padding: 11px 37px;
        }
      }
    }
  }
}
@media (max-width: 1200px) and (min-width: 641px) {
  .experienceItYourself{
    &__form{
      &__nav {
        width: 540px;
        flex-wrap: wrap;
        gap:28px 20px;
        margin: auto auto 35px;
      }
    }
  }
}
@media (max-width: 640px) {
  .experienceItYourself{
    h2{
      margin-top: 120px;
      text-align: center;
    }
    &__form{
      padding: 50px 15px;
      &__nav {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 10px;
      }
      &__body{
        span{
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          /* identical to box height */

          letter-spacing: -0.015em;

          /* Text */

          color: #001223;
        }
        &::v-deep input {
          padding: 11px 8px;
          height: 48px;
        }
      }
    }
  }
}
</style>
