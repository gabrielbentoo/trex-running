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
let obstaclesGroup;
let cloudsGroup;
const PLAY = 1;
const END = 0;
let gameState = PLAY;
let trexCollided;

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
}

function setup() {
    createCanvas(600,200);

    trex = createSprite(50, 160, 20, 50);
    trex.addAnimation("running", trexRunning);
    trex.scale = 0.5;
    trex.x = 50;
    edges = createEdgeSprites();

    ground = createSprite(200, 180, 400, 20);
    ground.addImage("ground", groundImage);
    invisibleGround = createSprite(200, 190, 400, 10);
    invisibleGround.visible = false;

    obstaclesGroup = new Group();
    cloudsGroup = new Group();
    trex.setCollider("circle", 0, 0, 40);

    //trex.debug = true;


}

function draw() {
    background("white");
    text("pontuacao: " + score, 500, 50);
  

    if(gameState === PLAY) {
         ground.velocityX = -6;

        if(ground.x < 0) {
            ground.x = ground.width/2;
        }
        score = score + Math.round(frameCount / 60);

        if(keyDown("space") && trex.y >= 100) {
             trex.velocityY = -9;
        }
        trex.velocityY = trex.velocityY + 0.9;
        spawnClouds();
        spawnObstacles();

        if(obstaclesGroup.isTouching(trex)) {
            gameState = END;
        }
    }
    else if(gameState === END) {
        trex.changeAnimation("collided", trexCollided);
        ground.velocityX = 0; 
        cloudsGroup.setVelocityXEach(0);
        obstaclesGroup.setVelocityXEach(0);
        
    }

    

    //colisao com chao
    trex.collide(invisibleGround);
    drawSprites();

    
    

    

}


function spawnClouds() {
    if(frameCount % 60 === 0){
        cloud = createSprite(605, 100, 40, 10);
        cloud.addImage (cloudImage);
        cloud.y = Math.round(random(10, 60));
        cloud.scale = 0.4;
        cloud.velocityX = -3;

        cloud.lifetime = 202;
        cloud.depth = trex.depth;
        trex.depth += 1;
        cloudsGroup.add(cloud);
    }
    
}

function spawnObstacles() {
    if(frameCount % 60 === 0){
        let obstacle = createSprite(605, 165, 10, 40);
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
        obstacle.velocityX = -6;
        obstacle.lifetime = 101;
        obstaclesGroup.add(obstacle);

    }
}