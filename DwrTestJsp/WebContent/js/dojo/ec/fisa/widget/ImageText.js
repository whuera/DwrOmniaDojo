//>>built
require({cache:{"url:ec/fisa/widget/templates/ImageText.html":'\x3cdiv style\x3d"display:inline-block"\x3e\x3cimg style\x3d"display:inline-block;" src\x3d"${src}" alt\x3d"${alt}" title\x3d"${alt}"${_heightExpr}${_widthExpr} class\x3d"fisaImageTextImg${classSufix}"\x3e\x3c/img\x3e\x3cspan style\x3d"${_labelStyle}" class\x3d"fisaImageTextLabel${classSufix}"\x3e${label}\x3c/span\x3e\x3c/div\x3e'}});
define("ec/fisa/widget/ImageText","dojo/_base/declare dijit/_Widget dijit/_Templated dojo/_base/kernel dojo/text!ec/fisa/widget/templates/ImageText.html ./_base".split(" "),function(a,b,c,e,d){return a("ec.fisa.widget.ImageText",[b,c],{btId:"",fieldId:"",tabId:"",pageScopeId:"",label:"",src:"",alt:"",height:"",width:"",classSufix:"",showLabel:!0,_labelStyle:"display:inline-block;",_heightExpr:"",_widthExpr:"",_destroyOnRemove:!0,templateString:d,destroyRendering:function(){delete this.btId;delete this.fieldId;
delete this.tabId;delete this.pageScopeId;delete this.label;delete this.src;delete this.alt;delete this.showLabel;this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments);!1==this.showLabel&&(this._labelStyle="display:none;");""!=this.height&&(this._heightExpr=" height\x3d'"+this.height+"'");""!=this.width&&(this._widthExpr=" width\x3d'"+this.width+"'")}})});
//@ sourceMappingURL=ImageText.js.map