/*
Challenge 1
A) Create a for loop that iterates through an array and returns the sum of the elements of the array.
B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.
*/

function sumFunc(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log("Challenge 1A", sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  let index = 0;
  return function () {
    const value = arr[index];
    index++;
    return value;
  };
}

const array2 = ["a", "b", "c", "d"];
const myIterator = returnIterator(array2);
console.log("Challenge 1B", myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'

/*
Challenge 2
Create an iterator with a next method that returns each value of the array when .next is called.
*/

function nextIterator(arr) {
  let nextIndex = 0;

  const iterator = {
    next: function () {
      let result;
      if (nextIndex < arr.length) {
        result = { value: arr[nextIndex], done: false };
        nextIndex++;
        return result;
      }
      return { value: "undefined", done: true };
    },
  };
  return iterator;
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log("Challenge 2", iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3

/*
Challenge 3
Write code to iterate through an entire array using your nextIterator and sum the values.
Challenge 4
Create an iterator with a next method that returns each value of a set when .next is called
Challenge 5
Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.
Challenge 6
Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!)
Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!
Challenge 7
Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
Note: if it is the first element it should say that it is the first
Challenge 8
Write a function that will console.log "hello there", or "gibberish", every three seconds depending on if the word passed into the function is 'english'.
Do not use any type of loop constructor and only make the call to createConversation once.
Challenge 9
Use async/await to console.log a sentence comprised of a noun and verb in which the non async function takes in a noun, concatenates it with a hard coded verb and returns it to the async function to be console.logged after a duration of 3 seconds. Call the async function only once, feeding it a noun to make this happen.

*/
