const Engine= Matter.Engine;//namespacing 
const World = Matter.World; 
const Bodies= Matter.Bodies; 
const Constraint= Matter.Constraint
var engine, world; 
var ground;
function setup() 
{ 
createCanvas(3000,800); 
engine = Engine.create(); 
world= engine.world; 
ground=new Ground(1500,780,3000,10);
box1 = new Box(1500,770,70,70);
box2 = new Box(1500,700,70,70);
box3 = new Box(1500,630,70,70);
box4 = new Box(1500,560,70,70);
box5 = new Box(1500,490,70,70);
box6 = new Box(1500,420,70,70);
box7 = new Box(1500,350,70,70);
box8 = new Box(1500,280,70,70);
box9 = new Box(1500,210,70,70);
box10= new Box(1500,140,70,70);
box11= new Box(1700,770,120,120);
box12= new Box(1700,650,100,100);
box13= new Box(1700,550,80,80);
box14= new Box(1700,470,60,60);
box15= new Box(1700,410,40,40);
box16= new Box(1700,370,30,30);
box17= new Box(1700,340,25,25);
box18= new Box(1700,315,20,20);
box19= new Box(1700,295,15,15);
box20= new Box(1700,280,10,10);
WreckingBall = new Ball(950,200,100)
slingshot = new SlingShot(WreckingBall.body,{x:950,y:50})
}

function draw(){
  Engine.update(engine);
  background("pink")
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
WreckingBall.display(); 
slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(WreckingBall.body,{x:mouseX,y:mouseY})
}
