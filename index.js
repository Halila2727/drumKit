const images = {
    w: "./images/crash.png",
    a: "./images/kick.png",
    s: "./images/snare.png",
    d: "./images/tom1.png",
    j: "./images/tom2.png",
    k: "./images/tom3.png",
    l: "./images/tom4.png"
};

$(document).ready(function() {
    let string = "wasdjkl";
    for(const char of string)
    {
        let img = document.createElement("img");
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";
        img.src = images[char];
        let elem = document.querySelector("." + char);
        elem.appendChild(img);
    }
});

$(".w").click(function(){
    playSound("crash");
    animatePress("w");
});

$(".a").click(function(){
    playSound("kick-bass");
    animatePress("a");
});

$(".s").click(function(){
    playSound("snare");
    animatePress("s");
});

$(".d").click(function(){
    playSound("tom-1");
    animatePress("d");
});

$(".j").click(function(){
    playSound("tom-2");
    animatePress("j");
});

$(".k").click(function(){
    playSound("tom-3");
    animatePress("k");
});

$(".l").click(function(){
    playSound("tom-4");
    animatePress("l");
});

function playSound(sound)
{
    var audio = new Audio("./sounds/"+sound+".mp3");
    audio.play();
}

$(document).keydown(function(event) {
    let keyPressed = event.key.toLowerCase();
    if ("wasdjkl".includes(keyPressed)) {
        playSound(getSound(keyPressed));
        animatePress(keyPressed);
    }
});

function getSound(key) {
    if(key === "w") return "crash";
    if(key === "a") return "kick-bass";
    if(key === "s") return "snare";
    if(key === "d") return "tom-1";
    if(key === "j") return "tom-2";
    if(key === "k") return "tom-3";
    if(key === "l") return "tom-4";
    return;
}

function animatePress(key)
{
    $("."+key).addClass("pressed");
    setTimeout(function(){$("."+key).removeClass("pressed");},100);
}