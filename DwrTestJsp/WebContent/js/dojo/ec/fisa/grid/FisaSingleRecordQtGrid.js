//>>built
require({cache:{"url:ec/fisa/grid/templates/SingleRecordGrid.html":'\x3cdiv\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"_dataContainer"\x3e\n\t\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"_actionsContainer"\x3e\n\t\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"_buttonContainer"\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e'}});
define("ec/fisa/grid/FisaSingleRecordQtGrid","dojo/dom-construct dojo/_base/kernel dojo/_base/declare dijit/_Widget dijit/_Templated dojo/text!./templates/SingleRecordGrid.html dojo/dom-construct ./_base".split(" "),function(q,r,d,e,m,n,b){return d("ec.fisa.grid.FisaSingleRecordQtGrid",[e,m],{id:"",qtId:"",tabId:"",pageScopeId:"",islov:!1,parentFisaTabId:"",parentFisaPageScopeId:"",parentBtId:"",parentFieldId:"",parentType:"",parentWidgetId:"",execButtonLabel:"",selectButtonLabel:"",selectable:!0,
hasActions:!1,fieldsNumber:0,resultsLayout:0,rowsNumber:0,store:{},query:{},templateString:n,actions:null,select:null,execButton:null,structure:"",structureArray:null,data:null,constructor:function(){},postCreate:function(){this.inherited(arguments)},startUp:function(){this.inherited(arguments);this.structureArray=eval(this.structure);this._initStore();var a=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId);this.setQuery(a.model.toPlainObject())},setQuery:function(a){this.query=
a;var b=this;this.store.fetch({query:this.query,onComplete:function(a){0==a.length?b.processResults(a):b.processResults(this.store.getResults())},callbackScope:ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId),scope:this,onError:this.onError})},postMixInProperties:function(){this.inherited(arguments);null!=this.actions&&0<this.actions.length&&(this.hasActions=!0)},postCreate:function(){this.inherited(arguments);this._createActions()},_createActions:function(){if(!0===this.hasActions){var a=
this.id+"_execButton";this.select=new dijit.form.Select({id:this.id+"_options",options:this.actions},this._actionsContainer);this.execButton=new dijit.form.Button({id:a,label:this.execButtonLabel},this._buttonContainer);this.connect(this.execButton,"onClick",this._execAction)}},_execAction:function(){var a=0;0==this.data.length&&(a=null);this.executeAction(this.qtId,this.select.get("value"),a)},_initStore:function(){var a=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId);this.store=
new ec.fisa.dwr.Store("QtControllerDWR","viewData",this.tabId,this.qtId,[this.pageScopeId],null);this.store.callbackScope=a},processResults:function(a){this.data=a;b.empty(this._dataContainer);var p=b.create("table",{border:"0",cellpadding:"5",cellspacing:"0",style:{margin:"auto"}},this._dataContainer),d=0,f=this.data[0];if(f&&f.data)for(var g=0;g<this.rowsNumber;g++)for(var h=b.create("tr",{},p),k=0;k<this.resultsLayout;k++){var c=d++;if(a=this.structureArray[c]){var e=b.create("td",{"class":"sigleRecordQtLabel"},
h),l=b.create("td",{"class":"sigleRecordQtvalue"},h);b.create("label",{"class":"fisaLabel",innerHTML:a.name+":"},e);c=f.data[c];a.formatter&&(c=a.formatter(c,0));c.placeAt?(a=b.create("span",{},l),c.placeAt(a)):b.create("span",{innerHTML:c},l)}}},onError:function(a,b){}})});
//@ sourceMappingURL=FisaSingleRecordQtGrid.js.map