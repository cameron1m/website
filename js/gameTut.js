

var ctx = document.getElementById("ctx").getContext("2d");
ctx.font = '30px Arial';
 
var HEIGHT = 500;
var WIDTH = 500;
var FRAMETIME = 33;
//enemy
var enemy = {
    x:50,
    y:40,
    spdX:30,
    spdY:5,
    name:"z",
};

//player
var player = {
    x:200,
    y:30,
    spdX:30,
    spdY:5,
    name:"a",
};



setInterval(update, FRAMETIME);

function update(){
    entityUpdate(player);
    entityUpdate(enemy);    
}


function entityUpdate(entity){
    entity.x += entity.spdX;
    entity.y += entity.spdY;
        ctx.fillText(entity.name, entity.x, entity.y);
        console.log('hello', entity.x);
       
        if(entity.x >= WIDTH || entity.x <= 0){
            entity.spdX *= -1;
        }
        else if(entity.y >= WIDTH || entity.y <= 0){
            entity.spdY *= -1;
        }
       
}
