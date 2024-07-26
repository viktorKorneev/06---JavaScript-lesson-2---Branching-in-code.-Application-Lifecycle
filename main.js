// let userChoice;
// let computerChoice;
// let isWinner = false;

// while (!isWinner) {
//   userChoice = prompt("Выберите камень, ножницы или бумага:");
//   userChoice = userChoice.toLowerCase();

//   let randomNum = Math.floor(Math.random() * 3);
//   switch (randomNum) {
//     case 0:
//       computerChoice = "камень";
//       break;
//     case 1:
//       computerChoice = "ножницы";
//       break;
//     case 2:
//       computerChoice = "бумага";
//       break;
//   }

//   if (randomNum === 0) {
//     computerChoice = "камень";
//   } else if (randomNum === 1) {
//     computerChoice = "ножницы";
//   } else {
//     computerChoice = "бумага";
//   }

//   if (
//     userChoice === "камень" ||
//     userChoice === "ножницы" ||
//     userChoice === "бумага"
//   ) {
//     if (userChoice === computerChoice) {
//       alert("Ничья, играем ещё раз!");
//     } else  {
//         const isUserWinner =
//         (userChoice === "камень" && computerChoice === "ножницы") ||
//         (userChoice === "ножницы" && computerChoice === "бумага") ||
//         (userChoice === "бумага" && computerChoice === "камень")

//         const message = isUserWinner ? "Ты выиграл!" : "Ты проиграл!"
//         alert(message)

//         isWinner = true;

//     }

//   } else {
//     alert("Пожалуйста, введи коррктный ход: камень, ножницы или бумага.");
//   }
// }

let userChoice;
let computerChoice;
let isWinner = false;

const randomNumber = Math.floor(Math.random() * 3);

// if (randomNumber === 0) {
//   computerChoice = "камень";
// } else if (randomNumber === 1) {
//   computerChoice = "ножницы";
// } else {
//   computerChoice = "бумага";
// }


switch (randomNumber) {
  case 0:
    computerChoice = "камень";
    break;
    case 1:
    computerChoice = "ножницы";
    break;
    case 2:
    computerChoice = "бумага";
    break;
}
console.log(computerChoice);


while (!isWinner) {
  userChoice = prompt("Выберите камень, ножницы или бумага");
  userChoice = userChoice.toLowerCase();

  if (
    userChoice === "камень" ||
    userChoice === "ножницы" ||
    userChoice === "бумага"
  ) {
    if (computerChoice === userChoice) {
      alert("Ничья, давай ещё разок!");
    } else {
      const isUserWinner = (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")

      const message = isUserWinner ? "Ты выйграл!" : "Ты проиграл!"
      alert(message)
      isWinner = true
    }
    
  } else {
    alert("Введите правильное значение: камень, ножницы или бумага");
  } }
    
    
    
    
    
    
//     else if (
//       (userChoice === "камень" && computerChoice === "ножницы") ||
//       (userChoice === "ножницы" && computerChoice === "бумага") ||
//       (userChoice === "бумага" && computerChoice === "камень")
//     ) {
//       alert("Ты выйграл!");
//       isWinner = true;
//     } else {
//       alert("Ты проиграл!");
//       isWinner = true;
//     }
  
// }
