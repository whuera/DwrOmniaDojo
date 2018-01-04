//>>built
define("ec/fisa/controller/tsc/UserRolAdminController","dojo/_base/kernel dojo/_base/declare dojo/_base/lang ec/fisa/controller/BaseController ec/fisa/controller/custom/CustomBtController ec/fisa/format/Utils ec/fisa/navigation/Utils dojo/dom-construct dojox/mvc dojox/mvc/StatefulModel ec/fisa/controller/custom/QtController dijit/tree/ForestStoreModel dojox/grid/TreeGrid dojo/data/ItemFileWriteStore dijit/form/CheckBox ec/fisa/widget/tsc/MixedCheckBox ec/fisa/dwr/Store".split(" "),function(f,h,p,
q,m,r,s,n,t,u,v){return h("ec.fisa.controller.tsc.UserRolAdminController",m,{parentTabId:null,parentPageScopeId:null,model:null,data:{},privilegesData:null,accountAccessDataGrid:null,treeGridPrivileges:null,availableChannels:[],treegridId:null,breadcrumbId:null,icons:null,labelsData:null,requiredFieldMessage:null,constructor:function(a,c,b){this.setPrivilegesData(b.privilegesData);this.setAvailableChannels(b.availableChannels);this.data.rolName=b.roleName;this.data.rolDescription=b.roleDescription;
this.setParentTabId(b.parentFisaTabId);this.setParentPageScopeId(b.parentFisaPageScopeId);this.icons=b.icons;this.labelsData=this.initLabels;delete b.privilegesData;delete b.availableChannels;delete b.roleName;delete b.roleDescription;delete b.parentFisaTabId;delete b.parentFisaPageScopeId;delete b.icons;delete b.initLabels;this.model=dojox.mvc.newStatefulModel({data:{}});UserRolAdminControllerDWR.getRequiredFieldMessage({callbackScope:this,callback:function(a){this.requiredFieldMessage=a},errorHandler:f.hitch(this,
this.errorHandler)})},handleWindowAction:function(a){dijit.byId(this.messagesPanelId).clearAllMessages();"cnfrm"==a.wAxn?ec.fisa.navigation.utils.showNewBreadCrumbConfirmation(a.confirmationDialogTitle,a.aMsgs,this.breadcrumbId,this.tabId,this.pageId,null,null,!1):"error"==a.wAxn&&this.updateMsgsPanel(a.aMsgs)},bindToModel:function(a,c,b){var d=this.data[c];if(void 0===d||null==d)d="";d=new dojox.mvc.StatefulModel({data:d});this.model.add(c,d);a.set("ref",this.model[c]);a.set("disabled","true"===
b)},processValue:function(a,c){},loadAccountAccessInformation:function(){var a=new ec.fisa.dwr.Store("UserRolAdminControllerDWR","viewAccessAccountData",this.tabId,this.pageScopeId,[],null);this.accountAccessDataGrid.setStore(a);this.accountAccessDataGrid.canSort=function(){return!1}},initTreeGrid:function(a,c){for(var b=[{name:"",width:"60px",formatter:f.hitch(this,function(a,b,c,d){return this.formatterTreeGridIcon(a,b,c,d)})},{name:this.labelsData.availableOptions,field:"name",width:"400px"}],
d=0;d<this.availableChannels.length;d++){var e=this.availableChannels[d];b[d+2]={name:e[1],field:e[0],width:"auto",widgetClass:dijit.form.CheckBox,formatter:f.hitch(this,function(a,b,d,e){return this.formatterTreeGridBooleanCheckbox(a,b,d,e,this,c)})}}d=new f.data.ItemFileWriteStore({data:this.privilegesData});d=new dijit.tree.ForestStoreModel({store:d,rootId:"rootNode",rootLabel:"MenuByApplication",childrenAttrs:["children"],mayHaveChildren:function(a){return"leaf"in a?!a.leaf[0]:!0}});e=n.create("div",
null,a.domNode);this.treeGridPrivileges=new dojox.grid.TreeGrid({treeModel:d,structure:b,defaultOpen:!1,autoHeight:!0,autoWidth:!0,initialWidth:"100%"},e);this.treegridId=this.treeGridPrivileges.id;this.treeGridPrivileges.startup()},setPrivilegesData:function(a){this.processItemChannelInformation(a.items);this.privilegesData=a},processItemChannelInformation:function(a){for(var c=0;c<a.length;c++){var b=a[c];if(void 0!==b&&null!=b){for(var d=b.channelList,e=0;e<d.length;e++){var f=d[e];b[f[0]]=f[1]}delete b.channelList;
b=b.children;void 0!==b&&0<b.length&&this.processItemChannelInformation(b)}}},setAvailableChannels:function(a){this.availableChannels=a},sendInfoToServer:function(){var a={scope:this,onComplete:function(a){}};a.onError=f.hitch(this,this.errorHandler);this.accountAccessDataGrid.store.save(a)},validateBtInfo:function(a){var c=[],b="",d="",e=this.model.rolDescription;void 0!=this.model.rolName&&(b=this.model.rolName.value);var f=this.validateFields([{field:"CAL_NAME",value:b}]);null!=f&&(a.aMsgs=f.aMsgs,
a.wAxn=f.wAxn);"cnfrm"==a.wAxn&&(void 0!=e&&(d=this.model.rolDescription.value),c.push(b),c.push(d),a.userRolInfo=c);return a},save:function(a){var c={callbackScope:this};c.callback=this.handleWindowAction;c.errorHandler=f.hitch(this,this.errorHandler);UserRolAdminControllerDWR.saveUserRolInformation(this.tabId,this.pageScopeId,this._addNotificationValData(),a.userRolInfo,c)},remove:function(a){(new ec.fisa.widget.ConfirmDialog({acceptDialogLabel:this.labelsData.yesLabel,cancelDialogLabel:this.labelsData.noLabel,
title:this.labelsData.deleteMenuLabel,content:this.labelsData.deleteWarnLabel,acceptAction:f.hitch(this,function(){var a={callbackScope:this};a.callback=this.handleWindowAction;a.errorHandler=f.hitch(this,this.errorHandler);UserRolAdminControllerDWR.deleteUserRoleInfo(this.tabId,this.pageScopeId,a)})})).show()},formatterTreeGridBooleanCheckbox:function(a,c,b,d,e,g){b=d.grid.getItem(b);if(null!=a){if(0<=c){if("none"==a)return"";a=new ec.fisa.widget.tsc.MixedCheckBox({name:"checkBox",value:a,checked:a,
disabled:g});a.fisaRowItem=b;a.field=d.field;a.treegridId=e.treegridId;a.tabId=e.tabId;a.pageScopeId=e.pageScopeId;a.onChange=function(a){this!=window&&(this.fisaRowItem[this.field][0]=a,UserRolAdminControllerDWR.setChangedValues(this.tabId,this.pageScopeId,this.field,a,this.fisaRowItem.id[0],this.fisaRowItem.parentId[0],{callbackScope:this,callback:function(a){a=a.itemsChanged;for(var b=dijit.byId(this.treegridId),d=b.treeModel,c=0;c<a.length;c++)for(var e=a[c],f=b.treeModel.store._itemsByIdentity[e.id],
e=e.channelList,g=0;g<e.length;g++){var l=e[g];d.store.setValue(f,l[0],l[1])}},errorHandler:f.hitch(this,this.errorHandler)}))};return a}return""}},formatterTreeGridIcon:function(a,c,b,d){a=d.grid.getItem(b).iconId[0];return void 0!==a&&(null!=a&&""!=a)&&(c=this.icons[a],void 0!==c&&null!=c)?'\x3cimg src\x3d"'+this.icons[a]+'" /\x3e':""},formatterDataGridBooleanCheckbox:function(a,c,b,d,e,f,h){if(null!=a){if(0<=c){var k=b.grid.getItem(c);a=new ec.fisa.widget.tsc.MixedCheckBox({name:"checkBox",value:a,
checked:a,disabled:d});a.tabId=f;a.pageScopeId=h;a.onChange=function(a){if(this!=window){var c=b.grid.store;c._entries[k].data[e]=a;c.setValue(k,e,a);ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId).sendInfoToServer();this.checked=this.value=a}};return a}return""}},cancel:function(a){a={callbackScope:this};a.callback=this.handleCancelAction;a.errorHandler=f.hitch(this,this.errorHandler);UserRolAdminControllerDWR.cancelUserRoleImpl(this.tabId,this.pageScopeId,a)},validateFields:function(a){var c=
{},b=this.requiredFieldMessage.I18N_REQUIRED_FIELDS,d="";f.forEach(a,function(a){if("undefined"===typeof a.value||""==a.value||"-1"==a.value)b=b+" ["+this.labelsData[a.field]+"] ",d=d+"** "+this.requiredFieldMessage.I18N_REQUIRED_FIELDS+"["+this.labelsData[a.field]+"]"},this);a=this.generateMsg(b,d,4E4);void 0!=a[0].detail&&""!=a[0].detail?(dijit.byId(this.messagesPanelId),c.aMsgs=a,c.wAxn="error"):c.wAxn="cnfrm";return c},setParentTabId:function(a){this.parentTabId=a},setParentPageScopeId:function(a){this.parentPageScopeId=
a}})});
//@ sourceMappingURL=UserRolAdminController.js.map