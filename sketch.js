//var enemy=createGroup();
var lefteny;

function preload()
{
  bg=loadImage("images/bac.png");
 // bbg=loadImage("images/backg.jpg")
  house1=loadImage("images/hh3.png");
  house2=loadImage("images/hh1.png");
  house3=loadImage("images/hh5.png");
  house4=loadImage("images/hd4.png");
  wall=loadImage("images/wal1.png");
  wal1=loadImage("images/wal2.png");

  running_ply=loadAnimation("images/c1.png","images/c2.png","images/c3.png","images/c4.png","images/c5.png","images/c6.png");
  stand_ply=loadAnimation("images/stand commando.png");

  stand_enemy=loadImage("images/stand eny.png");
  stand1_enemy=loadImage("images/deny1.png");
  sit_enemy=loadImage("images/seat eny.png");
  sitt_enemy=loadImage("images/seateny1.png");
  running_enemy=loadAnimation("images/eny1.png","images/eny2.png","images/eny3.png","images/eny4.png","images/eny5.png")
  running1_enemy=loadAnimation("images/en1.png","images/en2.png","images/en3.png","images/en4.png","images/en5.png")

  bullet=loadImage("images/bullet.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  plyr=createSprite(100,1000,100,100);
 // plyr.addAnimation("ply",stand_ply);
  plyr.addAnimation("run",running_ply);
  plyr.scale=0.25;

  //create sitted enemy
  en1=createSprite(230,100,30,30);
  en1.addImage("sit",sit_enemy);
  en1.scale=0.18;

 


  //create Walls
 w1=createSprite(900,400,100,20);
 w1.addImage("w",wal1);
 w1.scale=0.5

 w2=createSprite(500,600,20,100);
 w2.addImage("w",wall);
 w2.scale=0.9

 w3=createSprite(1500,600,100,20);
 w3.addImage("w",wal1);
 w3.scale=0.7

 w4=createSprite(1400,300,100,20);
 w4.addImage("w",wall);
 w4.scale=0.35

 en2=createSprite(1400,600,30,30);
 en2.addImage("sit",sitt_enemy);
 en2.scale=0.28;

 en3=createSprite(1700,80,30,30);
 en3.addImage("sit",sitt_enemy);
 en3.scale=0.18;

 //stand enemy
 eny4=createSprite(500,550,50,50);
 eny4.addImage("stand",stand_enemy);
 eny4.scale=0.75;

 eny5=createSprite(1500,300,50,50);
 eny5.addImage("stand",stand1_enemy);
 eny5.scale=0.75;

 eny6=createSprite(800,240,50,50);
 eny6.addImage("stand",stand_enemy);
 eny6.scale=0.35;

 eny7=createSprite(1200,250,50,50);
 eny7.addImage("stand",stand1_enemy);
 eny7.scale=0.35;




 

  ho1=createSprite(500,300,50,50);
  ho1.addImage("h1",house1);
  ho1.scale=0.5;

 

  ho2=createSprite(1600,250,100,100);
  ho2.addImage("h2",house4);
  ho2.scale=0.5;

  ho3=createSprite(1600,750,100,100);
  ho3.addImage("h3",house2);
  ho3.scale=1.5;

  ho4=createSprite(900,220,100,100);
  ho4.addImage("h4",house3);
  ho4.scale=0.35
 
 

  
  

 
  
}

function draw() {
  background(bg);
   

  if(keyWentDown(RIGHT_ARROW))
  {
    plyr.velocityX=2;
    plyr.changeAnimation(running_ply);
  }
  if(keyWentUp(RIGHT_ARROW))
  {
    plyr.velocityX=0;
    plyr.changeAnimation(stand_ply);
  }
  
  if(keyWentDown(LEFT_ARROW))
  {
    plyr.velocityX=-2;
    plyr.changeAnimation(running_ply);
  }
  if(keyWentUp(LEFT_ARROW))
  {
    plyr.velocityX=0;
    plyr.changeAnimation(stand_ply);
  }
  
  if(keyWentDown(UP_ARROW))
  {
    plyr.velocityY=-2;
    plyr.changeAnimation(running_ply);
  }
  if(keyWentUp(UP_ARROW))
  {
    plyr.velocityY=0;
    plyr.changeAnimation(stand_ply);
  }
  
  if(keyWentDown(DOWN_ARROW))
  {
    plyr.velocityY=2;
    plyr.changeAnimation(running_ply);
  }
  if(keyWentUp(DOWN_ARROW))
  {
    plyr.velocityY=0;
    plyr.changeAnimation(stand_ply);
  }
  spawnEny();
  //spawnEney();
  //spawnbullet();
  
  if(frameCount%130===0)
  {
    for(var i=248;i<250;i++)
    {
       lefteny=createSprite(i,200,50,50);
    lefteny.addAnimation("running",running_enemy);
    lefteny.velocityX=random(1,3);
    lefteny.velocityY=random(1,3);
    lefteny.scale=0.70;

   lefteny.depth=ho1.depth;
    ho1.depth=ho1.depth+1;

    lefteny.lifetime=1500;
    }
  }

  if(plyr.position.x-lefteny.position.x===random(-200,100))
  {
    
    var bu=createSprite(lefteny.x,lefteny.y,20,20);
    bu.addImage("bullet",bullet);
    bu.scale=1.0;
    bu.velocityX=-8;

  }

 //image(bg,displayWidth,-displayHeight*2,displayWidth,displayHeight*3)  
  drawSprites();
}

function spawnEny()
{
  if(frameCount%120===0)
  {
    var righteny=createSprite(2200,random(200,500),50,50);
    righteny.addAnimation("running",running1_enemy);
    righteny.velocityX=random(-1,-4);
    righteny.velocityY=random(0,2);

    righteny.depth=ho1.depth;
    ho1.depth=ho1.depth+1;

    righteny.depth=ho1.depth;
    ho2.depth=ho2.depth+1;

    righteny.depth=ho1.depth;
    ho3.depth=ho3.depth+1;

    righteny.depth=ho1.depth;
    ho4.depth=ho4.depth+1;

   /* righteny.depth=w1.depth;
    w1.depth=w1.depth+1;

    righteny.depth=w2.depth;
    w2.depth=w2.depth+1;

    righteny.depth=w3.depth;
    w3.depth=w3.depth+1;

    righteny.depth=w4.depth;
    w4.depth=w4.depth+1;*/

    righteny.lifetime=1500;
    //enemy.add(righteny);
  }
}

function spawnEney()
{
  if(frameCount%130===0)
  {
    var lefteny=createSprite(250,200,50,50);
    lefteny.addAnimation("running",running_enemy);
    lefteny.velocityX=random(1,3);
    lefteny.velocityY=random(1,3);
    lefteny.scale=0.10;

   lefteny.depth=ho1.depth;
    ho1.depth=ho1.depth+1;

    /*lefteny.depth=ho2.depth;
    ho2.depth=ho2.depth+1;

    lefteny.depth=ho3.depth;
    ho3.depth=ho3.depth+1;

    lefteny.depth=ho4.depth;
    ho4.depth=ho4.depth+1;*/

    /*lefteny.depth=w1.depth;
    w1.depth=w1.depth+1;

    lefteny.depth=w2.depth;
    w2.depth=w2.depth+1;

    lefteny.depth=w3.depth;
    w3.depth=w3.depth+1;

    lefteny.depth=w4.depth;
    w4.depth=w4.depth+1;*/

    lefteny.lifetime=1500;

    if(lefteny.position.y++ || lefteny.position.x++)
    {
      lefteny.scale=lefteny.scale+0.5;
    }
  }
}

/*function spawnbullet()
{
  if(dist(plyr.position.x,plyr.position.y,enemy.position.x,enemy.position.y)===random(100,200))
  {
    var bu=createSprite(enemy.position.x,enemy.position.y,20,20);
    bu.addImage("bullet",bullet);
    bu.scale=1.0;
    bu.velocityX=-8;

  }
}*/