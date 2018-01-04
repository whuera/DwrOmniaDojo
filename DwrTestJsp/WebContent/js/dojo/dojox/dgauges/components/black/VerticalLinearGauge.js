//>>built
define("dojox/dgauges/components/black/VerticalLinearGauge","dojo/_base/lang dojo/_base/declare dojo/_base/Color ../../RectangularGauge ../../LinearScaler ../../RectangularScale ../../RectangularValueIndicator ../DefaultPropertiesMixin".split(" "),function(e,f,d,g,h,k,l,m){return f("dojox.dgauges.components.black.VerticalLinearGauge",[g,m],{borderColor:"#000000",fillColor:"#000000",indicatorColor:"#A4A4A4",constructor:function(){this.orientation="vertical";this.borderColor=new d(this.borderColor);
this.fillColor=new d(this.fillColor);this.indicatorColor=new d(this.indicatorColor);this.addElement("background",e.hitch(this,this.drawBackground));var c=new h,b=new k;b.set("scaler",c);b.set("labelPosition","trailing");b.set("paddingTop",30);b.set("paddingBottom",30);b.set("paddingLeft",15);b.set("font",{family:"Helvetica",weight:"bold",size:"7pt",color:"#CECECE"});b.set("tickShapeFunc",function(a,b,c){return a.createCircle({r:c.isMinor?0.5:3}).setFill("#CECECE")});this.addElement("scale",b);var a=
new l;a.set("interactionArea","gauge");a.set("value",c.minimum);a.set("paddingLeft",18);a.set("indicatorShapeFunc",e.hitch(this,function(a){return a.createPolyline([0,0,-10,-20,10,-20,0,0]).setFill(this.indicatorColor).setStroke({color:[69,69,69],width:1,style:"Solid",cap:"butt",join:20})}));b.addIndicator("indicator",a)},drawBackground:function(c,b,a){c.createRect({x:0,y:0,width:50,height:a,r:15}).setFill(this.borderColor);c.createRect({x:4,y:4,width:42,height:a-8,r:12}).setFill({type:"linear",x1:5,
y1:0,x2:20,y2:0,colors:[{offset:0,color:[100,100,100]},{offset:1,color:this.fillColor}]});c.createPath().moveTo(25,4).hLineTo(36).smoothCurveTo(46,4,46,18).vLineTo(a-20).smoothCurveTo(46,a-4,36,a-4).closePath().setFill({type:"linear",x1:70,y1:0,x2:25,y2:0,colors:[{offset:0,color:[150,150,150]},{offset:1,color:this.fillColor}]});c.createPath().moveTo(25,4).hLineTo(36).smoothCurveTo(46,4,46,18).vLineTo(a-20).smoothCurveTo(46,a-4,36,a-4).closePath().setFill([255,255,255,0.05])}})});
//@ sourceMappingURL=VerticalLinearGauge.js.map