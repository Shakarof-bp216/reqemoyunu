
const score_contanier = document.querySelector(".score_contanier");
const your_number = document.querySelector(".your_number");
const check_button = document.querySelector(".check_button");
const again_button = document.querySelector(".again_button");
const score_part_right_text_top=document.querySelector(".score_part_right_text_top");
const Game_page = document.querySelector(".Game_page");






function makeNumber() {
  return Math.floor(Math.random() * 3); 
}

function displayMessage(text) {
  score_part_right_text_top.textContent = text;
}

let computerNumber = makeNumber();
let score = 20;



check_button.addEventListener("click", function () {
  let mynumber = parseInt(your_number.value);

  if (!mynumber) {
    displayMessage("Rəqəm yazın!");

   
  } else if (mynumber === computerNumber) {
    displayMessage("Təbriklər, doğru təxmin!");

    Game_page.style.backgroundColor = "red";

   
  } else if (mynumber > computerNumber) {
    displayMessage("Aşağı!");
    score--;


  } else if (mynumber < computerNumber) {
    displayMessage("Yuxarı!");
    score--;
  }

  
  if (score === 0) {
    displayMessage("Oyunu uduzdunuz!");
  }
});


again_button.addEventListener("click", function () {
  score = 20;
  computerNumber = makeNumber(); 
  displayMessage("Start guessing...");
  document.body.style.backgroundColor = "black";
  your_number.value = "";
});
