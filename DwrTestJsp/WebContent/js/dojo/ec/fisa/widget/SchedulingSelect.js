//>>built
require({cache:{"url:ec/fisa/widget/TextBox.conf":"{\n\tfisaClassic:{\n\t\ttextCharWidth:11,\n\t\ttextCharHeight:17,\n\t\tdefaultVisualSize:20\n\t},\n\tfisaDesert:{\n\t\ttextCharWidth:11,\n\t\ttextCharHeight:17,\n\t\tdefaultVisualSize:20\n\t}\n\n}"}});
define("ec/fisa/widget/SchedulingSelect","dijit/_Widget dijit/_Templated dojo/_base/declare dojo/_base/kernel dijit/form/Select dojo/_base/lang dojo/topic dojo/_base/array dojo/text!ec/fisa/widget/TextBox.conf ec/fisa/controller/Utils ec/fisa/widget/Utils ./_base".split(" "),function(e,f,b,a,c,g,h,k,d){return b("ec.fisa.widget.SchedulingSelect",[c],{textBoxConfig:a.fromJson(d),visualSize:0,maxHeight:-1,_destroyOnRemove:!0,buildRendering:function(){this.inherited(arguments);0<this.visualSize&&(this.style=
{width:this.textBoxConfig[a.config.fisaTheme].textCharWidth*this.visualSize+5+"px"})}})});
//@ sourceMappingURL=SchedulingSelect.js.map