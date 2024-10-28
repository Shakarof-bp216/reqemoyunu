function makeNumber() {
    return Math.floor(Math.random() * 20);
}
let  computerNumber = makeNumber()
console.log(computerNumber);

const your_number= document.querySelector(".your_number")
const check_button= document.querySelector(".check_button")

check_button.addEventListener("click", function () {
    let mynumber=your_number.value
   
});
let mynumber=your_number.value
if (mynumber==computerNumber){
  console.log("salam");
}


 




