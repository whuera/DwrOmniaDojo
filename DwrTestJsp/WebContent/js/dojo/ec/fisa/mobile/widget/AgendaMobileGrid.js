//>>built
define("ec/fisa/mobile/widget/AgendaMobileGrid","dojo/_base/declare dojo/_base/kernel ec/fisa/mobile/widget/Grid dojox/mobile/TabBar dojox/mobile/TabBarButton dojo/dom-construct ./_base".split(" "),function(a,e,c,f,g,h){return a("ec.fisa.mobile.widget.AgendaMobileGrid",[c],{fisatabid:"",fisapageid:"",constructor:function(d,b,a){this.btId=d;this.fisatabid=b;this.fisapageid=a},postMixInProperties:function(){this.inherited(arguments)},attachActions:function(a,b){},startup:function(){this.inherited(arguments);
ec.fisa.controller.utils.getPageController(this.fisatabid,this.fisapageid).agendaDataGrid=this.id},buildRendering:function(){this.inherited(arguments)},destroy:function(){this.inherited(arguments)},getFisaStore:function(){return ec.fisa.controller.utils.getPageController(this.fisatabid,this.fisapageid).store}})});
//@ sourceMappingURL=AgendaMobileGrid.js.map