const playerGuess = 6
const correctAnswer = 6

// const message=playerGuess === correctAnswer?'Correct!': 'Wrong!'
const message =playerGuess < correctAnswer ? 'take time' : playerGuess > correctAnswer ? 'one more' : 'corrrect'

// const message = playerGuess < correctAnswer ? 'Too low!' : playerGuess > correctAnswer ? 'Too high' : 'Exactly right!'
console.log(message)