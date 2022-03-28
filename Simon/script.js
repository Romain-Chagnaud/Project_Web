var levelCount = 0; 
var memory = [];
var tempo;

var red = $(".pad_shape1").attr("data-pad"); 
var blue = $(".pad_shape2").attr("data-pad");
var yellow = $(".pad_shape3").attr("data-pad");
var green = $(".pad_shape4").attr("data-pad");


$(document).ready(function () {
    // Lancement du jeu 
    $('.circle').click(function () { 
        if (levelCount == 0) {
            levelCount++;
            $(".pad").css("pointer-events", "none");
            $('.level').html(levelCount);
            Aleatoire();
        }
    });




    //Gestion du click et du son
    $('.pad').click(function () {
        $(this).animate({ opacity: 0.5 }, 200).animate({ opacity: 1 }, 200);
        $('.pad_shape1').click(function () { $(".sound1").get(0).play(); });
        $('.pad_shape2').click(function () { $(".sound2").get(0).play(); });
        $('.pad_shape3').click(function () { $(".sound3").get(0).play(); });
        $('.pad_shape4').click(function () { $(".sound4").get(0).play(); });
    });
});

/*
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
*/

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
