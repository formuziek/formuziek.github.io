(function(){var e={4531:function(e,t,l){"use strict";var a=l(144),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app"},[e.error?t("div",{staticClass:"error-panel"},[e._v(e._s(e.error))]):e._e(),e.loading?t("div",{staticClass:"loading-indicator"},[e._m(0)]):e._e(),e.initialLoadComplete?t("div",[t("Filters",{on:{loadBasemap:e.loadBasemap}}),t("Stage"),t("div",{attrs:{id:"map"}},[t("span",{domProps:{innerHTML:e._s(e.svg)}})])],1):e._e(),e._m(1)])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"sk-folding-cube"},[t("div",{staticClass:"sk-cube1 sk-cube"}),t("div",{staticClass:"sk-cube2 sk-cube"}),t("div",{staticClass:"sk-cube4 sk-cube"}),t("div",{staticClass:"sk-cube3 sk-cube"})])},function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"version"}},[e._v(" Datu avots - "),t("a",{attrs:{href:"https://www.csb.gov.lv/"}},[e._v("Centrālā statistikas pārvalde")]),e._v(" Mapio v0.1.3 ")])}],s=l(9669),r=l.n(s),u=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"data-select"}},[t("div",{staticClass:"select-menu"},[t("multiselect",{attrs:{options:e.versions,"allow-empty":!1,"show-labels":!1,placeholder:e.$t("lblSelectMode"),label:e.getLabelSource()},model:{value:e.version,callback:function(t){e.version=t},expression:"version"}})],1),t("div",{staticClass:"select-menu"},[t("multiselect",{attrs:{options:e.dataTypes,"allow-empty":!1,"show-labels":!1,placeholder:e.$t("lblSelectDataType"),label:e.getLabelSource()},model:{value:e.filter.dataType,callback:function(t){e.$set(e.filter,"dataType",t)},expression:"filter.dataType"}})],1),t("div",{staticClass:"select-menu"},[t("multiselect",{attrs:{"allow-empty":!1,"show-labels":!1,placeholder:e.$t("lblSelectYear"),options:e.years},model:{value:e.filter.year,callback:function(t){e.$set(e.filter,"year",t)},expression:"filter.year"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.filter.dataType&&e.filter.dataType.IsQuarterly,expression:"filter.dataType && filter.dataType.IsQuarterly"}],staticClass:"select-menu"},[t("multiselect",{attrs:{"allow-empty":!1,"show-labels":!1,placeholder:e.$t("lblSelectQuarter"),options:e.quarters},model:{value:e.filter.quarter,callback:function(t){e.$set(e.filter,"quarter",t)},expression:"filter.quarter"}})],1)])},o=[];const c={BEFORE_2021_ATR:"BEFORE_2021_ATR",AFTER_2021_ATR:"AFTER_2021_ATR"},f={LV0010000:0,LV0050000:1,LV0090000:2,LV0110000:3,LV0130000:4,LV0170000:5,LV0210000:6,LV0250000:7,LV0270000:8,LV0604300:9,LV0320200:10,LV0640600:11,LV0560800:12,LV0661000:13,LV0624200:14,LV0360200:15,LV0424701:16,LV0360800:17,LV0460800:18,LV0804400:19,LV0804900:20,LV0800600:21,LV0384400:22,LV0380200:23,LV0400200:24,LV0964700:25,LV0840601:26,LV0967101:27,LV0805200:28,LV0700800:29,LV0420200:30,LV0684901:31,LV0601000:32,LV0440200:33,LV0460200:34,LV0885100:35,LV0640801:36,LV0905100:37,LV0705500:38,LV0806000:39,LV0641000:40,LV0500200:41,LV0406400:42,LV0740600:43,LV0440801:44,LV0801800:45,LV0321000:46,LV0425700:47,LV0905700:48,LV0540200:49,LV0560200:50,LV0901201:51,LV0681000:52,LV0960200:53,LV0326100:54,LV0600202:55,LV0806900:56,LV0566900:57,LV0620200:58,LV0741001:59,LV0800800:60,LV0741401:61,LV0660200:62,LV0421200:63,LV0761201:64,LV0701400:65,LV0680200:66,LV0700200:67,LV0961000:68,LV0807400:69,LV0807600:70,LV0887600:71,LV0967300:72,LV0327100:73,LV0647900:74,LV0740202:75,LV0801000:76,LV0546701:77,LV0427500:78,LV0641401:79,LV0321400:80,LV0760202:81,LV0641600:82,LV0427300:83,LV0427700:84,LV0780200:85,LV0766300:86,LV0888301:87,LV0808400:88,LV0648500:89,LV0387500:90,LV0407700:91,LV0961600:92,LV0661400:93,LV0568700:94,LV0801200:95,LV0840200:96,LV0801400:97,LV0809200:98,LV0801601:99,LV0328200:100,LV0621200:101,LV0941600:102,LV0809600:103,LV0941800:104,LV0880200:105,LV0468900:106,LV0900200:107,LV0649300:108,LV0940200:109,LV0701800:110,LV0769101:111,LV0429300:112,LV0409500:113,LV0980200:114,LV0561800:115,LV0381600:116,LV0781800:117,LV0681801:118},v={LV0001000:0,LV0002000:1,LV0003000:2,LV0004000:3,LV0005000:4,LV0006000:5,LV0007000:6,LV0020000:7,LV0021000:8,LV0022000:9,LV0023000:10,LV0024000:11,LV0025000:12,LV0026000:13,LV0027000:14,LV0028000:15,LV0029000:16,LV0030000:17,LV0031000:18,LV0032000:19,LV0033000:20,LV0034000:21,LV0035000:22,LV0036000:23,LV0037000:24,LV0038000:25,LV0039000:26,LV0040000:27,LV0041000:28,LV0042000:29,LV0043000:30,LV0044000:31,LV0045000:32,LV0046000:33,LV0047000:34,LV0048000:35,LV0049000:36,LV0051000:37,LV0052000:38,LV0053000:39,LV0054000:40,LV0055000:41,LV0056000:42};let d={buildQuery(e,t,l,a){const n={Query:[],Response:{Format:"json"}};return t.QuerySections.forEach((i=>{const s=[];let r="";switch(i){case"Teritoriālā vienība":case"Administratīvā teritorija":if(e===c.AFTER_2021_ATR)for(var u in v)s.push(u);else if(e===c.BEFORE_2021_ATR)for(var u in f)s.push(u);r="AREA";break;case"Gads":s.push(l),r="TIME";break;case"Gads/Ceturksnis":s.push(`${l}${a}`),r="TIME";break;default:s.push(...t.QueryValues[t.QuerySections.indexOf(i)]),r="INDICATOR";break}const o={Code:r,Selection:{Filter:"item",Values:s}};n.Query.push(o)})),n}};var m=d,L=l(7907),V=l.n(L),h=l(629),p={name:"filters",components:{multiselect:V()},data(){return{allDataTypes:[],versions:[{code:c.AFTER_2021_ATR,TextLat:"Pēc 2021.07 reformas"},{code:c.BEFORE_2021_ATR,TextLat:"Līdz 2021.07 reformai"}],dataTypes:[],years:[],quarters:[],filter:{dataType:null,year:null,quarter:null},version:{}}},watch:{filter:{deep:!0,handler(){this.datasetChanged(this.filter.dataType),this.loadData()}},version:{handler(){let e="";e=this.version.code===c.BEFORE_2021_ATR?"basemap":"basemap-2021",this.dataTypes=this.allDataTypes.filter((e=>e.Version===this.version.code)),this.filter.dataType=null,this.$emit("loadBasemap",e)}}},methods:{...(0,h.OI)(["setData","setError","setLoading"]),...(0,h.Se)(["getBaseUri"]),datasetChanged(e){if(!e)return this.filter.year=null,void(this.filter.quarter=null);this.years=e.Years?e.Years:[],this.quarters=e.Quarters?e.Quarters:[],this.years.includes(this.filter.year)||(this.filter.year=null,this.setData(null)),e.IsQuarterly&&(0===this.years.indexOf(this.filter.year)?this.quarters=e.FirstYearQuarters:this.years.indexOf(this.filter.year)===this.years.length-1&&(this.quarters=e.LastYearQuarters)),this.quarters.includes(this.filter.quarter)||(this.filter.quarter=null,this.setData(null))},loadData:function(){if(!this.isDataSetSelected())return;const e=m.buildQuery(this.version.code,this.filter.dataType,this.filter.year,this.filter.quarter),t=`https://data.stat.gov.lv:443/api/v1/lv/OSP_PUB/${this.filter.dataType.Uri}`;let l=[];r().post(t,e).then((e=>{e.data.data.forEach((e=>{l.push({name:e.key.find((e=>e.startsWith("LV"))),value:isNaN(e.values[0])?0:e.values[0]})})),l=l.sort(((e,t)=>t.value-e.value)),this.setData(l)})).catch((e=>{this.setError(e)}))},isDataSetSelected:function(){return this.filter.dataType&&this.filter.year&&(this.filter.quarter||!this.filter.dataType.IsQuarterly)},getLabelSource:function(){return"lv"===this.language?"TextLat":"TextEng"}},mounted(){const e=`${document.URL}datasettings.json`;r().get(e).then((e=>{this.allDataTypes=e.data.DataSetConfigurations,this.version=this.versions[0]})).catch((e=>{this.setError(e)}))},computed:(0,h.rn)(["language"])},b=p,g=l(1001),x=(0,g.Z)(b,u,o,!1,null,null,null),S=x.exports,y=function(){var e=this,t=e._self._c;return t("div",[t("div",{attrs:{id:"map-options"}},[t("div",{staticClass:"color-select"},[t("multiselect",{attrs:{options:e.colorSets,"allow-empty":!1,"show-labels":!1,placeholder:e.$t("lblSelectColorSchema"),label:e.getLabelSource()},on:{input:function(t){return e.changeColorSet()}},model:{value:e.currentColorSetSelector,callback:function(t){e.currentColorSetSelector=t},expression:"currentColorSetSelector"}})],1)]),t("div",{attrs:{id:"color-options"}},e._l(e.currentColorSet.colors,(function(l){return t("div",{key:l.value,staticClass:"color-entry"},[t("div",{staticClass:"color-tile",style:e.bindStyle("background-color",l.value),on:{click:function(t){return e.toggleColor(l.value,!l.isActive)}}}),t("p",{staticClass:"color-range"},[e._v(e._s(e.getDataRangeText(l)))])])})),0)])},A=[],C=l(5500),T=JSON.parse('[{"colors":[{"value":"#7f0000","isActive":true,"min":null,"max":null},{"value":"#b30000","isActive":false,"min":null,"max":null},{"value":"#d7301f","isActive":false,"min":null,"max":null},{"value":"#ef6548","isActive":false,"min":null,"max":null},{"value":"#fc8d59","isActive":false,"min":null,"max":null},{"value":"#fdbb84","isActive":false,"min":null,"max":null},{"value":"#fdd49e","isActive":false,"min":null,"max":null},{"value":"#fee8c8","isActive":false,"min":null,"max":null},{"value":"#fff7ec","isActive":true,"min":null,"max":null}],"selected":true,"name":"RedYellow","textEng":"Red - yellow","textLat":"Sarkans - dzeltens"},{"colors":[{"value":"#00441b","isActive":true,"min":null,"max":null},{"value":"#006d2c","isActive":false,"min":null,"max":null},{"value":"#238b45","isActive":false,"min":null,"max":null},{"value":"#41ae76","isActive":false,"min":null,"max":null},{"value":"#66c2a4","isActive":false,"min":null,"max":null},{"value":"#99d8c9","isActive":false,"min":null,"max":null},{"value":"#ccece6","isActive":false,"min":null,"max":null},{"value":"#e5f5f9","isActive":false,"min":null,"max":null},{"value":"#f7fcfd","isActive":true,"min":null,"max":null}],"selected":false,"name":"GreenWhite","textEng":"Green - white","textLat":"Zaļš - balts"},{"colors":[{"value":"#000000","isActive":true,"min":null,"max":null},{"value":"#252525","isActive":false,"min":null,"max":null},{"value":"#525252","isActive":false,"min":null,"max":null},{"value":"#737373","isActive":false,"min":null,"max":null},{"value":"#969696","isActive":false,"min":null,"max":null},{"value":"#bdbdbd","isActive":false,"min":null,"max":null},{"value":"#d9d9d9","isActive":false,"min":null,"max":null},{"value":"#f0f0f0","isActive":false,"min":null,"max":null},{"value":"#ffffff","isActive":true,"min":null,"max":null}],"selected":false,"name":"BlackWhite","textEng":"Black - white","textLat":"Melns - balts"},{"colors":[{"value":"#662506","isActive":true,"min":null,"max":null},{"value":"#993404","isActive":false,"min":null,"max":null},{"value":"#cc4c02","isActive":false,"min":null,"max":null},{"value":"#ec7014","isActive":false,"min":null,"max":null},{"value":"#fe9929","isActive":false,"min":null,"max":null},{"value":"#fec44f","isActive":false,"min":null,"max":null},{"value":"#fee391","isActive":false,"min":null,"max":null},{"value":"#fff7bc","isActive":false,"min":null,"max":null},{"value":"#ffffe5","isActive":true,"min":null,"max":null}],"selected":false,"name":"BrownYellow","textEng":"Brown - yellow","textLat":"Brūns - dzeltens"},{"colors":[{"value":"#1a9850","isActive":true,"min":null,"max":null},{"value":"#66bd63","isActive":false,"min":null,"max":null},{"value":"#a6d96a","isActive":false,"min":null,"max":null},{"value":"#d9ef8b","isActive":false,"min":null,"max":null},{"value":"#ffffbf","isActive":false,"min":null,"max":null},{"value":"#fee08b","isActive":false,"min":null,"max":null},{"value":"#fdae61","isActive":false,"min":null,"max":null},{"value":"#f46d43","isActive":false,"min":null,"max":null},{"value":"#d73027","isActive":true,"min":null,"max":null}],"selected":false,"name":"GreenRed","textEng":"Green - red","textLat":"Zaļš - sarkans"}]'),_={name:"stage",components:{multiselect:V()},data(){return{colorSets:[],currentColorSet:null,currentColorSetSelector:null}},watch:{data:function(){this.setMapState()}},methods:{bindStyle:function(e,t){return`${e}: ${t};`},setMapState:function(){if(this.currentColorSet.colors.forEach((e=>{e.min=null,e.max=null})),!this.data)return;const e=this.currentColorSet.colors.filter((e=>e.isActive)),t=e.length,l=this.data.length,a=Math.floor(l/t),n=new Array(t).fill(a);let i=0;while(n.reduce(((e,t)=>e+t),0)<l)n[i]++,i++>=n.length&&(i=0);let s=0;this.data.forEach((t=>{1===n[s]&&(this.currentColorSet.colors.find((t=>t.value===e[s].value)).min=t.value),0===n[s]&&(s++,this.currentColorSet.colors.find((t=>t.value===e[s].value)).max=t.value),n[s]--,this.setCountyColor(t.name,e[s].value)}))},setCountyColor:function(e,t){C.sE(`.${e}`).fill(t)},toggleColor:function(e,t){this.currentColorSet.colors.find((t=>t.value===e)).isActive=t,this.setMapState()},getDataRangeText:function(e){return!e.isActive||null===e.min&&null===e.max?"":null===e.max?`>= ${e.min}`:null===e.min?`${e.max} <=`:`${e.min} ... ${e.max}`},changeColorSet:function(){const e=[...this.currentColorSet.colors];this.currentColorSet=this.colorSets.find((e=>e.name===this.currentColorSetSelector.name)),this.currentColorSet.colors.forEach(((t,l)=>{const a=e[l];t.min=a.min,t.max=a.max,t.isActive=a.isActive})),this.setMapState()},getLabelSource:function(){return"lv"===this.language?"textLat":"textEng"}},created(){this.colorSets=T,this.currentColorSet=this.colorSets.find((e=>e.selected)),this.currentColorSetSelector=this.currentColorSet},computed:(0,h.rn)(["data","language"])},w=_,E=(0,g.Z)(w,y,A,!1,null,null,null),k=E.exports,R={name:"mapio",components:{Filters:S,Stage:k},data(){return{svg:null,initialLoadComplete:!1}},methods:{...(0,h.OI)(["setError","setLanguage","setLoading"]),...(0,h.Se)(["getBaseUri"]),loadBasemap(e){const t=`${document.URL}${e}.svg`;r().get(t).then((e=>{this.svg=e.data,this.initialLoadComplete=!0,this.setLoading(!1)})).catch((e=>{this.setError(e)}))}},watch:{error:function(e){null!==e&&setTimeout((()=>this.setError(null)),1e4)}},mounted(){this.loadBasemap("basemap-2021")},computed:{...(0,h.rn)(["error","loading"])}},O=R,$=(0,g.Z)(O,n,i,!1,null,null,null),D=$.exports,B=l(7228),Q=l.n(B);a.ZP.use(h.ZP);const q=new h.ZP.Store({state:{data:null,error:null,language:"lv",loading:!0},getters:{getBaseUri:()=>{const e=window.location.href;return e.includes("localhost")?"http://localhost:50514/":window.location.href}},mutations:{setData:(e,t)=>{e.data=t},setError:(e,t)=>{e.error=t},setLanguage:(e,t)=>{Q().locale=t,e.language=t},setLoading:(e,t)=>{e.loading=t}},actions:{}});var M=l(7152),F=JSON.parse('{"en":{"lblSelectMode":"Select mode..","lblSelectDataType":"Select data..","lblSelectYear":"Select year..","lblSelectQuarter":"Select quarter..","lblSelectColorSchema":"Select color schema.."},"lv":{"lblSelectMode":"Izvēlies režīmu..","lblSelectDataType":"Izvēlies datus..","lblSelectYear":"Izvēlies gadu..","lblSelectQuarter":"Izvēlies ceturksni..","lblSelectColorSchema":"Izvēlies krāsu shēmu.."}}');a.ZP.use(M.Z);const I=new M.Z({locale:"lv",fallbackLocale:"en",messages:F});a.ZP.config.productionTip=!1,new a.ZP({store:q,i18n:I,render:e=>e(D)}).$mount("#mapio")},4709:function(){},689:function(){},1731:function(){}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,l),i.exports}l.m=e,function(){var e=[];l.O=function(t,a,n,i){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],i=e[c][2];for(var r=!0,u=0;u<a.length;u++)(!1&i||s>=i)&&Object.keys(l.O).every((function(e){return l.O[e](a[u])}))?a.splice(u--,1):(r=!1,i<s&&(s=i));if(r){e.splice(c--,1);var o=n();void 0!==o&&(t=o)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,n,i]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,i,s=a[0],r=a[1],u=a[2],o=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)l.o(r,n)&&(l.m[n]=r[n]);if(u)var c=u(l)}for(t&&t(a);o<s.length;o++)i=s[o],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(c)},a=self["webpackChunkmapio"]=self["webpackChunkmapio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[998],(function(){return l(4531)}));a=l.O(a)})();
//# sourceMappingURL=app-legacy.8ca6d6ce.js.map