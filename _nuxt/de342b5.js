(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{601:function(t,n,e){"use strict";e.r(n);var l=e(247),o=e(498),r=e(595),c=e(473),d=e(209),f=e(212),v=e(136),m=e(44),_=e(486),k=e(56),w=e(227),h=(e(24),{props:{mdlText:{type:String,default:null},itemno:{type:Number,default:null},mdlBtnText:{type:String,default:null},showbtn:{type:Boolean,default:!0},fullscreen:{type:Boolean,default:!0}},data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1}},name:"Modals",methods:{saveItem:function(){this.$emit("clicked-save")},newItem:function(){this.$emit("clicked-new")}}}),y=e(78),component=Object(y.a)(h,(function(){var t=this,n=t._self._c;return n(r.a,{attrs:{fullscreen:t.fullscreen,eager:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([t.showbtn?{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n(l.a,t._g(t._b({attrs:{color:"primary",dark:""},on:{click:function(n){return t.newItem()}}},"v-btn",r,!1),o),[t._v("\n      "+t._s(t.mdlBtnText)+"\n    ")])]}}:null],null,!0),model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}},[t._v(" "),n(o.a,[n(k.a,{attrs:{dark:"",color:"primary"}},[n(l.a,{attrs:{icon:"",dark:""},on:{click:function(n){t.dialog=!1}}},[n(d.a,[t._v("mdi-close")])],1),t._v(" "),n(w.b,[t._v(t._s(t.mdlText))]),t._v(" "),n(_.a),t._v(" "),n(w.a,[n(l.a,{attrs:{dark:"",text:""},on:{click:function(n){return t.saveItem()}}},[t._v("\n          Kaydet\n        ")])],1)],1),t._v(" "),n(f.a,{attrs:{"three-line":"",subheader:""}},[n(v.a,[n(m.a,[t._t("default")],2)],1)],1),t._v(" "),n(c.a)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);