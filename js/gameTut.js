

var ctx = document.getElementById("ctx").getContext("2d");
ctx.font = '30px Arial';
 
var HEIGHT = 500;
var WIDTH = 500;
var FRAMERATE = 30;
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



setInterval(playerUpdate, FRAMERATE);
setInterval(enemyUpdate, FRAMERATE);



function playerUpdate(){
        player.x += player.spdX;
        player.y += player.spdY;
        ctx.fillText(player.name, player.x, player.y);
        console.log('hello', player.x);
       
        if(player.x >= WIDTH || player.x <= 0){
            player.spdX *= -1;
        }
        else if(player.y >= WIDTH || player.y <= 0){
            player.spdY *= -1;
        }
       
}
function enemyUpdate(){
    enemy.x += enemy.spdX;
    enemy.y += enemy.spdY;
    ctx.fillText(enemy.name, enemy.x, enemy.y);
    console.log('hello', enemy.x);
   
    if(enemy.x >= WIDTH || enemy.x <= 0){
        enemy.spdX *= -1;
    }
    else if(enemy.y >= WIDTH || enemy.y <= 0){
        enemy.spdY *= -1;
    }
   
}