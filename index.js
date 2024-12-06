
var Sequence = [1,2,3,4];
var newSequence = [];
var c=0;
var started = false;
var userSequence =[];
var one = false;
//funcTion to animate as well as play audio
function animate (key) { 
    key="#"+key
    $(key).addClass("animate");
    setTimeout(function(){
        $(key).removeClass("animate");
    },200);
    switch(key)
    {
        case '#1' : var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
        case '#2' : var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
        case '#3' : var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
        case '#4' : var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
    }
}
//calling the function while giving the buttons id attr as the input and if not started then change the bg color
$("button").click(function()
{
   if(!started)
   {
    var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        $("body").removeClass("bg-blue-950");
        $("body").addClass("bg-red-500");
        $("h1").text("Game Over, Press Any Key to Restart");
        
        setTimeout(function(){
            $("body").removeClass("bg-red-500");
            $("body").addClass("bg-blue-950");

        },300)
    }
    else
    {
        animate($(this).attr("id"));
    }
}
)
$("button").click(user)
function user()
{
    if(started)
    {
    var us = $(this).attr("id");
    userSequence.push(parseInt(us));
    console.log(userSequence);
    checkAns();
    }
}
//to randomise the first time the page loads
$(document).keypress(function () { 
    if(!started)
    {
        sequence();
        started=true;
        c++;
        $("h1").text("Level " + c);
        
    }
});
//function to generate random sequences
function sequence()
{   
    var randomNumber = Math.floor(Math.random()*4);
    newSequence.push(Sequence[randomNumber]);
    console.log(newSequence);
    animate(Sequence[randomNumber]);
    
}   
function checkAns()
{
    var currentLEvel=userSequence.length-1;
    if(newSequence[currentLEvel]===userSequence[currentLEvel])
    {
        if(newSequence.length===userSequence.length)
        {
            userSequence = []; // Reset user sequence for next level
                c++;
                $("h1").text("Level " + c);
            setTimeout(sequence,400);
            
        }
    }
    else {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        $("body").removeClass("bg-blue-950").addClass("bg-red-500");
        
        setTimeout(function(){
            $("body").removeClass("bg-red-500").addClass("bg-blue-950");

        },300)

        startOver(); // Restart the game
    }
}
// Function to restart the game
function startOver() {
    newSequence = [];
    userSequence = [];
    started = false;
    c = 0;
    $("h1").text("Press Any key to Start");
}