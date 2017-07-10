
// DECLARE AND INITIALIZE NEEDED VARIABLES
const body = document.querySelector('body');
const board = document.querySelector('.board');
const status = document.getElementById('game-status');
status.textContent = "It's PLAYER 1's turn to PLAY";
const slots = board.querySelectorAll('div');






let playerToPlay = "PLAYER 1";
let isGameDone = false;
let count = 0;

// CHECKS IF A PLAYER HAS WON
function checkForWinner(slots) {


  if(slots[0].className === "x" && slots[1].className === "x" && slots[2].className === "x" ||
     slots[3].className === "x" && slots[4].className === "x" && slots[5].className === "x" ||
     slots[6].className === "x" && slots[7].className === "x" && slots[8].className === "x" ||
     slots[0].className === "x" && slots[3].className === "x" && slots[6].className === "x" ||
     slots[1].className === "x" && slots[4].className === "x" && slots[7].className === "x" ||
     slots[2].className === "x" && slots[5].className === "x" && slots[8].className === "x" ||
     slots[0].className === "x" && slots[4].className === "x" && slots[8].className === "x" ||
     slots[2].className === "x" && slots[4].className === "x" && slots[6].className === "x")
    {
      return "x";
    }

    else if(slots[0].className === "o" && slots[1].className === "o" && slots[2].className === "o" ||
       slots[3].className === "o" && slots[4].className === "o" && slots[5].className === "o" ||
       slots[6].className === "o" && slots[7].className === "o" && slots[8].className === "o" ||
       slots[0].className === "o" && slots[3].className === "o" && slots[6].className === "o" ||
       slots[1].className === "o" && slots[4].className === "o" && slots[7].className === "o" ||
       slots[2].className === "o" && slots[5].className === "o" && slots[8].className === "o" ||
       slots[0].className === "o" && slots[4].className === "o" && slots[8].className === "o" ||
       slots[2].className === "o" && slots[4].className === "o" && slots[6].className === "o")
      {
        return "o";
      }
}

function resetGame() {

    for(let i = 0;i<slots.length;i++) {
      slots[i].classList.remove("x");
      slots[i].classList.remove("o");
    }

    status.textContent = "It's PLAYER 1's turn to PLAY";
    count = 0;
    isGameDone = false;
}

function openOverlay(resultText) {

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  const overlayPopup = document.createElement('div');
  overlayPopup.className = 'overlay-popup';
  const result = document.createElement('p');
  result.idName = 'result';
  result.textContent = resultText;
  const h1 = document.createElement('h1');
  h1.textContent = "Play Again?";
  const yButton = document.createElement('button');
  yButton.textContent = "YES";
  const nButton = document.createElement('button');
  nButton.textContent = "NO";

  overlayPopup.appendChild(result);
  overlayPopup.appendChild(h1);
  overlayPopup.appendChild(yButton);
  overlayPopup.appendChild(nButton);

  overlay.appendChild(overlayPopup);

  body.appendChild(overlay);

  overlayPopup.addEventListener('click', function(event) {
    if(event.target.tagName = 'BUTTON') {

      if(event.target.textContent === 'YES') {
        resetGame();
        closeOverlay(overlay);
      }

      else if(event.target.textContent === "NO") {
        closeOverlay(overlay);
      }
    }
  });



}

function closeOverlay(overlay) {
  body.removeChild(overlay);
}


board.addEventListener('click', function(event) {

    const slot = event.target;

    if(slot.className === "" && isGameDone === false) {

      if(playerToPlay === "PLAYER 1") {
        slot.className = "x";
        playerToPlay = "PLAYER 2";

      }

      else {
        slot.className = "o";
        playerToPlay = "PLAYER 1"
      }

      count++;

      let result = checkForWinner(slots);

      if(result === "x") {

        openOverlay("PLAYER 1 Won!");
        isGameDone = true;
      }

      else if(result === "o") {

        openOverlay("PLAYER 2 Won");
        isGameDone = true;
      }

      else if(count == 9) {
        openOverlay("It's a draw!");
        isGameDone = true;
      }

      else {
        status.textContent = "It's "+playerToPlay+"'s turn to play"
      }


    }

    else if((slot.className === "x" || slot.className === "o") && isGameDone === false) {
      alert("Already filled out~");
    }

  });
