//>>built
define("ec/fisa/widget/SimpleDateTextBox",["dojo/_base/declare","dijit/form/DateTextBox"],function(b,c){return b("ec.fisa.widget.SimpleDateTextBox",c,{_setValueAttr:function(a,b,c){void 0!==a&&("string"==typeof a&&""!=a&&(a=stamp.fromISOString(a)),this._isInvalidDate(a)&&(a=null),a instanceof Date&&!(this.dateClassObj instanceof Date)&&(a=new this.dateClassObj(a)));this.inherited(arguments);this.value instanceof Date&&(this.filterString="");this.dropDown&&this.dropDown.set("value",a,!1)}})});
//@ sourceMappingURL=SimpleDateTextBox.js.map