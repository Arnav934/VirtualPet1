var dog
var happyDog
var database
var foodS
var foodStock

function preload() {
doge = loadImage("images/dogImg.png")
happBoi = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
  dog = createSprite(250, 250)
  dog.addImage(doge)
  dog.scale = 0.25
  }

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if (x<=0){
    x=0
  } else{
   x=x-1 
  }
  database.ref('/').update({
    Food:x
  })
}

function draw() {
  background(46, 139, 87)  
  if (keyWentDown(UP_ARROW)) {
    console.log(foodS)
      writeStock(foodS)
      dog.addImage(happBoi)
  }                                
                                                                     
  textSize(13)
  fill("Black")
  text("Note: Press Up Arrow to feed your Doge some Chimken to make him a HappBoi", 13, 25)
  text("Remaining Food:" + foodS, 150, 100)
  
  drawSprites();
  //add styles here
}

