//function with parameters(object1,object2)

function bounceOff(object1,object2){
    if(object1.x-object2.x <= (object1.width + object2.width)/2 && 
    object2.x-object1.x <= (object1.width + object2.width)/2 && 
    object1.y-object2.y <= (object1.height + object2.height)/2 && 
    object2.y-object1.y <= (object1.height + object2.height)/2){
      object2.velocityX=object2.velocityX * (-1);
      }
    }
  
  function collide(object1,object2){
    if(object1.x-object2.x <= (object1.width + object2.width)/2 && 
    object2.x-object1.x <= (object1.width + object2.width)/2 && 
    object1.y-object2.y <= (object1.height + object2.height)/2 && 
    object2.y-object1.y <= (object1.height + object2.height)/2){
      object2.velocityX=0;
      }
    }
  
  function isTouching(object1,object2){
    if(object1.x-object2.x <= (object1.width + object2.width)/2 && 
    object2.x-object1.x <= (object1.width + object2.width)/2 && 
    object1.y-object2.y <= (object1.height + object2.height)/2 && 
    object2.y-object1.y <= (object1.height + object2.height)/2){
      return true;
    }
    else {
      return false;
    }
  }