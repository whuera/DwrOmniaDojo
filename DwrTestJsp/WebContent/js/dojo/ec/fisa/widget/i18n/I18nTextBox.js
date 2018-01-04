//>>built
require({cache:{"url:ec/fisa/widget/i18n/templates/template.html":'\x3cdiv data-dojo-attach-point\x3d"multilingual_container_node" class\x3d"${styleClass}"\x3e\n\x3ctable cellpadding\x3d"0" cellspacing\x3d"0" border\x3d"0"\x3e\x3ctr\x3e\n\x3ctd\x3e\n\t\x3cdiv style\x3d"float: left;width:auto" data-dojo-attach-point\x3d"_tcn"\x3e\x3c/div\x3e\n\x3c/td\x3e\x3ctd valign\x3d"middle"\x3e\n\t\x3cdiv style\x3d"float: left;" class\x3d"i18nControlBtns" data-dojo-attach-point\x3d"buttons_container_node"\x3e\n\t\x3ctable cellpadding\x3d"0" cellspacing\x3d"0" border\x3d"0"\x3e\x3ctr\x3e\n\t\t\x3ctd\x3e\n\t\t\t\x3cbutton id\x3d"${id}_addLanguageButton_node" data-dojo-type\x3d"dijit.form.Button"\n\t\t\tdata-dojo-attach-point\x3d"addLanguageButton_node"\n\t\t\tclass\x3d"no_selection"\n\t\t\tdata-dojo-attach-event\x3d"onClick:_showTranslation"\n\t\t\ttype\x3d"button" showLabel\x3d"false"\n\t\t\ticonClass\x3d"addLanguage"  ${_disabledExp}  \x3e\x3c/button\x3e\n\t\t\x3c/td\x3e\x3ctd\x3e\n\t\t\t\x3cbutton id\x3d"${id}_removeLanguageButton_node" data-dojo-type\x3d"dijit.form.Button"\n\t\t\tdata-dojo-attach-point\x3d"removeLanguageButton_node" \n\t\t\tclass\x3d"no_selection"\n\t\t\tdata-dojo-attach-event\x3d"onClick:_removeTranslation"\n\t\t\ttype\x3d"button" showLabel\x3d"false"\n\t\t\ticonClass\x3d"removeLanguage" ${_disabledExp}   \x3e\x3c/button\x3e\n\t\t\x3c/td\x3e\x3ctd\x3e\n\t\t\t\x3cbutton id\x3d"${id}_collapseLanguagesButton_node" data-dojo-type\x3d"dijit.form.Button"\n\t\t\tclass\x3d"no_selection"\n\t\t\tdata-dojo-attach-point\x3d"collapseLanguagesButton_node" type\x3d"button"\n\t\t\tdata-dojo-attach-event\x3d"onClick:_toggleCollapsed"\n\t\t\ticonClass\x3d"expandLanguages" showLabel\x3d"false" \x3e\x3c/button\x3e\n\t\t\x3c/td\x3e\n\t\t\x3c/tr\x3e\n\t\t\x3c/table\x3e\n\t\x3c/div\x3e\n\t\x3c/td\x3e\n\t\x3c/tr\x3e\n\t\x3c/table\x3e\n\x3c/div\x3e\n'}});
define("ec/fisa/widget/i18n/I18nTextBox","dojo/_base/kernel dojo/_base/declare dijit/_Widget dijit/_Templated dojo/text!./templates/template.html dijit/form/Button dijit/form/TextBox dojox/lang/functional/object dojo/dom-style dojo/dom-attr dojo/dom dojo/dom-construct dijit/dijit dojo/on dijit/focus ec/fisa/widget/Utils dojo/string ./_base".split(" "),function(f,n,p,q,r,u,v,w,l,h,x,g,m,y,s,t){return n("ec.fisa.widget.i18n.I18nTextBox",[p,q],{supportedLanguages:[],defaultLanguage:"",supportedLanguagesNumber:0,
tapdFieldLenght:0,translationsDivs:null,translationsTextBoxes:null,isoCodes:null,translationMaxLength:0,requestedAction:"",collapsed:!0,actualTranslations:0,actualValue:"",isARoutineField:!1,routineBtId:null,routineFieldId:null,routineActionMode:null,tabId:"",pageScopeId:"",styleClass:"i18nTextBox",widgetsInTemplate:!0,readOnly:!1,_disabledExp:"",textTransform:"",_connections:null,_fovt:null,parentEditableGrid:!1,entityMrId:null,gridId:"",gridSelectedRowIndex:null,parentType:"",visualSize:20,tabIndexField:null,
_tabIndex:0,autho:!1,oldValue:"",templateString:r,inputConstraint:"",gridRealRowIndex:null,fieldId:null,_destroyOnRemove:!0,noImagePath:f.config.fisaContextPath+"/imageNotFound.jpg",onerrorCall:"",constructor:function(a,c){try{this.supportedLanguages=a.supportedLanguages||[],this.defaultLanguage=a.defaultLanguage||"",this.tapdFieldLenght=a.tapdFieldLenght||0,this.requestedAction=a.requestedAction||"",this.fieldId=a.fieldId||"",this.ref=a.ref,this.translationsDivs=[],this.translationsTextBoxes=[],
this.isoCodes=[],this._connections=[],this.onerrorCall="this.src \x3d '"+this.noImagePath+"'"}catch(b){this.logger("No se pudo ejecutar el constructor"),this.logger(b)}},postMixInProperties:function(){!0==this.readOnly&&(this._disabledExp="disabled\x3d'disabled'")},buildRendering:function(){this.inherited(arguments);this._init();this.autho&&(l.set(this._tcn,"border","1px solid #FF0000"),this._ov=this.oldValue.split(String.fromCharCode(255)))},destroy:function(){delete this._fovt;delete this.translationsDivs;
var a=this.translationsTextBoxes;delete this.translationsTextBoxes;dojox.lang.functional.forIn(a,function(a,b){a.destroy(!1)},this);ec.fisa.widget.utils.destroyMultiregisterWidget(this);this.inherited(arguments)},logger:function(a){},_createTranslationTextBox:function(a,c,b){var e=g.create("table",{id:this.id+"_"+a+"_translation",cellpadding:"0",cellspacing:"0",border:"0"},this._tcn),k=g.create("tbody",{id:this.id+"_"+a+"_translation"},e),d=g.create("tr",{id:this.id+"_"+a+"_translation"},k),k=g.create("td",
{},d),d=g.create("td",{},d);h.set(d,"class","i18nTextBoxTranslationTagContainerClass");d=g.create("span",null,d);h.set(d,"class","i18nTextBoxTranslationTagClassImg");g.create("img",{src:f.config.fisaContextPath+"/"+f.config.fisaImages+"/languages/"+a+".png",alt:a,title:a,onerror:this.onerrorCall},d);null!=this.tabIndexField&&(this._tabIndex=this.tabIndexField);d=new m.form.TextBox({value:c,maxLength:this.translationMaxLength,size:this.visualSize,tabIndex:this._tabIndex},a);d.set("trim",!0);"1"==this.textTransform?
(d.set("uppercase",!0),d.textbox.style.textTransform="uppercase"):"2"==this.textTransform?d.set("lowercase",!0):"3"==this.textTransform&&d.set("propercase",!0);d.placeAt(k);null!=this.inputConstraint&&""!=this.inputConstraint&&t.inputConstraint(d,this.inputConstraint);this.autho&&(null!=this._ov&&this._ov.length>b&&this._ov[b]!==c)&&(g.create("br",{},k),c=g.create("span",{style:{color:"#FF0000"}},k),c.innerHTML=dojox.html.entities.encode(this._ov[b]),0==b&&(this._fovt=c,this.collapsed&&l.set(c,"display",
"none")));d.fwId=this.id;this._connectTextBoxEvents(d,b);this.translationsDivs[b]=e;this.translationsTextBoxes[b]=d;this.isoCodes[b]=a;return d},_setTranslations:function(){var a=0,c=null;null!=this.actualValue&&(c=this.actualValue.split(String.fromCharCode(255)));f.forEach(this.supportedLanguages,function(b){if(c&&c[a]){var e=c[a];b=this._createTranslationTextBox(b,e,a++);if(null==e||""==e)b._fStarted=!0;this.actualTranslations=a}},this);0==a&&(this._createTranslationTextBox(this.defaultLanguage,
"",a++)._fStarted=!0,this.actualTranslations=a)},_init:function(){this.supportedLanguagesNumber=this.supportedLanguages.length;this.translationMaxLength=Math.floor(this.tapdFieldLenght/this.supportedLanguagesNumber)},_connectTextBoxEvents:function(a,c){this._connections[c]={kp:null,ch:null};f.isIE&&(this._connections[c].kp=a.connect(a.textbox,"onkeyup",f.hitch(this,this._execChange)));this._connections[c].ch=a.connect(a,"onChange",f.hitch(this,this._execChange))},_execChange:function(){this._upLangValue();
var a=this["notify-combo-id"];if(null!=a&&void 0!=a||!0==this.isARoutineField){var c=this["bt-id"],b=this["field-id"],e=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId);void 0!=e&&null!=e&&e.handleOnChangeComponent(b,c,this.routineActionMode,a,this.isARoutineField,null,this.parentEditableGrid,this.entityMrId,this.gridRealRowIndex)}},_showTranslation:function(a){try{var c=h.get(this.translationsTextBoxes[0],"value");if(null!=c&&0<f.string.trim(c).length&&!this.collapsed&&this.actualTranslations<
this.supportedLanguagesNumber)this.translationsDivs[this.actualTranslations]||(this._createTranslationTextBox(this.supportedLanguages[this.actualTranslations],"",this.actualTranslations)._fStarted=!0),this.actualTranslations++,this.updateRowHeight();else return this.logger("No se puede anadir una traducci\u00f3n."),!1}catch(b){this.logger("Error  anadir una traducci\u00f3n."),this.logger(b)}},_removeTranslation:function(a){if(!this.collapsed&&1<this.actualTranslations){a=this.translationsDivs[this.actualTranslations-
1];var c=this.translationsTextBoxes[this.actualTranslations-1];this._setNotVisible(a);m.byId(c.id).set("value","");this.translationsDivs.splice(this.actualTranslations-1,1);this.isoCodes.splice(this.actualTranslations-1,1);var b=this._connections.splice(this.actualTranslations-1,1);f.forEach(b[0],function(a,b){this.disconnect(a[b].ch);null!=a[b].kp&&this.disconnect(a[b].kp)},this);this.actualTranslations--;this.translationsDivs.splice(this.actualTranslations,1);this.translationsTextBoxes.splice(this.actualTranslations,
1);g.destroy(a);c.destroy(!1);this.actualValue="";for(a=0;a<this.actualTranslations;a++)0!=a&&(this.actualValue+=String.fromCharCode(255)),this.actualValue+=this.translationsTextBoxes[a].get("value");this.updateRowHeight();ec.fisa.widget.utils.programaticChange(s.curNode)}},_collapaseTranslations:function(){try{null!=this._fovt&&this._setNotVisible(this._fovt);for(i=0;i<this.translationsDivs.length;i++)this.isoCodes[i]!=this.defaultLanguage&&1<this.translationsDivs.length?this._setNotVisible(this.translationsDivs[i]):
ec.fisa.widget.utils.disableWidget(this.translationsTextBoxes[i].id);this.updateRowHeight()}catch(a){this.logger(a)}},_expandTranslations:function(){try{dojox.lang.functional.forIn(this.translationsTextBoxes,function(a,b){!0==this.readOnly?ec.fisa.widget.utils.disableWidget(a.id):ec.fisa.widget.utils.enableWidget(a.id)},this);null!=this._fovt&&this._setVisible(this._fovt);for(i=0;i<this.actualTranslations;i++)this._setVisible(this.translationsDivs[i]);this.updateRowHeight()}catch(a){this.logger(a)}},
_toggleCollapsed:function(){this.collapsed?(h.set(this.collapseLanguagesButton_node,"iconClass","colapseLanguages"),this._expandTranslations()):(h.set(this.collapseLanguagesButton_node,"iconClass","expandLanguages"),this._collapaseTranslations());this.collapsed=!this.collapsed},_upLangValue:function(a,c){this.actualValue.split(String.fromCharCode(255));var b="";f.forEach(this.isoCodes,function(a,c){var d=null,d=f.isIE?this.translationsTextBoxes[c].textbox.value:this.translationsTextBoxes[c].get("value");
b+=d;c<this.actualTranslations-1&&(b+=String.fromCharCode(255))},this);this.actualValue=b;this.binding&&this.binding.set("value",this.actualValue)},_setVisible:function(a){l.set(a,"display","block")},_setNotVisible:function(a){l.set(a,"display","none")},_getValueAttr:function(){return this.actualValue},_setValueAttr:function(a,c,b){null===a||void 0===a?a="":"string"!=typeof a&&(a=String(a));this.actualValue=a;var e=this.actualValue.split(String.fromCharCode(255));a=this.oldValue.split(String.fromCharCode(255));
if(e.length<a.length){for(b=a.length-1;b>=e.length;b--)a[b-1]=a[b-1]+String.fromCharCode(255)+a[b];this._ov=a.splice(0,e.length)}if(this.translationsTextBoxes.length<e.length)for(a=this.translationsTextBoxes.length;a<=this.supportedLanguages.length;a++)if(e&&e[a]&&!this.translationsTextBoxes[a]){b=e[a];var g=this._createTranslationTextBox(this.supportedLanguages[a],b,a);if(null==b||""==b)g._fStarted=!0;this.actualTranslations=a+1}0==this.translationsTextBoxes.length&&(this._createTranslationTextBox(this.supportedLanguages[0],
"",0),this.actualTranslations=1);this.translationsTextBoxes&&(f.forEach(this.translationsTextBoxes,function(a,b){a.set("value",e[b],c)},this),this.collapsed="IN"!=this.requestedAction?!1:!0,this._toggleCollapsed())},attachOnChangeEvent:function(a,c,b,e){this.isARoutineField=!0;this.routineBtId=c;this.routineFieldId=b;this.routineActionMode=e},updateRowHeight:function(){ec.fisa.widget.utils.updateGridRowHeight(this.gridSelectedRowIndex,this.gridId)}})});
//@ sourceMappingURL=I18nTextBox.js.map