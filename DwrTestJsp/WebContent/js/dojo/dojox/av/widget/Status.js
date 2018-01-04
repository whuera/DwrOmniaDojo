//>>built
define("dojox/av/widget/Status",["dojo","dijit","dijit/_Widget","dijit/_TemplatedMixin"],function(b,e,c,d){return b.declare("dojox.av.widget.Status",[c,d],{templateString:b.cache("dojox.av.widget","resources/Status.html"),setMedia:function(a){this.media=a;b.connect(this.media,"onMetaData",this,function(a){this.duration=a.duration;this.durNode.innerHTML=this.toSeconds(this.duration)});b.connect(this.media,"onPosition",this,function(a){this.timeNode.innerHTML=this.toSeconds(a)});b.forEach("onMetaData onPosition onStart onBuffer onPlay onPaused onStop onEnd onError onLoad".split(" "),
function(a){b.connect(this.media,a,this,a)},this)},onMetaData:function(a){this.duration=a.duration;this.durNode.innerHTML=this.toSeconds(this.duration);this.media.title?this.title=this.media.title:(a=this.media.mediaUrl.split("/"),this.title=a[a.length-1].split(".")[0])},onBuffer:function(a){this.isBuffering=a;console.warn("status onBuffer",this.isBuffering);this.isBuffering?this.setStatus("buffering..."):this.setStatus("Playing")},onPosition:function(a){},onStart:function(){this.setStatus("Starting")},
onPlay:function(){this.setStatus("Playing")},onPaused:function(){this.setStatus("Paused")},onStop:function(){this.setStatus("Stopped")},onEnd:function(){this.setStatus("Stopped")},onError:function(a){console.log("status error:",a);a=a.info.code;"NetStream.Play.StreamNotFound"==a&&(a="Stream Not Found");this.setStatus("ERROR: "+a,!0)},onLoad:function(){this.setStatus("Loading...")},setStatus:function(a,c){c?b.addClass(this.titleNode,"statusError"):(b.removeClass(this.titleNode,"statusError"),this.isBuffering&&
(a="buffering..."));this.titleNode.innerHTML='\x3cspan class\x3d"statusTitle"\x3e'+this.title+'\x3c/span\x3e \x3cspan class\x3d"statusInfo"\x3e'+a+"\x3c/span\x3e"},toSeconds:function(a){a=a.toString();0>a.indexOf(".")?a+=".00":2==a.length-a.indexOf(".")?a+="0":2<a.length-a.indexOf(".")&&(a=a.substring(0,a.indexOf(".")+3));return a}})});
//@ sourceMappingURL=Status.js.map