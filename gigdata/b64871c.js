(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{264:function(e,t,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(131).default)("44e792a6",content,!0,{sourceMap:!1})},267:function(e,t,n){e.exports=n.p+"img/logo.29dca10.svg"},271:function(e,t,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(131).default)("76a3d26a",content,!0,{sourceMap:!1})},273:function(e,t,n){"use strict";n.r(t);var o={name:"NavC"},l=(n(274),n(42)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("nav",[t("router-link",{attrs:{to:"hints"}},[e._v("Подсказки")]),e._v(" "),t("router-link",{attrs:{to:"API"}},[e._v("API")]),e._v(" "),t("router-link",{attrs:{to:"Тарифы"}},[e._v("Тарифы")])],1)}),[],!1,null,"eec2fcc4",null);t.default=component.exports},274:function(e,t,n){"use strict";n(264)},275:function(e,t,n){var o=n(130)((function(i){return i[1]}));o.push([e.i,"nav[data-v-eec2fcc4]{display:flex;gap:60px}",""]),o.locals={},e.exports=o},285:function(e,t,n){e.exports=n.p+"img/Frame 608.32e15d1.svg"},286:function(e,t,n){"use strict";n(271)},287:function(e,t,n){var o=n(130)((function(i){return i[1]}));o.push([e.i,".navMobileBLock[data-v-09c26e1a]{left:0;position:absolute;top:0;width:100%;z-index:1000}.navMobile__shadow[data-v-09c26e1a]{background:rgba(0,0,0,.29);left:0;position:absolute;top:0;width:100vw}.navMobile[data-v-09c26e1a]{background:linear-gradient(263.89deg,#e5e1ff 18.89%,#dee9ff 110.43%);position:relative;z-index:100}.navMobile__header[data-v-09c26e1a]{display:flex;justify-content:space-between;padding:10% 0;position:relative;z-index:101}.navMobile__header a[data-v-09c26e1a]{align-items:center;display:flex}.navMobile__header a img[data-v-09c26e1a]{min-width:100px;width:20vw}.navMobile__nav[data-v-09c26e1a]{display:flex;flex-direction:column;margin-top:20px;padding-bottom:60px;position:relative;z-index:101}.fade-enter-active[data-v-09c26e1a],.fade-leave-active[data-v-09c26e1a]{transform:translateX(0);transition:.4s}.fade-enter[data-v-09c26e1a],.fade-leave-to[data-v-09c26e1a]{transform:translateX(100%)}",""]),o.locals={},e.exports=o},302:function(e,t,n){"use strict";n.r(t);var o=n(273),l=n(1).a.extend({props:{openOrClose:Boolean},components:{NavC:o.default},methods:{closeNav:function(){this.$emit("closeNavEvent")},getHeight:function(){return document.body.clientHeight}}}),r=(n(286),n(42)),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("transition",{attrs:{name:"fade"}},[e.openOrClose?t("div",{ref:"navMobile",staticClass:"navMobileBLock"},[t("div",{staticClass:"navMobile__shadow",style:"height: ".concat(e.getHeight(),"px")}),e._v(" "),t("div",{staticClass:"navMobile"},[t("div",{staticClass:"container"},[t("div",{staticClass:"navMobile__header"},[t("router-link",{attrs:{to:"/"}},[t("img",{attrs:{src:n(267),alt:""}})]),e._v(" "),t("img",{attrs:{src:n(285),alt:""},on:{click:e.closeNav}})],1),e._v(" "),t("NavC",{ref:"closeBtn",staticClass:"navMobile__nav"})],1)])]):e._e()])}),[],!1,null,"09c26e1a",null);t.default=component.exports}}]);