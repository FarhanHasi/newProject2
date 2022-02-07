
var track,bg;
var bgTrack;
var player;


function preload()
{
    track = loadImage("./assets/track.jpg");
    playerImg = loadAnimation("./assets/player1.png","./assets/player2.png");
    enemy1Img = loadImage("./assets/enemy1.png");
    enemy2Img = loadImage("./assets/enemy2.png");
    enemy3Img = loadImage("./assets/enemy3.png");
    enemy4Img = loadImage("./assets/enemy4.png");
    enemy5Img = loadImage("./assets/enemy5.png");
      
}

function setup()
{
  createCanvas(windowWidth,windowHeight);
  bgTrack = createSprite(width/2,height,width,height);
  bgTrack.addImage(track);
  bgTrack.velocityY = 5; 
  bgTrack.scale =1; 

  player = createSprite(width/2,height-100,20,20);
  player.addAnimation("playerRun",playerImg);
  player.scale = 0.5; 

  obstacles = new Group();

  var obstaclesPositions = [
    { x: width / 2 + 250, y: height - 800, image: playerImg },
    { x: width / 2 - 150, y: height - 1300, image: playerImg },
    { x: width / 2 + 250, y: height - 1800, image: playerImg },
    { x: width / 2 - 180, y: height - 2300, image: playerImg },
    { x: width / 2, y: height - 2800, image: playerImg },
    { x: width / 2 - 180, y: height - 3300, image: playerImg },
    { x: width / 2 + 180, y: height - 3300, image: playerImg },
    { x: width / 2 + 250, y: height - 3800, image: playerImg },
    { x: width / 2 - 150, y: height - 4300, image: playerImg },
    { x: width / 2 + 250, y: height - 4800, image: playerImg }
    
  ];
  /*addSprites(
    obstacles,
    obstaclesPositions.length,
    enemy1Img,
    0.5,
    obstaclesPositions
  );*/

  

}
function draw()
{
  background(0);
  if(bgTrack.y > height)
  {
    bgTrack.y = bgTrack.height/2;
  }

  if(keyIsDown(LEFT_ARROW))
  {
    player.x = player.x-10;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    player.x = player.x+10;
  }
    drawSprites();
}

function addSprites(spriteGroup,numberOfSprites,spriteImage,scale,positions = [])
{
    for(var i=0;i<numberOfSprites;i++)
    {
      if(positions.length>0)
      {
        var x = positions[i].x;
        var y = positions[i].y;
        spriteImage = positions[i].image; 
      }
      else
      {
        var x = random(width/2-200,width/2+200);
        var y = random((-height*5)+200,height-400);
      }   
        var enemy = [enemy1Img,enemy2Img,enemy3Img,enemy4Img,enemy5Img];   
        spriteImage = random(enemy);
        for(var i=0;i<2;i++)
        {
          var sprite = createSprite(x,y,20,20);
          sprite.addImage(spriteImage);
          sprite.scale = scale;
          spriteGroup.add(sprite);
        }
      
    }
}