var gardenImg, garden;
var mouseAni, mouse, mouseFinalAni;
var catAni, cat, catImg, catFinalAni;

function preload() {
    //load the images here
    gardenImg = loadImage("/images/garden.png");
    mouseImg = loadAnimation("/images/mouse1.png");
    mouseAni = loadAnimation("/images/mouse2.png", "/images/mouse3.png");
    mouseFinalAni = loadAnimation("/images/mouse4.png");
    catImg = loadAnimation("/images/cat1.png");
    catAni = loadAnimation("/images/cat2.png", "/images/cat3.png");
    catFinalAni = loadAnimation("/images/cat4.png");
}
function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,10,10);
    garden.addImage("garden", gardenImg);
    //create tom and jerry sprites here
    cat = createSprite(800,700, 50, 50);
    cat.addAnimation("cat", catImg);
    cat.addAnimation("catAnimation", catAni);
    cat.addAnimation("finalcat", catFinalAni);
    cat.scale = 0.1;

    mouse = createSprite(300,700, 50, 50);
    mouse.addAnimation("mouse", mouseImg);
    mouse.addAnimation("mouseTeasing", mouseAni);
    mouse.addAnimation("finalmouse", mouseFinalAni);
    mouse.scale = 0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width + mouse.width)/2) {
        cat.velocityX = 0
        cat.changeAnimation("finalcat", catFinalAni);
        mouse.changeAnimation("finalmouse", mouseFinalAni);
        console.log("if condition has reached");
    }
    console.log(cat.x - mouse.x);
    console.log(int(cat.width/2) + int(mouse.width/2))
    
    
    edges = createEdgeSprites();
    cat.collide(edges);    
    keyPressed();
    drawSprites();
    
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")) {
      cat.changeAnimation("catAnimation", catAni);
      cat.velocityX = -3;
      mouse.changeAnimation("mouseTeasing", mouseAni);
  }
  
  
}

