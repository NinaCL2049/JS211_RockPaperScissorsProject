// const RPS = (pOne, pTwo) => { 

//   if ((pOne == 'rock') && (pTwo == 'scissors')) || (((pOne == 'paper') && (pTwo == 'rock')) || ((pOne == 'scissors') && (pTwo == 'paper'))) {
//     console.log("Player One Wins!") 
//   }

//   else if ((pOne == 'rock') && (pTwo == 'paper')) || (((pOne == 'paper') && (pTwo == 'scissors')) || ((pOne == 'scissors') && (pTwo == 'rock'))) {
//     console.log("Player One Loses!") 
//   }
  
//   else {
//     console.log("It's a tie.") 
//   }
// }




//I feel like this should work but it gives an error & don't know why.



// // Unit Tests
// // to use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === 'function') {

//   // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
//   describe('#rockPaperScissors()', () => {
//     it('should detect a tie', () => {
//       assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
//       assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
//       assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
//     });
//     it('should detect which hand won', () => {
//       assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
//       assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
//       assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
//     });
//     it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
//       assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
//       assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
//       assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
//     });
//   });
// } else {

//   // always returns ask the user for another input
//   getPrompt();


// March 24. one step at a time.

// let rock
// let scissors
// const RPS = (pOne, pTwo) => { 

//   if ((pOne == rock) && (pTwo == scissors)) {
//     console.log("Player One Wins!");
//   }
// }
//totally works! starting from here, adding on to it until it breaks.

// let rock
// let scissors
// let paper

// const RPS = (pOne, pTwo) => { 

//   if ((pOne == rock) && (pTwo == scissors));
//   ((pOne == paper) && (pTwo == rock));
//   ((pOne == scissors)) && (pTwo == paper); {
//     console.log("Player One Wins!")
//   } else {
//     console.log("Player Two Wins!")
//   }

  
// }

// let rock
// let scissors
// let paper

// const RPS = (pOne, pTwo) => {
//   if ((pOne == rock) && (pTwo == scissors)) {
//     console.log("Player One Wins!")
//   } else if ((pOne == paper) && (pTwo == rock)) {
//     console.log("Player One Wins!")
//   } else if ((pOne == scissors) && (pTwo == paper)) {
//     console.log("Player One Wins!")
//   } else if ((pOne == rock) && (pTwo == paper)) {
//     console.log("Player Two Wins!")
//   }
// }

// let rock
// let scissors
// let paper

// const RPS = (pOne, pTwo) => {
//   if ((pOne === rock) && (pTwo === scissors)) {
//     console.log("Player One Wins!")
//   } else {
//     console.log("blarg")
//   }
// }

// nah, always produces "player one wins"







// const BT = (aThing) => {

// if (aThing < 10) {
//     console.log("The number is less than 10.");
// } else if (aThing < 20) {
//     console.log("The number is between 10 and 19.");
// } else if (aThing < 30) {
//     console.log("The number is between 20 and 29.");
// } else {
//     console.log("The number is 30 or more.");
// }
// }

let rock = "rock";
let scissors = "scissors";
let paper = "paper";


const rockPaperScissors = (handOne, handTwo) => {
  if (handOne === pTwo) {
    console.log("It's a tie!");
  }
  else if ((handOne === rock && handTwo === scissors) ||
           (handOne === scissors && handTwo === paper) ||
           (handOne === paper && handTwo === rock)) {
    console.log("Hand One Wins!");
  }
  else if ((handTwo === rock && handOne === scissors) ||
           (handTwo === scissors && handOne === paper) ||
           (handTwo === paper && handOne === rock)) {
    console.log("Hand Two Wins!");
  }
  else {
    console.log("Invalid input"); 
  }
}