const age = 15
let guess = 0
/* Above are my variables, which is the conduit for the users guess, and my constant, which is the answer in to solving this webpage. Below is an event listener, connecting my button to my function as to start up the program */
document.getElementById('press').addEventListener('click', myInput)
/* Below is my function. First on line 7, it starts a loop that keeps asking the user what my age is until the value of my constant is guessed. Next, a prompt is in place to act as an input. Lastly, an if statement is in place so as to hint on how close the user is */
function myInput () {
  while ((age > guess) || (age < guess)) {
    guess = prompt('Guess my age')
    if (age > guess) {
      alert('Nope, your guess was too low')
    } else if (age < guess) {
      alert('Nope, your guess was too high')
    } else {
      alert('Hey, you did it!')
    }
  }
}
