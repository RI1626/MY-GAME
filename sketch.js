var backGround_Image,boy_sad_Image,coin1,coin,fireball1,fireball,food;
var Boy,Boy1
var food1,reactangle;

function preload() {
  backGround_Image = loadImage("./assets/Background.webp")
  Boy = loadImage("./assets/boy.png")
  boy_sad_Image = loadImage("./assets/Boysad.png")
  coin1 = loadImage("./assets/coin.png")
  fireball1 = loadImage("./assets/Fireballs.png")
  food1 = loadImage("./assets/food.png")
}

function setup(){
 createCanvas(700,700)

    Boy1 = createSprite(300,600,50,50)
    Boy1.addImage(Boy)
    Boy1.scale=0.5

    rectangle = createSprite(650,300,100,20)
    

    foodGroup = new Group()
    coinGroup = new Group()
    fireballGroup = new Group()
}

function draw(){
 background(backGround_Image)
  
  if (keyIsDown("LEFT_ARROW")) {
    Boy1.x=Boy1.x-3
  }

  if (keyIsDown("RIGHT_ARROW")) {
    Boy1.x=Boy1.x+3
  }


  fall()
  fire()
  fallCoin()
  drawSprites()
}

function fall() {
  
    if (frameCount % 200 === 0) {
     food = createSprite(10,50,10,10);
     food.x=Math.round(random(10,650))
      food.addImage(food1);
    food.velocityY +=10
    food.scale=0.2;
      foodGroup.add(food)
    }


  }

  function fire()
  {
    if(frameCount % 300 === 0) {
       fireball=createSprite(Math.round(random(10,650),0,10,10));
      fireball.addImage(fireball1);
      fireball.velocityY -= 10;
      fireball.scale=0.2;
      fireballGroup.add(fireball)
    }

      
  }
function fallCoin() 
{
  if(frameCount % 800 === 0) 
  {
     coin=createSprite(Math.round(random(10,650),0,10,10))
    coin.addImage(coin1)
    coin.velocityY -=10
    coin.scale = 0.2
    coinGroup.add(coin)
  }
}


  
