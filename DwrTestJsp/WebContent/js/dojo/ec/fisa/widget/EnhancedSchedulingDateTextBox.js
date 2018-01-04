//>>built
define("ec/fisa/widget/EnhancedSchedulingDateTextBox","dijit/form/DateTextBox dojo/_base/declare ec/fisa/format/Utils ec/fisa/widget/Utils dijit/Calendar dojo/date/locale dojo/_base/lang dijit/_HasDropDown dojo/date dojo/number ./_base".split(" "),function(h,k,p,q,l,e,g,m,f,n){return k("ec.fisa.widget.EnhancedSchedulingDateTextBox",[h],{popupClass:l,_destroyOnRemove:!0,minDate:"",maxDate:"",_oldValue:null,openOnClick:!1,valueInitialCalendar:null,inputInvalidLabel:"",skipValidation:!0,btController:null,
decWldcrd:null,typeWldcrd:null,fullWldcrd:null,startup:function(){this.inherited(arguments)},postMixInProperties:function(){this.decWldcrd=/[0-9\-]+/g;this.typeWldcrd=/[dmyDMY]/g;this.fullWldcrd=/[0-9\-]+[dmyDMY]/g;this.constraints||(this.constraints={});delete this.constraints.max;this.inherited(arguments);this.constraints.datePattern||(this.constraints.datePattern="dd/MM/yyyy");this.constraints.selector||(this.constraints.selector="date");this.btController=ec.fisa.controller.utils.getPageController(this["fisa-tab-id"],
this["fisa-page-scope-id"]);if(this.minDate&&""!=this.minDate)this.constraints.minDate=this.minDate;else if(this.btController.processDate){var a=dojo.date.locale.format(this.btController.processDate,{datePattern:"yyyy-MM-dd",selector:"date"});this.constraints.minDate=a}this.constraints.min=this.constraints.minDate;this.maxDate&&""!=this.maxDate&&(this.constraints.maxDate=this.maxDate)},_fisaAddDate:function(a){var c=new String(a),c=c.replace(this.typeWldcrd,"");a=new String(a);a=a.toLowerCase();a=
a.replace(this.decWldcrd,"");var b="day";"m"==a?b="month":"y"==a&&(b="year");return f.add(new Date,b,n.parse(c))},validator:function(a,c){if(!0===this.focused)return!0;if(!0==this.skipValidation)return this.skipValidation=!1,!0;if(""==a)return!0;void 0!=this.btController.messagesPanelId&&null!=this.btController.messagesPanelId&&dijit.byId(this.btController.messagesPanelId).clearAllMessages();var b=null;if("string"==typeof a){if(0==a.search(this.fullWldcrd))return b=this._fisaAddDate(a),this._setValueAttr(b),
!0;b=e.parse(a,{datePattern:this.constraints.datePattern,selector:this.constraints.selector,locale:"en"})}if(!0==this._isInvalidDate(b))return this.handleErrorMsg(),!1;if(this._oldValue===a)return!0;if(void 0!=this.constraints.minDate&&null!=this.constraints.minDate){var d=e.parse(this.constraints.minDate,{datePattern:"yyyy-MM-dd",selector:this.constraints.selector,locale:"en"});if(-1===f.compare(b,d,"date"))return this.handleErrorMsg(),!1}this._oldValue=a;if(this.dropDown&&null!=this.dropDown.value){if(!f.compare(this.dropDown.value,
b,this._selector))return!0;this.dropDown.destroyRecursive();delete this.dropDown}return!0},validate:function(a){var c=this.disabled||this.isValid(a);c&&(this._maskValidSubsetError=!0);var b=this._isEmpty(this.textbox.value),d=!c&&a&&this._isValidSubset();this._set("state",c?"":((!this._hasBeenBlurred||a)&&b||d)&&this._maskValidSubsetError?"Incomplete":"Error");this.focusNode.setAttribute("aria-invalid",c?"false":"true");return c},handleErrorMsg:function(){var a={summary:this.inputInvalidLabel+" "+
this.displayedValue,detail:"",level:{level:4E4}},c=ec.fisa.controller.utils.getPageController(this["fisa-tab-id"],this["fisa-page-scope-id"]+"_resourceIn");void 0!=c.messagesPanelId&&null!=c.messagesPanelId&&dijit.byId(btController.messagesPanelId).clearAllMessages();c.updateMsgsPanel([a]);this.skipValidation=!0;this._oldValue="";this.set("value","")},openDropDown:function(a){this.disabled=!0;this.dropDown&&this.dropDown.destroy();var c=g.isString(this.popupClass)?g.getObject(this.popupClass,!1):
this.popupClass,b=this,d=this.get("value");this.valueInitialCalendar=this.constraints.minDate?ec.fisa.format.utils.parseLongDate(this.constraints.minDate.concat(" 00:00:00.0")):this.dropDownDefaultValue;this.dropDown=new c({onChange:function(a){b.set("value",a,!0)},id:this.id+"_popup",dir:b.dir,lang:b.lang,value:d,currentFocus:!this._isInvalidDate(d)?d:this.valueInitialCalendar,constraints:b.constraints,filterString:b.filterString,datePackage:b.datePackage,isDisabledDate:function(a){return!b.rangeCheck(a,
b.constraints)}});m.prototype.openDropDown.apply(this,arguments);this.disabled=!1},_setValueAttr:function(a,c,b){var d;"string"==typeof a&&(a=ec.fisa.format.utils.parseLongDate(a));null!=a&&(void 0!==a&&""!=a)&&(d=e.format(a,{datePattern:this.constraints.datePattern,selector:this.constraints.selector,locale:"en"}));d==this._oldValue&&(c=!1);!0==this._isInvalidDate(d)&&(this._oldValue=d);this.inherited(arguments)},_setEnabledAttr:function(a){null!=a&&(a?ec.fisa.widget.utils.enableWidget(this):ec.fisa.widget.utils.disableWidget(this))},
_getEnabledAttr:function(){return ec.fisa.widget.utils.isEnabled(this)}})});
//@ sourceMappingURL=EnhancedSchedulingDateTextBox.js.map