var character = document.getElementById("character");
var block = document.getElementById("block");
var score = document.getElementById("score");


var num = 0;

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
    
}

var checkDead = setInterval(function(){

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
        block.style.animation = "none";
        block.style.display = "none";
        alert('You lost! Refresh the page and try again!')
        
    }
    else{
        setInterval(function(){
            num++;
            document.getElementById("score").innerHTML = "Score: " + num;
        },500)
        
    }
},10)

