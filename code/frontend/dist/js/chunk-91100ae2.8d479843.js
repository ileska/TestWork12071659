(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91100ae2"],{"19ae":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list row"},[i("div",{staticClass:"col-md-8"}),i("div",{staticClass:"col-md-6"},[i("h4",[t._v("Sites List")]),i("ul",{staticClass:"list-group"},t._l(t.sites,(function(e,s){return i("li",{key:s,staticClass:"list-group-item",class:{active:s==t.currentIndex},on:{click:function(i){return t.setActiveSite(e,s)}}},[t._v(" "+t._s(e.title)+" ")])})),0)]),i("div",{staticClass:"col-md-6"},[t.currentSite?i("div",[i("h4",[t._v("Site")]),i("div",[t._m(0),t._v(" "+t._s(t.currentSite.title)+" ")]),i("div",[t._m(1),t._v(" "+t._s(t.currentSite.description)+" ")]),i("div",[t._m(2),t._v(" "+t._s(t.currentSite.status)+" ")]),i("br"),i("router-link",{staticClass:"badge-warning",attrs:{to:"/sites/"+t.currentSite.id}},[t._v("Edit")])],1):i("div",[i("br"),i("p",[t._v("Please click on a Site...")])])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Title:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Description:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Status:")])])}],r=i("2566"),c={name:"sites-list",data:function(){return{sites:[],currentSite:null,currentIndex:-1,title:""}},methods:{retrieveSites:function(){var t=this;r["a"].getAll().then((function(e){t.sites=e.data.data.sites,console.log(e.data.data)})).catch((function(t){console.log(t)}))},refreshList:function(){this.retrieveSites(),this.currentSite=null,this.currentIndex=-1},setActiveSite:function(t,e){this.currentSite=t,this.currentIndex=e}},mounted:function(){this.retrieveSites()}},l=c,a=(i("fef6"),i("2877")),u=Object(a["a"])(l,s,n,!1,null,null,null);e["default"]=u.exports},"690b":function(t,e,i){},fef6:function(t,e,i){"use strict";i("690b")}}]);
//# sourceMappingURL=chunk-91100ae2.8d479843.js.map