//>>built
require({cache:{"url:ec/fisa/mobile/widget/templates/BtActionButton.html":'\x3cdiv\x3e\n\t\x3cdiv dojoType\x3d"dojox.mobile.Button"  \n\t\tdata-dojo-attach-point\x3d"_componentNode"\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("ec/fisa/mobile/widget/BtSequenceActionButton","dijit/_Widget dijit/_Templated dojo/text!./templates/BtActionButton.html dojo/_base/declare ./_MvcMixin dojox/mobile/Button ./_base".split(" "),function(a,b,c,d,f,e){return d("ec.fisa.mobile.widget.BtSequenceActionButton",[a,b,e],{fisatabid:"",fisapageid:"",label:"",tabIndex:null,next_step:"",seq_id:"",buttonActionType:0,is_last_bt:!1,has_documents:null,show_documents:null,has_confirmation_bt:!1,sequence_mode:"",show_confirmation:null,previous_button:!1,
ispopup:!1,is_sequence:!1,hold_button:!1,next_button:!1,accept_button:!1,_componentNode:null,controller:null,templateString:c,widgetsInTemplate:!0,postMixInProperties:function(){this.inherited(arguments)},buildRendering:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments);(this.controller=ec.fisa.controller.utils.getPageController(this.fisatabid,this.fisapageid))&&("cancel"==this["fisa-action-id"]||"closeBt"==this["fisa-action-id"])&&this.controller.addControllerRef(this);
this._componentNode.on("click",dojo.hitch(this,this.onClick))},onClick:function(){this.controller=ec.fisa.controller.utils.getPageController(this.fisatabid,this.fisapageid);switch(this.buttonActionType){case 1:this.controller.printPage(this);break;case 2:this.controller.sequenceNextAction(this,!1);break;case 3:this.ispopup?this.controller.execActionPU(this):this.controller.execAction(this);break;case 4:this.controller.execAction(this);break;case 5:this.controller.sequenceNextAction(this);break;case 6:this.controller.sequenceNextAction(this,
!0)}}})});
//@ sourceMappingURL=BtSequenceActionButton.js.map