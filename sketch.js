
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  score = 0;
  
  obstacleGroup = new Group();
  
  FoodGroup = new Group();
}


function draw() {
background(255);
  
  
  
  if(ground.x<0){
    ground.x = ground.width/2;
  
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  score = Math.ceil(frameCount/frameRate())
  text("SURVIVAL: "+score,150,50);
  
  spawnObstacle();
  
  spawnBanana();
  
 drawSprites();
}

function spawnObstacle(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(200,330);
    obstacle.velocityX = -(6 + score/100);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1 ;
    obstacle.lifetime = 200;
  
    obstacleGroup.add(obstacle);
  }
}

function spawnBanana()
{
  if(frameCount % 80 === 0 )
  {
    var food = createSprite(200,125);
    food.y = Math.round(random(100,120));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    food.lifetime = 200;
    food.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    FoodGroup.add(food);
  }
}





