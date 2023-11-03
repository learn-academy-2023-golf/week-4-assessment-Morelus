// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

describe("shuffleColors", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining items", () => {
        expect(shuffleColors(colors1)).not.toEqual([ "blue", "green", "yellow", "pink"]);
        expect(shuffleColors(colors2)).not.toEqual(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]);
    });
  });

// const shuffleColors = (array) => {
//   array.shift(0)
//   for (let i = array.length - 1; i > 0; i++){
//     Math.floor(Math.random()* (i+1))
//   return array
// }}

    
// Pseudo code:
//  create a test that "ttakes in an array, removes the first item from the array and shuffles the remaining items" and name the function shuffleColors. 
//  define the two objects colors1 and colors2.
// use the expect statements to show outcome , first items removed from string and shuffled, it should be equal but not limited to the the equal statements.
// create a function with a parameter array. 
// use .shift to remove the first item. 
// use a for loop to loop through the length of the array. 
//  use math.random to randomize the array. 

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31



describe("addedVotes", () => {
    it("takes in an object that contains up votes and down votes and returns the end tally", () => {
        expect(addedVotes(votes1)).toEqual(11);
        expect(addedVotes(votes2)).toEqual(-31);
    });
  });

  
  const addedVotes = (votes) => {
    const {upVotes , downVotes} = votes
    return upVotes - downVotes

  }

// b) Create the function that makes the test pass.

// Pseudo code:
//  create a test thst "takes in an object that contains up votes and down votes and returns the end tally" and name the function addedVotes. 
//  define the two objects votes1 and votes2.
// use the expect statements to determine the outcome, upVotes minus downVotes which should give us our expected outcome. 
// create a function called addedVotes with the parameter as votes.
// return the upVotes and downVotes subtracted by each other. 