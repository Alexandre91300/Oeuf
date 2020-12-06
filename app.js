const coque = document.getElementById("coque");
const mollet = document.getElementById("mollet");
const dur = document.getElementById("dur");

const subtitle = document.getElementById("subtitle");
const retour = document.getElementById("btn-retour");
const retourInfo = document.getElementById("retour-info");
const annulInfo = document.getElementById("info-annul");
const confirmInfo = document.getElementById("info-confirm");


const timerContainer = document.getElementById("timer-container");
const timerBtn = document.getElementById("btn-timer");
const resetBtn = document.getElementById("btn-reset");
var time = 0;

const paraContainer = document.getElementById("para-container");
const definition = document.getElementById("def");



// ANIMATION LOAD

setTimeout(function () {
    coque.classList.remove("load");
}, 100);
setTimeout(function () {
    mollet.classList.remove("load");
}, 250);
setTimeout(function () {
    dur.classList.remove("load");
}, 500);

function timerInit(m) {
    document.getElementById("timer").innerHTML = "0" + m + ":00";
    clicked = false;
    stoping = false;
    timerGo = false;
    timerStop = false;
    reset = false;

}

// EVENEMENT


coque.addEventListener("click", () => {
    definition.innerHTML = "Un œuf à la coque est un œuf cuit de telle sorte que le blanc soit solide et le jaune liquide.";
    coque.classList.add("this-egg");
    mollet.classList.add("coque");
    dur.classList.add("coque");
    subtitle.classList.add("subtitle-anim");
    retour.classList.add("btn-retour-anim");
    timerContainer.classList.add("timer-container-anim");
    timerInit(3);
    time = 3;
    addPara();

});

mollet.addEventListener("click", () => {
    definition.innerHTML = "L'œuf mollet est un œuf cuit plus longtemps qu'un œuf à la coque et moins longtemps qu'un œuf dur, de façon que le jaune soit épais, mais encore coulant.";

    coque.classList.add("mollet");
    mollet.classList.add("this-egg");
    dur.classList.add("mollet");
    subtitle.classList.add("subtitle-anim");
    retour.classList.add("btn-retour-anim");
    timerContainer.classList.add("timer-container-anim");
    timerInit(6);
    time = 6;
    addPara();



});
dur.addEventListener("click", () => {
    definition.innerHTML = "Un œuf dur est une préparation de l'œuf qui permet de consommer sous forme solide le jaune et le blanc.";
    dur.classList.add("this-egg");
    mollet.classList.add("dur");
    coque.classList.add("dur");
    subtitle.classList.add("subtitle-anim");
    retour.classList.add("btn-retour-anim");
    timerContainer.classList.add("timer-container-anim");
    timerInit(9);
    time = 9;
    addPara();

});


retour.addEventListener('click', () => {
    if (wasClicked) {
        retourInfo.classList.add("retour-info-anim");
    } else {
        subtitle.classList.remove("subtitle-anim");
        retour.classList.remove("btn-retour-anim");

        // COQUE
        coque.classList.remove("this-egg");
        mollet.classList.remove("coque");
        dur.classList.remove("coque");

        // MOLLET
        coque.classList.remove("mollet");
        dur.classList.remove("mollet");
        mollet.classList.remove("this-egg");


        // DUR
        coque.classList.remove("dur");
        mollet.classList.remove("dur");
        dur.classList.remove("this-egg");

        // TIMER
        timerContainer.classList.remove("timer-container-anim");
        clearInterval(timer);
        timerStop = true;

        reset = true;
        stoping = false
        setTimeout(function () {
            document.getElementById("btn-timer").innerHTML = "GO";
        }, 1000);
        clicked = false;
        stoping = true;
        wasClicked = false;

        paraContainer.classList.remove("para-container-anim");


    }

});

annulInfo.addEventListener("click", () => {
    retourInfo.classList.remove("retour-info-anim");
});

confirmInfo.addEventListener("click", () => {
    retourInfo.classList.remove("retour-info-anim");
    subtitle.classList.remove("subtitle-anim");
    retour.classList.remove("btn-retour-anim");

    // COQUE
    coque.classList.remove("this-egg");
    mollet.classList.remove("coque");
    dur.classList.remove("coque");

    // MOLLET
    coque.classList.remove("mollet");
    dur.classList.remove("mollet");
    mollet.classList.remove("this-egg");


    // DUR
    coque.classList.remove("dur");
    mollet.classList.remove("dur");
    dur.classList.remove("this-egg");

    // TIMER
    timerContainer.classList.remove("timer-container-anim");
    clearInterval(timer);
    timerStop = true;

    reset = true;
    stoping = false
    setTimeout(function () {
        document.getElementById("btn-timer").innerHTML = "GO";
    }, 1000);
    clicked = false;
    stoping = true;
    wasClicked = false;
    paraContainer.classList.remove("para-container-anim");

});

var wasClicked = false;
var clicked = false;
var stoping = false;
var timerGo = false;
var timerStop = false;
var reset = false;
timerBtn.addEventListener("click", () => {
    wasClicked = true;
    if (clicked === false) {
        document.getElementById("btn-timer").innerHTML = "Stop";
        stoping = false;
        if (timerGo === false) {
            timer(time, 0);
            timerGo = true;
        }
        clicked = true;
    } else {
        document.getElementById("btn-timer").innerHTML = "GO";
        clicked = false;
        stoping = true;
    }
});

resetBtn.addEventListener('click', () => {
    reset = true;
    stoping = false
    document.getElementById("btn-timer").innerHTML = "GO";
    clicked = false;
    stoping = true;
    wasClicked = false;
});


// FONCTION TIMER

function timer(minute, seconde) {
    var sec = seconde;
    var min = minute;

    var myFunc = setInterval(function () {
        if (reset === true) {
            sec = 0;
            min = time;
            reset = false;
            stoping = true;

        }
        if (sec == 0 && stoping === false) {
            min--;
            sec = 59;
        } else if (stoping === false) {
            sec--;
        }
        if (sec == 0 && min == 0 || timerStop === true) {
            if(sec == 0 && min == 0){
            playAudio();
            }
            clearInterval(myFunc);
        };
        if (sec < 10) {
            document.getElementById("timer").innerHTML = "0" + min + ":0" + sec;
        } else {
            document.getElementById("timer").innerHTML = "0" + min + ":" + sec;
        };
        console.log("test");
    }, 1000);
};

// PARGRAPHE

function addPara() {
    paraContainer.classList.add("para-container-anim");
};

function playAudio(){
    const audio = document.getElementById("audio");
    audio.play();
}
