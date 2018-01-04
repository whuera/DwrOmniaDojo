//>>built
require({cache:{"url:ec/fisa/widget/templates/NotificationBTSelection.html":'\x3cdiv  data-dojo-attach-point\x3d"_tcn"\x3e\x3c/div\x3e\n\t\t\t'}});
define("ec/fisa/widget/NotificationBtAdditional","dojo/_base/kernel dojo/_base/declare dijit/_Widget dijit/_Templated dojo/text!./templates/NotificationBTSelection.html dojo/regexp dijit/form/Button dijit/form/TextBox dijit/form/ValidationTextBox dojox/lang/functional/object dojo/dom-style dojo/dom-attr dojo/dom dojo/dom-construct dijit/dijit dojo/on dijit/focus ec/fisa/widget/Utils dojo/string dijit/form/Select".split(" "),function(m,x,y,z,A,B,C,D,E,F,v,w,G,e,n,H,p){return x("ec.fisa.widget.NotificationBtAdditional",
[y,z],{tapdFieldLenght:0,notificationDivs:null,notificationMaxLength:0,requestedAction:"",collapsed:!0,actualNotifications:0,actualValue:"",isARoutineField:!1,routineBtId:null,routineFieldId:null,routineActionMode:null,tabId:"",pageScopeId:"",styleClass:"notificationReceiverSelection",widgetsInTemplate:!0,readOnly:!1,_disabledExp:"",_connections:null,_destroyOnRemove:!0,parentEditableGrid:!1,gridId:"",gridSelectedRowIndex:null,parentType:"",visualSize:20,templateString:A,notificationMeansList:null,
priorityId:null,labelDest:"",labelNewBeneficiario:"",emailRegex:null,numberRegex:null,userType:"",userFavoriteList:null,maxUsers:0,errorMsg:"",generalData:null,notificationDataVO:null,userInsertedList:null,btController:null,constructor:function(a,c){try{this.emailRegex="^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",this.numberRegex="^[0-9]+$",this.tapdFieldLenght=a.tapdFieldLenght||0,this.requestedAction=a.requestedAction||"",this.ref=a.ref,this.notificationDivs=
[],this.notificationMeansList=[],this._connections=[]}catch(b){this.logger("No se pudo ejecutar el constructor"),this.logger(b)}},postMixInProperties:function(){!0==this.readOnly&&(this._disabledExp="disabled\x3d'disabled'");this.userType=this["user-type"]},buildRendering:function(){this.inherited(arguments);this._init()},destroy:function(){delete this.notificationDivs;this.inherited(arguments)},logger:function(a){},_createNotification:function(a,c,b,d,f,t){var l=this.priorityId,q="";a&&a&&(l=a);
c&&(l=c[0],q=c[1]);a=null;if(null==d){var m=e.create("table",{id:this.id+"_destinatario"},this._tcn);a=e.create("tbody",{id:this.id+"_destinatario"},m);var h=e.create("tr",{id:this.id+"_destinatario"},a),h=e.create("td",{},h),h=e.create("table",{},h),r=e.create("tr",{},h),p=e.create("td",{},r),h=e.create("td",{},r);r.className="dijitTitlePaneTitle";r=e.create("div",{},p);h=e.create("div",{},h);e.create("label",{innerHTML:this.labelDest},r);"B"==this.userType&&this.userFavoriteList.push({label:this.labelNewBeneficiario,
selected:!1,value:"tp_-1"});h=new n.form.Select({options:this.userFavoriteList,value:l,style:this.visualSize},h);h.set("required",!0);h.fwId=this.id}else a=d;if(c&&f||!f){var u=e.create("tr",{},a),s=e.create("td",{},u),s=e.create("table",{},s),k=e.create("tbody",{},s),g=e.create("tr",{},k),k=e.create("td",{},g),k=e.create("div",{},k),g=e.create("td",{},g),g=e.create("div",{},g);c={options:this.notificationMeansList,value:l,style:"width: 150px;"};q={value:q,maxLength:this.notificationMaxLength,size:this.visualSize};
"-1"!=l&&(c.disable=!0,q.disable=!0);k=new n.form.Select(c,k);g=new n.form.ValidationTextBox(q,g);"-1"!=l&&(ec.fisa.widget.utils.disableWidget(k.id),ec.fisa.widget.utils.disableWidget(g.id));k.fwId=this.id;g.set("required",!0);g.set("trim",!0);g.fwId=this.id}null==d?(d="",f?(null==t&&(t="user_"+b),d=t):d="tp_"+b,this.notificationDivs[b]={},this.notificationDivs[b].destinatarioNode=m,this.notificationDivs[b].notification=[],this.notificationDivs[b].dest=h,this.notificationDivs[b].id=d,f||(this.notificationDivs[b].contadorNode=
0,this.notificationDivs[b].notification[0]={},this.notificationDivs[b].notification[0].notificationRow=u,this.notificationDivs[b].notification[0].notificationNode=s,this.notificationDivs[b].notification[0].comboBox=k,this.notificationDivs[b].notification[0].textBox=g,-1==this.notificationDivs[b].dest.get("value")&&ec.fisa.widget.utils.disableWidget(k.id),this._connectEvents(k,b,0,"comboBoxNot"),this._connectEvents(g,b,0,"textBoxNot")),this._connectEvents(h,b,null,"comboBoxUser")):(f=null,f=void 0==
this.notificationDivs[b].contadorNode?this.notificationDivs[b].contadorNode=0:++this.notificationDivs[b].contadorNode,this.notificationDivs[b].notification[f]={},this.notificationDivs[b].notification[f].notificationRow=u,this.notificationDivs[b].notification[f].notificationNode=s,this.notificationDivs[b].notification[f].comboBox=k,this.notificationDivs[b].notification[f].textBox=g,-1==this.notificationDivs[b].dest.get("value")&&ec.fisa.widget.utils.disableWidget(k.id),this._connectEvents(k,b,f,"comboBoxNot"),
this._connectEvents(g,b,f,"textBoxNot"));return a},_init:function(){this.notificationMaxLength=this.tapdFieldLenght},_connectEvents:function(a,c,b,d){void 0==this._connections[c]&&(this._connections[c]={},this._connections[c].notification=[]);null!=b&&void 0==this._connections[c].notification[b]&&(this._connections[c].notification[b]={});"comboBoxUser"===d&&(this._connections[c].dest=a.connect(a,"onChange",m.hitch(this,this._upDestinarioValue,c)))},_upDestinarioValue:function(a){if(void 0!=this.notificationDivs[a]){var c=
this.notificationDivs[a].dest;this._removeAllMeans(a);if(-1!=c.get("value")){var b=c.get("value");"tp_-1"==b?this._createNotification(null,["-1",""],a,this.generalData.users[a].userHtml,!0,null):this._addContactMediaData(b,a)}this.logger("Cambio detinatario.\t"+c.get("value"))}},_addContactMediaData:function(a,c){var b=this.generalData.users[c].userHtml;m.forEach(this.generalData[a].CONTACT_MEDIA_LIST[this.userType],m.hitch(this,function(a,f){this._createNotification(null,[a[0],a[1]],c,b,!0,null)}))},
_upComboBoxNot:function(a,c){if(!(void 0==this.notificationDivs[a]||void 0==this.notificationDivs[a].notification[c])){var b=this.notificationDivs[a].notification[c].comboBox,d=this.notificationDivs[a].notification[c].textBox;d.get("value");-1==b.get("value")?ec.fisa.widget.utils.disableWidget(d.id):(ec.fisa.widget.utils.enableWidget(d.id),"SMS"==b.get("value")?d.set("regExp",this.numberRegex):"MAIL"==b.get("value")&&d.set("regExp",this.emailRegex));d.set("value","");this.logger("Cambio comboBox Notif.\t"+
b.get("value"))}},_upTextBoxNotValue:function(a,c){if(!(void 0==this.notificationDivs[a]||void 0==this.notificationDivs[a].notification[c])){var b=this.notificationDivs[a].notification[c].textBox;b.get("value");b.isValid()||b.set("value","")}},_showNotification:function(a){if(this.actualNotifications<this.maxUsers)try{var c=this.notificationDivs[this.actualNotifications-1].dest.get("value");if(!this.collapsed&&-1!=c){if(!this.notificationDivs[this.actualNotifications]){var b=this._createNotification(null,
null,this.actualNotifications,null,!0,null);this.generalData.users[this.actualNotifications]={};this.generalData.users[this.actualNotifications].userHtml=b}this.actualNotifications++;this.updateRowHeight()}else return this.logger("No se puede anadir un destinatario."),!1}catch(d){this.logger("No se puede anadir un destinatario."),this.logger(d)}else this.btController=ec.fisa.controller.utils.getPageController(this.tabId,this.pageScopeId),this.btController.clearPanelMessage(),this.btController.updateMsgsPanel([{summary:this.errorMsg,
detail:this.errorMsg,level:{level:4E4}}])},_removeNotification:function(a){if(!this.collapsed&&1<this.actualNotifications){a=this.notificationDivs[this.actualNotifications-1].destinatarioNode;var c=this.notificationDivs[this.actualNotifications-1].dest;this._setNotVisible(a);this.notificationDivs.splice(this.actualNotifications-1,1);var b=this._connections.splice(this.actualNotifications-1,1);m.forEach(b,function(a,b){this.disconnect(a.dest);m.forEach(a.notification,function(a,b){this.disconnect(a.textBox);
this.disconnect(a.comboBox)},this)},this);n.byId(c.id).set("value","");this.actualNotifications--;delete this.generalData.users[this.actualNotifications];this.notificationDivs.splice(this.actualNotifications,1);e.destroy(a);c.destroy(!1);this.updateRowHeight();ec.fisa.widget.utils.programaticChange(p.curNode)}},_removeInternalMeans:function(a,c,b){var d=c.notification[a];this._setNotVisible(d.notificationNode);b=this._connections[b].notification.splice(a,1);m.forEach(b,function(a,b){this.disconnect(a.textBox);
this.disconnect(a.comboBox)},this);n.byId(d.textBox).set("value","");n.byId(d.comboBox).set("options",null);e.destroy(d.notificationRow);e.destroy(d.notificationNode);c.notification.splice(a,1);a=--c.contadorNode;this.updateRowHeight();ec.fisa.widget.utils.programaticChange(p.curNode);return a},_removeAllMeans:function(a){var c=this.notificationDivs[a],b=c.contadorNode;if(null!=b&&void 0!=b)for(;-1<b;)b=this._removeInternalMeans(b,c,a)},_collapaseNotification:function(){try{for(i=0;i<this.notificationDivs.length;i++){ec.fisa.widget.utils.disableWidget(this.notificationDivs[i].dest.id);
for(var a=0;a<this.notificationDivs[i].notification.length;a++)this._setNotVisible(this.notificationDivs[i].notification[a].notificationRow)}this.updateRowHeight()}catch(c){this.logger(c)}},_expandNotification:function(){try{for(i=0;i<this.notificationDivs.length;i++){var a=this.notificationDivs[i].dest;!0==this.readOnly?ec.fisa.widget.utils.disableWidget(a.id):ec.fisa.widget.utils.enableWidget(a.id);for(var c=0;c<this.notificationDivs[i].notification.length;c++)this._setVisible(this.notificationDivs[i].notification[c].notificationRow)}this.updateRowHeight()}catch(b){this.logger(b)}},
_toggleCollapsed:function(){this.collapsed?(w.set(this.collapseLanguagesButton_node,"iconClass","colapseLanguages"),this._expandNotification()):(w.set(this.collapseLanguagesButton_node,"iconClass","expandLanguages"),this._collapaseNotification());this.collapsed=!this.collapsed},_setVisible:function(a){v.set(a,"display","block")},_setNotVisible:function(a){v.set(a,"display","none")},_getValueAttr:function(){var a={},c;for(c in this.notificationDivs)if("indexOf"!=c){var b=this.notificationDivs[c].id,
d=this.notificationDivs[c].dest;if(1>!d&&0<this.notificationDivs[c].notification.length&&-1!=d.get("value"))for(j in this.notificationDivs[c].notification)if("indexOf"!=j){var e=this.notificationDivs[c].notification[j].comboBox.get("value"),n=this.notificationDivs[c].notification[j].textBox.get("value");if(-1!=e&&1>!n){void 0==a[b]&&(a[b]={},a[b].datos={},a[b].tipo={},a[b].datos.name=[d.attr("displayedValue")],a[b].datos.value=[d.get("value")]);void 0==a[b].tipo[e]&&(a[b].tipo[e]=[]);var l={};l.value=
n;m.forEach(this.notificationDataVO.listContactMediaDataVOs,m.hitch(this,function(a,b){if(a.contactMediaId==e&&a.recipientType==this.userType)return l.template=a.templateId,l.type=a.type,l.notificationType=a.notificationType,l.condition=a.conditionId,!1}));a[b].tipo[e].push(l)}}}return a},_setValueAttr:function(a,c,b){c=a[0];this.priorityId=a[1];b=a[2];this.notificationDataVO=a[3];this.userFavoriteList=a[4];this.notificationMeansList=a[5];this.userInsertedList=a[6];"R"===this.userType?this.maxUsers=
this.notificationDataVO.maxRecipients:"B"===this.userType&&(this.maxUsers=this.notificationDataVO.maxBeneficieries);b||(this.updateMeansList(),this.actualNotifications=0,this.notificationDivs.splice(0,this.notificationDivs.length),this._connections.splice(0,this._connections.length));this.actualValue=c;a=this.notificationDivs.length;if(null!=c)if(this.generalData=c,null!=this.userInsertedList&&void 0!=this.userInsertedList&&0<this.userInsertedList.length)for(b=0;b<this.userInsertedList.length;b++){var d=
this._createNotification(this.userInsertedList[b],null,a,null,!0,"user_"+a);if(void 0==c.users||null==c.users)c.users=[];c.users[a]={};c.users[a].userHtml=d;this._addContactMediaData(this.userInsertedList[b],a);this.actualNotifications=++a}else this.notificationDivs[a]||(d=this._createNotification("",null,a,null,!0,"user_"+a),c.users=[],c.users[a]={},c.users[a].userHtml=d,this.actualNotifications=++a);0==this.notificationDivs.length&&(this._createNotification(null,null,0,null,!1,null),this.actualNotifications=
1);this.notificationDivs&&(this.collapsed="IN"!=this.requestedAction?!1:!0,this._toggleCollapsed())},updateRowHeight:function(){null!=this.gridSelectedRowIndex&&n.byId(this.gridId).scroller.rowHeightChanged(this.gridSelectedRowIndex,!0)},updateMeansList:function(){for(var a=this.notificationDivs.length,c=0,c=0;c<a;){var b=this.notificationDivs[c].destinatarioNode,b=this.notificationDivs[c].destinatarioNode,d=this.notificationDivs[c].dest;this._setNotVisible(b);var f=this._connections.slice(c,1);m.forEach(f,
function(a,b){this.disconnect(a.dest)},this);n.byId(d.id).set("value","");d.destroy(!1);e.destroy(b);this.updateRowHeight();ec.fisa.widget.utils.programaticChange(p.curNode);c++}},isValid:function(){}})});
//@ sourceMappingURL=NotificationBtAdditional.js.map