//>>built
require({cache:{"url:ec/fisa/widget/TextBox.conf":"{\n\tfisaClassic:{\n\t\ttextCharWidth:11,\n\t\ttextCharHeight:17,\n\t\tdefaultVisualSize:20\n\t},\n\tfisaDesert:{\n\t\ttextCharWidth:11,\n\t\ttextCharHeight:17,\n\t\tdefaultVisualSize:20\n\t}\n\n}"}});
define("ec/fisa/grid/Utils","dojo/_base/kernel dojo/_base/declare dojo/_base/lang ec/fisa/grid/_base dojox/grid/EnhancedGrid ec/fisa/mvc/StatefulModel ec/fisa/widget/MultiregisterLink dojo/text!ec/fisa/widget/TextBox.conf ec/fisa/grid/RowActions ec/fisa/grid/RowActionsDirect ec/fisa/format/Utils ec/fisa/widget/i18n/I18nTextBox ec/fisa/widget/i18n/I18nTextarea ec/fisa/widget/CheckBox ec/fisa/widget/OutputText dojox/lang/functional/object ec/fisa/widget/DateTextBox ec/fisa/widget/EnhancedDateTextBox ec/fisa/widget/TextBox ec/fisa/widget/TextArea ./_base".split(" "),function(t,
w,z,u,A,r,B,x,v,y){t=w("ec.fisa.grid.Utils",null,{textBoxConfig:t.fromJson(x),regexpr:/^(?!.*--CMPLMNT$)/,makeEGControlButtons:function(a,d,c,e,f,g,q,l,b){c=c.grid;return new v({data:a,rowIndex:this.obtainInitialViewableMrIndex(c)+d,viewRowIndex:d,gridId:c.id,editBlocked:c.block.e,deleteBlocked:c.block.d,edit_title:e,delete_title:f,apply_title:g,cancel_title:q,add_title:l,tabIndex:b})},makeEGControlButtonsDirect:function(a,d,c,e,f,g){c=c.grid;return new y({data:a,rowIndex:this.obtainInitialViewableMrIndex(c)+
d,viewRowIndex:d,gridId:c.id,deleteBlocked:c.block.d,delete_title:e,actionMode:f,tabIndex:g})},makeStatusButtons:function(a,d,c,e,f,g,q,l){c=c.grid;return new v({data:a,rowIndex:this.obtainInitialViewableMrIndex(c)+d,viewRowIndex:d,gridId:c.id,editBlocked:c.block.e,deleteBlocked:c.block.d,edit_title:e,delete_title:f,apply_title:g,cancel_title:q,add_title:l})},obtainInitialViewableMrIndex:function(a){return a._layers[0].startIdx},updateRowData:function(a,d,c){if(a.record){d.model&&delete d.model;d.complementModel&&
delete d.complementModel;if(5==a.record.rowSts%10){d.model=new r;d.complementModel=new r;var e=a.record;null!=e&&dojox.lang.functional.forIn(e,function(a,c){this.regexpr.test(c)?d.model.appendObject([c],a,null,null,null,null):d.complementModel.appendObject([c],a,null,null,null,null)},this)}c&&(a.record.rowSts&&d.store.setValue(a.recordId,"rowSts",a.record.rowSts),dojox.lang.functional.forIn(a.record,function(c,e){"rowSts"!=e&&d.store.setValue(a.recordId,e,c)},d))}},newRowDataDirect:function(a,d,c){if(a.record){d.model[d.model.length]=
new r;d.complementModel[d.complementModel.length]=new r;var e=a.record;if(null!=e){var f=d.model[d.model.length-1];dojox.lang.functional.forIn(e,function(a,c){f.appendObject([c],a,null,null,null,null)},this)}c&&(a.record.rowSts&&d.store.setValue(a.recordId,"rowSts",a.record.rowSts),dojox.lang.functional.forIn(a.record,function(c,e){"rowSts"!=e&&d.store.setValue(a.recordId,e,c)},d))}},getMRComponent:function(a,d,c,e,f,g,q,l,b,m){var n=c.grid.getItem(d),n=c.grid.store.getValue(n,"rowSts")%10;return 5==
n?this.getMRComponentEditable(a,d,c,e,f,g,q,l,b,!1,m):a?3==e?a=ec.fisa.controller.utils.getPageController(f,g).findDescription(c.bt,c.field,a):8==e?a=new ec.fisa.widget.CheckBox({fieldId:c.field,value:a,readOnly:!0}):this._formatcolumn(f,g,n,b,a,d,c):!a?8==e?a=new ec.fisa.widget.CheckBox({fieldId:c.field,value:"0",readOnly:!0}):"":a},getMRComponentDirect:function(a,d,c,e,f,g,q,l,b,m){if(null==c.grid.model||void 0==c.grid.model)c.grid.model=[];if(null==c.grid.complementModel||void 0==c.grid.complementModel)c.grid.complementModel=
[];var n=this.obtainInitialViewableMrIndex(c.grid)+d;void 0==c.grid.model[n]&&(c.grid.model[n]=new r({}));void 0==c.grid.complementModel[n]&&(c.grid.complementModel[n]=new r({}));if("QY"==b.actionMode||"DE"==b.actionMode||!0==c.grid.block.e){if(a){if("ec.fisa.grid.FisaFormGrid"===c.grid.declaredClass&&0===b.columnIndex)return'\x3clabel class\x3d"fisaLabel"\x3e'+a+"\x3c/label\x3e";if("ec.fisa.grid.FisaFormGrid"===c.grid.declaredClass&&1==e){d=!1;if(4==b.format||5==b.format||6==b.format)d=!0;return a=
new ec.fisa.widget.OutputText({value:a,numeric:d})}if(3==e)return a=ec.fisa.controller.utils.getPageController(f,g).findDescription(c.bt,c.field,a);if(8==e)return a=new ec.fisa.widget.CheckBox({fieldId:c.field,value:a,readOnly:!0});e=c.grid.getItem(d);e=c.grid.store.getValue(e,"rowSts");return this._formatcolumn(f,g,e,b,a,d,c)}if(!a)return""}else return this.getMRComponentEditable(a,d,c,e,f,g,q,l,b,!0,m)},getMRComponentEditable:function(a,d,c,e,f,g,q,l,b,m,n){var r=c.grid.getItem(d),k=c.grid.store.getValue(r,
"rowSts"),p=this.obtainInitialViewableMrIndex(c.grid)+d,h=null;1<k.length&&(h=k.charAt(k.length-2));1==h?h="IN":2==h&&(h="UP");null==h&&!0==m&&(h=b.actionMode);k=null;if(!1==m)k=c.grid.model.getValue([c.field]);else if(void 0!=a&&null!=a)k=a;else{var s=c.grid.model[p];void 0!=s&&(s=s.getValue([c.field]),void 0!=s&&null!=s&&(k=s))}r=c.grid.store.getValue(r,c.field);if("ec.fisa.grid.FisaFormGrid"===c.grid.declaredClass&&0===b.columnIndex)return'\x3clabel class\x3d"fisaLabel"\x3e'+r+"\x3c/label\x3e";
if(1==e)return 1==b.multiLanguage?(a={"bt-id":c.bt,tabId:f,pageScopeId:g,fieldId:c.field,"field-id":c.field,defaultLanguage:b.currentLanguage,supportedLanguages:b.supportedLanguages,tapdFieldLenght:b.tapdFieldLenght,requestedAction:b.requestedAction,parentEditableGrid:!0,"notify-combo-id":b.notifyComboId,tdParentWidth:b.tdParentWidth,gridId:l,gridSelectedRowIndex:d,entityMrId:b.entityId,gridRealRowIndex:p,tabIndexField:n,parentType:c.ptype},null!=b.visualSize&&(a.visualSize=b.visualSize),b.textTransform&&
(a.textTransform=b.textTransform),f=new ec.fisa.widget.i18n.I18nTextBox(a)):(a={"bt-id":c.bt,fieldId:c.field,"field-id":c.field,maxLength:b.tapdFieldLenght,requestedAction:b.requestedAction,btId:b.btId,gridSelectedRowIndex:d,"notify-combo-id":b.notifyComboId,tdParentWidth:b.tdParentWidth,parentEditableGrid:!0,tabId:f,pageScopeId:g,entityMrId:b.entityId,gridId:l,format:b.format,tabIndexField:n,gridRealRowIndex:p},null!=b.visualSize&&(a.visualSize=b.visualSize),b.textTransform&&(a.textTransform=b.textTransform),
f=new ec.fisa.widget.TextBox(a),a=!0,"IN"==h?a=b.ftmDisabledIn:"UP"==h&&(a=b.ftmDisabledUp),b.insertAllowed=!0!=a,b.updateAllowed=!0!=a,this._defineReadOnly(f,h,b.insertAllowed,b.updateAllowed)),this._setInitValFromModel(c,m,d,k,f.id,p),f;if(2==e)return a="",""===k||(null==k||"undefined"===typeof k)||(a=k),a={selectLabel:"Seleccione ...","fisa-tab-id":f,"fisa-page-scope-id":g,"bt-id":c.bt,"qt-id":q,qtTitle:b.qtTitle,fieldId:c.field,"field-id":c.field,parentEditableGrid:!0,entityMrId:b.entityId,"notify-combo-id":b.notifyComboId,
tdParentWidth:b.tdParentWidth,gridId:l,gridSelectedRowIndex:d,parentType:c.ptype,editable:b.editAllowed,"initial-value":a,actionMode:b.actionMode,gridRealRowIndex:p,tabIndexField:n,"lov-height":b.lovHeight,"lov-width":b.lovWidth,"lov-info-mode":b.lovInfoMode,hasFieldRoutineOrPolicy:"false"},null!=b.visualSize&&(a.visualSize=b.visualSize),b.textTransform&&(a.textTransform=b.textTransform),f=new ec.fisa.lov.ListOfValues(a),a=!0,"IN"==h?a=b.ftmDisabledIn:"UP"==h&&(a=b.ftmDisabledUp),b.insertAllowed=
!0!=a,b.updateAllowed=!0!=a,this._defineReadOnly(f,h,b.insertAllowed,b.updateAllowed),this._setInitValFromModel(c,m,d,k,f.id,p),f;if(3==e)return a={qtId:q,"qt-id":q,fieldId:c.field,value:k,tabId:f,pageScopeId:g,parentEditableGrid:!0,entityMrId:b.entityId,"notify-combo-id":b.notifyComboId,parentGridId:l,tdParentWidth:b.tdParentWidth,"field-id":c.field,gridRealRowIndex:p,tabIndexField:n,gridId:l,"bt-id":c.bt},null!=b.visualSize&&(a.visualSize=b.visualSize),f=new ec.fisa.widget.Select(a),a=!0,"IN"==
h?a=b.ftmDisabledIn:"UP"==h&&(a=b.ftmDisabledUp),b.insertAllowed=!0!=a,b.updateAllowed=!0!=a,this._defineReadOnly(f,h,b.insertAllowed,b.updateAllowed),this._setInitValFromModel(c,m,d,k,f.id,p),f;if(5==e)return a={fieldId:c.field,fisaFormat:b.format,fisaFormatPattern:b.formatPattern,"fisa-tab-id":f,"field-id":c.field,fieldId:c.field,"fisa-page-scope-id":g,"bt-id":c.bt,parentEditableGrid:!0,entityMrId:b.entityId,"notify-combo-id":b.notifyComboId,tdParentWidth:b.tdParentWidth,gridRealRowIndex:p,tabIndexField:n,
gridId:l,baseClass:"dijitTextBox dijitComboBox dijitDateTextBox",inputInvalidLabel:b.inputInvalidLabel},null!=b.visualSize&&(a.visualSize=b.visualSize),f=new ec.fisa.widget.DateTextBox(a),a=!0,"IN"==h?a=b.ftmDisabledIn:"UP"==h&&(a=b.ftmDisabledUp),b.insertAllowed=!0!=a,b.updateAllowed=!0!=a,this._defineReadOnly(f,h,b.insertAllowed,b.updateAllowed),this._setInitValFromModel(c,m,d,k,f.id,p),f;if(7==e)return 1==b.multiLanguage?(a={"bt-id":c.bt,tabId:f,pageScopeId:g,fieldId:c.field,"field-id":c.field,
defaultLanguage:b.currentLanguage,supportedLanguages:b.supportedLanguages,tapdFieldLenght:b.tapdFieldLenght,requestedAction:b.requestedAction,parentEditableGrid:!0,"notify-combo-id":b.notifyComboId,tdParentWidth:b.tdParentWidth,gridId:l,gridSelectedRowIndex:d,entityMrId:b.entityId,gridRealRowIndex:p,tabIndexField:n,parentType:c.ptype},null!=b.visualSize&&(a.visualSize=2025),b.textTransform&&(a.textTransform=b.textTransform),f=new ec.fisa.widget.i18n.I18nTextarea(a)):(a={"bt-id":c.bt,fieldId:c.field,
"field-id":c.field,maxLength:b.tapdFieldLenght,requestedAction:b.requestedAction,btId:b.btId,gridSelectedRowIndex:d,"notify-combo-id":b.notifyComboId,tdParentWidth:b.tdParentWidth,parentEditableGrid:!0,tabId:f,pageScopeId:g,entityMrId:b.entityId,gridId:l,format:b.format,tabIndexField:n,gridRealRowIndex:p,textAreaBaseClass:b.textAreaBaseClass},null!=b.visualSize&&(a.visualSize=2025),b.textTransform&&(a.textTransform=b.textTransform),f=new ec.fisa.widget.TextArea(a)),a=!0,"IN"==h?a=b.ftmDisabledIn:
"UP"==h&&(a=b.ftmDisabledUp),b.insertAllowed=!0!=a,b.updateAllowed=!0!=a,this._defineReadOnly(f,h,b.insertAllowed,b.updateAllowed),this._setInitValFromModel(c,m,d,k,f.id,p),f;if(8==e)return a={fieldId:c.field,"fisa-tab-id":f,"field-id":c.field,fieldId:c.field,"fisa-page-scope-id":g,"bt-id":c.bt,parentEditableGrid:!0,"notify-combo-id":b.notifyComboId,tdParentWidth:b.tdParentWidth,gridRealRowIndex:p,tabIndex:n,gridId:l,inputInvalidLabel:b.inputInvalidLabel},f=new ec.fisa.widget.CheckBox(a),this._defineReadOnly(f,
h,b.insertAllowed,b.updateAllowed),this._setInitValFromModel(c,m,d,k,f.id,p),f;if(0==e)return f=new ec.fisa.widget.OutputText({fieldId:c.field}),k=a,""===k||(null==k||"undefined"===typeof k)||f.set("value",k),this._setInitValFromModel(c,m,d,k,f.id,p),f;if(30==e)return a={"fisa-tab-id":f,"fisa-page-scope-id":g,"bt-id":c.bt,"qt-id":q,fieldId:c.field,"field-id":c.field,actionMode:b.actionMode,parentEditableGrid:!0,entityMrId:b.entityId,"notify-combo-id":b.notifyComboId,baseClass:"dijitTextBox dijitComboBox dijitDateTextBox",
tdParentWidth:b.tdParentWidth,tabIndex:n,gridRealRowIndex:p,gridId:l,fisaFormat:b.format,fisaFormatPattern:b.formatPattern,inputInvalidLabel:b.inputInvalidLabel},null!=b.visualSize&&(a.visualSize=b.visualSize),f=new ec.fisa.widget.EnhancedDateTextBox(a),a=!0,"IN"==h?a=b.ftmDisabledIn:"UP"==h&&(a=b.ftmDisabledUp),b.insertAllowed=!0!=a,b.updateAllowed=!0!=a,this._defineReadOnly(f,h,b.insertAllowed,b.updateAllowed),this._setInitValFromModel(c,m,d,k,f.id,p),f},_setInitValFromModel:function(a,d,c,e,f,
g){c=[a.field];!1===d?(d=a.grid.model,this.regexpr.test(a.field)||(d=a.grid.complementModel)):(d=a.grid.model[g],this.regexpr.test(a.field)||(d=a.grid.complementModel[g]),a.grid._fr&&d.contains(c)&&(e=d.getValue(c)));d.removeObject(c);d.appendObject(c,e,f,"value",null,null)},_formatcolumn:function(a,d,c,e,f,g,q){return e.hasLink?(c=f,0!=e.format&&(c=ec.fisa.format.utils.formatQtColumn(e.format,e.formatPattern,f)),this.formatLink(e.btId,e.fieldId,a,d,e.actionMode,e.entityId,e.tabIndex,c,g,q)):ec.fisa.grid.utils.obtainMultiRegisterFormatValue(e,
f)},loadSelectData:function(a,d,c){return ec.fisa.controller.utils.getPageController(a,d).loadSelectDataCmp(c)},formatLink:function(a,d,c,e,f,g,q,l,b,m){m=m.grid.store.getValue(m.grid.getItem(b),d+"--RTNLNK",null);return null!=m&&"1"===m?new ec.fisa.widget.MultiregisterLink({btId:a,fieldId:d,tabId:c,pageScopeId:e,actionMode:f,rowIndex:b,entityId:g,btPos:q,label:l}):l},_defineReadOnly:function(a,d,c,e){"IN"===d?a.set("enabled",c):"UP"===d&&a.set("enabled",e)},getNonEditableComponent:function(a,d,c,
e){return""!=e.imageLinkRoutine?ec.fisa.grid.utils.formatLink(e.btId,e.fieldId,e.tabId,e.pageScopeId,e.actionMode,e.entityId,e.tabIndex,a,d,c):"0"==e.formType?"\x3cb\x3e"+a+"\x3c/b\x3e":"8"==e.formType?new ec.fisa.widget.CheckBox({fieldId:c.field,value:a,readOnly:!0}):void 0!=a&&null!=a?ec.fisa.grid.utils.obtainMultiRegisterFormatValue(e,a):""},obtainMultiRegisterFormatValue:function(a,d){return"Date"==a.dataType||"DateTime"==a.dataType?'\x3cdiv style\x3d"text-align:center;"\x3e '+ec.fisa.format.utils.getStrDateByFormatIdStrDate(d,
a.format)+"\x3c/div\x3e":"BigDecimal"==a.dataType?'\x3cdiv style\x3d"text-align:right;"\x3e '+ec.fisa.format.utils.formatNumberByFormatType(d,a.format)+"\x3c/div\x3e":d},formatFormGridCell:function(a){0==a.index?a.customClasses.push("fisaComponentGridLeftCell"):1==a.index&&a.customClasses.push("fisaComponentGridRightCell")}});u.utils=new t;return ec.fisa.grid.utils=u.utils});
//@ sourceMappingURL=Utils.js.map