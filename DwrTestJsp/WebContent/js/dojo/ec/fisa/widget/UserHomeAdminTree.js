//>>built
define("ec/fisa/widget/UserHomeAdminTree","dojo/_base/declare dojo/_base/kernel dojo/dom-construct dijit/Tree ec/fisa/dwr/Store ec/fisa/dwr/proxy/UserHomeAdminDWR dojo/data/ItemFileWriteStore dijit/tree/dndSource ec/fisa/dwr/TreeStoreModel ./_base".split(" "),function(b,d,e,c){return b("ec.fisa.widget.UserHomeAdminTree",[c],{tabId:"",pageScopeId:"",copyOnly:!0,selfAccept:!1,_selectedNode:null,showRoot:!1,dndParams:"onDndDrop itemCreator onDndCancel checkAcceptance checkItemAcceptance dragThreshold betweenThreshold deleteSelectedNodes".split(" "),
dndController:"dijit.tree.dndSource",postMixInProperties:function(){this.inherited(arguments);this.store=new ec.fisa.dwr.Store("UserHomeAdminDWR","viewAvailableTransacctions",this.tabId,this.pageScopeId,[this.pageScopeId],null);this.model=new ec.fisa.dwr.TreeStoreModel({childrenAttrs:["items"],labelAttr:"name",query:{},store:this.store});this.dragThreshold=8;this.betweenThreshold=5;this.persist=!1},checkAcceptance:function(a,b){return!0},checkItemAcceptance:function(a,b,c){return!0},deleteSelectedNodes:function(){return!0},
getIconClass:function(a){return!a||!0===this.store.getValue(a,"leaf")?"itemFolder":"itemLeaf"}})});
//@ sourceMappingURL=UserHomeAdminTree.js.map