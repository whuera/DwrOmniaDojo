//>>built
define("dojox/drawing/ui/Toolbar",["dojo","../library/icons","../util/common","../Drawing","../manager/_registry"],function(c,v,w,y,h){return c.declare("dojox.drawing.ui.Toolbar",[],{constructor:function(b,a){if(b.drawing)this.drawing=this.toolDrawing=b.drawing,this.width=this.toolDrawing.width,this.height=this.toolDrawing.height,this.strSelected=b.selected,this.strTools=b.tools,this.strPlugs=b.plugs,this._mixprops(["padding","margin","size","radius"],b),this.addBack(),this.orient=b.orient?b.orient:
!1;else{var n=c.marginBox(a);this.width=n.w;this.height=n.h;this.strSelected=c.attr(a,"selected");this.strTools=c.attr(a,"tools");this.strPlugs=c.attr(a,"plugs");this._mixprops(["padding","margin","size","radius"],a);this.toolDrawing=new y({mode:"ui"},a);this.orient=c.attr(a,"orient")}this.horizontal=this.orient?"H"==this.orient:this.width>this.height;console.log("this.hor: ",this.horizontal," orient: ",this.orient);this.toolDrawing.ready?(this.makeButtons(),!this.strSelected&&this.drawing.defaults.clickMode&&
this.drawing.mouse.setCursor("default")):c.connect(this.toolDrawing,"onSurfaceReady",this,function(){c.disconnect(b);this.drawing=h.getRegistered("drawing",c.attr(a,"drawingId"));this.makeButtons();if(!this.strSelected&&this.drawing.defaults.clickMode)var b=c.connect(this.drawing,"onSurfaceReady",this,function(){c.disconnect(b);this.drawing.mouse.setCursor("default")})})},padding:10,margin:5,size:30,radius:3,toolPlugGap:20,strSelected:"",strTools:"",strPlugs:"",makeButtons:function(){this.buttons=
[];this.plugins=[];var b=this.padding,a=this.padding,n=this.size,k=this.size,r=this.radius,p=this.margin,s={place:"BR",size:2,mult:4};if(this.strTools){var q=[],g=h.getRegistered("tool"),t={},m;for(m in g){var l=w.abbr(m);t[l]=g[m];"all"==this.strTools&&(q.push(l),l=h.getRegistered("tool",m),l.secondary&&q.push(l.secondary.name))}"all"!=this.strTools&&(g=this.strTools.split(","),c.forEach(g,function(a){a=c.trim(a);q.push(a);a=h.getRegistered("tool",t[a].name);a.secondary&&q.push(a.secondary.name)},
this));c.forEach(q,function(e){e=c.trim(e);var d=!1;if(-1<e.indexOf("Secondary")){var d=e.substring(0,e.indexOf("Secondary")),d=h.getRegistered("tool",t[d].name).secondary,f=d.label;this[e]=d.funct;d.setup&&c.hitch(this,d.setup)();f=this.toolDrawing.addUI("button",{data:{x:b,y:a,width:n,height:k/2,r:r},toolType:e,secondary:!0,text:f,shadow:s,scope:this,callback:this[e]});d.postSetup&&c.hitch(this,d.postSetup,f)();d=!0}else f=this.toolDrawing.addUI("button",{data:{x:b,y:a,width:n,height:k,r:r},toolType:e,
icon:v[e],shadow:s,scope:this,callback:"onToolClick"});h.register(f,"button");this.buttons.push(f);this.strSelected==e&&(f.select(),this.selected=f,this.drawing.setTool(f.toolType));this.horizontal?b+=k+p:a+=d?k/2+p:k+p},this)}this.horizontal?b+=this.toolPlugGap:a+=this.toolPlugGap;if(this.strPlugs){var g=[],l=h.getRegistered("plugin"),u={};for(m in l){var x=w.abbr(m);u[x]=l[m];"all"==this.strPlugs&&g.push(x)}"all"!=this.strPlugs&&(g=this.strPlugs.split(","),c.map(g,function(a){return c.trim(a)}));
c.forEach(g,function(e){var d=c.trim(e);if(!1!=u[e].button){var f=this.toolDrawing.addUI("button",{data:{x:b,y:a,width:n,height:k,r:r},toolType:d,icon:v[d],shadow:s,scope:this,callback:"onPlugClick"});h.register(f,"button");this.plugins.push(f);this.horizontal?b+=k+p:a+=k+p}d={};!1==u[e].button?d={name:this.drawing.stencilTypeMap[e]}:d={name:this.drawing.stencilTypeMap[e],options:{button:f}};this.drawing.addPlugin(d)},this)}c.connect(this.drawing,"onRenderStencil",this,"onRenderStencil")},onRenderStencil:function(b){this.drawing.defaults.clickMode&&
(this.drawing.mouse.setCursor("default"),this.selected&&this.selected.deselect(),this.selected=null)},addTool:function(){},addPlugin:function(){},addBack:function(){this.toolDrawing.addUI("rect",{data:{x:0,y:0,width:this.width,height:this.size+2*this.padding,fill:"#ffffff",borderWidth:0}})},onToolClick:function(b){this.drawing.defaults.clickMode&&this.drawing.mouse.setCursor("crosshair");c.forEach(this.buttons,function(a){a.id==b.id?(a.select(),this.selected=a,this.drawing.setTool(b.toolType)):a.secondary||
a.deselect()},this)},onPlugClick:function(b){},_mixprops:function(b,a){c.forEach(b,function(b){this[b]=a.tagName?null===c.attr(a,b)?this[b]:c.attr(a,b):void 0===a[b]?this[b]:a[b]},this)}})});
//@ sourceMappingURL=Toolbar.js.map