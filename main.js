let userChoice
let computerChoice
let isWinner = false

while (!isWinner ) {
    userChoice = prompt("Выберите камень, ножницы или бумага:")
    userChoice = userChoice.toLowerCase()

    let randomNum = Math.floor(Math.random() * 3)

    if (randomNum === 0) {
        computerChoice = "камень"
    } else if (randomNum === 1) {
        computerChoice = "ножницы"
    } else {
        computerChoice = "бумага"
    }
}