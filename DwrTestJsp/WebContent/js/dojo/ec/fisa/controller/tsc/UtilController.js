//>>built
define("ec/fisa/controller/tsc/UtilController","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/dom-construct dojo/on ec/fisa/menu/_base ec/fisa/layout/ContentPane dijit/layout/AccordionContainer dijit/layout/BorderContainer ec/fisa/widget/Link ec/fisa/widget/VerticalMenuLink dojox/fx dojo/fx ec/fisa/widget/IFrame".split(" "),function(g,e,k,l,h,f,m,n,p,q,r,s,t){e=e("ec.fisa.controller.tsc.UtilController",null,{menuTreeOnClick:function(b,e,c){try{null!=b&&(c&&c.isExpandable?c.expandoNode.click():
ec.fisa.controller.tsc.UtilController.loadTabContainer(b,e))}catch(a){}},loadTabContainer:function(b,e){var c=dijit.byId(e);c.doLayout=!1;c.startup();var a={preload:!0};a.title=b.name;a.closable=!0;a.nested=!0;var d={};d.title=b.name;d.iconClass="breadcrumbIcon";d.preventCache=!0;d.closable=!0;d.nested=!0;"DIRECT_LINK"==b.itemType?(d.href=b.relatedUrl,newSubTabPane=new ec.fisa.layout.ContentPane(a)):"EXTERNAL_URL"!=b.itemType?(a="","BUSINESS_TEMPLATE_CUSTOMIZED"!=b.itemType&&(a=g.config.fisaContextPath,
a=a+"/"+b.itemType,a+="/"),a+=b.relatedUrl,b.relatedParameter&&(a+="/actionMode/",a+=b.relatedParameter),a+="/FDK/",null==b.invokeClass?a+="_FDK":(a+=b.invokeClass,a+="/_FDK"),"BUSINESS_TEMPLATE_CUSTOMIZED"!=b.itemType&&(a+="/index.jsp"),d.href=a,newSubTabPane=new ec.fisa.layout.ContentPane(d)):"EXTERNAL_URL"==b.itemType&&(d.src=b.relatedUrl,newSubTabPane=new ec.fisa.widget.IFrame(d));c.addChild(newSubTabPane);newSubTabPane.appendable=b.notAppendable?!0:!1;c.selectChild(newSubTabPane);newSubTabPane.callObj=
{callbackScope:this,callback:function(){}};h(newSubTabPane,"close",function(){EventActionDWR.closeTab(this.tabId,this.callObj)});c=new ec.fisa.layout.ContentPane({title:"Home",iconClass:"breadcrumbIcon",isHome:!0});newSubTabPane.addChild(c,0);c.controlButton.set("disabled",!0);c.controlButton.onClick=function(){}}});f.utilController=new e;ec.fisa.controller.tsc.UtilController=f.utilController;return e});
//@ sourceMappingURL=UtilController.js.map