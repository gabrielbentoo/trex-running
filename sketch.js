let trex;
let trexRunning;
let edges;
let ground;
let groundImage;
let invisibleGround;

function preload() {
    trexRunning = loadAnimation("trex1.png","trex3.png", "trex4.png");
    groundImage = loadImage("ground2.png");
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

}

function draw() {
    background("white");
    if(keyDown("space") && trex.y >= 110) {
        trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.9;

    //colisao com chao
    trex.collide(invisibleGround);
    drawSprites();

    ground.velocityX = -2;
    if(ground.x < 0) {
        ground.x = ground.width/2;
    }
}