
  
var dog, happyDog, database, foodS, foodStock , position;
var backgroundImg, dogImg;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");  
  //backgroundImg = loadImage("bg.jpg");
  
}


function setup(){
    createCanvas(900,500);
    database= firebase.database();
    dog = createSprite(700,300,50,50);
    dog.addImage("dog",dogImg);
    dog.scale=0.5  ;
     foodStock =  database.ref('Food');
    foodStock.on("value",readStock)
}

function draw(){
    background(46, 139, 87);
    
   
    if(keyWentDown("space")){
        
       WriteStock(foodS)
       dog.addImage("happyDog",happyDog);   
    }
    

   
    
    drawSprites();
    textSize(25);
    fill("white");
    text("Food Remaining:"+ foodS,100,200);
    text("Press Space to Feed the Dog!" ,100 , 250 )
    text("Food Bar Recharges after 0 Food" ,100 , 300 )
}

function WriteStock(petFOOD){
    if(petFOOD<=0){
        petFOOD= 0+20;
    }
    else{
        petFOOD=petFOOD-1;
    }

    if(petFOOD <=0){



    }
    database.ref('/').update({
        Food:petFOOD
    })
}
function readStock(data){
    foodS = data.val();
    
}


