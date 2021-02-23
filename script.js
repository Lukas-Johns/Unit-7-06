let age = 15
let guess = 0
document.getElementById('press').addEventListener('click', myInput)
function myInput () {
  while ((age > guess) || (age < guess)) {
    guess = prompt('Guess my age')
    if (age > guess) {
      alert ('Nope, your guess was too low')
    } else if (age < guess) {
      alert('Nope, your guess was too high')
    } else {
      alert('Hey, you got it!')
    }
  }
}