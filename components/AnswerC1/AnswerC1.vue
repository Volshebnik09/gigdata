<template>
  <section class="answerC1">
    <div class="container">
      <h2>Ответ</h2>
      <h3>Базовые поля, заполняются для всех тарифов</h3>
      <CustomTable :table="table" />
      <h3>Дополнительные поля, заполняются в зависимости от тарифа</h3>
      <p>Заполняются при выборе конкретной подсказки. До этого они пустые</p>
      <h4>Все тарифы</h4>
      <customTable :table="table1" />
      <h4>«Расширенный» и «Максимальный»</h4>
      <customTable :table="table2" />
      <h4>«Максимальный»</h4>
      <customTable :table="table3" />
      <h4>
        Зарезервированы для автоматической обработки адресов через API
        стандартизации
      </h4>
      <customTable :table="table4" class="answerC1__table-4" />
    </div>
  </section>
</template>

<script lang="ts">
import CustomTable, { TCustomTable } from '~/UI/CustomTable/CustomTable.vue'
import Vue from 'vue'
export default Vue.extend({
  name: 'AnswerC1',
  components: { CustomTable },
  data() {
    return {
      table: {
        header: ['Название', 'Описание'],
        body: [
          [
            'value',
            'Адрес одной строкой (как показывается в списке подсказок)',
          ],
          ['unrestricted_value', 'Адрес одной строкой (полный, с индексом)'],
          ['data.postal_code', 'Индекс'],
          ['data.country', 'Страна'],
          ['data.country_iso_code', 'ISO-код страны (двухсимвольный)'],
          ['data.federal_district', 'Федеральный округ'],
          ['data.region_fias_id', 'ФИАС-код региона'],
          ['data.region_kladr_id', 'КЛАДР-код региона'],
          ['data.region_iso_code', 'ISO-код региона'],
          ['data.region_with_type', 'Регион с типом'],
          ['data.region_type', 'Тип региона (сокращенный)'],
          ['data.region_type_full', 'Тип региона'],
          ['data.region', 'Регион'],
          ['data.area_fias_id', 'ФИАС-код района в регионе'],
          ['data.area_kladr_id', 'КЛАДР-код района в регионе'],
          ['data.area_with_type', 'Район в регионе с типом'],
          ['data.area_type', 'Тип района в регионе (сокращенный)'],
          ['data.area_type_full', 'Тип района в регионе'],
          ['data.area', 'Район в регионе'],
          ['data.sub_area_fias_id', 'ФИАС-код муниципального поселения'],
          ['data.sub_area_kladr_id', 'КЛАДР-код муниципального поселения'],
          ['data.sub_area_with_type', 'Муниципальное поселение с типом'],
          ['data.sub_area_type', 'Тип муниципального поселения (сокращенный)'],
          ['data.sub_area_type_full', 'Тип муниципального поселения'],
          ['data.city_fias_id', 'ФИАС-код города'],
          ['data.city_kladr_id', 'КЛАДР-код города'],
          ['data.city_with_type', 'Город с типом'],
          ['data.city_type', 'Тип города (сокращенный)'],
          ['data.city_type_full', 'Тип города'],
          ['data.city', 'Город'],
          ['data.city_district_fias_id', 'ФИАС-код адм. района города'],
          ['data.city_district_kladr_id', 'не заполняется'],
          ['data.city_district_with_type', 'Адм. район города с типом'],
          ['data.city_district_type', 'Тип адм. района города (сокращенный)'],
          ['data.city_district_type_full', 'Тип адм. района города'],
          ['data.city_district', 'Адм. район города'],
          ['data.settlement_fias_id', 'ФИАС-код нас. пункта'],
          ['data.settlement_kladr_id', 'КЛАДР-код нас. пункта'],
          ['data.settlement_with_type', 'Населенный пункт с типом'],
          ['data.settlement_type', 'Тип населенного пункта (сокращенный)'],
          ['data.settlement_type_full', 'Тип населенного пункта'],
          ['data.settlement', 'Населенный пункт'],
          ['data.street_fias_id', 'ФИАС-код улицы'],
          ['data.street_kladr_id', 'КЛАДР-код улицы'],
          ['data.street_with_type', 'Улица с типом'],
          ['data.street_type', 'Тип улицы (сокращенный)'],
          ['data.street_type_full', 'Тип улицы'],
          ['data.street', 'Улица'],
          ['data.stead_fias_id', 'ФИАС-код земельного участка'],
          ['data.stead_kladr_id', 'КЛАДР-код земельного участка'],
          ['data.stead_type', '= «уч»'],
          ['data.stead_type_full', '= «участок»'],
          ['data.stead', 'номер земельного участка'],
          ['data.house_fias_id', 'ФИАС-код дома'],
          ['data.house_kladr_id', 'КЛАДР-код дома'],
          ['data.house_type', 'Тип дома (сокращенный)'],
          ['data.house_type_full', 'Тип дома'],
          ['data.house', 'Дом'],
          ['data.block_type', 'Тип корпуса/строения (сокращенный)'],
          ['data.block_type_full', 'Тип корпуса/строения'],
          ['data.block', 'Корпус/строение'],
          ['data.entrance', 'не заполняется'],
          ['data.floor', 'не заполняется'],
          ['data.flat_fias_id', 'ФИАС-код квартиры'],
          ['data.flat_type', 'Тип квартиры (сокращенный)'],
          ['data.flat_type_full', 'Тип квартиры'],
          ['data.flat', 'Квартира'],
          ['data.postal_box', 'Абонентский ящик'],
          [
            'data.fias_id',
            'ФИАС-код (он же код ГАР) адреса для России. \n' +
              'Идентификатор OpenStreetMap для Белоруссии. \n' +
              'Для остальных стран — не заполняется',
          ],
          ['data.fias_code', 'Не заполняется, используйте fias_id'],
          [
            'data.fias_level',
            {
              title:
                'Уровень детализации, до которого адрес найден в ФИАС (ГАР):',
              caption:
                '  0 — страна\n' +
                '  1 — регион\n' +
                '  3 — район\n' +
                '  4 — город\n' +
                '  5 — район города\n' +
                '  6 — населенный пункт\n' +
                '  7 — улица\n' +
                '  8 — дом\n' +
                '  9 — квартира\n' +
                ' 65 — планировочная структура\n' +
                ' 75 — земельный участок\n' +
                ' -1 — иностранный или пустой',
            },
          ],
          ['data.kladr_id', 'КЛАДР-код'],
          [
            'data.geoname_id',
            'Идентификатор объекта в базе GeoNames. Для российских адресов не заполняется',
          ],
          [
            'data.capital_marker',
            {
              title: 'Признак центра района или региона',
              caption:
                '1 — центр района (Московская обл, Одинцовский р-н, г Одинцово)\n' +
                '\n' +
                '2 — центр региона (Новосибирская обл, г Новосибирск)\n' +
                '\n' +
                '3 — центр района и региона (Томская обл, г Томск)\n' +
                '\n' +
                '4 — центральный район региона (Тюменская обл, Тюменский р-н)\n' +
                '\n' +
                '0 — ничего из перечисленного(Московская обл, г Балашиха)',
            },
          ],
          ['data.okato', 'Код ОКАТО'],
          ['data.oktmo', 'Код ОКТМО'],
          ['data.tax_office', 'Код ИФНС для физических лиц'],
          ['data.country_iso_code', 'ISO-код страны (двухсимвольный)'],
          ['data.tax_office_legal', 'Код ИФНС для организаций'],
          [
            'data.history_values[ ]',
            'Список исторических названий объекта нижнего уровня.\n' +
              'Если подсказка до улицы — это прошлые названия этой улицы, если до города — города',
          ],
        ],
      } as TCustomTable,
      table1: {
        header: ['Название', 'Описание'],
        body: [
          ['data.geo_lat', 'Координаты: широта'],
          ['data.geo_lon', 'Координаты: долгота'],
          [
            'data.qc_geo',
            {
              title: 'Код точности координат:',
              caption:
                '  0 — страна\n' +
                '  1 — регион\n' +
                '  3 — район\n' +
                '  4 — город\n' +
                '  5 — район города\n' +
                '  6 — населенный пункт\n' +
                '  7 — улица\n' +
                '  8 — дом\n' +
                '  9 — квартира\n' +
                ' 65 — планировочная структура\n' +
                ' 75 — земельный участок\n' +
                ' -1 — иностранный или пустой',
            },
          ],
          [
            'data.fias_actuality_state',
            {
              title: 'Признак актуальности адреса в ФИАС',
              caption:
                '  0 — точные координаты\n' +
                '  1 — ближайший дом\n' +
                '  2 — улица\n' +
                '  3 — населенный пункт\n' +
                '  4 — город\n' +
                '  5 — координаты не определены',
            },
          ],
          ['data.city_area', 'Административный округ (только для Москвы)'],
        ],
      } as TCustomTable,
      table2: {
        body: [
          ['data.beltway_hit', 'Внутри кольцевой?'],
          ['data.beltway_distance', 'Расстояние от кольцевой в километрах'],
        ],
      } as TCustomTable,
      table3: {
        body: [
          ['data.stead_cadnum', 'Кадастровый номер земельного участка'],
          ['data.house_cadnum', 'Кадастровый номер дома'],
          ['data.flat_cadnum', 'Кадастровый номер квартиры'],
          ['data.flat_area', 'Площадь квартиры'],
          ['data.square_meter_price', 'Рыночная стоимость м²'],
          ['data.flat_price', 'Рыночная стоимость квартиры'],
          ['data.timezone', 'Часовой пояс'],
          ['data.metro[ ]', 'Список ближайших станций метро (до трёх штук)'],
          ['└ name', '— название станции'],
          ['└ line', '— название линии'],
          ['└ distance', '— расстояние до станции в километрах'],
        ],
      } as TCustomTable,
      table4: {
        body: [
          ['data.qc_complete', 'не заполняется'],
          ['data.qc_house', 'не заполняется'],
          ['data.qc', 'не заполняется'],
          ['data.source', 'не заполняется'],
          ['data.unparsed_parts', 'не заполняется'],
        ],
      } as TCustomTable,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';
.answerC1 {
  margin-top: 140px;
  h3 {
    margin-top: 20px;
    color: $colorText;
  }
  h3:nth-child(4) {
    margin-top: 60px;
  }
  p:nth-child(5) {
    margin-top: 20px;
  }
  h4 {
    margin-top: 40px;
  }
  &__table-4::v-deep {
    .customTable__body {
      gap: 40px;
      background: linear-gradient(
          265.14deg,
          rgba(185, 178, 226, 0.3) 10.77%,
          rgba(182, 200, 236, 0.3) 99.08%
        ),
        #ffffff;
      span {
        color: $light;
      }
    }
  }
}
@media (max-width: 640px) {
  .answerC1 {
    margin-top: 80px;
  }
}
</style>
