//>>built
require({cache:{"url:ec/fisa/widget/rules/templates/Condition.html":'\x3ctr conditionCode\x3d"${conditionCode}"\x3e\n\t\x3ctd  class\x3d"${_classValue}" \x3e\n\t\t\x3cdiv dojoType\x3d"dijit.form.TextBox"  \n\t\tdata-dojo-attach-point\x3d"_componentField"\n\t\treadonly  style\x3d"width:140px;"  \x3e\x3c/div\x3e\n\t\x3c/td\x3e\n\t\x3ctd  class\x3d"${_classValue}"\x3e\n\t\t\x3cselect dojoType\x3d"dijit.form.Select" \n\t\tdata-dojo-attach-point\x3d"_componentOperator"\n\t\t style\x3d"width:140px" ${_disabledExp} \x3e\x3c/select\x3e\n\t\x3c/td \x3e\n\t\x3ctd class\x3d"${_classValue}"\x3e\n\t\t\x3cdiv dojoType\x3d"${_valueCmpType}"\n\t\t\tdata-dojo-attach-point\x3d"_componentValue1"\n\t\t\t${_readOnlyExp}  ${_baseClassExp}  ${_isNumericExp} ${_visualSizeExp} ${_showComplementExp}\n\t\t\tfisa-tab-id\x3d\'${tabId}\' fisa-page-scope-id\x3d\'${pageScopeId}\' tabId\x3d\'${tabId}\'  pageScopeId\x3d\'${pageScopeId}\' \x3e\x3c/div\x3e\n\t\t\n\t\x3c/td\x3e\n\t\x3ctd\x3e\n\t\t\x3cdiv dojoType\x3d"ec.fisa.widget.OutputText"\n\t\tdata-dojo-attach-point\x3d"_componentSeparator"\n\t\t\t  style\x3d"width:5px;"\x3e\x3c/div\x3e\n\t\x3c/td\x3e\n\t\x3ctd class\x3d"${_classValue}" \x3e\n\t\t\x3cdiv dojoType\x3d"${_valueCmpType}"\n\t\t\tdata-dojo-attach-point\x3d"_componentValue2"\n\t\t\t${_readOnlyExp}  ${_baseClassExp}  ${_isNumericExp} ${_visualSizeExp} ${_showComplementExp}\n\t\t\tfisa-tab-id\x3d\'${tabId}\' fisa-page-scope-id\x3d\'${pageScopeId}\' tabId\x3d\'${tabId}\'  pageScopeId\x3d\'${pageScopeId}\'\x3e\x3c/div\x3e\n\t\t\n\t\x3c/td\x3e\n\n\t\x3ctd \x3e\n\t\t\x3cbutton  dojoType\x3d"dijit.form.Button" \n\t\t\tdata-dojo-attach-point\x3d"_componentDeleteBotton"\n\t\t\ticonClass \x3d \'imgDelete\' baseClass\x3d"fisaGridButton" showLabel\x3d"false"  ${_disabledExp}  \x3e\x3c/button\x3e\n\t\x3c/td\x3e\t\n\t\n\x3c/tr\x3e'}});
define("ec/fisa/widget/rules/Condition","dojo/_base/kernel dojo/_base/declare dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/on dijit/TitlePane ec/fisa/widget/Link dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/text!./templates/Condition.html ec/fisa/widget/DateTextBox ec/fisa/widget/rules/RulesComponent dojox/lang/functional/object ./_base dijit/form/MultiSelect ec/fisa/widget/TextBox".split(" "),function(e,g,h,k,l,n,p,q,r,s,f,m){return g("ec.fisa.widget.rules.Condition",
[h,k,l],{_classValue:"border-top:4px solid transparent;color:#1c75bc;padding-top:13px",rulesComponentId:null,tabId:null,pageScopeId:null,ruleTableId:null,ruleConstainer:null,ruleIndex:null,item:{},fieldType:null,conditionCode:null,conditionIndex:null,valIdx:null,readonly:!1,_disabledExp:"",_readOnlyExp:"",_valueCmpType:"ec.fisa.widget.TextBox",_baseClassExp:"",_visualSizeExp:"",_isNumericExp:"",_showComplementExp:"",_componentField:null,_componentOperator:null,_componentValue1:null,_componentSeparator:null,
_componentValue2:null,_componentDeleteBotton:null,templateString:m,postMixInProperties:function(){var a=this.ruleContainer;this.ruleTableId=a.id;this.ruleIndex=e.getAttr(a,"ruleindex");this.valIdx=e.getAttr(a,"val-idx");delete this.ruleContainer;null==this.valIdx&&(this.conditionIndex=dijit.byId(this.rulesComponentId).numberOfConditionsForRuleIndex[this.ruleIndex],this.conditionCode=this._getConditionCode(),dijit.byId(this.rulesComponentId).numberOfConditionsForRuleIndex[this.ruleIndex]=dijit.byId(this.rulesComponentId).numberOfConditionsForRuleIndex[this.ruleIndex]+
1);!0==dijit.byId(this.rulesComponentId).readOnly&&(this.readonly=!0,this._disabledExp="disabled");if(null==this.item.qtItems)switch(this.item.dbDataType){case "BigDecimal":this._valueCmpType="ec.fisa.widget.TextBox";this._isNumericExp="numeric\x3dtrue";this._textboxBaseClass="textboxBaseClass\x3d'dijitTextBox'";this._visualSizeExp="visualSize\x3d10";this._readOnlyExp="readOnlyValue\x3d"+this.readonly;this._showComplementExp="showComplement\x3dfalse";break;case "Date":case "DateTime":this._valueCmpType=
"ec.fisa.widget.DateTextBox";this._textboxBaseClass="baseClass\x3d'dijitTextBox dijitComboBox dijitDateTextBox'";this._visualSizeExp="visualSize\x3d15";this._readOnlyExp="readOnly\x3d"+this.readonly;break;default:this._valueCmpType="ec.fisa.widget.TextBox",this._isNumericExp="numeric\x3dfalse",this._textboxBaseClass="textboxBaseClass\x3d'dijitTextBox'",this._visualSizeExp="visualSize\x3d10",this._readOnlyExp="readOnlyValue\x3d"+this.readonly,this._showComplementExp="showComplement\x3dfalse"}else this._valueCmpType=
"dijit.form.MultiSelect"},buildRendering:function(){this.inherited(arguments);this._setAttributesForFieldComponent();this._setAttributesForOperatorComponent();this._setAttributesForValueComponent(this._componentValue1,0);this._setAttributesForSeparatorComponent();this._setAttributesForValueComponent(this._componentValue2,1)},_setAttributesForFieldComponent:function(){this._componentField.set("value",this.item.fieldName);this._componentField.set("ruleindex",this.ruleIndex);this._componentField.set("conditionindex",
this.conditionIndex)},_setAttributesForOperatorComponent:function(){var a=this._filterOperatorsForConditionByFieldDbDataType(this.item.dbDataType);this._componentOperator.set("options",a);this._componentOperator.set("ruleindex",this.ruleIndex);this._componentOperator.set("conditionindex",this.conditionIndex);this._componentOperator.set("value",this.item.operator);null!=this.item.conditionEnable&&""!==this.item.conditionEnable&&this._componentOperator.set("readOnly","1"==this.item.conditionEnable)},
_setAttributesForSeparatorComponent:function(){this._componentSeparator.set("value","\x26nbsp;-\x26nbsp;")},_setAttributesForValueComponent:function(a,b){a.set("ruleIndex",this.ruleIndex);a.set("conditionindex",this.conditionIndex);null!=this.item.qtItems&&e.forEach(this.item.qtItems,function(b){var c=e.doc.createElement("option");c.innerHTML=b.label;c.value=b.value;a.containerNode.appendChild(c)},this);null!=this.item.qtItems?void 0!=this.item.value&&(null!=this.item.value&&0<this.item.value.length)&&
a.set("value",this.item.value):void 0!=this.item.value&&(null!=this.item.value&&this.item.value.length>=b+1)&&a.set("value",this.item.value[b])},startup:function(){this.inherited(arguments);this._componentOperator.connect(this._componentOperator,"onChange",e.hitch(this,function(a){this._onChangeOperator(a)}));this._onChangeOperator();!1==dijit.byId(this.rulesComponentId).readOnly&&this._componentDeleteBotton.connect(this._componentDeleteBotton,"onClick",e.hitch(this,this._deleteCondition));dijit.byId(this.rulesComponentId).conditionsArray[this.ruleIndex][this.conditionIndex]=
{conditionId:this.id,fieldId:this.item.id,btId:this.item.btId,fieldType:this.fieldType,fieldNameComponentId:this._componentField.id,operatorComponentId:this._componentOperator.id,value1ComponentId:this._componentValue1.id,separatorComponentId:this._componentSeparator.id,value2ComponentId:this._componentValue2.id,deleteButtonComponentId:this._componentDeleteBotton.id}},_getValueAttr:function(){},_setValueAttr:function(a,b,d){},_onChangeOperator:function(a){if(void 0==a||null==a)a=this._componentOperator.get("value");
a&&("8"==a?this._componentValue1.set("multiple",!0):this._componentValue1.set("multiple",!1),"7"==a?this._showComponents():this._hideComponents())},_hideComponents:function(){f.set(this._componentSeparator.domNode,"visibility","hidden");f.set(this._componentValue2.domNode,"visibility","hidden")},_showComponents:function(){f.set(this._componentSeparator.domNode,"visibility","visible");f.set(this._componentValue2.domNode,"visibility","visible")},_filterOperatorsForConditionByFieldDbDataType:function(a){var b=
[],d;for(d in dijit.byId(this.rulesComponentId).operators){var c=dijit.byId(this.rulesComponentId).operators[d];switch(a){case "String":("1"==c.value||"2"==c.value)&&b.push(c);"8"==c.value&&null!=this.item.qtItems&&b.push(c);break;case "BigDecimal":b.push(c);break;case "Date":case "DateTime":"8"!=c.value&&b.push(c)}}return b},_getConditionCode:function(){return this.ruleTableId+"_cond"+this.conditionIndex},_deleteCondition:function(){var a=dijit.byId(this.rulesComponentId).createTableBodyRuleId(this.ruleIndex),
a=e.byId(a),b=this._getConditionCode();if(null!=a.rows&&0<a.rows.length)for(var d=0,d=0;d<a.rows.length;d++)if(b==e.getAttr(a.rows[d],"conditioncode")){b=dijit.byId(this.rulesComponentId);a.deleteRow(d);this.destroyCondition();delete b.conditionsArray[this.ruleIndex][this.conditionIndex];break}},destroyCondition:function(){this._componentField.destroy(!1);this._componentOperator.destroy(!1);this._componentValue1.destroy(!1);this._componentSeparator.destroy(!1);this._componentValue2.destroy(!1);this._componentDeleteBotton.destroy(!1);
this.destroy(!1)},enableCondition:function(a){this._componentOperator.set("disabled",a);this._componentValue1.set("disabled",a);this._componentValue2.set("disabled",a);this._componentDeleteBotton.set("disabled",a)}})});
//@ sourceMappingURL=Condition.js.map