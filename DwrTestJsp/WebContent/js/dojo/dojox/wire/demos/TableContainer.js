//>>built
define("dojox/wire/demos/TableContainer",["dijit","dojo","dojox","dojo/require!dojo/parser,dijit/_Widget,dijit/_Templated"],function(a,b,h){b.provide("dojox.wire.demos.TableContainer");b.require("dojo.parser");b.require("dijit._Widget");b.require("dijit._Templated");b.declare("dojox.wire.demos.TableContainer",[a._Widget,a._Templated,a._Container],{templateString:"\x3ctable class\x3d'tablecontainer'\x3e\x3ctbody dojoAttachPoint\x3d'tableContainer'\x3e\x3c/tbody\x3e\x3c/table\x3e",rowCount:0,headers:"",
addRow:function(e){try{var c=document.createElement("tr");0===this.rowCount%2&&b.addClass(c,"alternate");this.rowCount++;for(var f in e){var d=document.createElement("td"),a=document.createTextNode(e[f]);d.appendChild(a);c.appendChild(d)}this.tableContainer.appendChild(c)}catch(g){console.debug(g)}},clearTable:function(){for(;this.tableContainer.firstChild.nextSibling;)this.tableContainer.removeChild(this.tableContainer.firstChild.nextSibling);this.rowCount=0},postCreate:function(){var b=this.headers.split(","),
c=document.createElement("tr");for(i in b){var a=b[i],d=document.createElement("th"),a=document.createTextNode(a);d.appendChild(a);c.appendChild(d)}this.tableContainer.appendChild(c)}})});
//@ sourceMappingURL=TableContainer.js.map