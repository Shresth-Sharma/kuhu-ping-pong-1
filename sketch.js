var a1,a2,a3,a4;
var b1,b2,b3,b4;
var c1,c2,c3,c4,c5;
var d1=0,d2;
function preload(){
    b1=loadImage("kahu.jpeg");
    c5=loadImage("1.jpeg");
    d2=loadImage("b.jpeg");
}
function setup(){
    createCanvas(350,450);
    a1=createSprite(320,200,20,20);
    a1.addImage("1",b1)
    a1.scale=0.1;
    a2=createButton('Up');
    a2.size(175,50);
    a2.position(175,400);
    a3=createButton('Down');
    a3.size(175,50);
    a3.position(0,400);
    a4=createSprite(175,400,350,10);
    a4.shapeColor="red"
    c1=createSprite(175,0,350,10);
    c1.shapeColor="red"
    c2=createSprite(0,200,10,400);
    c2.shapeColor="red"
    c3=createSprite(350,200,10,400);
    c3.shapeColor="red"
    b2=createSprite(175,200,20,20);
    b2.velocityX=-3;
    b2.velocityY=-3;
    b2.addImage("1",d2);
    b2.scale=1;
    c4=createSprite(25,200,20,20);
    c4.addImage("1",c5);
    c4.scale=2.5;
    
}
function draw(){
    background("green");
    for (var i = 0; i < 500; i=i+20) {
        stroke("yellow");
        line(175,i,175,i+10);
    }
    c4.y=b2.y;
    a1.velocityY=0;
    a1.velocityX=0;
    a2.mousePressed(()=>{
        a1.velocityY=-20;
        a1.velocityY=-20;
    });
    a3.mousePressed(()=>{
        a1.velocityY=20;
        a1.velocityY=20;
    });
    a1.bounceOff(a4);
    a1.bounceOff(c1);
    b2.bounceOff(a4);
    b2.bounceOff(c1);
    b2.bounceOff(c2);
    b2.bounceOff(a1);
    b2.bounceOff(c4);
    c4.bounceOff(a4,c1,c2,c3);
    if(b2.x>350){
        d1=d1+1;
        b2.x=175;
        b2.velocityX=-4;
        b2.velocityY=-4;
    }
    textSize(50);
    fill("red");
    text(d1,175,45);
    drawSprites();
}