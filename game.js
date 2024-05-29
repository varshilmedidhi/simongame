let level=0;
let audio1= new Audio("blue.mp3");
let audio2= new Audio('green.mp3');
let audio3= new Audio("red.mp3") 
let audio4=new Audio("yellow.mp3")
let audio5=new Audio("wrong.mp3")
let green=$("#green");
let red=$("#red");
let blue=$("#blue");
let yellow=$("#yellow");
let buttonColors=["green","red","blue","yellow"];
let userClickedPattern=[];
let gamePattern=[];

$(document).on("keypress",()=>{
    if(level===0 ){
        userClickedPattern=[];
        nextSequence();
        $("h1").text(`Level ${level}`);
    }
});


$(".btn").on("click",function(){let userChosenColor=this.id;
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
console.log(userClickedPattern,gamePattern);
console.log(checkEquality(userClickedPattern,gamePattern));
if(checkEquality(userClickedPattern,gamePattern)){
    if(userClickedPattern.length===gamePattern.length){
        setTimeout(function(){
            userClickedPattern=[];
            nextSequence();
        },1000);
    };    
}else{
    $("h1").text(`You loose ! Press a key to restart`);
    audio5.play();
    userClickedPattern=[];
    gamePattern=[];
    level=0;
    $(document).on("keypress",()=>{
        if(level===0){
            nextSequence();
            $("h1").text(`Level ${level}`);
        }
           
    }); 
};
});


function nextSequence(){
    let randomNumber=Math.floor(Math.random()*4);
    let randomChosencolors=buttonColors[randomNumber];
    gamePattern.push(randomChosencolors);
    playSound(randomChosencolors);
    animatePress(randomChosencolors);
    level++;
    $("h1").text(`Level ${level}`);
};

function playSound(name){
    switch(name){
        case "blue":
            audio1.play();
            break;
        case "green":
            audio2.play();
            break;
        case "red":
            audio3.play();
            break;
        case "yellow":
            audio4.play();
            break;
    };
};

function animatePress(currentColor){
$(`#${currentColor}`).addClass("pressed");
setTimeout(function(){
    $(`#${currentColor}`).removeClass('pressed');
}, 100);
};

function checkEquality(){
for(var i=0;i<userClickedPattern.length;i++){
    if(gamePattern[i]===userClickedPattern[i]){
    
    }else{
        return false;
    }
}
return true;
};




