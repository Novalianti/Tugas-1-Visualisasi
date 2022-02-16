let j;
function setup() {
  // put setup code here
  createCanvas(400,200)
  j=0;

}

function draw() {
  // put drawing code here
  background(128,128,128);
  line(200,0,200,200);

  //jalan
  line(0,149,400,149)
  line(0,130,1100,145)

  //gambar mobil sebelah kiri
  //badan mobil
  fill(0,255,255)
  var x =  45 - 4*Math.floor(PI*j/20)
  rect(x,85,85,35, radians(300), radians(100))

 //roda mobil
 strokeWeight(3)
 fill(0,0,0)
 j += 1

var x =  70 - 4*Math.floor(PI*j/20)
var r =  25 + 10*Math.sin(PI*j/j)
 ellipse(x,120,r,r)

var x =  110 - 4*Math.floor(PI*j/20)
var r =  25 + 10*Math.sin(PI*j/j)
 ellipse(x,120,r,r)
 fill(255,255,255)

var x =  110 - 4*Math.floor(PI*j/20)
var r =  15 + 10*Math.sin(PI*j/j)
 ellipse(x,120,r,r)

var x =  70 - 4*Math.floor(PI*j/20)
var r =  15 + 10*Math.sin(PI*j/j)
 ellipse(x,120,r,r)

  //bagian atas mobil
  fill(80,80,80)
  j += 1
  var x =  65 - 4*Math.floor(PI*j/20)
  rect(x,50,60,35)
  fill(255,215,0)
  var x =  75 - 4*Math.floor(PI*j/20)
  rect(x,57,20,20)
  var x =  95 - 4*Math.floor(PI*j/20)
  rect(x,57,20,20)
 
  //gambar mobil sebelah kanan
  //badan mobil
  fill(0,255,255)
  rect(245,85,85,35, radians(300), radians(100))

  //roda mobil
  strokeWeight(3)
  fill(0,0,0)
  ellipse(270,120,25,25)
  ellipse(310,120,25,25)
  fill(255,255,255)
  ellipse(310,120,15,15)
  ellipse(270,120,15,15)

  

   //bagian atas mobil
   fill(80,80,80)
   rect(265,50,60,35)
   fill(255,215,0)
   rect(275,57,20,20)
   rect(295,57,20,20)
  }
