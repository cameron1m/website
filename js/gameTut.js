var ctx = document.getElementById("ctx").getContext("2d");
ctx.font = '30px Arial';
 
var HEIGHT = 500;
var WIDTH = 800;
var FRAMETIME = 10;
var up1Pressed;
var up2Pressed;
var down1Pressed;
var down2Pressed;
var ballList = [];
//Ball
function Ball(id,x,y,spdX,spdY,name){
  var self = {
    id:id,
    x:x,
    y:y,
    spdX:spdX,
    spdY:spdY,
    name:name,
  };
  ballList[id] = self;
  self.updatePos = function(){
    self.x += self.spdX;
    self.y += self.spdY;
      if(self.x >= WIDTH || self.x <= 0){
        self.spdX *= -1;
      }
      else if(self.y >= HEIGHT|| self.y <= 0){
        self.spdY *= -1;
      }
     
  }
  return self;
}
var playerList = [];
//player
function Player(id,x,y,spdX,spdY,upPressed,downPressed,name){
    var self = {
        id:id,
        x:x,
        y:y,
        spdX:spdX,
        spdY:spdY,
        upPressed:upPressed,
        downPressed:downPressed,
        name:name,
    };
    playerList[id] = self;
    self.updatePos = function(){
      
      if(self.upPressed) self.y -= self.spdY;
      if(self.downPressed) self.y += self.spdY;

      if(self.y >= HEIGHT) self.y -= self.spdY;
        
      if(self.y <= 0) self.y += self.spdY;
      
    }
    return self;
}
Ball('B1',250,250,3,1,'Ball');
Player('P1',30,250,0,2,up1Pressed,down1Pressed,"Player 1");
Player('P2',670,250,0,2,up2Pressed,down2Pressed,"Player 2");

setInterval(update, FRAMETIME);

function update(){
  ctx.clearRect(0,0,WIDTH,HEIGHT);
    for(var id in playerList){
      var Player = playerList[id];
        Player.updatePos();
        ctx.fillText(Player.name, Player.x, Player.y);
    }
    for(var id in ballList){
      var Ball = ballList[id];
      Ball.updatePos();
    ctx.fillText(Ball.name, Ball.x, Ball.y);
    }
    
}

///CURRENTLY UNUSED
function entityUpdate(entity){
      entity.x += entity.spdX;
      entity.y += entity.spdY;
        ctx.fillText(entity.name, entity.x, entity.y);
        // console.log('hello', entity.x);
       
        if(entity.x >= WIDTH || entity.x <= 0){
            entity.spdX *= -1;
        }
        else if(entity.y >= WIDTH || entity.y <= 0){
            entity.spdY *= -1;
        }
       
}

//USER INPUT


document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
  //checks if key is down
  function keyDownHandler(event) {
  
      if(event.keyCode == 83) {
          down1Pressed = true;
        console.log("s is down");
        return down1Pressed;
      }
      else if(event.keyCode == 87) {
        up1Pressed = true;
        console.log("w is down");
        return up1Pressed;
      }
  
      if(event.keyCode == 40) {
        down2Pressed = true;
        console.log("down arrow is down");
        return down2Pressed;
      }
      else if(event.keyCode == 38) {
        up2Pressed = true;
        console.log("up arrow is down");
        return up2Pressed;

      }
  }
  // checks if key is up
    function keyUpHandler(event) {
  
      if(event.keyCode == 83) {
          down1Pressed = true;
       // console.log("s is up");
        return down1Pressed;

      }
      else if(event.keyCode == 87) {
        up1Pressed = false;
        //console.log("w is up");
        return up1Pressed;

      }
  
      if(event.keyCode == 40) {
        down2Pressed = false;
        //console.log("down arrow is up");
        return down2Pressed;

      }
      else if(event.keyCode == 38) {
        up2Pressed = false;
        //console.log("up arrow is up");
        return up2Pressed;

      }
  }
