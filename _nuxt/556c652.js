(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{294:function(t,e,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("e076892a",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";r(294)},300:function(t,e,r){var o=r(81)((function(i){return i[1]}));o.push([t.i,".PassportData__card[data-v-731e600e]{align-items:flex-start;background:linear-gradient(263.89deg,#e5e1ff 18.89%,#dee9ff 110.43%);border:3px solid transparent;border-radius:40px;cursor:pointer;display:flex;flex-direction:column;gap:20px;padding:17px 37px;transition:.2s;width:100%}.PassportData__card__title[data-v-731e600e]{color:#8100ae}.PassportData__card[data-v-731e600e]:hover{border:3px solid #b6c8ec;border-radius:40px}@media(max-width:641px){.PassportData__card[data-v-731e600e]{border-radius:20px;min-height:180px;padding:17px}}",""]),o.locals={},t.exports=o},301:function(t,e,r){"use strict";var o=r(1).a.extend({name:"PassportData",props:{card:Object}}),d=(r(299),r(30)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"PassportData__card"},[e("h3",{staticClass:"PassportData__card__title"},[t._v(t._s(t.card.title))]),t._v(" "),e("p",{staticClass:"PassportData__card__subtitle"},[t._v(t._s(t.card.text))])])}),[],!1,null,"731e600e",null);e.a=component.exports},313:function(t,e,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("74a8a458",content,!0,{sourceMap:!1})},351:function(t,e,r){"use strict";r(313)},352:function(t,e,r){var o=r(81)((function(i){return i[1]}));o.push([t.i,".possibilitiesC[data-v-7f07f1e2]{margin-top:130px}.possibilitiesC__card-holder[data-v-7f07f1e2]{grid-gap:20px;display:grid;flex-wrap:wrap;gap:20px;grid-template-columns:1fr 1fr 1fr;grid-template-rows:repeat(auto-fill,1fr);justify-items:center;margin-top:3%}.possibilitiesC__card-holder>div[data-v-7f07f1e2]{min-height:240px}@media(max-width:1200px)and (min-width:641px){.possibilitiesC[data-v-7f07f1e2]{margin-top:12%}.possibilitiesC__card-holder[data-v-7f07f1e2]{grid-template-columns:repeat(auto-fill,minmax(300px,1fr));margin-top:6%}}@media(max-width:641px){.possibilitiesC[data-v-7f07f1e2]{margin-top:24%}.possibilitiesC__card-holder[data-v-7f07f1e2]{grid-template-columns:1fr;margin-top:12%}.possibilitiesC__card-holder>div[data-v-7f07f1e2]{min-height:180px}}",""]),o.locals={},t.exports=o},381:function(t,e,r){"use strict";r.r(e);var o={name:"PossibilitiesC",components:{PassportData:r(301).a},data:function(){return{cards:[{id:1,title:"Персональные данные",text:"Проверяет и разбирает ФИО из строки, определяет пол"},{id:2,title:"Контакты",text:"Проверяет телефон по базам Россвязи, отсеевает временные адреса электронной почты"},{id:3,title:"Адреса",text:"Автоматически проверяет, исправляет и геокодирует адреса"},{id:4,title:"Должности",text:"Справочник должностей"},{id:5,title:"Компании",text:"Выдает всю информацию по организации, ИП"},{id:6,title:"Подсказки",text:"Помогают человеку быстро и корректно ввести ФИО, контакты, адреса, реквизиты компании"}]}}},d=(r(351),r(30)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"possibilitiesC"},[e("div",{staticClass:"container"},[e("h2",[t._v("Возможности")]),t._v(" "),e("div",{staticClass:"possibilitiesC__card-holder"},t._l(t.cards,(function(t){return e("PassportData",{key:t.id,attrs:{card:t}})})),1)])])}),[],!1,null,"7f07f1e2",null);e.default=component.exports}}]);