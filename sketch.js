var wall,thickness,bullet;
var speed,weight;


function setup() {
 createCanvas(1600,400)

 thickness=random(22,83)

bullet = createSprite(50,200,50,10);
wall= createSprite(1200,200,thickness,100);

speed = random(223,321);
weight = random(30,52);

bullet.velocityX=speed;

}

function draw() {
  
background("black")

if (wall.x-bullet.x < (bullet.widht + wall.widht)/2) {
  Damage = (0.5*bulletWeight*bulletSpeed*bulletSpeed) / (ThicknessofWall * ThicknessofWall * ThicknessofWall)

  if (damage>180) {
  bullet.shapecolor="white" ; 
}
if (damage<180 && deformatio>100) {
    bullet.shapecolor="white";    
}
if (damage<100) {
    bullet.shapecolor="white";    
}
}

if (hascollided(bullet,wall)) {
   bullet.velocityX=0;
   Damage = (0.5*bulletWeight*bulletSpeed*bulletSpeed) / (ThicknessofWall * ThicknessofWall * ThicknessofWall)



if (damage>10) {
  wall.shapecolor="red";  
}

if (damage<10) {
    wall.shapecolor="green";   
}

}

drawSprites();

}


function hascollided(lbullet,lwall){
bulletRightEdge=lbullet.x+ lbullet.widht
wallLeftEdge=lwall.x;

if (bulletRightEdge>=wallLeftEdge) {
    
return true
}
return false
}







