//>>built
define("dojox/help/console",["dijit","dojo","dojox","dojo/require!dojox/help/_base"],function(n,c,k){c.provide("dojox.help.console");c.require("dojox.help._base");c.mixin(k.help,{_plainText:function(c){return c.replace(/(<[^>]*>|&[^;]{2,6};)/g,"")},_displayLocated:function(k){var d={};c.forEach(k,function(e){d[e[0]]=c.isMoz?{toString:function(){return"Click to view"},item:e[1]}:e[1]});console.dir(d)},_displayHelp:function(m,d){if(m){var e="Help for: "+d.name;console.log(e);for(var f="",a=0;a<e.length;a++)f+=
"\x3d";console.log(f)}else if(d){e=!1;for(f in d)if(a=d[f],!("returns"==f&&"Function"!=d.type&&"Constructor"!=d.type)&&a&&(!c.isArray(a)||a.length))if(e=!0,console.info(f.toUpperCase()),a=c.isString(a)?k.help._plainText(a):a,"returns"==f){var g=c.map(a.types||[],"return item.title;").join("|");a.summary&&(g&&(g+=": "),g+=k.help._plainText(a.summary));console.log(g||"Uknown")}else if("parameters"==f)for(var g=0,h;h=a[g];g++){var b=c.map(h.types,"return item.title").join("|");console.log(b?h.name+": "+
b:h.name);b="";h.optional&&(b+="Optional. ");h.repating&&(b+="Repeating. ");if(b+=k.help._plainText(h.summary)){for(var b="  - "+b,l=0;l<h.name.length;l++)b=" "+b;console.log(b)}}else console.log(a);e||console.log("No documentation for this object")}else console.log("No documentation for this object")}});k.help.init()});
//@ sourceMappingURL=console.js.map