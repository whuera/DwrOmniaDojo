//>>built
define("ec/fisa/message/_MessagePanelMixin","dojo/_base/declare ./_base dojo/dom-construct dojo/dom-class dojo/dom-style dojo/on".split(" "),function(k,p,l,m,c,n){return k("ec.fisa.message.MessagePanelMixin",null,{_parentPanelCnt:null,_errorPanelCnt:null,_warnPanelCnt:null,_infoPanelCnt:null,_errorPanelDetail:null,_warnPanelDetail:null,_infoPanelDetail:null,_errorn:null,_warnn:null,_infon:null,_errori:null,_warni:null,_infoi:null,_errornc:0,_warnnc:0,_infonc:0,_ddbtnid:null,_msgQuantity:0,popup:!1,
_fisaOns:null,createdInsideConfirmation:"false",clearAllMessages:function(){this._msgQuantity=0;errorAdded="";this.removeOns();this._parentPanelCnt.style.display="none";this._parentPanelCnt.style.visibility="hidden";this._infoPanelCnt.style.display="none";this._infoPanelCnt.style.visibility="hidden";this._warnPanelCnt.style.display="none";this._warnPanelCnt.style.visibility="hidden";this._errorPanelCnt.style.display="none";this._errorPanelCnt.style.visibility="hidden";for(var a=this._infoPanelDetail.rows.length,
b=0;b<a;++b)this._infoPanelDetail.deleteRow(0);a=this._warnPanelDetail.rows.length;for(b=0;b<a;++b)this._warnPanelDetail.deleteRow(0);a=this._errorPanelDetail.rows.length;for(b=0;b<a;++b)this._errorPanelDetail.deleteRow(0);this.popup&&(this._infonc=this._warnnc=this._errornc=0,a=dijit.byId(this._ddbtnid),c.set(a.domNode,"display","none"),c.set(this._errorn,"display","none"),c.set(this._errori,"display","none"),c.set(this._warnn,"display","none"),c.set(this._warni,"display","none"),c.set(this._infon,
"display","none"),c.set(this._infoi,"display","none"),a.closeDropDown())},update:function(a,b,c,h){if(a){var e=b||function(){return!1},f=c||function(){},d=h||dojo.global;dojo.forEach(a,function(a){var b=!1;4E4==a.level.level?(e.call(d,a)&&(b=f.call(d,a)),!1==b&&this.addErrorMessage(a.summary,a.detail)):3E4==a.level.level?(e.call(d,a)&&(b=f.call(d,a)),!1==b&&(fileFound=this.addWarnMessage(a.summary,a.detail))):2E4==a.level.level&&(e.call(d,a)&&(fileFound=f.call(d,a)),!1==b&&this.addInfoMessage(a.summary,
a.detail))},this)}},addInfoMessage:function(a,b){this.appendMsgToPanel(this._infoPanelDetail,this._infoPanelCnt,a,b,this._infon,this._infoi,"_infonc")},addWarnMessage:function(a,b){this.appendMsgToPanel(this._warnPanelDetail,this._warnPanelCnt,a,b,this._warnn,this._warni,"_warnnc")},addErrorMessage:function(a,b){this.appendMsgToPanel(this._errorPanelDetail,this._errorPanelCnt,a,b,this._errorn,this._errori,"_errornc");this.errorAdded="true"},appendMsgToPanel:function(a,b,g,h,e,f,d){if("true"!=this.createdInsideConfirmation){this._msgQuantity+=
1;a=a.insertRow(a.rows.length);var k=a.insertCell(a.cells.length);l.create("span",{},k).innerHTML=g;"0"==dojo.config.fisaFinalUser&&(g=a.insertCell(a.cells.length),m.add(g,"tddetail"),h&&this.createDetailLink(g,h));"none"==b.style.display&&(b.style.display="",this._parentPanelCnt.style.display="");"hidden"==b.style.visibility&&(b.style.visibility="",this._parentPanelCnt.style.visibility="");this.popup&&(this[d]+=1,e.innerHTML=this[d],c.set(e,"display","inline-block"),c.set(f,"display","inline-block"),
b=dijit.byId(this._ddbtnid),c.set(b.domNode,"display","inline-block"),b.loadAndOpenDropDown())}},createDetailLink:function(a,b){var c=l.create("span",{"class":"link"},a);c.innerHTML="Ver Detalle";c.fisaDetail=this.replaceCarret(b);this._fisaOns.push(n(c,"click",function(){var a=new dojox.widget.DialogSimple({title:"Detalle",content:this.fisaDetail,executeScripts:!1});a.startup();a.set("draggable",!1);a.connect("hide",function(){this.destroyRecursive()});a.resize({w:280});a.show();a=a.containerNode.style;
a.wordWrap="break-word";a.overflow="auto"}))},removeOns:function(a){a=a||!1;this._fisaOns&&(dojo.forEach(this._fisaOns,function(a){a.remove()},this),a?delete this._fisaOns:this._fisaOns=[])}})});
//@ sourceMappingURL=_MessagePanelMixin.js.map