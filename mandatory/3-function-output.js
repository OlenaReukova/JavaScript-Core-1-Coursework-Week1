// Add comments to explain what this function does. You're meant to use Google!
// Get random number and multiply it by 10
function getRandomNumber() {
  return Math.random() * 10;
}
// The Math.random() function returns a random number that is greater that or equal to 0 and less than 1 which you can then scale to your desire range.

// Add comments to explain what this function does. You're meant to use Google!
//concatenates the string arguments to the calling string and returns a new string
function combine2Words(word1, word2) {
  return word1.concat(word2);
}
//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
function concatenate(firstWord, secondWord, thirdWord) {
  const cancWords = firstWord.concat(" ", secondWord, " ", thirdWord);
  return cancWords;
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
}


/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-function-output` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("concatenate example #1", () => {
  expect(concatenate("code", "your", "future")).toEqual("code your future");
});

test("concatenate example #2", () => {
  expect(concatenate("I", "like", "pizza")).toEqual("I like pizza");
});

test("concatenate doesn't only accept strings", () => {
  expect(concatenate("I", "am", 13)).toEqual("I am 13");
});
