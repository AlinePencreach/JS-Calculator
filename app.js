const numberButtons = [...document.querySelectorAll('[data-number]')];
const dataNumber = numberButtons.map((numberButton) => numberButton.dataset.number);
const resultDisplay = document.querySelector(".result");
// const equalButton = document.querySelector('equal');


numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", (e) => {
    const valeurNumber = e.target.dataset.number;
    calculer(valeurNumber);
});
});

const calculer = (valeurNumber) => {
  if (dataNumber.includes(valeurNumber)) {
    switch (valeurNumber) {
      case 'c' :
        resultDisplay.textContent = "";
        break;
      case 'equal' :
        const calcul = eval(resultDisplay.textContent);
        console.log(resultDisplay.textContent);
        resultDisplay.textContent = calcul;
        break;
      default:
        const indexDataNumber = 
        dataNumber.indexOf(valeurNumber);
        const numberButton = numberButtons[indexDataNumber];
        resultDisplay.textContent += numberButton.innerHTML;
    }
  }
}







