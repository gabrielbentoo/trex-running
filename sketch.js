let trex;
let trexRunning;
let edges;
let ground;
let groundImage;
let invisibleGround;
let cloud;
let cloudImage;
let obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
let score = 0;
let nextCheckPoint = 1000;
let obstaclesGroup;
let cloudsGroup;
const PLAY = 1;
const END = 0;
let gameState = PLAY;
let trexCollided;
let gameOver;
let restart;
let gameOverImg;
let restartImg;
let jumpSound;
let checkPointSound;
let dieSound;

function preload() {
    trexRunning = loadAnimation("trex1.png","trex3.png", "trex4.png");
    groundImage = loadImage("ground2.png");
    cloudImage = loadImage("cloud.png");
    obstacle1 = loadImage("obstacle1.png");
    obstacle2 = loadImage("obstacle1.png");
    obstacle3 = loadImage("obstacle1.png");
    obstacle4 = loadImage("obstacle1.png");
    obstacle5 = loadImage("obstacle1.png");
    obstacle6 = loadImage("obstacle1.png");
    trexCollided = loadAnimation("trex_collided.png");
    gameOverImg = loadImage("gameOver.png");
    restartImg = loadImage("restart.png");
    jumpSound = loadSound("jump.mp3");
    checkPointSound = loadSound("checkPoint.mp3");
    dieSound = loadSound("die.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    trex = createSprite(50, height -70, 20, 50);
    trex.addAnimation("running", trexRunning);
    trex.addAnimation("collided", trexCollided);
    trex.scale = 0.5;
    trex.x = 50;
    edges = createEdgeSprites();

    ground = createSprite(width /2, height -74, 400, 20);
    ground.addImage("ground", groundImage);
    invisibleGround = createSprite(width /2, height -10, width, 125);
    invisibleGround.visible = false;

    obstaclesGroup = new Group();
    cloudsGroup = new Group();
    trex.setCollider("circle", 0, 0, 40);
   // trex.setCollider("rectangle", 0, 0, 140 , trex.height);

    gameOver = createSprite(width /2, height /2);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.5;

    restart = createSprite(width /2, height /2 +40);
    restart.addImage(restartImg);
    restart.scale = 0.5;

    // trex.debug = true;


}

function draw() {
    background("white");
    text("pontuacao: " + score, width -150, 50);
  

    if(gameState === PLAY) {
         ground.velocityX = -(4 + 3 * score / 100);

        
        score += Math.max(1, Math.floor(getFrameRate()/ 60));

        if(score >= nextCheckPoint) {
            checkPointSound.play();
            nextCheckPoint += 1000;
        }

        if(ground.x < 0) {
            ground.x = ground.width/2;
        }

        if((touches.length > 0 || keyDown("space")) && trex.y >= 100) {
             trex.velocityY = -9;
             jumpSound.play();
             touches = [];
        }
        trex.velocityY = trex.velocityY + 0.9;
        spawnClouds();
        spawnObstacles();

        if(obstaclesGroup.isTouching(trex)) {
            //trex.velocityY = -12;
            //jumpSound.play();
            gameState = END;
            dieSound.play();
        }
        gameOver.visible = false;
        restart.visible = false;
    }
    else if(gameState === END) {
        trex.changeAnimation("collided", trexCollided);
        ground.velocityX = 0; 
        cloudsGroup.setVelocityXEach(0);
        obstaclesGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        cloudsGroup.setLifetimeEach(-1);
        trex.velocityY = 0;
        gameOver.visible = true;
        restart.visible = true;
         if(touches.length > 0 || mousePressedOver(restart)) {
        reset();
        touches = [];
    }
    }

    

    //colisao com chao
    trex.collide(invisibleGround);
   
    drawSprites();

    
    

    

}


function spawnClouds() {
    if(frameCount % 60 === 0){
        cloud = createSprite(width +5, height +60, 40, 10);
        cloud.addImage (cloudImage);
        cloud.y = Math.round(random(10, 60));
        cloud.scale = 0.4;
        cloud.velocityX = -3;

        cloud.lifetime = width /6;
        cloud.depth = trex.depth;
        trex.depth += 1;
        cloudsGroup.add(cloud);
    }
    
}

function spawnObstacles() {
    if(frameCount % 60 === 0){
        let obstacle = createSprite(width +5, height -87, 10, 40);
        let rand = Math.round(random(1, 6));
        switch(rand){
            case 1:
                obstacle.addImage(obstacle1);
                break;
            case 2:
                obstacle.addImage(obstacle2);
                break;
            case 3:
                obstacle.addImage(obstacle3);
                break;
            case 4:
                obstacle.addImage(obstacle4);
                break;
            case 5:
                obstacle.addImage(obstacle5);
                break;
            case 6:
                obstacle.addImage(obstacle6);
                break;
            default:
                break;

        }

        obstacle.scale = 0.5;
        obstacle.velocityX = -(6 + score / 100);
        obstacle.lifetime = width /6;
        obstaclesGroup.add(obstacle);

    }
}

function reset() {
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;

    obstaclesGroup.destroyEach();
    cloudsGroup.destroyEach();
    trex.changeAnimation("running", trexRunning);
    score = 0;
}