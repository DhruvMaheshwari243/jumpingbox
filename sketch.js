var canvas;
var music;
var red1,blue1,green1,yellow1;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    red1 = createSprite(700,585,170,20);
    red1.shapeColor = "red";
    blue1 = createSprite(500,585,170,20);
    blue1.shapeColor = "blue";
    green1 = createSprite(300,585,170,20);
    green1.shapeColor = "green";
    yellow1 = createSprite(100,585,170,20)
    yellow1.shapeColor = "yellow";


    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.velocityX = 3;
    box.velocityY = 3;
    edges = createEdgeSprites();

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(edges);

drawSprites()
   if(red1.isTouching(box) && box.bounceOff(red1)){
       box.shapeColor = "red";
   }
   if(blue1.isTouching(box) && box.bounceOff(blue1)){
    box.shapeColor = "blue";
}
if(green1.isTouching(box) && box.bounceOff(green1)){
       box.shapeColor = "green";
   }
   if(yellow1.isTouching(box) && box.bounceOff(yellow1)){
    box.shapeColor = "yellow";
}
}
