(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{314:function(t,e,o){var content=o(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(82).default)("8a84d736",content,!0,{sourceMap:!1})},315:function(t,e,o){var content=o(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(82).default)("ec63d8de",content,!0,{sourceMap:!1})},316:function(t,e,o){var content=o(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(82).default)("3995015a",content,!0,{sourceMap:!1})},353:function(t,e,o){"use strict";o(314)},354:function(t,e,o){var n=o(81)((function(i){return i[1]}));n.push([t.i,'.whiteForm[data-v-71c21a25]{align-items:flex-start;background:#fff;border-radius:40px;padding:40px 20px;width:100%}.whiteForm[data-v-71c21a25],.whiteForm ul[data-v-71c21a25]{display:flex;flex-direction:column}.whiteForm ul[data-v-71c21a25]{gap:21px;list-style:none;margin-top:16px}.whiteForm ul li[data-v-71c21a25]{color:#001223;font-family:"Mulish",sans-serif;font-size:24px;font-style:normal;font-weight:400;font-weight:300;letter-spacing:-.015em;line-height:30px;padding-left:30px;position:relative}@media(max-width:641px){.whiteForm ul li[data-v-71c21a25]{color:#001223;font-family:"Mulish",sans-serif;font-size:16px;font-style:normal;font-weight:400;letter-spacing:-.015em;line-height:20px}}.whiteForm ul li[data-v-71c21a25]:before{background:linear-gradient(265.14deg,#e2ddff 10.77%,#b6c8ec 99.08%);border-radius:3px;content:"";height:10px;left:0;position:absolute;top:11px;width:10px}',""]),n.locals={},t.exports=n},355:function(t,e,o){"use strict";o(315)},356:function(t,e,o){var n=o(81)((function(i){return i[1]}));n.push([t.i,'.mobileAccordion[data-v-cc4dfde2]{background:#fff;border-radius:20px;display:flex;flex:0 0 auto;flex-direction:column;gap:0;justify-content:center;min-height:88px;padding:20px;position:relative;transition:.5s;width:100%;z-index:1}.mobileAccordion h3[data-v-cc4dfde2]{text-align:center;width:100%}.mobileAccordion ul[data-v-cc4dfde2]{display:flex;flex-direction:column;gap:21px;list-style:none;max-height:0;opacity:0;transition:.5s;z-index:-100}.mobileAccordion ul li[data-v-cc4dfde2]{color:#001223;font-family:"Mulish",sans-serif;font-size:24px;font-style:normal;font-weight:400;font-weight:300;letter-spacing:-.015em;line-height:30px;padding-left:30px;position:relative}@media(max-width:641px){.mobileAccordion ul li[data-v-cc4dfde2]{color:#001223;font-family:"Mulish",sans-serif;font-size:16px;font-style:normal;font-weight:400;letter-spacing:-.015em;line-height:20px}}.mobileAccordion ul li[data-v-cc4dfde2]:before{background:linear-gradient(265.14deg,#e2ddff 10.77%,#b6c8ec 99.08%);border-radius:3px;content:"";height:10px;left:0;position:absolute;top:11px;width:10px}.mobileAccordion.open[data-v-cc4dfde2]{align-items:flex-start;background:#fff;border-radius:20px;display:flex;flex-direction:column;gap:20px;padding:20px}.mobileAccordion.open ul[data-v-cc4dfde2]{display:flex;max-height:600px;opacity:1}',""]),n.locals={},t.exports=n},357:function(t,e,o){"use strict";o(316)},358:function(t,e,o){var n=o(81)((function(i){return i[1]}));n.push([t.i,".forYourBusinessC[data-v-4051b086]{margin-top:140px}.forYourBusinessC__card-holder[data-v-4051b086]{grid-gap:20px;display:grid;flex-wrap:wrap;grid-template-columns:1fr 1fr;grid-template-rows:repeat(3,1fr);justify-items:center;margin-top:3%}@media(max-width:1200px)and (min-width:641px){.forYourBusinessC[data-v-4051b086]{margin-top:17.6%}.forYourBusinessC__card-holder[data-v-4051b086]{margin-top:6%}}@media(max-width:640px){.forYourBusinessC[data-v-4051b086]{margin-top:17.6%}.forYourBusinessC__card-holder[data-v-4051b086]{grid-template-columns:1fr;grid-template-rows:auto;margin-top:13%}}",""]),n.locals={},t.exports=n},372:function(t,e,o){"use strict";o.r(e);var n=o(1),r=n.a.extend({props:{card:Object}}),d=(o(353),o(30)),l=Object(d.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"whiteForm"},[e("h3",[t._v(t._s(t.card.title))]),t._v(" "),e("ul",t._l(t.card.ul,(function(li){return e("li",{key:li.id},[t._v(t._s(li.text))])})),0)])}),[],!1,null,"71c21a25",null).exports,c=n.a.extend({name:"MobileAccordion",props:{card:Object},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}}}),f=(o(355),Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{class:"mobileAccordion ".concat(t.open?"open":""),on:{click:t.toggle}},[e("h3",[t._v(t._s(t.card.title))]),t._v(" "),e("ul",{staticClass:"mobileAccordion__ul"},t._l(t.card.ul,(function(li){return e("li",{key:li.id},[t._v("\n        "+t._s(li.text)+"\n      ")])})),0)])}),[],!1,null,"cc4dfde2",null).exports),x=n.a.extend({name:"ForYourBusinessC",components:{MobileAccordion:f,WhiteForm:l},computed:{windowWidth:{get:function(){return this.$store.getters.windowWidth}}},data:function(){return{cards:[{id:1,title:"Интернет-магазина",ul:[{id:1,text:"Быстрый ввод адреса с индексом, районом и остановками"},{id:2,text:"Город посетителя по IP-адресу и адрес по координатам"},{id:3,text:"Район города, ближайшее метро и координаты дома"},{id:4,text:"Страны мира"}]},{id:2,title:"Облачного B2B и B2C-сервиса",ul:[{id:1,text:"Быстрый ввод персональных данных клиента"},{id:2,text:"Адрес с привязкой к ФИАС (ГАР)"},{id:3,text:"Все данные о юридическом лице по ИНН"},{id:4,text:"Аффилированные компании"}]},{id:3,title:"Производителя и дистрибьютера",ul:[{id:1,text:"Единая база торговых точек из разрозненных отчётов"},{id:2,text:"Правильные и постоянно используемые e-mail"},{id:3,text:"Все данные о юридическом лице по ИНН"},{id:4,text:"Пакетная обработка любых данных из Excel-файлов"}]},{id:4,title:"Курьерской службы",ul:[{id:1,text:"Район города, ближайшие станции метро или остановки и координаты дома"},{id:2,text:"Правильный почтовый адрес с индексом"},{id:3,text:"Обратное геокодирование"},{id:4,text:"Пакетная обработка ФИО, email и адресов через API"}]},{id:5,title:"Маркетолога",ul:[{id:1,text:"Корректные ФИО и пол клиента"},{id:2,text:"Полный адрес без опечаток и ошибок"},{id:3,text:"Единый список клиентов из пакета excel-файлов, без дубликатов и ошибок"}]},{id:6,title:"Разработчика",ul:[{id:1,text:"API с максимумом информации по ФИО"},{id:2,text:"API с максимумом информации по контактным данным клиентов"},{id:3,text:"Проверка паспортных данных по базе МВД"},{id:4,text:"Проверка наименования организации и её реквизитов"}]}]}}}),m=(o(357),Object(d.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"forYourBusinessC"},[e("div",{staticClass:"container"},[e("h2",[t._v("Для вашего бизнеса")]),t._v(" "),e("div",{staticClass:"forYourBusinessC__card-holder"},[t.windowWidth>641?t._l(t.cards,(function(t){return e("whiteForm",{key:t.id,attrs:{card:t}})})):t._l(t.cards,(function(t){return e("MobileAccordion",{key:t.id,attrs:{card:t}})}))],2)])])}),[],!1,null,"4051b086",null));e.default=m.exports}}]);