/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   putBeeper();
   move();
   
   turning_Left();
   
   putBeeper();
   move();
   turning_Right();
   
   putBeeper();
   
   turning_Left();
   turning_Right();
   
   putBeeper();
   
   turning_Left();
   turning_Right();
   putBeeper();
}

function turning_Left(){
   turnLeft();
   move();
}

function turning_Right(){
   turnRight();
   move();
}
