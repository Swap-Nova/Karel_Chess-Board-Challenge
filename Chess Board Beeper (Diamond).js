/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   putBeeper();
   
   turnLeft();
   two_above();
   two_above();
   
   turnRight();
   two_right();
   two_right();
   
   turnRight();
   two_down();
   two_down();
   
   turnRight();
   two_left();
   
   move();
   turnRight();
   move();
   putBeeper();
   move();
   
   move();
   putBeeper();
   
   turnRight();
   two_above();
   
   turnRight();
   two_down();
   
   turnAround();
   move();
   turnLeft();
   move();
   putBeeper();
}

function two_above(){
   move();
   move();
   putBeeper();
}

function two_right(){
   move();
   move();
   putBeeper();
}

function two_down(){
   move();
   move();
   putBeeper();
}

function two_left(){
   move();
   move();
   putBeeper();
}
