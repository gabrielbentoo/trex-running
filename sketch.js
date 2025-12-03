let trex;
let trexRunning;
let edges;

function preload() {
    trexRunning = loadAnimation("trex1.png","trex3.png", "trex4.png");
}

function setup() {
    createCanvas(600,200);

    trex = createSprite(50, 160, 20, 50);
    trex.addAnimation("running", trexRunning);
    edges = createEdgeSprites();

}

function draw() {
    background("white");
    if(keyDown("space")) {
        trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8;
    trex.collide(edges[3]);
    drawSprites();
}