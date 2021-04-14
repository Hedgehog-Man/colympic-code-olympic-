canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 20, 760, 500);
ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=5;
 ctx.arc(200,200,40,0,2*Math.PI);
 ctx.stroke();

 color="black";

 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=5;
 ctx.arc(290,200,40,0,2*Math.PI);
 ctx.stroke();

 color="red"

 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=5;
 ctx.arc(380,200,40,0,2*Math.PI);
 ctx.stroke();

 color="yellow"

 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=5;
 ctx.arc(245,260,40,0,2*Math.PI);
 ctx.stroke();

 color="green"

 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=5;
 ctx.arc(335,260,40,0,2*Math.PI);
 ctx.stroke();
