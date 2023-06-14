var elements = document.querySelectorAll(".drum").length; /* to get everyelement that has the class drum*/
for (let i = 0; i < elements; i++) {
 document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  
  var buttonHtml = this.innerHTML;

  switch (buttonHtml) {
    case "w": 
          var bass = new Audio ("sounds/kick-bass.mp3");
          bass.play();
          break;

    case "a":
          var snare = new Audio ("sounds/snare.mp3");
          snare.play();
          break;

    case "s":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
  
    case "d":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;

    case "j":
              var tom3 = new Audio ("sounds/tom-3.mp3");
              tom3.play();
              break;

    case "k":
             var tom4 = new Audio ("sounds/tom-4.mp3");
                tom4.play();
                break;

  case "l":
              var crash = new Audio ("sounds/crash.mp3");
              crash.play();
              break;

        default: console.log(buttonHtml);
    
  }
}) /* LOOP THROUGH*/
}


 /*/ var audio = new Audio('sounds/tom-2.mp3');
  audio.play();*/