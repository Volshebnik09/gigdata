<template>
  <fragment>
    <h4>История платежей</h4>
    <div class="paymentHistory">
      <div class="paymentHistory__table-holder">
        <table>
          <thead>
          <tr>
            <th>Дата</th>
            <th>Внесенные средства</th>
            <th>Назначение платежа</th>
            <th>Наименование тарифа</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>20.12.2021</td>
              <td>36 000 ₽</td>
              <td>Оплата тарифа</td>
              <td>Расширеный</td>
            </tr>
            <tr>
              <td>20.12.2021</td>
              <td>36 000 ₽</td>
              <td>Оплата тарифа</td>
              <td>Расширеный</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </fragment>
</template>

<script>
import {Fragment} from "vue-frag";

export default {
  name:"PaymentHistory",
  components:{Fragment},
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.paymentHistory{
  max-width: 100%;
  &__table-holder{
    min-width: 100%;
    padding: 40px;
    margin-top: 20px;
    width: fit-content;
    background: #FFFFFF;
    border-radius: 40px;
  }
  table {
    width: 100%;
    min-width: 334px;
    th{
      @include smallText;
      text-align: left;
    }
    td{
      @include mainText;
      padding-top: 20px;
    }
    td+td, th+th{
      padding-left: 10px;
    }
  }
}
@media (max-width: 640px) {
  .paymentHistory{
    overflow: scroll;
    table{
      th{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 100%;
        /* or 12px */

        letter-spacing: 0.005em;
      }
      td{
        @include smallText
      }
    }
  }
}
</style>
