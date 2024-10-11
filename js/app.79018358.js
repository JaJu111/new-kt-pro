(function(){"use strict";var t={661:function(t,e,s){var a=s(471),r=function(){var t=this,e=t._self._c;return e("div",[e("router-view")],1)},i=[],o=s(845),n={},l=(0,o.A)(n,r,i,!1,null,null,null),u=l.exports,d=s(173),c=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("HomeComponent")],1)},p=[],m=s(215),f=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"aside-box"},[e("div",{staticClass:"aside"},[e("div",{staticClass:"aside-top"},[e("AsideTopComponent")],1),e("div",{class:["aside-left",{hide:t.hideAside}]},[e("AsideLeftComponent",{on:{"hide-aside":t.toggleHideAside}})],1),e("div",{staticClass:"aside-right bg-gradient-to-t from-purple-500 to-pink-500",class:{hide:t.hideAside}},[e("router-view")],1)])])])},h=[],v=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{class:["main",{"hide-aside":t.hideAside}]},[e("div",{staticClass:"hide-box",on:{click:t.toggleHideAside}},[t.hideAside?t._e():e("i",{staticClass:"fa-solid fa-arrow-left"}),t.hideAside?e("i",{staticClass:"fa-solid fa-arrow-right"}):t._e()]),e("div",{class:["main-box",{hide:t.hideAside}]},[e("router-link",{attrs:{to:"/home"}},[e("div",{class:["main-aside-top",{hide:t.hideAside}]},[e("img",{attrs:{src:s(575)}}),t.hideAside?t._e():e("span",[t._v("-Pro")])])]),e("div",{staticClass:"main-bottom"},[e("ul",{class:["main-aside",{hide:t.hideAside}]},[e("router-link",{attrs:{to:"/home"}},[e("li",{staticClass:"hover:bg-gradient-to-r from-pink-400 rounded-md",class:{"bg-gradient-to-r text-black":"/home"===t.$route.path}},[e("i",{staticClass:"fa-solid fa-house"}),t._v(" "),t.hideAside?t._e():e("span",[t._v(t._s(t.$t("home.title")))])])]),e("router-link",{attrs:{to:"/products"}},[e("li",{staticClass:"hover:bg-gradient-to-r from-pink-400 rounded-md",class:{"bg-gradient-to-r text-black":"/products"===t.$route.path||"/products/info"===t.$route.path}},[e("i",{staticClass:"fa-solid fa-cart-shopping"}),t._v(" "),t.hideAside?t._e():e("span",[t._v(t._s(t.$t("products.title")))])])]),e("router-link",{attrs:{to:"/categories"}},[e("li",{staticClass:"hover:bg-gradient-to-r from-pink-400 rounded-md",class:{"bg-gradient-to-r text-black":"/categories"===t.$route.path}},[e("i",{staticClass:"fa-solid fa-chart-pie"}),t._v(" "),t.hideAside?t._e():e("span",[t._v(t._s(t.$t("categories.title")))])])]),e("router-link",{attrs:{to:"/sales"}},[e("li",{staticClass:"hover:bg-gradient-to-r from-pink-400 rounded-md",class:{"bg-gradient-to-r text-black":"/sales"===t.$route.path}},[e("i",{staticClass:"fa-solid fa-chart-simple"}),t._v(" "),t.hideAside?t._e():e("span",[t._v(t._s(t.$t("sales.title")))])])])],1),e("div",{class:["main-aside-bottom",{hide:t.hideAside}]},[e("ul",{staticClass:"main-aside"},[e("div",{class:["user",{hide:t.hideAside}]},[e("div",{staticClass:"user-img-box"},[e("span",[t._v(t._s(t.setLetter()))])]),t.hideAside?t._e():e("h1",{staticClass:"user-title"},[t._v(t._s(t.truncateText(t.USER.name)))])]),e("div",{class:["line",{hide:t.hideAside}]},[e("div",{staticClass:"line-box"})]),e("router-link",{attrs:{to:"/"}},[e("li",{staticClass:"log-out"},[e("i",{staticClass:"fa-solid fa-right-to-bracket"}),t._v(" "),t.hideAside?t._e():e("span",[t._v(t._s(t.$t("home.logOut")))])])])],1)])])],1)])},g=[],_=s(603);let b=class extends _.lD{USER=JSON.parse(sessionStorage.getItem("user"))||{};setLetter(){let t=this.USER.name.slice(0,1).toUpperCase();return t}};b=(0,m.Cg)([_.uA],b);var C=b;let x=class extends((0,_.Xe)(C)){hideAside=!1;toggleHideAside(){this.hideAside=!this.hideAside,this.$emit("hide-aside",this.hideAside)}truncateText(t){const e=12;return t.length>e?t.substring(0,e)+"...":t}};x=(0,m.Cg)([_.uA],x);var y=x,A=y,E=(0,o.A)(A,v,g,!1,null,"5ea6c1d2",null),N=E.exports,P=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"navbar-box"},[e("div",{staticClass:"navbar-header"},[e("router-link",{attrs:{to:"/home"}},[e("img",{attrs:{src:s(575)}})]),e("span",[t._v("Pro")])],1),t.openNavbar?t._e():e("i",{staticClass:"fa-solid fa-bars",on:{click:function(e){t.openNavbar=!t.openNavbar}}}),t.openNavbar?e("i",{staticClass:"fa-solid fa-xmark",on:{click:function(e){t.openNavbar=!t.openNavbar}}}):t._e()]),t.openNavbar?e("ul",{staticClass:"navbar-bottom pt-4"},[e("router-link",{attrs:{to:"/home"}},[e("li",{staticClass:"pb-1 from-pink-400 rounded",class:{"bg-gradient-to-r text-black text-2xl pl-2":"/home"===t.$route.path}},[t._v(" "+t._s(t.$t("home.title"))+" ")])]),e("router-link",{attrs:{to:"/products"}},[e("li",{staticClass:"pb-1 from-pink-400 rounded",class:{"bg-gradient-to-r text-black text-2xl pl-2":"/products"===t.$route.path||"/products/info"===t.$route.path}},[t._v(" "+t._s(t.$t("products.title"))+" ")])]),e("router-link",{attrs:{to:"/categories"}},[e("li",{staticClass:"pb-1 from-pink-400 rounded",class:{"bg-gradient-to-r text-black text-2xl pl-2":"/categories"===t.$route.path}},[t._v(" "+t._s(t.$t("categories.title"))+" ")])]),e("router-link",{attrs:{to:"/sales"}},[e("li",{staticClass:"pb-1 from-pink-400 rounded",class:{"bg-gradient-to-r text-black text-2xl pl-2":"/sales"===t.$route.path}},[t._v(" "+t._s(t.$t("sales.title"))+" ")])]),e("div",{staticClass:"aside-top-bottom"},[e("div",{staticClass:"user"},[e("div",{staticClass:"user-img-box"},[e("span",[t._v(t._s(t.setLetter()))])]),e("h1",{staticClass:"user-title"},[t._v(t._s(t.truncateText(t.USER.name)))])]),e("div",{staticClass:"line"}),e("router-link",{attrs:{to:"/"}},[e("li",{staticClass:"log-out"},[t._v(" "+t._s(t.$t("home.logOut")))])])],1)],1):t._e()])},w=[];let I=class extends((0,_.Xe)(C)){openNavbar=!1;truncateText(t){const e=20;return t.length>e?t.substring(0,e)+"...":t}};I=(0,m.Cg)([_.uA],I);var k=I,D=k,$=(0,o.A)(D,P,w,!1,null,"4b09be05",null),L=$.exports;let T=class extends _.lD{hideAside=!1;toggleHideAside(t){this.hideAside=t}};T=(0,m.Cg)([(0,_.uA)({components:{AsideLeftComponent:N,AsideTopComponent:L}})],T);var S=T,V=S,O=(0,o.A)(V,f,h,!1,null,"0f3d56e3",null),R=O.exports;let U=class extends _.lD{};U=(0,m.Cg)([(0,_.uA)({components:{HomeComponent:R}})],U);var B=U,j=B,F=(0,o.A)(j,c,p,!1,null,null,null),q=F.exports,H=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h1",{staticClass:"text-4xl font-medium text-black mb-10"},[t._v(t._s(t.$t("home.title")))]),e("ChartComponent",{attrs:{salesArr:t.salesArr}}),e("div",{staticClass:"search-content flex justify-between mt-10 mb-7 items-center"},[e("h3",{staticClass:"text-2xl font-medium text-black"},[t._v(t._s(t.$t("home.topSellers")))]),e("div",{staticClass:"search-box"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchBySales,expression:"searchBySales",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Поиск по продажам"},domProps:{value:t.searchBySales},on:{input:function(e){e.target.composing||(t.searchBySales=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("i",{staticClass:"fa-solid fa-magnifying-glass left-icon"}),t.searchBySales.length?e("i",{staticClass:"fa-solid fa-xmark right-icon",on:{click:function(e){t.searchBySales=""}}}):t._e()])]),e("TableComponent",{attrs:{salesArr:t.filterSalesArr}})],1)},X=[];let J=class extends _.lD{salesArr=[{id:3245,name:"Виталий Логинов",date:"17 июл. 2024 г.",amount:"$212",status:"NO_DELIVERED"},{id:3143,name:"Ольга Владимирова",date:"20 авг. 2024 г.",amount:"$125",status:"DELIVERED"},{id:2461,name:"Юлия Князева",date:"01 авг. 2024 г.",amount:"$440",status:"DELIVERED"},{id:7321,name:"Фёдор Тимофеев",date:"12 авг. 2024 г.",amount:"$115",status:"NO_DELIVERED"},{id:5432,name:"Юлия Николаева",date:"31 июл. 2024 г.",amount:"$510",status:"NO_DELIVERED"},{id:3532,name:"Ярослав Жуков",date:"28 июл. 2024 г.",amount:"$212",status:"DELIVERED"},{id:3928,name:"Елена Молчанова",date:"20 авг. 2024 г.",amount:"$175",status:"NO_DELIVERED"},{id:3895,name:"Игнатий Осипов",date:"18 авг. 2024 г.",amount:"$162",status:"DELIVERED"},{id:3930,name:"Тамара Ларионова",date:"18 авг. 2024 г.",amount:"$339",status:"DELIVERED"},{id:3855,name:"Валентина Овчинникова",date:"16 авг. 2024 г.",amount:"$22",status:"DELIVERED"},{id:3856,name:"Виталий Андреев",date:"16 авг. 2024 г.",amount:"$484",status:"NO_DELIVERED"},{id:3853,name:"Аркадий Кузьмин",date:"16 авг. 2024 г.",amount:"$894",status:"DELIVERED"},{id:3852,name:"Дарья Третьякова",date:"16 авг. 2024 г.",amount:"$150",status:"DELIVERED"},{id:3851,name:"Борис Копылов",date:"16 авг. 2024 г.",amount:"$380",status:"DELIVERED"},{id:3850,name:"Ирина Бурова",date:"16 авг. 2024 г.",amount:"$143",status:"NO_DELIVERED"},{id:3750,name:"Раиса Кононова",date:"15 авг. 2024 г.",amount:"$490",status:"NO_DELIVERED"},{id:3749,name:"Матвей Пестов",date:"15 авг. 2024 г.",amount:"$325",status:"DELIVERED"},{id:3748,name:"Евгений Афанасьев",date:"15 авг. 2024 г.",amount:"$50",status:"DELIVERED"},{id:3747,name:"Раиса Куликова",date:"15 авг. 2024 г.",amount:"$258",status:"DELIVERED"},{id:3732,name:"Антонина Чернова",date:"15 авг. 2024 г.",amount:"$170",status:"NO_DELIVERED"},{id:3808,name:"Владислав Петухов",date:"14 авг. 2024 г.",amount:"$159",status:"DELIVERED"},{id:3807,name:"Валерия Пономарева",date:"14 авг. 2024 г.",amount:"$374",status:"DELIVERED"},{id:3812,name:"Тамара Семенова",date:"14 авг. 2024 г.",amount:"$80",status:"DELIVERED"},{id:3804,name:"Василий Морозов",date:"14 авг. 2024 г.",amount:"$489",status:"DELIVERED"},{id:3765,name:"Клавдия Селиверстова",date:"12 авг. 2024 г.",amount:"$665",status:"DELIVERED"},{id:3674,name:"Ульяна Дьячкова",date:"11 авг. 2024 г.",amount:"$65",status:"DELIVERED"},{id:3632,name:"Никита Анисимов",date:"10 авг. 2024 г.",amount:"$300",status:"DELIVERED"}]};J=(0,m.Cg)([_.uA],J);var G=J;let K=class extends((0,_.Xe)(G)){searchBySales="";filterArr=[];get filterSalesArr(){return"/home"===this.$route.path?(this.filterArr=this.salesArr.filter((t=>"DELIVERED"===t.status&&+t.amount.slice(1,4)>300)),this.filterArr.filter((t=>t.name.toLowerCase().includes(this.searchBySales)||t.id.toString().includes(this.searchBySales)))):this.salesArr.filter((t=>t.name.toLowerCase().includes(this.searchBySales)||t.id.toString().includes(this.searchBySales)))}};K=(0,m.Cg)([_.uA],K);var M=K,W=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"home-page"},t._l(t.chartHeader,(function(s,a){return e("div",{class:"home-chart order"+a},[e("div",{staticClass:"chart__title"},[e("span",[t._v(t._s(s.title))]),s.link?e("router-link",{attrs:{to:s.link}},[t._v("Подробнее")]):t._e()],1),e("div",{staticClass:"chart__container"},[e("div",{staticClass:"chart__header"},[t._v(" "+t._s(0===a?t.salesArr.length:1===a?t.salesArrItemsSold:2===a?t.salesArr.filter((t=>"DELIVERED"===t.status)).length:"")+" ")]),e("div",{staticClass:"chart__chart"},t._l(2!==a?t.salesArr:t.salesArr.filter((t=>"DELIVERED"===t.status)),(function(s){return e("div",{class:"chart__box"+a,style:{height:+s.amount.slice(1,4)/10+"px"}},[e("span",{staticClass:"hover-text"},1!==a?[t._v(" "+t._s(s.date)+" ")]:[e("b",[t._v(t._s(s.amount))]),t._v(" "),e("br"),t._v(" "+t._s(s.date)+" ")])])})),0)])])})),0)])},Q=[];let z=class extends _.lD{salesArr;chartHeader=[{title:"Заказы",link:"/sales"},{title:"Продажи"},{title:"Обслуживание клиентов"}];get salesArrItemsSold(){let t=0;return t=this.salesArr.reduce(((t,e)=>t+ +e.amount.slice(1)),0),`$${this.format(t)}`}format(t){let e=Number(t).toLocaleString("ru").replace(",","."),[s,a]=e.split(".");return a=a||"",s+a}};(0,m.Cg)([(0,_.kv)({type:Array,default:()=>[]})],z.prototype,"salesArr",void 0),z=(0,m.Cg)([_.uA],z);var Y=z,Z=Y,tt=(0,o.A)(Z,W,Q,!1,null,"cad075b0",null),et=tt.exports,st=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"table-box"},[t.salesArr.length?e("table",{staticClass:"table table-hover table-striped sales-table rounded bg-[#fff]"},[t._m(0),e("tbody",t._l(t.salesArr,(function(s){return e("tr",{key:s.id},[e("td",[t._v(t._s(s.id))]),e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.date))]),e("td",[t._v(t._s(s.amount))]),e("td",[t._v(t._s(t.getUserStatus(s.status)))])])})),0)]):e("div",{staticClass:"w-full h-[50px] bg-white flex items-center justify-center"},[e("i",{staticClass:"fa-solid fa-circle-exclamation text-lg mr-3 text-[#e5a233]"}),e("span",{staticClass:"text-base font-medium text-black"},[t._v("По запросу ничего не найдено...")])])])},at=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th",[t._v("ID")]),e("th",[t._v("Клиент")]),e("th",[t._v("Дата")]),e("th",[t._v("Стоимость")]),e("th",[t._v("Статус")])])])}];let rt=class extends _.lD{salesArr;filteredTable;getUserStatus(t){switch(t){case"DELIVERED":return"Доставлено";case"NO_DELIVERED":return"В пути"}}};(0,m.Cg)([(0,_.kv)({type:Array,default:()=>[]})],rt.prototype,"salesArr",void 0),(0,m.Cg)([(0,_.kv)({type:Boolean,default:!1})],rt.prototype,"filteredTable",void 0),rt=(0,m.Cg)([_.uA],rt);var it=rt,ot=it,nt=(0,o.A)(ot,st,at,!1,null,"26a13720",null),lt=nt.exports;let ut=class extends((0,_.Xe)(M)){};ut=(0,m.Cg)([(0,_.uA)({components:{ChartComponent:et,TableComponent:lt}})],ut);var dt=ut,ct=dt,pt=(0,o.A)(ct,H,X,!1,null,"06e3020e",null),mt=pt.exports,ft=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h1",{staticClass:"text-4xl font-medium text-black mb-10"},[t._v(t._s(t.$t("products.title")))]),e("div",{staticClass:"table-box"},[t.productsArr.length?e("table",{staticClass:"table table-hover products-table rounded bg-[#fff]"},[t._m(0),e("tbody",t._l(t.productsArr,(function(s){return e("tr",{key:s.id,on:{click:function(e){return t.getProductsInfo(s)}}},[e("td",[e("img",{staticClass:"products-img",attrs:{src:s.img}})]),e("td",[t._v(t._s(s.title))]),e("td",[t._v(t._s(s.category))]),e("td",[t._v(t._s(s.quantity))]),e("td",[t._v(t._s(t.format(s.amount/100)))]),e("td",[t._v(t._s(t.getStatus(s.status)))])])})),0)]):t._e()])])},ht=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th",[t._v("Фото")]),e("th",[t._v("Название")]),e("th",[t._v("Категория")]),e("th",[t._v("Количество")]),e("th",[t._v("Цена")]),e("th",[t._v("Статус")])])])}];let vt=class extends _.lD{productsArr=[{id:1,title:'10.2" Планшет Apple iPad 2019 32 ГБ серый',img:"https://c.dns-shop.ru/thumb/st4/fit/0/0/d5ce3be06de4a02738512510e14e6ce5/b0927268c02dbc5699b3991ae6bda9cc70fda29e02ebefff0f8413213badc08a.jpg",category:"Планшеты, электронные книги",quantity:65,amount:4e4,status:"ACTIVE"},{id:2,title:'12.9" Планшет Apple iPad Pro 2020 Wi‑Fi 512 ГБ серебристый',img:"https://c.dns-shop.ru/thumb/st4/fit/0/0/a51d2bdd094ad05ceb4cd1b475be0792/9033d846fc642a7ecdddf3996db85e631b9e25f06e97b471cbec9664d90a073f.jpg",category:"Планшеты, электронные книги",quantity:41,amount:12e4,status:"ACTIVE"},{id:3,title:'15.6" Ноутбук HP 15-bs168ur черный',img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/dd89d0ede898333704d5d100ea7eb316/67e3de2043bdb00877d2f7a00c58a4732ee60c7af1fb3377638430fa55d442ea.jpg",category:"Компьютеры, ноутбуки и ПО",quantity:22,amount:52e3,status:"ACTIVE"},{id:4,title:'21.5" Моноблок HP ProOne 600 G5 [7QN20EA]',img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/07ee4fd913862b346aeaa1b0fe8a4ed1/4bdcc2dc17e53ab8ff0dec7a08557cda89c92c43fe81934c82dac0c84570c6b0.jpg",category:"Компьютеры, ноутбуки и ПО",quantity:78,amount:87e3,status:"ACTIVE"},{id:5,title:'6.1" Смартфон Apple iPhone 11 256 ГБ фиолетовый',img:"https://c.dns-shop.ru/thumb/st4/fit/0/0/e9d16f60116e99489837f2b8f4d388ba/e896bc09568aa1458edfa640919f60c0e2d4590925ceb07045664135ae03d069.jpg",category:"Смартфоны и гаджеты",quantity:43,amount:11e4,status:"ACTIVE"},{id:6,title:'65" (165 см) Телевизор LED LG 65SM9800PLA черный',img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/44cc1bd15e5166bd6765758d20df1174/350e95792b1ef6486916b896585367b897681966865ba7343e698a53e80f33a3.jpg",category:"Телевизоры и аксессуары",quantity:71,amount:228e3,status:"ACTIVE"},{id:7,title:"Bluetooth стереогарнитура Panasonic RP-BTD5 черный",img:"https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/ad6b43138214f3f9583d5a0aac345732/7c502472bb8911e065e9ae0f219ae75b61284a188b4b8f7035f45b5da2491a8f.jpg",category:"Аудиотехника",quantity:94,amount:11e3,status:"NOT_ACTIVE"},{id:8,title:"BGPS навигатор Garmin Drive 52 RUS LMT",img:"https://c.dns-shop.ru/thumb/st4/fit/0/0/a144648d5d8fd9bfd6b9c71d89594772/1d77c32e434f0dbd355c1c4016a3c96b862bc769c38ab4e53201939cc0a9efc8.jpg",category:"Автоэлектроника и противоугонные системы",quantity:8,amount:16e3,status:"ACTIVE"},{id:9,title:"Wi-Fi роутер TP-LINK Archer A7",img:"https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/4e05af0b59ef30c01587227997c587ca/ab88831d3a3c8c0920f6a4fff606e2c3ee50345107ca501e8423bedfef5cbe84.jpg",category:"Маршрутизаторы и прочее беспроводное оборудование",quantity:40,amount:8e3,status:"ACTIVE"},{id:10,title:"Автопроигрыватель JVC KD-R577",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/a21deb84ed343a85d0a531a06c4ace5c/9477636f95c0843d4e755952e5ffd85d19373d144ae854876e0059e212b98d8b.jpg",category:"Автозвук",quantity:55,amount:6e3,status:"NOT_ACTIVE"}]};vt=(0,m.Cg)([_.uA],vt);var gt=vt;let _t=class extends((0,_.Xe)(gt)){getStatus(t){switch(t){case"ACTIVE":return"Активный";case"NOT_ACTIVE":return"Не активный"}}format(t){let e=Number(t).toLocaleString("ru").replace(",","."),[s,a]=e.split(".");return a=a||"",`$${s+a}`}getProductsInfo(t){sessionStorage.setItem("productsInfo",JSON.stringify(t)),this.$router.push({name:"products-info",params:{path:"/products/info"}})}};_t=(0,m.Cg)([_.uA],_t);var bt=_t,Ct=bt,xt=(0,o.A)(Ct,ft,ht,!1,null,"24561aaa",null),yt=xt.exports,At=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"products-info"},[e("div",{staticClass:"icon-box",on:{click:t.goBackProducts}},[e("i",{staticClass:"fa-solid fa-arrow-left"})]),e("span",{staticClass:"text-4xl font-medium",on:{click:t.goBackProducts}},[t._v(t._s(t.$t("products.title")))]),e("div",{staticClass:"divide-box"}),e("h2",{staticClass:"text-4xl font-medium info"},[t._v(t._s("Редактировать"))])]),e("div",{staticClass:"products-info-box"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submitProduct.apply(null,arguments)}}},[e("h1",{staticClass:"products-title"},[t._v("Название товара")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.productsInfo.title,expression:"productsInfo.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.productsInfo.title},on:{input:function(e){e.target.composing||t.$set(t.productsInfo,"title",e.target.value)}}}),e("h1",{staticClass:"products-text"},[t._v("Описание")]),t._m(0),t.hideProductImg?t._e():e("h1",{staticClass:"products-text"},[t._v("Фото")]),t.hideProductImg?t._e():e("div",{staticClass:"products-edit-img"},[e("div",{staticClass:"img-box"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.productsInfo.img}})]),e("span",[t._v(t._s(t.productsInfo.title))])]),e("i",{staticClass:"fa-solid fa-trash",on:{click:t.deleteProductImg}})]),e("div",{staticClass:"other-blocks"},[e("h1",[t._v("Цена ($)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.productsInfo.amount/100,expression:"productsInfo.amount / 100"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.productsInfo.amount/100},on:{input:function(e){e.target.composing||t.$set(t.productsInfo,"amount / 100",e.target.value)}}}),e("h1",[t._v("Количество")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.productsInfo.quantity,expression:"productsInfo.quantity"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.productsInfo.quantity},on:{input:function(e){e.target.composing||t.$set(t.productsInfo,"quantity",e.target.value)}}})]),e("div",{staticClass:"select-box"},[e("select",{staticClass:"form-control"},[e("option",[t._v(t._s("ACTIVE"===t.productsInfo.status?"Активный":"Не активный"))]),e("option",[t._v(t._s("NOT_ACTIVE"===t.productsInfo.status?"Активный":"Не активный"))])])]),e("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v("Сохранить товар")])])])])},Et=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"description"},[e("textarea",{staticClass:"form-control"})])}];let Nt=class extends _.lD{productsInfo=JSON.parse(sessionStorage.getItem("productsInfo"))||{};hideProductImg=!1;goBackProducts(){this.$router.push({name:"products",params:{path:"/products"}})}submitProduct(){this.$router.push({name:"products",params:{path:"/products"}})}deleteProductImg(){this.hideProductImg=!0}};Nt=(0,m.Cg)([_.uA],Nt);var Pt=Nt,wt=Pt,It=(0,o.A)(wt,At,Et,!1,null,"98c44c24",null),kt=It.exports,Dt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h1",{staticClass:"text-4xl font-medium text-black mb-10"},[t._v(t._s(t.$t("categories.title")))]),t._l(t.categories,(function(s){return e("CategoryComponent",{key:s.id,attrs:{item:s},on:{click:t.categoryOpen}})}))],2)},$t=[];let Lt=class extends _.lD{categories=[{id:1,title:"Бытовая техника",active:!1,info:[{text:"Товары для кухни",products:13},{text:"Товары для дома",products:11},{text:"Красота и здоровье",products:9}]},{id:2,title:"Смартфоны",active:!1,info:[{text:"Смартфоны и гаджеты",products:19},{text:"Фототехника",products:24},{text:"Планшеты, электронные книги",products:22}]},{id:3,title:"Компьютеры",active:!1,info:[{text:"Компьютеры, ноутбуки и ПО",products:12},{text:"Комплектующие для ПК",products:21},{text:"Периферия и аксессуары",products:16}]},{id:4,title:"Аксессуары",active:!1,info:[{text:"Для мобильных устройств",products:2},{text:"Для компьютеров и ноутбуков",products:4},{text:"Для бытовой техники",products:1}]},{id:5,title:"Автотовары",active:!1,info:[{text:"Автоэлектроника и противоугонные системы",products:10},{text:"Автозвук",products:8},{text:"Наружные и внутрисалонные аксессуары",products:6}]},{id:6,title:"Инструменты",active:!1,info:[{text:"Электроинструменты и техника для сада",products:22},{text:"Строительство, измерение и уборка",products:19},{text:"Ручной инструмент и оснастка",products:15}]}]};Lt=(0,m.Cg)([_.uA],Lt);var Tt=Lt,St=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{class:["category",{category_open:t.item.active}]},[e("header",{staticClass:"category__header",on:{click:function(e){return t.categoryOpenEmit(t.item.id)}}},[t._v(" "+t._s(t.item.title)+" "),e("div",[t._v(" "+t._s(`Продано ${t.categoriesItemsSold(t.item.id)} товаров`)+" ")])]),e("div",{staticClass:"category__body"},[e("div",{staticClass:"subcategory-list"},t._l(t.item.info,(function(s,a){return e("ul",{key:a,staticClass:"sortable-list"},[e("li",{staticClass:"categories__sortable-list-item sortable-list__item"},[e("strong",[t._v(t._s(s.text))]),e("span",[e("b",[t._v(t._s(s.products))]),t._v(" products")])])])})),0)])])])},Vt=[];let Ot=class extends _.lD{item;categoryOpenEmit(t){this.$emit("click",t)}categoriesItemsSold(t){let e=0;return this.item.id===t&&(e=this.item.info.reduce(((t,e)=>t+e.products),0)),e}};(0,m.Cg)([(0,_.kv)({type:Object,default:()=>({})})],Ot.prototype,"item",void 0),Ot=(0,m.Cg)([_.uA],Ot);var Rt=Ot,Ut=Rt,Bt=(0,o.A)(Ut,St,Vt,!1,null,"7248d762",null),jt=Bt.exports;let Ft=class extends((0,_.Xe)(Tt)){categoryOpen(t){this.categories.find((e=>{e.id===t&&(e.active=!e.active)}))}};Ft=(0,m.Cg)([(0,_.uA)({components:{CategoryComponent:jt}})],Ft);var qt=Ft,Ht=qt,Xt=(0,o.A)(Ht,Dt,$t,!1,null,"5f903e36",null),Jt=Xt.exports,Gt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"search-content flex justify-between mb-10 items-center"},[e("h1",{staticClass:"text-4xl font-medium text-black"},[t._v(t._s(t.$t("sales.title")))]),e("div",{staticClass:"search-box"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchBySales,expression:"searchBySales",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Поиск по продажам"},domProps:{value:t.searchBySales},on:{input:function(e){e.target.composing||(t.searchBySales=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("i",{staticClass:"fa-solid fa-magnifying-glass left-icon"}),t.searchBySales.length?e("i",{staticClass:"fa-solid fa-xmark right-icon",on:{click:function(e){t.searchBySales=""}}}):t._e()])]),e("TableComponent",{attrs:{salesArr:t.filterSalesArr}})],1)},Kt=[];let Mt=class extends((0,_.Xe)(M)){};Mt=(0,m.Cg)([(0,_.uA)({components:{TableComponent:lt}})],Mt);var Wt=Mt,Qt=Wt,zt=(0,o.A)(Qt,Gt,Kt,!1,null,"ad2a01f2",null),Yt=zt.exports,Zt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"login-page bg-gradient-to-t from-purple-500 to-pink-500"},[e("div",{staticClass:"login-content"},[e("img",{staticClass:"mb-3",attrs:{src:s(575)}}),e("h3",{staticClass:"mb-4 title"},[t._v("Войти Kt-Pro")]),e("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[e("span",[t._v("Логин")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userName,expression:"userName",modifiers:{trim:!0}}],class:["form-control",{"mb-4":!t.errorName},{"error-input":t.errorName}],attrs:{type:"text"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.errorName?e("p",{staticClass:"error-text"},[t._v("Введите Логин")]):t._e(),e("span",[t._v("Пароль")]),e("div",{staticClass:"password-eye"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userPassword,expression:"userPassword",modifiers:{trim:!0}}],class:["form-control",{"mb-4":!t.errorPassword},{"error-input":t.errorPassword}],attrs:{type:t.inputType},domProps:{value:t.userPassword},on:{input:function(e){e.target.composing||(t.userPassword=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),"text"===t.inputType?e("i",{staticClass:"fa-solid fa-eye",on:{click:t.getInputType}}):t._e(),"password"===t.inputType?e("i",{staticClass:"fa-solid fa-eye-slash",on:{click:t.getInputType}}):t._e()]),t.errorPassword?e("p",{staticClass:"error-text"},[t._v("Введите Пароль")]):t._e(),e("div",{staticClass:"form-bottom"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v("Войти")]),e("span",[t._v("Нет аккаунт? "),e("router-link",{attrs:{to:"/register"}},[t._v("Зарегистрироваться")])],1)])])])])])},te=[];let ee=class extends _.lD{userName="";userPassword="";errorName=!1;errorPassword=!1;inputType="password";submitHandler(){let t={name:this.userName,password:this.userPassword};t.name?this.errorName=!1:this.errorName=!0,t.password?this.errorPassword=!1:this.errorPassword=!0,t.name&&t.password&&(this.$router.push({name:"home",params:{path:"/home"}}),sessionStorage.setItem("user",JSON.stringify(t)),console.log(t),this.userName=this.userPassword="")}getInputType(){"password"===this.inputType?this.inputType="text":this.inputType="password"}getUserName(t){t&&(this.errorName=!1)}getUserPassword(t){t&&(this.errorPassword=!1)}};(0,m.Cg)([(0,_.ox)("userName")],ee.prototype,"getUserName",null),(0,m.Cg)([(0,_.ox)("userPassword")],ee.prototype,"getUserPassword",null),ee=(0,m.Cg)([_.uA],ee);var se=ee,ae=se,re=(0,o.A)(ae,Zt,te,!1,null,"36fe14d2",null),ie=re.exports,oe=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"login-page bg-gradient-to-t from-purple-500 to-pink-500"},[e("div",{staticClass:"login-content"},[e("img",{staticClass:"mb-3",attrs:{src:s(575)}}),e("h3",{staticClass:"mb-4 title"},[t._v("Регистрация Kt-Pro")]),e("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[e("span",[t._v("Имя")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userName,expression:"userName",modifiers:{trim:!0}}],class:["form-control",{"mb-4":!t.errorName},{"error-input":t.errorName}],attrs:{type:"text"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.errorName?e("p",{staticClass:"error-text"},[t._v("Введите Имя")]):t._e(),e("span",[t._v("Фамилия")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userFirstName,expression:"userFirstName",modifiers:{trim:!0}}],class:["form-control",{"mb-4":!t.errorFirstName},{"error-input":t.errorFirstName}],attrs:{type:"text"},domProps:{value:t.userFirstName},on:{input:function(e){e.target.composing||(t.userFirstName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.errorFirstName?e("p",{staticClass:"error-text"},[t._v("Введите Фамилия")]):t._e(),e("span",[t._v("Логин")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userLogin,expression:"userLogin",modifiers:{trim:!0}}],class:["form-control",{"mb-4":!t.errorLogin},{"error-input":t.errorLogin}],attrs:{type:"text"},domProps:{value:t.userLogin},on:{input:function(e){e.target.composing||(t.userLogin=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.errorLogin?e("p",{staticClass:"error-text"},[t._v("Введите Логин")]):t._e(),e("span",[t._v("Пароль")]),e("div",{staticClass:"password-eye"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.userPassword,expression:"userPassword",modifiers:{trim:!0}}],class:["form-control",{"mb-4":!t.errorPassword},{"error-input":t.errorPassword}],attrs:{type:t.inputType},domProps:{value:t.userPassword},on:{input:function(e){e.target.composing||(t.userPassword=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),"text"===t.inputType?e("i",{staticClass:"fa-solid fa-eye",on:{click:t.getInputType}}):t._e(),"password"===t.inputType?e("i",{staticClass:"fa-solid fa-eye-slash",on:{click:t.getInputType}}):t._e()]),t.errorPassword?e("p",{staticClass:"error-text"},[t._v("Введите Пароль")]):t._e(),e("div",{staticClass:"form-bottom"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v("Регистрация")]),e("span",[t._v("Есть аккаунт? "),e("router-link",{attrs:{to:"/"}},[t._v("Войти")])],1)])])])])])},ne=[];let le=class extends _.lD{userName="";userFirstName="";userPassword="";userLogin="";errorName=!1;errorFirstName=!1;errorLogin=!1;errorPassword=!1;inputType="password";submitHandler(){let t={name:this.userName,firstName:this.userFirstName,login:this.userLogin,password:this.userPassword};t.name?this.errorName=!1:this.errorName=!0,t.firstName?this.errorFirstName=!1:this.errorFirstName=!0,t.login?this.errorLogin=!1:this.errorLogin=!0,t.password?this.errorPassword=!1:this.errorPassword=!0,t.name&&t.password&&t.firstName&&t.login&&(this.$router.push({name:"home",params:{path:"/home"}}),sessionStorage.setItem("user",JSON.stringify(t)),console.log(t),this.userName=this.userPassword=this.userFirstName=this.userLogin="")}getInputType(){"password"===this.inputType?this.inputType="text":this.inputType="password"}getUserName(t){t&&(this.errorName=!1)}getUserPassword(t){t&&(this.errorPassword=!1)}getUserFirstName(t){t&&(this.errorFirstName=!1)}getUserLogin(t){t&&(this.errorLogin=!1)}};(0,m.Cg)([(0,_.ox)("userName")],le.prototype,"getUserName",null),(0,m.Cg)([(0,_.ox)("userPassword")],le.prototype,"getUserPassword",null),(0,m.Cg)([(0,_.ox)("userFirstName")],le.prototype,"getUserFirstName",null),(0,m.Cg)([(0,_.ox)("userLogin")],le.prototype,"getUserLogin",null),le=(0,m.Cg)([_.uA],le);var ue=le,de=ue,ce=(0,o.A)(de,oe,ne,!1,null,"b0e3aeb6",null),pe=ce.exports;a.Ay.use(d.Ay);const me=[{path:"/home",name:"home",component:q,children:[{path:"/home",name:"home",component:mt},{path:"/products",name:"products",component:yt},{path:"/products/info",name:"products-info",component:kt},{path:"/categories",name:"categories",component:Jt},{path:"/sales",name:"sales",component:Yt}]},{path:"/",name:"login",component:ie},{path:"/register",name:"register",component:pe}],fe=new d.Ay({mode:"history",base:"/new-kt-pro/",routes:me});var he=fe,ve=s(353);a.Ay.use(ve.Ay);var ge=new ve.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),_e=s(765);a.Ay.use(_e.A);var be=new _e.A({locale:"ru",messages:{ru:{sales:{title:"Продажи"},categories:{title:"Категории"},products:{title:"Товары"},home:{title:"Главная",logOut:"Выйти",topSellers:"Лидеры продаж"}},en:{sales:{title:"Sales"},categories:{title:"Categories"},products:{title:"Goods"},home:{title:"Home",logOut:"Log out",topSellers:"Top Sellers"}}}});a.Ay.config.productionTip=!1,new a.Ay({router:he,store:ge,i18n:be,render:t=>t(u)}).$mount("#app")},575:function(t,e,s){t.exports=s.p+"img/KT_Logo.e8cae347.png"}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,r,i){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],r=t[d][1],i=t[d][2];for(var n=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(n=!1,i<o&&(o=i));if(n){t.splice(d--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[a,r,i]}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/new-kt-pro/"}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,o=a[0],n=a[1],l=a[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in n)s.o(n,r)&&(s.m[r]=n[r]);if(l)var d=l(s)}for(e&&e(a);u<o.length;u++)i=o[u],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(d)},a=self["webpackChunkkt_pro"]=self["webpackChunkkt_pro"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(661)}));a=s.O(a)})();
//# sourceMappingURL=app.79018358.js.map