//>>built
define("ec/fisa/controller/tsc/notification/NotificationTransactionController","dojo/_base/kernel dojo/_base/declare dojo/_base/lang ec/fisa/controller/BaseController ec/fisa/controller/custom/CustomBtController ec/fisa/format/Utils ec/fisa/navigation/Utils dojo/dom-construct dojox/mvc dojox/mvc/StatefulModel ec/fisa/mvc/StatefulModel dojo/dom-style ec/fisa/widget/Link dojo/dom-geometry dijit/tree/ForestStoreModel dojox/grid/TreeGrid dojo/data/ItemFileWriteStore dijit/form/CheckBox ec/fisa/widget/tsc/MixedCheckBox ec/fisa/navigation/Utils ec/fisa/dwr/Store ec/fisa/grid/EnhancedGrid dojox/grid/DataGrid".split(" "),
function(f,k,q,r,l,s,t,h,u,v,m,g,n,p){return k("ec.fisa.controller.tsc.NotificationTransactionController",l,{tabId:null,pageScopeId:null,model:null,modelDestinatario:null,data:{},privilegesData:null,accountAccessDataGrid:null,treeGridPrivileges:null,treegridId:null,breadcrumbId:null,breadCrumbAdditionalUser:null,icons:null,labelsData:null,requiredFieldMessage:null,priorityId:null,notificationMeansList:null,meansDataGrid:null,additionalUserGridId:null,receiverData:null,panelMsgAdditionalId:null,roleId:null,
roleName:null,destPanelId:null,selectMeans:null,selectUsers:null,meanStore:null,newNotificationMeansList:null,urlToAdditionalUserPage:"",additionalSucessCheckBoxList:[],additionalUnSucessCheckBoxList:[],contentPanelProperties:null,constructor:function(a,c,b){this.setLabelsData(this.initLabels);void 0==b.aMsgs&&(this.setPrivilegesData(b.privilegesData),this.setUrlToAdditionalUserPage(b.additionalUrl),this.icons=b.icons,this.model={},this.modelDestinatario={},this.meanStore=new ec.fisa.dwr.Store("NotificationTransactionControllerDWR",
"viewDataMeans",this.tabId,this.pageScopeId,[],null),this.init(b))},init:function(a){this.priorityId=a.priorityId;this.notificationMeansList=a.notificationMeansList;this.receiverData=a.receiverData;this.selectUsers=a.selectUsers;this.selectMeans=a.selectMeans;delete a.priorityId;delete a.notificationMeansList;delete a.receiverData;delete a.selectMeans;delete a.selectUsers;this.data=a;this.model=dojox.mvc.newStatefulModel({data:{}});this.modelDestinatario=new m({data:{}});this.inicializarNotificationMeansList()},
handleWindowAction:function(a){dijit.byId(this.messagesPanelId).clearAllMessages();"cnfrm"==a.wAxn?ec.fisa.navigation.utils.showNewBreadCrumbConfirmation(a.confirmationDialogTitle,a.aMsgs,this.breadcrumbId,this.tabId,this.pageId,null,null,!1):void 0!=a.wAxn&&"close"==a.wAxn?ec.fisa.navigation.utils.closeCurrentBreadCrumb(this.breadcrumbId):void 0!=a.aMsgs&&this.updateMsgsPanel(a.aMsgs)},handleAdditionalSaveAction:function(a){this.contentPanelProperties.destroy();this.updateMsgsPanel(a.aMsgs)},bindToModel:function(a,
c,b){var d=this.data[c];if(void 0===d||null==d)d="";d=new dojox.mvc.StatefulModel({data:d});this.model.add(c,d);a.set("ref",this.model[c]);a.set("disabled","true"===b)},processValue:function(a,c){},setLabelsData:function(a){this.labelsData=a},initAdditionalUsersGrid:function(a,c,b,d){this.additionalSucessCheckBoxList=[];this.additionalUnSucessCheckBoxList=[];var e=[{name:this.labelsData.addUserLabel,field:"value",width:"200px"},{name:this.labelsData.addUserSentSuccess,field:"success",width:"100px",
widgetClass:dijit.form.CheckBox,formatter:f.hitch(this,function(a,b,c){return this.formatterUserGridBooleanCheckbox(a,b,c,this,"true"===d)})},{name:this.labelsData.addUserSentUnsuccess,field:"unSuccess",width:"100px",widgetClass:dijit.form.CheckBox,formatter:f.hitch(this,function(a,b,c){return this.formatterUserGridBooleanCheckbox(a,b,c,this,"true"===d)})}];c=new ec.fisa.dwr.Store("NotificationTransactionControllerDWR","viewDataUsersAndAdditionals",this.tabId,this.pageScopeId,[c,b],null);a=h.create("div",
null,a.domNode);e=new dojox.grid.DataGrid({store:c,structure:e,autoHeight:!0,autoWidth:!0},a);e.startup();this.additionalUserGridId=e.id},initTreeGrid:function(a,c){var b=[{name:"",width:"60px",formatter:f.hitch(this,function(a,b,c,d){return this.formatterTreeGridIcon(a,b,c,d)})},{name:this.labelsData.availableOptions,field:"name",width:"400px"},{name:this.labelsData.notificationLabel,field:"notifiableValue",width:"auto",widgetClass:dijit.form.CheckBox,formatter:f.hitch(this,function(a,b,d,e){return this.formatterTreeGridBooleanCheckbox(a,
b,d,e,this,"true"===c)})},{name:" ... ",field:"additionalUsers",width:"auto",widgetClass:ec.fisa.widget.Link,formatter:f.hitch(this,function(a,b,d,e){return this.formatterTreeGridLink(a,b,d,e,this,"true"===c)})}],d=new f.data.ItemFileWriteStore({data:this.privilegesData}),d=new dijit.tree.ForestStoreModel({store:d,rootId:"rootNode",rootLabel:"MenuByApplication",childrenAttrs:["children"],mayHaveChildren:function(a){return"leaf"in a?!a.leaf[0]:!0}}),e=h.create("div",null,a.domNode);this.treeGridPrivileges=
new dojox.grid.TreeGrid({treeModel:d,structure:b,defaultOpen:!0,autoHeight:!0,autoWidth:!0,initialWidth:"100%"},e);this.treegridId=this.treeGridPrivileges.id;this.treeGridPrivileges.startup()},setPrivilegesData:function(a){this.privilegesData=a},saveAdditionalUser:function(a,c){var b={};f.forEach(this.additionalSucessCheckBoxList,function(a){a=dijit.byId(a);void 0==b[a.userId]&&(b[a.userId]={});b[a.userId].sucess=""+a.checked;b[a.userId].userTranId=void 0==a.userTranId?null:""+a.userTranId});f.forEach(this.additionalUnSucessCheckBoxList,
function(a){a=dijit.byId(a);void 0==b[a.userId]&&(b[a.userId]={});b[a.userId].unsucess=""+a.checked});var d={callbackScope:this};d.callback=f.hitch(this,this.handleAdditionalSaveAction);d.errorHandler=this.errorHandler;NotificationTransactionControllerDWR.saveAdditionalUsers(this.tabId,this.pageScopeId,b,a,c,d)},handleSaveAdditional:function(a){this.clearPanelMessageAdditional();"error"==a.wAxn?this.updateMsgsPanelAdditional(a.aMsgs):"cnfrm"==a.wAxn&&ec.fisa.navigation.utils.closeCurrentBreadCrumb(this.breadCrumbAdditionalUser)},
updateMsgsPanelAdditional:function(a){if(a){var c=dijit.byId(this.panelMsgAdditionalId);c&&c.update(a,this.isComponentMsg,this.addComponentMsg,this)}},clearPanelMessageAdditional:function(){this.messagesPanelId&&dijit.byId(this.panelMsgAdditionalId).clearAllMessages()},validateBtInfo:function(a){this.clearPanelMessage();a.selectionMeansGrid=this.meansDataGrid.selection.getSelected();a.wAxn="cnfrm";return a},save:function(a){var c={callbackScope:this};c.callback=this.handleWindowAction;c.errorHandler=
this.errorHandler;NotificationTransactionControllerDWR.saveUserRolInformation(this.tabId,this.pageScopeId,this._addNotificationValData(),a.selectionMeansGrid,c)},remove:function(a){(new ec.fisa.widget.ConfirmDialog({acceptDialogLabel:this.labelsData.yesLabel,cancelDialogLabel:this.labelsData.noLabel,title:this.labelsData.deleteMenuLabel,content:this.labelsData.deleteWarnLabel,acceptAction:f.hitch(this,function(){var a={callbackScope:this};a.callback=this.handleWindowAction;a.errorHandler=this.errorHandler;
NotificationTransactionControllerDWR.deleteUserRoleInfo(this.tabId,this.pageScopeId,a)})})).show()},formatterTreeGridBooleanCheckbox:function(a,c,b,d,e,f){b=d.grid.getItem(b);!1==f&&(f=b.disabled[0]);if(null!=a){if(0<=c){if("none"==a)return"";"string"===typeof a&&("true"==a?a=!0:"false"==a&&(a=!1));a=new ec.fisa.widget.tsc.MixedCheckBox({name:"checkBox",value:a,checked:a,disabled:f});a.fisaRowItem=b;a.field=d.field;a.treegridId=e.treegridId;a.tabId=e.tabId;a.pageScopeId=e.pageScopeId;a.onChange=function(a){this!=
window&&(this.fisaRowItem[this.field][0]=a,NotificationTransactionControllerDWR.setChangedValues(this.tabId,this.pageScopeId,this.field,a,this.fisaRowItem.id[0],this.fisaRowItem.parentId[0],{callbackScope:this,callback:function(a){a=a.itemsChanged;for(var b=dijit.byId(this.treegridId),c=b.treeModel,d=0;d<a.length;d++){var e=a[d];c.store.setValue(b.treeModel.store._itemsByIdentity[e.id],"notifiableValue",e.notifiableValue)}},errorHandler:this.errorHandler}))};return a}return""}},formatterUserGridBooleanCheckbox:function(a,
c,b,d,e){var f=b.grid.getItem(c);if(null!=a){if(0<=c){if("none"==a)return"";"string"===typeof a&&("1"==a?a=!0:"0"==a&&(a=!1));a=new dijit.form.CheckBox({name:"checkBox",value:a,checked:a,disabled:e});a.userId=f;a.userTranId=b.grid.store.getValue(f,"userTranId");"success"==b.field?d.additionalSucessCheckBoxList.push(a.id):"unSuccess"==b.field&&d.additionalUnSucessCheckBoxList.push(a.id);return a}return""}},formatterTreeGridLink:function(a,c,b,d,e,f){b=d.grid.getItem(b);!1==f&&(f=b.disabled[0]);if(!0===
b.leaf[0]){if(0<=c){if("none"==a)return"";a=new n({label:e.labelsData.addUsersTo,title:e.labelsData.addUsersTo});a.set("enabled",b.notifiableValue);a.onClick=e.openAdditionalUsersSelection;a.isDisabled=f;a.fisaRowItem=b;a.field=d.field;a.treegridId=e.treegridId;a.tabId=e.tabId;a.pageScopeId=e.pageScopeId;a.urlToAdditionalUserPage=e.urlToAdditionalUserPage;a.breadCrumbId=e.breadcrumbId;return a}return""}},openAdditionalUsersSelection:function(){var a=ec.fisa.controller.utils.getGlobalModalSize(0.8),
c=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId),b={};b.title=c.labelsData.addUsersTo;b.href=f.config.fisaContextPath+this.urlToAdditionalUserPage;b.ioArgs={content:{isDisabled:this.isDisabled,FISATabId:this.tabId,FISAParentPageScopeId:this.pageScopeId,componentId:this.fisaRowItem.componentId[0],parentTreeGridNodeId:this.fisaRowItem.id[0],parentTreeGridParentNodeId:this.fisaRowItem.parentId[0]}};b.ioMethod=f.xhrPost;b.style="height:"+a.h-70+"px;width:700px;overflow: auto;";
b.splitter="true";c.contentPanelProperties=new dojox.widget.DialogSimple(b);c.contentPanelProperties.resizeContainerNode=this.resizeNode;c.contentPanelProperties.show();c.resizeNode(c.contentPanelProperties,a)},resizeNode:function(a,c){var b=p.getMarginBox(a.titleNode);g.set(a.containerNode,"height",c.h-b.h-4*b.t-85+"px");g.set(a.containerNode,"display","block");g.set(a.containerNode,"overflowY","auto");g.set(a.containerNode,"overflowX","auto")},setUrlToAdditionalUserPage:function(a){this.urlToAdditionalUserPage=
a},formatterTreeGridIcon:function(a,c,b,d){a=d.grid.getItem(b).iconId[0];return void 0!==a&&(null!=a&&""!=a)&&(c=this.icons[a],void 0!==c&&null!=c)?'\x3cimg src\x3d"'+this.icons[a]+'" /\x3e':""},cancel:function(){var a={callbackScope:this};a.callback=this.handleCancelAction;a.errorHandler=this.errorHandler;NotificationTransactionControllerDWR.cancelUserRoleImpl(this.tabId,this.pageScopeId,a)},cancelAdditionalUser:function(){this.contentPanelProperties.destroy()},setMessagesPanel:function(a){this.inherited(arguments);
if("undefined"===typeof this.breadcrumbId||null==this.breadcrumbId){var c=ec.fisa.controller.utils.findCurrentBreadCrumb(a);c&&(this.breadcrumbId=c.id)}this.updateMsgsPanel(this.errorMsgs)},setMessagesPanelAdditionalUser:function(a){this.inherited(arguments);if("undefined"===typeof this.breadCrumbAdditionalUser||null==this.breadCrumbAdditionalUser)this.breadCrumbAdditionalUser=a.getParent().getParent().getParent().id;this.panelMsgAdditionalId=a.id},validateFields:function(a){return!1},addParamToModel:function(a){var c=
a["bt-id"],b=a["field-id"],d=null;this.data&&(this.data[c]&&this.data[c].dataMessage)&&(d=this.data[c].dataMessage.fields[b]);null==d?(d={value:"",complement:null},a._fStarted=!0):null==d.value&&(a._fStarted=!0);this.disabled&&(a.set("disabled",this.disabled),d.enabled=!1);d.value="";this.notificationId=a.id;if(this.modelDestinatario.contains(c))this.modelDestinatario.contains([c,"dataMessage","fields",b])&&this.modelDestinatario.setValue([c,"dataMessage","fields",b,"value"],d.value);else{this.modelDestinatario.appendObject([c,
"dataMessage","fields",b,"value"],d.value,a.id,"value",null,!1);var e=null;void 0!=d.enabled&&(e=d.enabled);this.modelDestinatario.appendObject([c,"dataMessage","fields",b,"enabled"],e,a.id,"enabled",null,!1);a.hasCompl&&this.modelDestinatario.appendObject([c,"dataMessage","fields",b,"complement"],d.complement,a.id,"complement",null,!1)}},containsFieldModel:function(a,c){return this.modelDestinatario.contains([a,"dataMessage","fields",c,"value"])},getFieldModel:function(a,c){return this.modelDestinatario.getValue([a,
"dataMessage","fields",c,"value"])},setFieldModelValue:function(a,c,b){this.modelDestinatario.setValue([a,"dataMessage","fields",c,"value"],b)},setFieldModelEnabled:function(a,c,b){this.modelDestinatario.setValue([a,"dataMessage","fields",c,"enabled"],b)},setFieldModelComplement:function(a,c,b){this.modelDestinatario.setValue([a,"dataMessage","fields",c,"complement"],b)},getFieldModelComplement:function(a,c){return this.modelDestinatario.getValue([a,"dataMessage","fields",c,"complement"])},cargarTareasMeans:function(a,
c){this.clearPanelMessage();var b=null,b=new ec.fisa.dwr.Store("NotificationTransactionControllerDWR","viewDataMeans",this.tabId,this.pageScopeId,[],null);this.meansDataGrid.setStore(b);f.forEach(this.selectMeans,function(a,b){this.meansDataGrid.selection.addToSelection(this.meansDataGrid.getItemIndex(a))},this);this.meansDataGrid.render()},inicializarNotificationMeansList:function(){var a=this.selectMeans,c=[],b;for(b in this.notificationMeansList)(0<=this._indexValue(a,this.notificationMeansList[b].value)||
-1==this.notificationMeansList[b].value)&&c.push({label:this.notificationMeansList[b].label,selected:this.notificationMeansList[b].selected,value:this.notificationMeansList[b].value});this.newNotificationMeansList=c},logger:function(a){},setNotification:function(a){var c=f.byId(this.destPanelId);if(a){a=this.meansDataGrid.selection.getSelected();var b=[],d;for(d in this.notificationMeansList)-1==this._indexValue(a,this.notificationMeansList[d].value)&&-1!=this.notificationMeansList[d].value&&b.push(this.notificationMeansList[d].value);
var e=[];for(d in this.notificationMeansList)a=this._indexValue(b,this.notificationMeansList[d].value),0>a&&(void 0==e[d]&&(e[d]={}),e[d].label=this.notificationMeansList[d].label,e[d].selected=this.notificationMeansList[d].selected,e[d].value=this.notificationMeansList[d].value);this._setVisible(c)}else this._setNotVisible(c)},_setVisible:function(a){g.set(a,"display","block")},_setNotVisible:function(a){g.set(a,"display","none")},_indexValue:function(a,c){for(var b=0;b<a.length;b++)if(a[b]==c)return b;
return-1}})});
//@ sourceMappingURL=NotificationTransactionController.js.map