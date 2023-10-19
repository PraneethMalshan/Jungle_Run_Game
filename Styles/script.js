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
boyMarginTop = 500;

function jumpAnimation() { /* 4vid Jump animation*/
    boy.src = "Assests/photos/png/jump (" + jumpImageNumber + ").png"; /*4vid jumpAnimation ekata adaala images tika load kara ganiima*/
    jumpImageNumber = jumpImageNumber + 1; /*4vid ekak ekathu wewii run wenna kiyanawa*/

    if (jumpImageNumber <= 6) {

        boyMarginTop = boyMarginTop - 35;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber >= 7) {
        boyMarginTop = boyMarginTop + 35;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber == 13) { /*4vid jumpImageNumber eka 11 wunoth mokadawennekiyala meeken kiyanne(Apita jump images 13yi thiinne) */
        jumpImageNumber = 1;    /*jumpImageNumber 13 wunoth aayeth 1 wenna kiyala kiyanawa*/
        clearInterval(jumpAnimationNumber);    /*jump animation eka nawaththa gannawa clear Intervel eken*/
        jumpAnimationNumber = 0; /*jumpAnimationNumber eka 0 wuna gaman*/
        runImageNumber = 0; /*runImageNumber eka call kara gannawa jump animation eka natharawuna gaman*/
        runAnimationStart(); /*jump eka iwara wuna gaman run eka start wenne meeken*/
    }
    // boy.src = "Assests/photos/png/jump (" + jumpImageNumber + ").png"; /*4vid jumpAnimation ekata adaala images tika load kara ganiima*/
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
        if (boxAnimationId==0){
            boxAnimationId = setInterval(boxAnimation,100);
        }
    }

    if (keyCode == 32) {
        if (jumpAnimationNumber == 0){
            jumpAnimationStart();
        }
    }

        if (moveBackgroundAnimationId == 0){  /*4vid Meeken wenne Enter eka witharak ebuwahama run wena eka*/
            moveBackgroundAnimationId = setInterval(moveBackground,100);
        }

        if (boxAnimationId==0){
            boxAnimationId = setInterval(boxAnimation,100);
        }

}

var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

var score = 0;

function moveBackground() {

    backgroundImagePositionX = backgroundImagePositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";

    score =score + 1;
    document.getElementById("score").innerHTML = score;

}

boxMarginLeft = 1740;

function createBoxex() {

    for (var i = 0; i <= 10; i++) {

        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
        box.style.marginLeft = boxMarginLeft + "px";
        box.id = "box" + i;

        // boxMarginLeft = boxMarginLeft + 500;
        if (i < 5) {
            boxMarginLeft = boxMarginLeft + 2000;
        }
        if (i >= 5) {
            boxMarginLeft = boxMarginLeft + 1000;
        }

    }

}

var boxAnimationId = 0;
function boxAnimation() {
    for (var i=0; i<10; i++){
        var box = document.getElementById("box"+i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft)-35;
        box.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft >= -110 & newMarginLeft <= 100) {
            if (boyMarginTop > 300) {
                clearInterval(boxAnimationId);

                clearInterval(runAnimationNumber);
                runAnimationNumber = -1;

                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber = -1;

                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                deadAnimationNumber = setInterval(boyDeadAnimation,100);
            }
        }
    }
}

deadImageNumber = 1;
deadAnimationNumber = 0;

function boyDeadAnimation() {
    deadImageNumber = deadImageNumber + 1;

    if (deadImageNumber == 8) {
        deadImageNumber = 7;
    }

    boy.src = "Assests/photos/png/Dead(" + deadImageNumber + ").png";
}


