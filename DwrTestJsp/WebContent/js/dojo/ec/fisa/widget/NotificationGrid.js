//>>built
define("ec/fisa/widget/NotificationGrid","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/connect dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ec/fisa/grid/EnhancedGrid dojox/grid/enhanced/plugins/IndirectSelection dojox/grid/EnhancedGrid".split(" "),function(d,f,h,k,l,m,n,p,q,g){return f("ec.fisa.widget.NotificationGrid",[g],{tabId:"",pageScopeId:"",parentFisaPageScopeId:"",parentBtId:"",parentFieldId:"",parentWidgetId:"",onlyRead:!1,label:"",_onSelectionUpdate:!1,
fsv:null,isMeans:!1,labelRole:"",postCreate:function(){this.inherited(arguments);var a=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId);this.isMeans?a.meansDataGrid=this:a.listUserDataGrid=this},postMixInProperties:function(){this.inherited(arguments);var a={width:"10%",styles:"text-align: center;"};this.plugins?this.plugins.indirectSelection=a:this.plugins={indirectSelection:a};this.autoHeight=!0;this.selectable=!this.onlyRead;a=ec.fisa.controller.utils.getPageController(this.tabId,
this.pageScopeId);this.isMeans?(this.structure=[[{name:this.label,field:"value",width:"100%"},{name:"defaultId",field:"default",width:"100%",hidden:!0}]],this.store=a.meanStore):(this.structure=[[{name:this.label,field:"value",width:"50%"},{name:this.labelRole,field:"role",width:"50%"}]],this.store=a.userStore)},execSelectionChange:function(){ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId).obtenerSeleccionados()},startup:function(){this.inherited(arguments)},_onFetchComplete:function(){this.inherited(arguments);
var a=[],b=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId);selectionList=this.isMeans?b.selectMeans:b.selectUsers;d.forEach(selectionList,function(b,d){if("indexOf"!=b){var e=this.getItemIndex(b.toString());this.onlyRead?a.push(e):this.selection.addToSelection(e)}},this);if(this.onlyRead)for(i=0;i<this.rowCount;i++)b=this._indexValue(a,i),this.rowSelectCell.setDisabled(i,!0),0>b?this.rowSelectCell.toggleRow(i,!1):this.rowSelectCell.toggleRow(i,!0);else if(this.isMeans)for(i=
0;i<this.rowCount;i++)b=this.getItem(i),b=this.getCell(2).get(i,b),"1"==b&&(this.rowSelectCell.setDisabled(i,!0),this.rowSelectCell.toggleRow(i,!0));!this.onlyRead&&this.isMeans&&this.connect(this,"onSelectionChanged",this.execSelectionChange)},_indexValue:function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return c;return-1}})});
//@ sourceMappingURL=NotificationGrid.js.map