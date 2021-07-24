var Iss,spaceCraft,isDocked=false;


function preload(){
  bg = loadImage('spacebg.jpg');
  sc1 = loadImage('spacecraft1.png');
  sc2 = loadImage('spacecraft2.png');
  sc3 = loadImage('spacecraft3.png');
  sc4 = loadImage('spacecraft4.png');
  iss = loadImage('iss.png');

}





function setup() {
  createCanvas(800,400);
  
  Iss = createSprite(300,200);
  Iss.addImage(iss)
  Iss.scale = .7;

  spaceCraft = createSprite(250,350);
  spaceCraft.addImage(sc1)
  spaceCraft.scale = 0.15;
}




function draw() {
  background(bg);
  console.log(spaceCraft.y);
  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(sc2)
  }
  if(keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(sc3)
  }

  if(keyDown("DOWN_ARROW")){
    spaceCraft.addImage(sc4)
  }


  
  if(spaceCraft.y<=257){
    textSize(20);
    fill('white');
    text("Docked succesfuly",400,350)
    isDocked = true;
  }

  if(isDocked===false){
    if(keyDown("UP_ARROW")){
      spaceCraft.y=spaceCraft.y-3;
    }
  
  }
  drawSprites();
}