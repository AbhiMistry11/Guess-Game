const userInput = document.querySelector("input");
const pressIt = document.querySelector("#press");
const AttemptTry = document.querySelector("#attempt");
const quoteDesc = document.querySelector("#desc");

const cpuNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function startGame() {
  let userNum = Number(document.getElementsByTagName("input")[0].value);
  
  if (userNum === 0) {
    quoteDesc.innerText = "Please Enter The Number!!!";
    
  }
   else {
    if (userNum > cpuNum) {
      quoteDesc.innerText = "Very High, Try Again!!";
    } else if (userNum < cpuNum) {
      quoteDesc.innerText = "Very Low, Try Again!!";
    } else {
      quoteDesc.innerText = `Congratulations! You guessed the number In ${attempts} Failed attempts.`;
    }
    attempts++;
  AttemptTry.innerText = attempts;
  }
}

pressIt.addEventListener("click", function () {
  startGame();
});
