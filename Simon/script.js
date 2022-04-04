var levelCount = 0; 
var memory = [];
var tempo;
var memoryCount = 0;
var userCase = [];
var userCount = 0; 
var runMemory;
var color; 
var matching = true;

var red = $(".pad_shape1").attr("data-pad"); 
var blue = $(".pad_shape2").attr("data-pad");
var yellow = $(".pad_shape3").attr("data-pad");
var green = $(".pad_shape4").attr("data-pad");



$(document).ready(function () {
    // Lancement du jeu 
    $('.circle').click(function () { 
        if (levelCount == 0) {
            userCount=0;
            userCase = [];
            memory = [];  
            levelCount = 1; 
            $('.level').html(levelCount);
            clearInterval(runMemory);
            Aleatoire(); 
            setTimeout(function() {runMemory = setInterval(playMemory, 1000);}, 1000);
        }
    });

    $(".pad").click(function () {
        if (levelCount != 0) {
            userCase.push(this.id);
            console.log(userCase); 
            userCount++;
            
            for (i = 0; i < userCase.length; i++) {
              if (memory[i] != userCase[i]) {
                matching = false;
              }
            }
        }

        if (matching == false) {
            $('.level').html("erreur");
            $('.soundWrong').get(0).play();
            userCase = [];
            memoryCount = 0;
            userCount = 0;
            matchingArrays = true;
            $(".pad").css("pointer-events", "none");
        }
    }); 


    // Todo
    // stocker la case cliquer par user
    // gestion du temps de l'intervalle
    // fonction perdu et gagner 


    //Gestion du click et du son
    $('.pad').click(function () {
        $(this).animate({ opacity: 0.5 }, 200).animate({ opacity: 1 }, 200);
        $('.pad_shape1').click(function () { $(".sound1").get(0).play(); });
        $('.pad_shape2').click(function () { $(".sound2").get(0).play(); });
        $('.pad_shape3').click(function () { $(".sound3").get(0).play(); });
        $('.pad_shape4').click(function () { $(".sound4").get(0).play(); });
    });
});


function win(){
    if (levelCount == 1) {
        $('.level').html('Win');
    }
}

function lose(){
    
}


function temps(){

    switch(levelCount) {
        case 1:
        case 2:
        case 3:
        case 4:
          tempo = 1000;
            break;
        case 5:
          tempo = 700;
          break;
        case 9:
          tempo = 500;
          break;
        case 13:
          tempo = 300;
          break;
      }
}


function playMemory(){

    $(".level").html(levelCount);
    tempColor = memory[memoryCount];
    $(".sound" + tempColor).get(0).play();
    setTimeout(function() {$("#button" + tempColor).removeClass("activated");}, 250);
    memoryCount++;
    if (memoryCount == memory.length) {
      clearInterval(runMemory);
      $(".pad").css("pointer-events", "auto");
    }
}

function Aleatoire(){
    var temp = Math.floor(Math.random()*4)+1;
    switch(temp){
        case 1:
            memory.push(red);
            $('.pad_shape1').animate({ opacity: 0.5 }, 200).animate({ opacity: 1 }, 200);
            break;
        case 2:
            memory.push(blue);
            $('.pad_shape2').animate({ opacity: 0.5 }, 200).animate({ opacity: 1 }, 200);
            break;
        case 3:
            memory.push(yellow);
            $('.pad_shape3').animate({ opacity: 0.5 }, 200).animate({ opacity: 1 }, 200);
            break;
        case 4:
            memory.push(green);
            $('.pad_shape4').animate({ opacity: 0.5 }, 200).animate({ opacity: 1 }, 200);
            break;
    }
    console.log(memory);
}
