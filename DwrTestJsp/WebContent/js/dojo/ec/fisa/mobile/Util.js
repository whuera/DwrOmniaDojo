//>>built
define("ec/fisa/mobile/Util","./_base dijit/registry dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/dom-construct dojo/dom-style dojox/mobile/Heading dojox/mobile/Button dojox/mobile/TabBar dojox/mobile/TabBarButton dojox/mobile/ContentPane dojox/mobile/ScrollableView".split(" "),function(f,g,c,m,n,d,k,r,p,q,h,l,s){f=m("ec.fisa.mobile.Util",null,{initPage:function(){var a=g.byId("mobileMainContainer"),b=dijit.byId("viewPort"),e=!1;null==b?(e=!0,b=new dojox.mobile.View({id:"viewPort",style:"height:"+
window.innerHeight+"px; visibility: visible",idParentView:this.params.idParentView,orientation:"v"},d.create("div",null,a.containerNode))):(b.domNode.setAttribute("style","height:"+window.innerHeight.toString().concat("px;")),c.forEach(b.getChildren(),function(a){a.destroyRecursive(!1)},this));return e},buildContentBody:function(){var a=ec.fisa.mobile.util.initPage.call(this),b=dijit.byId("viewPort"),e=new l(null,d.create("div",null,b.containerNode)),c=new l(null,d.create("div",null,e.containerNode));
b.containers={ParentContentID:e.id,scrollContainerID:c.id};b.containers.previousContent=b.params.idParentView;ec.fisa.mobile.util.buildHeading.call(this,c);(new dojox.mobile.Heading({label:b.params.name,"class":"qtHeadingName",fixed:"top"},d.create("div",null,c.containerNode))).startup();e=new dojox.mobile.ScrollableView(null,d.create("div",null,c.containerNode));ec.fisa.mobile.util.loadFooter.call(this,c);e.startup();a?b.startup():b.show(!0,!0);b.resize();return e},buildHeading:function(a){var b=
dijit.byId("viewPort");a=new dojox.mobile.Heading(ec.fisa.mobile.util.headingParams.call(this),d.create("div",null,a.containerNode));var c=a.backButton;c.previousContent=b.containers.previousContent;c.currentContent=b.containers.currentContent;if(c&&b.containers.BtContentPaneID)c.on("click",ec.fisa.mobile.util.back);d.create("div",{"class":"mblHeadingLogo"},a.containerNode);(new p({"class":"mblHeadingbottonAccount"},d.create("div",null,a.containerNode))).on("click",function(){ec.fisa.mobile.util.show("dlg_account")});
a.startup()},headingParams:function(){var a={back:c.config.fisaReturnButton,fixed:"top"},b=dijit.byId("viewPort");a.moveTo=b.containers?b.containers.previousContent:"viewPort";return a},back:function(){var a=dijit.byId("viewPort"),b=dijit.byId(this.previousContent),c=dijit.byId(this.currentContent);k.set(c.domNode,"display","none");k.set(b.domNode,"display","block");this.currentContent==a.containers.BtContentPaneID&&(EventActionDWR.closeTab(a.fisaTabId,{callbackScope:this,callback:ec.fisa.controller.utils.clearControllers}),
(b=dijit.byId(a.containers.BtContentPaneID))&&b.destroyRecursive(!1),a.containers.BtContentPaneID="",(b=dijit.byId(a.containers.BtDocumentContentPaneID))&&b.destroyRecursive(!1),a.containers.BtDocumentContentPaneID=null);a.show(!0,!0);a.resize()},loadAgenda:function(){ec.fisa.mobile.util.deselectTabBarButton.call(this);ec.fisa.mobile.menu.utils.moveToMenuTab.call(this)},loadFooter:function(a){var b=dijit.byId("viewPort");a=new q({"class":"mblTabBarFooter",single:"true",fixed:"bottom"},d.create("ul",
null,a.containerNode));var e=new h({label:c.config.fisaHomeTab,"class":"mblTabBarInicio",moveTo:c.config.fsesMoveTo,transition:"dissolve"},d.create("li",null,a.domNode)),b=new h({label:c.config.fisaAgendaTab,"class":"mblTabBarAgenda",transition:"dissolve",moveTo:"viewPort",name:c.config.fisaAgendaTab,idParentView:b.params.idParentView,itemType:"BUSINESS_TEMPLATE_CUSTOMIZED_URL",relatedUrl:c.config.fsesAgendaUrl,relatedParameter:"",onClick:ec.fisa.mobile.util.loadAgenda},d.create("li",null,a.domNode)),
f=new h({label:c.config.fisaOptionsTab,"class":"mblTabBarOpciones"},d.create("li",null,a.domNode)),g=new h({label:c.config.fisaLogoutTab,"class":"mblTabBarSalir",href:c.config.fisaContextPath+c.config.fsesLogOutUrl},d.create("li",null,a.domNode));ec.fisa.mobile.util.attachFunction([e,b,f,g]);a.startup()},attachFunction:function(a){c.forEach(a,function(a){a.on("click",ec.fisa.mobile.util.deselectTabBarButton)},this)},deselectTabBarButton:function(){setTimeout(n.hitch(this,function(){this.set("selected",
!1)}),50)},show:function(a){g.byId(a).show()},hide:function(a){g.byId(a).hide()}});ec.fisa.mobile.util=new f;return f});
//@ sourceMappingURL=Util.js.map