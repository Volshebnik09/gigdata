(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9,10,11],{262:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(130).default)("65000b1e",content,!0,{sourceMap:!1})},265:function(t,e,n){t.exports=n.p+"img/logo.29dca10.svg"},268:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(130).default)("a517ea7e",content,!0,{sourceMap:!1})},269:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(130).default)("066c1ce2",content,!0,{sourceMap:!1})},271:function(t,e,n){"use strict";n.r(e);var o={name:"NavC"},l=(n(272),n(43)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("nav",[e("router-link",{attrs:{to:"hints"}},[t._v("Подсказки")]),t._v(" "),e("router-link",{attrs:{to:"API"}},[t._v("API")]),t._v(" "),e("router-link",{attrs:{to:"Тарифы"}},[t._v("Тарифы")])],1)}),[],!1,null,"eec2fcc4",null);e.default=component.exports},272:function(t,e,n){"use strict";n(262)},273:function(t,e,n){var o=n(129)((function(i){return i[1]}));o.push([t.i,"nav[data-v-eec2fcc4]{display:flex;gap:60px}",""]),o.locals={},t.exports=o},279:function(t,e,n){t.exports=n.p+"img/Group (1).79f1464.svg"},280:function(t,e,n){"use strict";n(268)},281:function(t,e,n){var o=n(129)((function(i){return i[1]}));o.push([t.i,".account-c[data-v-24add021]{align-items:center;display:flex;gap:10px}",""]),o.locals={},t.exports=o},282:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(130).default)("3a4eb4b6",content,!0,{sourceMap:!1})},283:function(t,e,n){t.exports=n.p+"img/Frame 608.32e15d1.svg"},284:function(t,e,n){"use strict";n(269)},285:function(t,e,n){var o=n(129)((function(i){return i[1]}));o.push([t.i,".navMobileBLock[data-v-09c26e1a]{left:0;position:absolute;top:0;width:100%;z-index:1000}.navMobile__shadow[data-v-09c26e1a]{background:rgba(0,0,0,.29);left:0;position:absolute;top:0;width:100vw}.navMobile[data-v-09c26e1a]{background:linear-gradient(263.89deg,#e5e1ff 18.89%,#dee9ff 110.43%);position:relative;z-index:100}.navMobile__header[data-v-09c26e1a]{display:flex;justify-content:space-between;padding:10% 0;position:relative;z-index:101}.navMobile__header a[data-v-09c26e1a]{align-items:center;display:flex}.navMobile__header a img[data-v-09c26e1a]{min-width:100px;width:20vw}.navMobile__nav[data-v-09c26e1a]{display:flex;flex-direction:column;margin-top:20px;padding-bottom:60px;position:relative;z-index:101}.fade-enter-active[data-v-09c26e1a],.fade-leave-active[data-v-09c26e1a]{transform:translateX(0);transition:.4s}.fade-enter[data-v-09c26e1a],.fade-leave-to[data-v-09c26e1a]{transform:translateX(100%)}",""]),o.locals={},t.exports=o},286:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(130).default)("5cf31271",content,!0,{sourceMap:!1})},302:function(t,e,n){"use strict";n.r(e);n(30);var o={name:"AccountC",props:{name:String}},l=(n(280),n(43)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"account-c"},[t.name?e("p",{staticClass:"account-c__name"},[t._v("\n    "+t._s(t.name)+"\n  ")]):t._e(),t._v(" "),e("img",{staticClass:"account-c__img",attrs:{src:n(279),alt:""}})])}),[],!1,null,"24add021",null);e.default=component.exports},303:function(t,e,n){"use strict";n.r(e);var o=n(271),l=n(1).a.extend({props:{openOrClose:Boolean},components:{NavC:o.default},methods:{closeNav:function(){this.$emit("closeNavEvent")},getHeight:function(){return document.body.clientHeight}}}),r=(n(284),n(43)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("transition",{attrs:{name:"fade"}},[t.openOrClose?e("div",{ref:"navMobile",staticClass:"navMobileBLock"},[e("div",{staticClass:"navMobile__shadow",style:"height: ".concat(t.getHeight(),"px")}),t._v(" "),e("div",{staticClass:"navMobile"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navMobile__header"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(265),alt:""}})]),t._v(" "),e("img",{attrs:{src:n(283),alt:""},on:{click:t.closeNav}})],1),t._v(" "),e("NavC",{ref:"closeBtn",staticClass:"navMobile__nav"})],1)])]):t._e()])}),[],!1,null,"09c26e1a",null);e.default=component.exports},304:function(t,e,n){t.exports=n.p+"img/Group (2).4f19d4a.svg"},305:function(t,e,n){t.exports=n.p+"img/Frame 607.7884e76.svg"},306:function(t,e,n){"use strict";n(282)},307:function(t,e,n){var o=n(129)((function(i){return i[1]}));o.push([t.i,'.BtnSmall[data-v-4ca3d7aa]{border:3px solid #0049b7;border-radius:80px;color:#001223;display:inline-block;font-family:"Manrope",sans-serif;font-size:24px;font-style:normal;font-weight:600;line-height:33px;padding:10px 40px;text-align:center;white-space:nowrap}.BtnSmall[data-v-4ca3d7aa]:hover{background:#cce0ff}.BtnSmall[data-v-4ca3d7aa]:active{background:#0049b7;color:#fff}.BtnSmall[data-v-4ca3d7aa]:disabled{border-color:#b0bed3;color:#404c5c}@media(max-width:641px){.BtnSmall[data-v-4ca3d7aa]{color:#001223;font-size:16px;font-style:normal;font-weight:600;line-height:22px;padding:10px 0}}',""]),o.locals={},t.exports=o},308:function(t,e,n){"use strict";n(286)},309:function(t,e,n){var o=n(129)((function(i){return i[1]}));o.push([t.i,".header[data-v-66424f30]{padding-top:70px}.header .container[data-v-66424f30]{align-items:center;display:flex;height:54px;justify-content:space-between}.header__nav[data-v-66424f30]{left:50%;position:absolute;transform:translateX(-50%)}.header a[data-v-66424f30]{align-items:center;display:flex;justify-content:center}.header__right-block__navMobileC-btn[data-v-66424f30]{cursor:pointer;display:none}@media(max-width:1200px)and (min-width:641px){.header[data-v-66424f30]{padding-top:5.8%}.header__right-block[data-v-66424f30]{display:flex;gap:50px}.header__right-block__navMobileC-btn[data-v-66424f30]{display:block}.header .account-c p[data-v-66424f30],.header__nav[data-v-66424f30]{display:none}}@media(max-width:640px){.header[data-v-66424f30]{padding-top:7.8%}.header__logo[data-v-66424f30]{width:100px}.header__nav[data-v-66424f30]{display:none}.header__right-block[data-v-66424f30]{display:flex;gap:25px}.header__right-block__navMobileC-btn[data-v-66424f30]{display:block;max-width:60px;width:13vw}.header .account-c p[data-v-66424f30]{display:none}}",""]),o.locals={},t.exports=o},338:function(t,e,n){"use strict";n.r(e);var o=n(271),l=n(302),r={name:"BtnSmall",props:{text:String,to:{require:!0,type:String}}},c=(n(306),n(43)),d=Object(c.a)(r,(function(){var t=this;return(0,t._self._c)("router-link",{staticClass:"BtnSmall",attrs:{to:t.to}},[t._v(t._s(t.text))])}),[],!1,null,"4ca3d7aa",null).exports,v={name:"HeaderC",components:{NavMobileC:n(303).default,BtnSmall:d,AccountC:l.default,NavC:o.default},data:function(){return{isNavMobileOpen:!1}},computed:{windowWidth:{get:function(){return this.$store.getters.windowWidth}}},methods:{openNavMobile:function(){this.isNavMobileOpen=!0},closeNavMobile:function(){this.isNavMobileOpen=!1}}},f=(n(308),Object(c.a)(v,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"container"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"header__logo",attrs:{src:n(265),alt:""}})]),t._v(" "),e("NavC",{staticClass:"header__nav"}),t._v(" "),e("div",{staticClass:"header__right-block"},[t.windowWidth>1200?e("BtnSmall",{attrs:{to:"#",text:"Войти"}}):e("router-link",{attrs:{to:"#"}},[e("img",{attrs:{src:n(304),alt:""}})]),t._v(" "),e("img",{staticClass:"header__right-block__navMobileC-btn",attrs:{src:n(305),alt:""},on:{click:function(e){return t.openNavMobile()}}})],1)],1),t._v(" "),e("NavMobileC",{attrs:{"open-or-close":t.isNavMobileOpen},on:{closeNavEvent:function(e){return t.closeNavMobile()}}})],1)}),[],!1,null,"66424f30",null));e.default=f.exports}}]);