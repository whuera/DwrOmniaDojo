//>>built
define("ec/fisa/widget/rules/VariablesGrid","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/connect dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ec/fisa/grid/EnhancedGrid dojox/grid/enhanced/plugins/IndirectSelection ./_base".split(" "),function(d,b,e,f,g,h,k,c,l){return b("ec.fisa.widget.rules.VariablesGrid",[c],{tabId:"",pageScopeId:"",parentFisaPageScopeId:"",parentBtId:"",parentFieldId:"",parentWidgetId:"",selectionMode:"single",_onSelectionUpdate:!1,fsv:null,
postCreate:function(){this.inherited(arguments);this.connect(this,"onSelectionChanged",this.execSelectionChange);ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId).variablesGridId=this.id},postMixInProperties:function(){this.inherited(arguments);var a={headerSelector:!1,width:"64px",name:"",styles:"text-align: center;",noresize:!0};this.plugins?this.plugins.indirectSelection=a:this.plugins={indirectSelection:a};this.selectable=this.autoHeight=!0;this.structure=[[{name:"Nombre de Variable",
field:"prompt",width:"150px",editable:!1,noresize:!0}]];a=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId);this.store=a.variablesStore;null!=a.dataKey&&"V"==a.dataKey.t&&(this.fsv=a.dataKey.id)},execSelectionChange:function(){ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId).changeSelection(this.id)},_onFetchComplete:function(){this.inherited(arguments);null!=this.fsv&&this.selection.select(this.store._getItemByIdentity(this.fsv)._0)}})});
//@ sourceMappingURL=VariablesGrid.js.map