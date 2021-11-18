var ball;
var hipnoticball,database;
var posicion;

function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);
    hipnoticball = createSprite(250,250,10,10);
    hipnoticball.shapeColor = "red";
    var hipnoticballposition=database.ref("Pelota/posición");
    hipnoticballposition.on("value",readPosition,showError); 
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Pelota/posición").set({"x":posicion.x+x,"y":posicion});
   // ball.x = ball.x + x;
    //ball.y = ball.y + y;
}
function readPosition(data){
    posicion=data.val();
    hipnoticball.x=posicion.x;
    hipnoticball.y=posicion.y;
}