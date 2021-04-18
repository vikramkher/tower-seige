const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var ground1,ground2,polygon,rope,polygon_img,fly;
var gameState = "onSling";


function preload(){

    polygon_img=loadImage("polygon.png")
}

function setup(){
createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

ground1=new Ground(600,300,200,10)
ground2=new Ground(1000,200,200,10)
polygon=Bodies.circle(50,200,20)
World.add(world,polygon)
rope=new SlingShot(this.polygon,{x:50,y:150})

//ground1
//level1
box1=new Box(520,250,40,40)
box2=new Box(560,250,40,40)
box3=new Box(600,250,40,40)
box4=new Box(640,250,40,40)
box5=new Box(680,250,40,40)
//level2
box6=new Box(560,210,40,40)
box7=new Box(600,210,40,40)
box8=new Box(640,210,40,40)
//level3
box9=new Box(600,170,40,40)

//ground2
//level1
box10=new Box(920,150,40,40)
box11=new Box(960,150,40,40)
box12=new Box(1000,150,40,40)
box13=new Box(1040,150,40,40)
box14=new Box(1080,150,40,40)
//level2
box15=new Box(960,110,40,40)
box16=new Box(1000,110,40,40)
box17=new Box(1040,110,40,40)
//level3
box18=new Box(1000,70,40,40)


}

function draw(){
    background(0)
   Engine.update(engine)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    ground1.display();
    ground2.display();
   // polygon.display();
    rope.display();
    //ground1
    fill("green")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    fill("yellow")
    box6.display();
    box7.display();
    box8.display();
    fill("blue")
    box9.display();
    //ground2
    fill("green")
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    fill("yellow")
    box15.display();
    box16.display();
    box17.display();
    fill("blue")
    box18.display();

    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    rope.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body,{x:200,y:400})
       fly.attach(polygon.body);
       chance++
       gameState="onSling"
    }
}

