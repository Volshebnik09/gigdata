(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{333:function(t,e,d){var content=d(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(82).default)("b0f72434",content,!0,{sourceMap:!1})},334:function(t,e,d){var content=d(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(82).default)("baed68cc",content,!0,{sourceMap:!1})},395:function(t,e,d){"use strict";d(333)},396:function(t,e,d){var _=d(81)((function(i){return i[1]}));_.push([t.i,'.customTable[data-v-366fadc8]{margin-top:50px}.customTable .column-0[data-v-366fadc8]{width:26%}.customTable .column-1[data-v-366fadc8]{width:74%}.customTable__head[data-v-366fadc8]{display:flex;padding-left:20px}.customTable__head__item[data-v-366fadc8]{color:#001223;font-family:"Manrope",sans-serif;font-size:24px;font-style:normal;font-weight:800;letter-spacing:.005em;line-height:100%}@media(max-width:641px){.customTable__head__item[data-v-366fadc8]{color:#8fa0b7;font-family:"Mulish",sans-serif;font-size:16px;font-style:normal;font-weight:400;letter-spacing:-.015em;line-height:20px}}.customTable__body[data-v-366fadc8]{background:#fff;border-radius:40px;display:flex;flex-direction:column;gap:20px;margin-top:30px;padding:20px}.customTable__body__line[data-v-366fadc8]{display:flex}.customTable__body__line__item[data-v-366fadc8]{color:#001223;font-family:"Mulish",sans-serif;font-size:24px;font-style:normal;font-weight:400;letter-spacing:-.015em;line-height:30px;white-space:break-spaces}@media(max-width:641px){.customTable__body__line__item[data-v-366fadc8]{color:#001223;font-family:"Mulish",sans-serif;font-size:16px;font-style:normal;font-weight:400;letter-spacing:-.015em;line-height:20px}}.customTable__body__line .column-0[data-v-366fadc8]{word-break:break-all}.customTable__body__line__item-dropdown__title[data-v-366fadc8]{border-bottom:2px solid #8100ae;cursor:pointer}.customTable__body__line__item-dropdown__caption[data-v-366fadc8]{background:linear-gradient(263.89deg,#e5e1ff 18.89%,#dee9ff 110.43%);border-radius:40px;display:block;height:auto;margin-top:0;max-height:0;overflow:hidden;padding:0 20px;transition:.4s}.customTable__body__line__item-dropdown__caption.open[data-v-366fadc8]{margin-top:20px;max-height:500px;padding:20px}.customTable__body__line__item[data-v-366fadc8]:last-child{padding-left:9px}@media(max-width:960px)and (min-width:641px){.customTable .column-0[data-v-366fadc8],.customTable .column-1[data-v-366fadc8]{width:50%}.customTable__body[data-v-366fadc8]{margin-top:18px}.customTable__body__line__item-dropdown__caption.open[data-v-366fadc8]{max-height:700px}}@media(max-width:640px){.customTable[data-v-366fadc8]{margin-top:40px}.customTable .column-0[data-v-366fadc8]{width:32%}.customTable .column-1[data-v-366fadc8]{padding-left:19px;width:69%}.customTable__head[data-v-366fadc8]{padding:0 10px}.customTable__head__item[data-v-366fadc8]{color:#001223;font-size:16px;font-style:normal;font-weight:700;letter-spacing:-.015em;line-height:20px}.customTable__body[data-v-366fadc8]{margin-top:30px;padding:20px 10px}.customTable__body__line__item-dropdown__caption.open[data-v-366fadc8]{max-height:700px}}',""]),_.locals={},t.exports=_},397:function(t,e,d){"use strict";d(334)},398:function(t,e,d){var _=d(81)((function(i){return i[1]}));_.push([t.i,".answerC1[data-v-6fb56126]{margin-top:140px}.answerC1 h3[data-v-6fb56126]{color:#001223;margin-top:20px}.answerC1 h3[data-v-6fb56126]:nth-child(4){margin-top:60px}.answerC1 p[data-v-6fb56126]:nth-child(5){margin-top:20px}.answerC1 h4[data-v-6fb56126]{margin-top:40px}.answerC1__table-4[data-v-6fb56126] .customTable__body{background:linear-gradient(265.14deg,rgba(185,178,226,.3) 10.77%,rgba(182,200,236,.3) 99.08%),#fff;gap:40px}.answerC1__table-4[data-v-6fb56126] .customTable__body span{color:#8fa0b7}@media(max-width:640px){.answerC1[data-v-6fb56126]{margin-top:80px}}",""]),_.locals={},t.exports=_},437:function(t,e,d){"use strict";d.r(e);var _=d(1),o=_.a.extend({name:"CustomTable",props:{table:Object},methods:{onItemDropdownTitleClick:function(t){t.target.nextElementSibling.classList.toggle("open")}}}),n=(d(395),d(30)),l=Object(n.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"customTable"},[t.table.header?e("div",{staticClass:"customTable__head"},t._l(t.table.header,(function(header,d){return e("div",{key:d,class:"customTable__head__item column-"+d},[t._v("\n      "+t._s(header)+"\n    ")])})),0):t._e(),t._v(" "),e("div",{staticClass:"customTable__body"},t._l(t.table.body,(function(line,d){return e("div",{key:d,staticClass:"customTable__body__line"},t._l(line,(function(d,_){return e("div",{key:_,class:"customTable__body__line__item column-"+_},[d.title?e("div",{staticClass:"customTable__body__line__item-dropdown"},[d.title?e("span",{staticClass:"customTable__body__line__item-dropdown__title",on:{click:function(e){return t.onItemDropdownTitleClick(e)}}},[t._v(t._s(d.title))]):t._e(),t._v(" "),d.caption?e("span",{ref:"caption",refInFor:!0,staticClass:"customTable__body__line__item-dropdown__caption"},[t._v(t._s(d.caption))]):t._e()]):t._e(),t._v(" "),d.title?t._e():e("span",[t._v(t._s(d))])])})),0)})),0)])}),[],!1,null,"366fadc8",null).exports,c=_.a.extend({name:"AnswerC1",components:{CustomTable:l},data:function(){return{table:{header:["Название","Описание"],body:[["value","Адрес одной строкой (как показывается в списке подсказок)"],["unrestricted_value","Адрес одной строкой (полный, с индексом)"],["data.postal_code","Индекс"],["data.country","Страна"],["data.country_iso_code","ISO-код страны (двухсимвольный)"],["data.federal_district","Федеральный округ"],["data.region_fias_id","ФИАС-код региона"],["data.region_kladr_id","КЛАДР-код региона"],["data.region_iso_code","ISO-код региона"],["data.region_with_type","Регион с типом"],["data.region_type","Тип региона (сокращенный)"],["data.region_type_full","Тип региона"],["data.region","Регион"],["data.area_fias_id","ФИАС-код района в регионе"],["data.area_kladr_id","КЛАДР-код района в регионе"],["data.area_with_type","Район в регионе с типом"],["data.area_type","Тип района в регионе (сокращенный)"],["data.area_type_full","Тип района в регионе"],["data.area","Район в регионе"],["data.sub_area_fias_id","ФИАС-код муниципального поселения"],["data.sub_area_kladr_id","КЛАДР-код муниципального поселения"],["data.sub_area_with_type","Муниципальное поселение с типом"],["data.sub_area_type","Тип муниципального поселения (сокращенный)"],["data.sub_area_type_full","Тип муниципального поселения"],["data.city_fias_id","ФИАС-код города"],["data.city_kladr_id","КЛАДР-код города"],["data.city_with_type","Город с типом"],["data.city_type","Тип города (сокращенный)"],["data.city_type_full","Тип города"],["data.city","Город"],["data.city_district_fias_id","ФИАС-код адм. района города"],["data.city_district_kladr_id","не заполняется"],["data.city_district_with_type","Адм. район города с типом"],["data.city_district_type","Тип адм. района города (сокращенный)"],["data.city_district_type_full","Тип адм. района города"],["data.city_district","Адм. район города"],["data.settlement_fias_id","ФИАС-код нас. пункта"],["data.settlement_kladr_id","КЛАДР-код нас. пункта"],["data.settlement_with_type","Населенный пункт с типом"],["data.settlement_type","Тип населенного пункта (сокращенный)"],["data.settlement_type_full","Тип населенного пункта"],["data.settlement","Населенный пункт"],["data.street_fias_id","ФИАС-код улицы"],["data.street_kladr_id","КЛАДР-код улицы"],["data.street_with_type","Улица с типом"],["data.street_type","Тип улицы (сокращенный)"],["data.street_type_full","Тип улицы"],["data.street","Улица"],["data.stead_fias_id","ФИАС-код земельного участка"],["data.stead_kladr_id","КЛАДР-код земельного участка"],["data.stead_type","= «уч»"],["data.stead_type_full","= «участок»"],["data.stead","номер земельного участка"],["data.house_fias_id","ФИАС-код дома"],["data.house_kladr_id","КЛАДР-код дома"],["data.house_type","Тип дома (сокращенный)"],["data.house_type_full","Тип дома"],["data.house","Дом"],["data.block_type","Тип корпуса/строения (сокращенный)"],["data.block_type_full","Тип корпуса/строения"],["data.block","Корпус/строение"],["data.entrance","не заполняется"],["data.floor","не заполняется"],["data.flat_fias_id","ФИАС-код квартиры"],["data.flat_type","Тип квартиры (сокращенный)"],["data.flat_type_full","Тип квартиры"],["data.flat","Квартира"],["data.postal_box","Абонентский ящик"],["data.fias_id","ФИАС-код (он же код ГАР) адреса для России. \nИдентификатор OpenStreetMap для Белоруссии. \nДля остальных стран — не заполняется"],["data.fias_code","Не заполняется, используйте fias_id"],["data.fias_level",{title:"Уровень детализации, до которого адрес найден в ФИАС (ГАР):",caption:"  0 — страна\n  1 — регион\n  3 — район\n  4 — город\n  5 — район города\n  6 — населенный пункт\n  7 — улица\n  8 — дом\n  9 — квартира\n 65 — планировочная структура\n 75 — земельный участок\n -1 — иностранный или пустой"}],["data.kladr_id","КЛАДР-код"],["data.geoname_id","Идентификатор объекта в базе GeoNames. Для российских адресов не заполняется"],["data.capital_marker",{title:"Признак центра района или региона",caption:"1 — центр района (Московская обл, Одинцовский р-н, г Одинцово)\n\n2 — центр региона (Новосибирская обл, г Новосибирск)\n\n3 — центр района и региона (Томская обл, г Томск)\n\n4 — центральный район региона (Тюменская обл, Тюменский р-н)\n\n0 — ничего из перечисленного(Московская обл, г Балашиха)"}],["data.okato","Код ОКАТО"],["data.oktmo","Код ОКТМО"],["data.tax_office","Код ИФНС для физических лиц"],["data.country_iso_code","ISO-код страны (двухсимвольный)"],["data.tax_office_legal","Код ИФНС для организаций"],["data.history_values[ ]","Список исторических названий объекта нижнего уровня.\nЕсли подсказка до улицы — это прошлые названия этой улицы, если до города — города"]]},table1:{header:["Название","Описание"],body:[["data.geo_lat","Координаты: широта"],["data.geo_lon","Координаты: долгота"],["data.qc_geo",{title:"Код точности координат:",caption:"  0 — страна\n  1 — регион\n  3 — район\n  4 — город\n  5 — район города\n  6 — населенный пункт\n  7 — улица\n  8 — дом\n  9 — квартира\n 65 — планировочная структура\n 75 — земельный участок\n -1 — иностранный или пустой"}],["data.fias_actuality_state",{title:"Признак актуальности адреса в ФИАС",caption:"  0 — точные координаты\n  1 — ближайший дом\n  2 — улица\n  3 — населенный пункт\n  4 — город\n  5 — координаты не определены"}],["data.city_area","Административный округ (только для Москвы)"]]},table2:{body:[["data.beltway_hit","Внутри кольцевой?"],["data.beltway_distance","Расстояние от кольцевой в километрах"]]},table3:{body:[["data.stead_cadnum","Кадастровый номер земельного участка"],["data.house_cadnum","Кадастровый номер дома"],["data.flat_cadnum","Кадастровый номер квартиры"],["data.flat_area","Площадь квартиры"],["data.square_meter_price","Рыночная стоимость м²"],["data.flat_price","Рыночная стоимость квартиры"],["data.timezone","Часовой пояс"],["data.metro[ ]","Список ближайших станций метро (до трёх штук)"],["└ name","— название станции"],["└ line","— название линии"],["└ distance","— расстояние до станции в километрах"]]},table4:{body:[["data.qc_complete","не заполняется"],["data.qc_house","не заполняется"],["data.qc","не заполняется"],["data.source","не заполняется"],["data.unparsed_parts","не заполняется"]]}}}}),r=(d(397),Object(n.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"answerC1"},[e("div",{staticClass:"container"},[e("h2",[t._v("Ответ")]),t._v(" "),e("h3",[t._v("Базовые поля, заполняются для всех тарифов")]),t._v(" "),e("CustomTable",{attrs:{table:t.table}}),t._v(" "),e("h3",[t._v("Дополнительные поля, заполняются в зависимости от тарифа")]),t._v(" "),e("p",[t._v("Заполняются при выборе конкретной подсказки. До этого они пустые")]),t._v(" "),e("h4",[t._v("Все тарифы")]),t._v(" "),e("customTable",{attrs:{table:t.table1}}),t._v(" "),e("h4",[t._v("«Расширенный» и «Максимальный»")]),t._v(" "),e("customTable",{attrs:{table:t.table2}}),t._v(" "),e("h4",[t._v("«Максимальный»")]),t._v(" "),e("customTable",{attrs:{table:t.table3}}),t._v(" "),e("h4",[t._v("\n      Зарезервированы для автоматической обработки адресов через API\n      стандартизации\n    ")]),t._v(" "),e("customTable",{staticClass:"answerC1__table-4",attrs:{table:t.table4}})],1)])}),[],!1,null,"6fb56126",null));e.default=r.exports}}]);