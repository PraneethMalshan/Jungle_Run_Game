var boy = document.getElementById("boy");

/*-------Dragon breathing animation---------------------------------------*/
idleImageNumber = 1; /*4vid Meekenuth wenne Enter eka witharak ebuwahama run wena eka*/
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
runImageNumber = 1;  /*4vid Meekenuth wenne Enter eka witharak ebuwahama run wena eka*/
runAnimationNumber = 0;
function runAnimation() {

    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 9){
        runImageNumber =1;
    }

    boy.src = "Assests/photos/png/run ("+runImageNumber+").png";
}

function runAnimationStart() {
    runAnimationNumber =setInterval(runAnimation,100);
    clearInterval(idleAnimationNumber); /*Run animation eka start weddi idle animation eka nathara wenna meeka use karanne*/
}

jumpImageNumber = 1;
jumpAnimationNumber = 0; /*4vid globle variable ekak widiyata jumpAnimationNumber ekata ssingn 0 */
boyMarginTop = 400;

function jumpAnimation() { /* 4vid Jump animation*/

    jumpImageNumber = jumpImageNumber + 1; /*4vid ekak ekathu wewii run wenna kiyanawa*/

    if (jumpImageNumber <= 6) {
        boyMarginTop = boyMarginTop - 20;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber >= 7) {
        boyMarginTop = boyMarginTop + 20;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber == 13) { /*4vid jumpImageNumber eka 11 wunoth mokadawennekiyala meeken kiyanne(Apita jump images 13yi thiinne) */
        jumpImageNumber = 1;    /*jumpImageNumber 13 wunoth aayeth 1 wenna kiyala kiyanawa*/
        clearInterval(jumpAnimationNumber);    /*jump animation eka nawaththa gannawa clear Intervel eken*/
        jumpAnimationNumber = 0; /*jumpAnimationNumber eka 0 wuna gaman*/
        runImageNumber = 0; /*runImageNumber eka call kara gannawa jump animation eka natharawuna gaman*/
        runAnimationStart(); /*jump eka iwara wuna gaman run eka start wenne meeken*/
    }
    boy.src = "Assests/photos/png/jump (" + jumpImageNumber + ").png"; /*4vid jumpAnimation ekata adaala images tika load kara ganiima*/
}

function jumpAnimationStart() { /*4vid Jump animation eka start karanne meeken*/
    clearInterval(idleAnimationNumber); /*4vid jump animation eka start weddi idel animation eka nawaththa ganne meeken.*/
    runImageNumber=0;
    clearInterval(runAnimationNumber); /*4vid run animation eka nawaththa gaeniima*/
    jumpAnimationNumber = setInterval(jumpAnimation,100); /*Jump animation eka start kara ganne meken.. jump animation eka milisecond 100kata paarak start wenna kiima*/
}


function keyCheck(event) {
    // alert(event.which);  /* button ekee key code eka soya ganne meeken*/
    // enter = 13 /*enter button ekee key code eka soya ganne meeken*/
    //space = 32 /*Space button ekee key code eka soya ganne meeken*/


    var keyCode = event.which;

    if (keyCode == 13) {
        if (runAnimationNumber == 0) {
            runAnimationStart();
        }

        if (moveBackgroundAnimationId == 0) {  /*4vid Meeken wenne Enter eka witharak ebuwahama run wena eka*/
            moveBackgroundAnimationId = setInterval(moveBackground,100);
        }
    }

    if (keyCode == 32){
        if (jumpAnimationNumber == 0){
            jumpAnimationStart();
        }

        if (moveBackgroundAnimationId == 0){  /*4vid Meeken wenne Enter eka witharak ebuwahama run wena eka*/
            moveBackgroundAnimationId = setInterval(moveBackground,100);
        }
    }


}

var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

function moveBackground() {

    backgroundImagePositionX = backgroundImagePositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
}
