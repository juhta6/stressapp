tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
topLevel: true,
background: "black"
}).open();
//---------------------------------------------------------------------------------------------------------------------------

var a = 255;
var o = 0;
var i = 0;
var triggered = "false";

var composite = new tabris.Composite({
  layoutData: {height: 240, width: 240, centerX: 0, centerY: 0},
  background: "white",
  cornerRadius: 120,
  elevation: 12,
}).on("touchmove", function(widget){
 if (triggered == "false"){
   ++o;
   --a;
 } else if (triggered == "true"){
   --o;
  ++a;
 }
 if (o == 255 || a == 255) {
   text.set({text: "<br/>"+(++i)+"<br/>"+"TIMES REVERSED"});
   if (o == 255){
     triggered = "true"
   } else if (a == 255){
     triggered = "false"
   }
 }
 text.set({textColor: "rgb("+o+","+o+","+o+")"})
 widget.set("background", "rgb("+a+","+a+","+a+")")
 page.set("background", "rgb("+o+","+o+","+o+")")

}).appendTo(page);
 var text = new tabris.TextView({
  layoutData: {centerX: 0, centerY: 0},
  text: "<br/>"+i+"<br/>"+"TIMES REVERSED",
  font: "bold 24px",
  alignment: "center",
  markupEnabled: true
}).appendTo(composite);
