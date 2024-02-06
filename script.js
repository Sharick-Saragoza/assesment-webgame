const kitty = document.getElementById("kitty");
const aeroplane = document.getElementById("aeroplane");
const score = document.getElementById("score");
const pressbtntext = document.getElementById("pressbtn");

/* 
Elke keer als je springt word de jump animation verbonden aan de dino div
en daarna weer verwijderd 
*/

function jump() {
    kitty.classList.add("jump-animation");
    setTimeout(() =>
    kitty.classList.remove("jump-animation"), 500);
}

// If statement zorgt ervoor dat je jump niet kan spammen
document.addEventListener('keypress', (event) => {
    if (!kitty.classList.contains('jump-animation')) {
      jump();
    }
})

document.addEventListener("keydown", function(clickToStart) {
  if (clickToStart.code === "Space") {

    pressbtntext.innerHTML = "";
    
    aeroplane.classList.add("aeroplane-animation");

    setInterval(() => {
      const kittyTop = parseInt(window.getComputedStyle(kitty)
        .getPropertyValue('top'));
      const aeroplaneLeft = parseInt(window.getComputedStyle(aeroplane)
        .getPropertyValue('left'));
      score.innerText++;

      if (aeroplaneLeft < 0) {
        aeroplane.style.display = 'none';
      } else {
        aeroplane.style.display = ''
      }
    
      if (aeroplaneLeft < 50 && aeroplaneLeft > 0 && kittyTop > 150) {
        alert("You got a score of: " + score.innerText +
          "\n\nDo you wanna play again?");
        location.reload();
      }
    
    }, 50);

  }
});

