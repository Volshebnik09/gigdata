<template>
  <div class="customTable">
    <div class="customTable__head">
      <div :class="'customTable__head__item '+ 'column-'+index"
           v-for="(header,index) in table.header" :key="index">{{ header }}</div>
    </div>
    <div class="customTable__body">
      <div class="customTable__body__line"
           v-for="(line,index) in table.body" :key="index">
        <div :class="'customTable__body__line__item '+ 'column-'+index"
             v-for="(value,index) in line" :key="index">
          <div v-if="value.title" class="customTable__body__line__item-dropdown"><span v-if="value.title" @click="e=>onItemDropdownTitleClick(e)" class="customTable__body__line__item-dropdown__title">{{value.title}}</span>
            <span v-if="value.caption" ref="caption" class="customTable__body__line__item-dropdown__caption">{{value.caption}}</span>
          </div><span v-if="!value.title">{{value}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";

type TCustomTableBodyCell = String | {
  title: String,
  caption:String
}
export type TCustomTable = {
  header: string[],
  body:TCustomTableBodyCell[][]
}
export default Vue.extend({
  name:"CustomTable",
  props: {table:Object as PropType<TCustomTable>},
  methods: {
    onItemDropdownTitleClick: function(e:any){
      e.target.nextElementSibling.classList.toggle('open')
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";
.customTable{
  margin-top: 50px;
  .column-0{
    width: 26%;
  }
  .column-1{
    width: 74%;
  }
  &__head{
    display: flex;
    padding-left: 20px;
    &__item{
      @include mainTextBold;
    }
  }
  &__body{
    margin-top: 30px;
    padding: 20px;
    background: #FFFFFF;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &__line{
      display: flex;
      &__item {
        white-space: break-spaces;
        @include mainText;
      }
      .column-0{
        word-break: break-all;
      }
      &__item-dropdown {
        &__title{
          cursor: pointer;
          border-bottom: 2px solid #8100AE;
        }
        &__caption {
          transition: 0.4s;
          height: auto;
          background: linear-gradient(263.89deg, #E5E1FF 18.89%, #DEE9FF 110.43%);
          border-radius: 40px;
          display: block;
          padding: 0 20px;
          max-height: 0;
          margin-top: 0;
          overflow: hidden;
        }
        &__caption.open {
          margin-top: 20px;
          padding: 20px 20px;
          max-height: 500px;
        }
      }
      &__item:last-child{
        padding-left: 9px;
      }
    }
  }
}
@media (max-width: 960px) and (min-width: 641px) {
  .customTable{
    .column-0{
      width: 50%;
    }
    .column-1{
      width: 50%;
    }
    &__body{
      margin-top: 18px;
      &__line{
        &__item-dropdown {
          &__caption.open {
            max-height: 700px;
          }
        }
      }
    }
  }
}

@media (max-width: 640px){
  .customTable{
    margin-top: 40px;
    .column-0{
      width: 32%;
    }
    .column-1{
      width: 69%;
      padding-left: 19px;
    }
    &__head{
      padding: 0 10px;
      &__item{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */

        letter-spacing: -0.015em;

        /* Text */

        color: $colorText;
      }
    }
    &__body{
      padding: 20px 10px;
      margin-top: 30px;
      &__line{
        &__item-dropdown {
          &__caption.open {
            max-height: 700px;
          }
        }
      }
    }
  }
}
</style>
