// Variables
const kitty = document.getElementById("kitty");
const aeroplane = document.getElementById("aeroplane");
const score = document.getElementById("score");
const pressbtntext = document.getElementById("pressbtn");

// Spring functie
function jump() {
    kitty.classList.add("jump-animation");
    setTimeout(() =>
    kitty.classList.remove("jump-animation"), 500);
}

// Bind spring functie aan keys
document.addEventListener('keypress', (event) => {
    if (!kitty.classList.contains('jump-animation')) {
      jump();
    }
})

// Variable
const audio = new Audio("audio/AdhesiveWombat - Night Shade  NO COPYRIGHT 8-bit Music.mp3")

// Laat het spel beginnnen als je op spatie drukt
document.addEventListener("keydown", function(clickToStart) {
  if (clickToStart.code === "Space") {

    pressbtntext.innerHTML = "";
    audio.play();
    
    aeroplane.classList.add("aeroplane-animation");

    // Variables met de property values
    setInterval(() => {
      const kittyTop = parseInt(window.getComputedStyle(kitty)
        .getPropertyValue('top'));
      const aeroplaneLeft = parseInt(window.getComputedStyle(aeroplane)
        .getPropertyValue('left'));

      score.innerText++;

      // Zorgt ervoor dat het obstakel uit beeld gaat
      if (aeroplaneLeft < 0) {
        aeroplane.style.display = 'none';
      } else {
        aeroplane.style.display = ''
      }
    
      // Hitbox
      if (aeroplaneLeft < 50 && aeroplaneLeft > 0 && kittyTop > 150) {
        alert("You got a score of: " + score.innerText +
          "\n\nDo you wanna play again?");
        audio.pause();
        location.reload();
      }
    
    }, 50);

  }
});

