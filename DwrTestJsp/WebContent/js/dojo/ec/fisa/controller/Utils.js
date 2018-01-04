//>>built
define("ec/fisa/controller/Utils","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojox/lang/functional/object ec/fisa/controller/_base dojo/dom-geometry dijit/focus ec/fisa/mvc/StatefulModel".split(" "),function(f,h,m,n,k,l,p){h=h("ec.fisa.controller.Utils",null,{initController:function(a,b){var c=b(a),d="t"+a;if(ec.fisa.tc){if(ec.fisa.tc[d])return ec.fisa.tc[d]}else ec.fisa.tc={};ec.fisa.tc[d]=c;d=dijit.byId("tabContainer");d.selectedChildWidget.tabId||(d.selectedChildWidget.tabId=a);return c},
initPageController:function(a,b,c,d){var e="t"+a+"p"+b;if(ec.fisa.tc){if(ec.fisa.tc[e])return ec.fisa.tc[e]}else ec.fisa.tc={};var g=null,g=!0==(d||!1)?c:c(a,b);ec.fisa.tc[e]=g;if(void 0==g.isLovModal||!1==g.isLovModal)if(c=dijit.byId("tabContainer"))c=c.selectedChildWidget.selectedChildWidget,null!=c&&(c.tabId?c.tabId.push(a):c.tabId=[a],c.pageScopeId?c.pageScopeId.push(b):c.pageScopeId=[b],c.onUnload=function(){ec.fisa.controller.utils.uninitializeController(this.tabId,this.pageScopeId);null!=this.pageScopeId&&
void 0!=this.pageScopeId&&this.pageScopeId.indexOf("_resourceIn");return!0});return g},uninitializeController:function(a,b){var c=null,d=null;"string"!=typeof a?(c=a,d=b):(c=[a],d=[b]);f.forEach(c,function(a,c){var b=d[c],f=ec.fisa.controller.utils.getPageController(a,b);null!=f&&f.destroy&&f.destroy();ec.fisa.controller.utils.clearPageController(a,b)},this)},resetControllerData:function(a,b){var c=ec.fisa.controller.utils.getPageController(a,b);null!=c&&c.destroy&&c.destroy()},getController:function(a){return ec.fisa.tc?
ec.fisa.tc["t"+a]:null},getPageController:function(a,b){return ec.fisa.tc?ec.fisa.tc["t"+a+"p"+b]:null},setMessagesPanel:function(a,b){this.setAttr(a,"messagesPanel",b)},setPageBindingForm:function(a,b,c){this.setPageAttr(a,b,"bindingForm",c)},setBindingForm:function(a,b){this.setAttr(a,"bindingForm",b)},setAttr:function(a,b,c){this.getController(a)[b]=c},setPageAttr:function(a,b,c,d){this.getPageController(a,b)[c]=d},clearControllers:function(a){var b=[];f.functional.forIn(ec.fisa.tc,function(c){0==
c.indexOf("t"+a)&&b.push(c)},this);f.forEach(b,function(a){delete ec.fisa.tc[a]})},clearPageController:function(a,b){delete ec.fisa.tc["t"+a+"p"+b]},updateRowTreeGrid:function(a,b){a.store.fetchItemByIdentity({identity:b.details.id,scope:{outcome:b,treeGrid:a},onItem:function(a){var b=this.outcome.details;a.changed=[b.changed];a.children=b.children&&0<b.children.length?b.children:[];a.complement=[b.complement];a.daysValid=[b.daysValid];a.description=[b.description];a.expirationDate=[b.expirationDate];
a.expires=[b.expires];a.historial=[b.historial];a.id=[b.id];a.maxDeliveryDate=[b.maxDeliveryDate];a.prolongable=[b.prolongable];a.receptionDate=[b.receptionDate];a.required=[b.required];a.status=[b.status];a.type=[b.type];a.fileUploaded=[b.fileUploaded];a.documentUploaded=[b.documentUploaded];a=this.treeGrid.getItemIndex(a);"string"==typeof a?this.treeGrid.updateRow(a.split("/")[0]):-1<a&&this.treeGrid.updateRow(a)}})},doPanelsLayout:function(a,b){},getModalSize:function(a){a=a||1;var b=dijit.byId("tabContainer"),
b=l.getMarginBox(b.domNode);return{h:b.h*a,w:b.w*a}},getGlobalModalSize:function(a){a=a||1;var b=dijit.byId(f.config.fisaStandbyId),b=l.getMarginBox(b.domNode);return{h:b.h*a,w:b.w*a}},parseCssUrl:function(a){var b=null;if(a){a=a.replace(/"/g,"");a=a.replace(/'/g,"");var b=a.indexOf("http"),c=a.lastIndexOf(")"),b=a.substring(b,c)}return b},findCurrentBreadCrumb:function(a){var b=null;if(b=a.getParent()){a=b.get("declaredClass");var c=b.get("nested"),b="dijit.layout.TabContainer"===a&&!0===c?b:this.findCurrentBreadCrumb(b)}else b=
a;return b},getCurrentTranslation:function(a,b,c){var d="";null!=a&&a.indexOf(String.fromCharCode(255))?(a=a.split(String.fromCharCode(255)),d=this.selectTranslation(c,b,a)):d=a;return d},selectTranslation:function(a,b,c){for(var d=0,e=0,e="",g=0;g<a.length;g++){var f=a[g];if(b==f.languageId){e=d;e=e<c.length?c[e]:"";if(0==e.length){b=f.parentCode;e=null!=b?this.selectTranslation(a,b,c):c[0];break}break}d++}return e}});k.utils=new h;ec.fisa.controller.utils=k.utils;return h});
//@ sourceMappingURL=Utils.js.map