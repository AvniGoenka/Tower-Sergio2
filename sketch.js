const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;
var ground;
var polygon, Slingshot;

function preload(){
    polygon_img= loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(400,300,250,5);
   
    block8 = new Block(330,255,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16 = new Block(390,155,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot= new Shooter(polygon,{x:100,y:200});

}


function draw(){
    background("pink");
    Engine.update(engine);

    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    slingShot.display();
    
    ground.display();
    ground1.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
 
function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode===32){
    Matter.body.setPosition(polygon.body,{x:100,y:200})
    Shooter.attach(polygon.body);
    }}