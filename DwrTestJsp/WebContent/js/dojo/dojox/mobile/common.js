//>>built
define("dojox/mobile/common","dojo/_base/array dojo/_base/config dojo/_base/connect dojo/_base/lang dojo/_base/window dojo/_base/kernel dojo/dom-class dojo/dom-construct dojo/ready dojo/touch dijit/registry ./sniff ./uacss".split(" "),function(m,g,k,l,c,r,n,p,s,u,t,e){var a=l.getObject("dojox.mobile",!0);c.doc.dojoClick=!0;e("touch")&&(e.add("clicks-prevented",!(4.1<=e("android")||10<=e("ie"))),e("clicks-prevented")&&(a._sendClick=function(a,b){for(var f=a;f;f=f.parentNode)if(f.dojoClick)return;f=
c.doc.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,c.global,1,b.screenX,b.screenY,b.clientX,b.clientY);a.dispatchEvent(f)}));a.getScreenSize=function(){return{h:c.global.innerHeight||c.doc.documentElement.clientHeight,w:c.global.innerWidth||c.doc.documentElement.clientWidth}};a.updateOrient=function(){var d=a.getScreenSize();n.replace(c.doc.documentElement,d.h>d.w?"dj_portrait":"dj_landscape",d.h>d.w?"dj_landscape":"dj_portrait")};a.updateOrient();a.tabletSize=500;a.detectScreenSize=
function(d){var b=a.getScreenSize(),f=Math.min(b.w,b.h),e,h;if(f>=a.tabletSize&&(d||!this._sz||this._sz<a.tabletSize))e="phone",h="tablet";else if(f<a.tabletSize&&(d||!this._sz||this._sz>=a.tabletSize))e="tablet",h="phone";h&&(n.replace(c.doc.documentElement,"dj_"+h,"dj_"+e),k.publish("/dojox/mobile/screenSize/"+h,[b]));this._sz=f};a.detectScreenSize();a.hideAddressBarWait="number"===typeof g.mblHideAddressBarWait?g.mblHideAddressBarWait:1500;a.hide_1=function(){scrollTo(0,1);a._hidingTimer=0==a._hidingTimer?
200:2*a._hidingTimer;setTimeout(function(){a.isAddressBarHidden()||a._hidingTimer>a.hideAddressBarWait?(a.resizeAll(),a._hiding=!1):setTimeout(a.hide_1,a._hidingTimer)},50)};a.hideAddressBar=function(d){!a.disableHideAddressBar&&!a._hiding&&(a._hiding=!0,a._hidingTimer=e("ios")?200:0,d=screen.availHeight,e("android")&&(d=outerHeight/devicePixelRatio,0==d&&(a._hiding=!1,setTimeout(function(){a.hideAddressBar()},200)),d<=innerHeight&&(d=outerHeight),3>e("android")&&(c.doc.documentElement.style.overflow=
c.body().style.overflow="visible")),c.body().offsetHeight<d&&(c.body().style.minHeight=d+"px",a._resetMinHeight=!0),setTimeout(a.hide_1,a._hidingTimer))};a.isAddressBarHidden=function(){return 1===pageYOffset};a.resizeAll=function(d,b){if(!a.disableResizeAll){k.publish("/dojox/mobile/resizeAll",[d,b]);k.publish("/dojox/mobile/beforeResizeAll",[d,b]);a._resetMinHeight&&(c.body().style.minHeight=a.getScreenSize().h+"px");a.updateOrient();a.detectScreenSize();var f=function(a){var b=a.getParent&&a.getParent();
return!(b&&b.resize||!a.resize)},e=function(a){m.forEach(a.getChildren(),function(a){f(a)&&a.resize();e(a)})};b?(b.resize&&b.resize(),e(b)):m.forEach(m.filter(t.toArray(),f),function(a){a.resize()});k.publish("/dojox/mobile/afterResizeAll",[d,b])}};a.openWindow=function(a,b){c.global.open(a,b||"_blank")};a._detectWindowsTheme=function(){navigator.userAgent.match(/IEMobile\/10\.0/)&&p.create("style",{innerHTML:"@-ms-viewport {width: auto !important}"},c.doc.head);var a=function(){n.add(c.doc.documentElement,
"windows_theme");r.experimental("Dojo Mobile Windows theme","Behavior and appearance of the Windows theme are experimental.")},b=e("windows-theme");if(void 0!==b)b&&a();else{for(var f,g=function(b){return b&&-1!==b.indexOf("/windows/")?(e.add("windows-theme",!0),a(),!0):!1},h=c.doc.styleSheets,b=0;b<h.length;b++)if(!h[b].href){var k=h[b].cssRules||h[b].imports;if(k)for(f=0;f<k.length;f++)if(g(k[f].href))return}f=c.doc.getElementsByTagName("link");for(b=0;b<f.length&&!g(f[b].href);b++);}};!1!==g.mblApplyPageStyles&&
n.add(c.doc.documentElement,"mobile");e("chrome")&&n.add(c.doc.documentElement,"dj_chrome");if(c.global._no_dojo_dm){l=c.global._no_dojo_dm;for(var q in l)a[q]=l[q];a.deviceTheme.setDm(a)}e.add("mblAndroidWorkaround",!1!==g.mblAndroidWorkaround&&3>e("android"),void 0,!0);e.add("mblAndroid3Workaround",!1!==g.mblAndroid3Workaround&&3<=e("android"),void 0,!0);a._detectWindowsTheme();s(function(){a.detectScreenSize(!0);n.add(c.body(),"mblBackground");!1!==g.mblAndroidWorkaroundButtonStyle&&e("android")&&
p.create("style",{innerHTML:"BUTTON,INPUT[type\x3d'button'],INPUT[type\x3d'submit'],INPUT[type\x3d'reset'],INPUT[type\x3d'file']::-webkit-file-upload-button{-webkit-appearance:none;} audio::-webkit-media-controls-play-button,video::-webkit-media-controls-play-button{-webkit-appearance:media-play-button;} video::-webkit-media-controls-fullscreen-button{-webkit-appearance:media-fullscreen-button;}"},c.doc.head,"first");e("mblAndroidWorkaround")&&p.create("style",{innerHTML:".mblView.mblAndroidWorkaround{position:absolute;top:-9999px !important;left:-9999px !important;}"},
c.doc.head,"last");var d=a.resizeAll;if(!1!==g.mblHideAddressBar&&-1!=navigator.appVersion.indexOf("Mobile")||!0===g.mblForceHideAddressBar)a.hideAddressBar(),!0===g.mblAlwaysHideAddressBar&&(d=a.hideAddressBar);var b=6<=e("ios");if((e("android")||b)&&void 0!==c.global.onorientationchange){var f=d,l,h,m;b?(h=c.doc.documentElement.clientWidth,m=c.doc.documentElement.clientHeight):(d=function(a){var b=k.connect(null,"onresize",null,function(a){k.disconnect(b);f(a)})},l=a.getScreenSize());k.connect(null,
"onresize",null,function(e){if(b){var d=c.doc.documentElement.clientWidth,g=c.doc.documentElement.clientHeight;d==h&&g!=m&&f(e);h=d;m=g}else d=a.getScreenSize(),d.w==l.w&&100<=Math.abs(d.h-l.h)&&f(e),l=d})}k.connect(null,void 0!==c.global.onorientationchange?"onorientationchange":"onresize",null,d);c.body().style.visibility="visible"});return a});
//@ sourceMappingURL=common.js.map