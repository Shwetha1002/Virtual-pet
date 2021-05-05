var dog, happyDog, database, foodS, foodStock;
var dogImage, happyDogImage;


function preload()
{
	dogImage = loadImage("dogImg.png")
  happyDogImage = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  dog = createSprite(400, 350 , 50, 50);
  dog.addImage(dogImage);
  //happyDog.addImage(happyDogImage);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImage);
      
  }

  drawSprites();
  textSize(20);
  fill ("red")
  text ( "Food:" + foodS, 100,100 );
  //add styles here
 fill("purple")
  text ( "Press the up arrow key to feed your pet and watch the food count reduce!", 100, 30 );
}

function readStock(data){
  foodS= data.val();


}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    Food : x   
  })
}

