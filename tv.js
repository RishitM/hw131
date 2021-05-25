var img
function preload(){
img=loadImage("TV.jpeg")
}
function setup(){
canvas=createCanvas(700,500);
canvas.center()
}
function draw(){
image(img,0,0,700,500)

stroke(245, 0, 0);
strokeWeight(4);
noFill()
textSize(50);
textStyle(NORMAL);
text("Television:",150,115)
rect(150, 80, 400, 400);

}
function back(){
    location.href="index.html"
}
