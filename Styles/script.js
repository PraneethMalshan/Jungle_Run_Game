var boy = document.getElementById("boy");

/*-------Dragon breathing animation---------------------------------------*/
idleImageNumber = 0;
idleAnimationNumber = 0;
function idleAnimation() {

    idleImageNumber = idleImageNumber + 1;

    if (idleImageNumber == 11){
        idleImageNumber = 1;
    }

    boy.src="Assests/photos/png/idle ("+idleImageNumber+").png";
    // boy.src="         ";

}

function idleAnimationStart() {

    idleAnimationNumber = setInterval(idleAnimation,100);
}

/*----------------------------------------------*/

