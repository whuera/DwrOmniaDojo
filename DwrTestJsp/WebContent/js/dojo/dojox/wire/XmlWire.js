//>>built
define("dojox/wire/XmlWire",["dijit","dojo","dojox","dojo/require!dojox/xml/parser,dojox/wire/Wire"],function(l,g,k){g.provide("dojox.wire.XmlWire");g.require("dojox.xml.parser");g.require("dojox.wire.Wire");g.declare("dojox.wire.XmlWire",k.wire.Wire,{_wireClass:"dojox.wire.XmlWire",constructor:function(b){},_getValue:function(b){if(!b||!this.path)return b;var c=this.path,a;"/"==c.charAt(0)&&(a=c.indexOf("/",1),c=c.substring(a+1));var c=c.split("/"),d=c.length-1;for(a=0;a<d;a++)if(b=this._getChildNode(b,
c[a]),!b)return;return this._getNodeValue(b,c[d])},_setValue:function(b,c){if(!this.path)return b;var a=b,d=this._getDocument(a),e=this.path,f;if("/"==e.charAt(0))f=e.indexOf("/",1),a||(a=e.substring(1,f),b=a=d.createElement(a)),e=e.substring(f+1);else if(!a)return;var e=e.split("/"),g=e.length-1;for(f=0;f<g;f++){var h=this._getChildNode(a,e[f]);h||(h=d.createElement(e[f]),a.appendChild(h));a=h}this._setNodeValue(a,e[g],c);return b},_getNodeValue:function(b,c){var a=void 0;if("@"==c.charAt(0))a=c.substring(1),
a=b.getAttribute(a);else if("text()"==c){var d=b.firstChild;d&&(a=d.nodeValue)}else{a=[];for(d=0;d<b.childNodes.length;d++){var e=b.childNodes[d];1===e.nodeType&&e.nodeName==c&&a.push(e)}}return a},_setNodeValue:function(b,c,a){if("@"==c.charAt(0))c=c.substring(1),a?b.setAttribute(c,a):b.removeAttribute(c);else if("text()"==c){for(;b.firstChild;)b.removeChild(b.firstChild);a&&(a=this._getDocument(b).createTextNode(a),b.appendChild(a))}},_getChildNode:function(b,c){var a=1,d=c.indexOf("[");0<=d&&(a=
c.indexOf("]"),a=c.substring(d+1,a),c=c.substring(0,d));for(var d=1,e=0;e<b.childNodes.length;e++){var f=b.childNodes[e];if(1===f.nodeType&&f.nodeName==c){if(d==a)return f;d++}}return null},_getDocument:function(b){return b?9==b.nodeType?b:b.ownerDocument:k.xml.parser.parse()}})});
//@ sourceMappingURL=XmlWire.js.map