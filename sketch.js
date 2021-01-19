var greensquare1, greensquare2

function setup() {
  createCanvas(1200,800);
  greensquare1 = createSprite(600, 400, 50, 80);
  greensquare2 = createSprite(400, 200, 80, 30);
  greensquare1.shapeColor = "green"
  greensquare2.shapeColor = "green"
}
function draw() {
  background("purple")
  greensquare2.x = World.mouseX
  greensquare2.y = World.mouseY
    if(greensquare2.x - greensquare1.x < greensquare2.width/2 + greensquare1.width/2 && greensquare1.x - greensquare2.x < greensquare1.width/2 + greensquare2.width/2      
      &&    greensquare2.y - greensquare1.y < greensquare2.height/2 + greensquare1.height/2 && greensquare1.y - greensquare2.y < greensquare2.height/2 + greensquare1.height/2                                                               ){
    greensquare1.shapeColor = "blue"
    greensquare2.shapeColor = "pink"
  }
  else{
    greensquare1.shapeColor = "green"
    greensquare2.shapeColor = "green"


  }
  drawSprites();
}