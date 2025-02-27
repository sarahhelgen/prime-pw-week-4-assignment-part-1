console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}// end hello
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log( 'in helloName', name );
  let greeting = `Hello ${name}!`
  return greeting;
}//end helloName
// Remember to call the function to test
console.log( helloName('Sarah'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
    console.log( 'in addNumbers', firstNumber, secondNumber )
    let sum = firstNumber + secondNumber;
    return sum;
  // return firstNumber + secondNumber;
}//end addNumbers

console.log('running addNumbers adding 4 & 5', addNumbers(4,5));
console.log('running addNumbers adding 45 and 8241', addNumbers(45, 8241));



// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3){
  console.log('in multiplyThree', num1, num2, num3);
  let product = num1 * num2 * num3;
  return product;
}//end multiplyThree
console.log( 'running multiplyThree, multiplying 3,4, & 5', multiplyThree( 3,4,5));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log( 'in isPostive', number );
  if ( number > 0 ){
    return true;
  }//end true check
  else{
    return false;
  }//false  
}//end isPositive

console.log('running isPositive with 5 ', isPositive(5) );
console.log('running isPositive with -8 ', isPositive(-8) );
console.log('running isPositive with 0 ', isPositive(0) );



// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let array1 = [];
let array2 = [ 3, 4, 10, 39 ];

function getLast( array ) {
  console.log( 'in getLast', array );
  let lastItem = array.pop();
  return lastItem;
}//end getLast

console.log( 'running getLast - the last number is', getLast( array1 ));
console.log( 'running getLast - the last number is', getLast( array2 ));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


function find( value, array ){
  console.log('in find', value, array );
  for(let i=0; i<array.length; i++){
    if( array[i] === value ){
      return true;
    }//end check
  }//end for loop
    return false; //this needs to be outside the for loop to return because it means it didn't exist in the array
  }//end find


console.log('running find with 3 and [4,5,3,2]', find( 3, [4,5,3,2] ));
console.log('running find with 89 and [45,79, 22, 19023]', find( 89, [45, 79, 22, 19023]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  console.log('in isFirstLetter', letter, string );
  let firstLetter = string.charAt(0);
  console.log(firstLetter);
  if(firstLetter == letter ){
    return true;
  }//end letter check
  else{
    return false;
  }//end else
}//end isFirstLetter
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log( 'running isFirstLetter - should say true', isFirstLetter( 'w', 'waffle'));
console.log( 'running isFirstLetter - should say false', isFirstLetter( 'r', 'waffle'));


// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  for(let i=0; i<array.length; i++ ){
    sum += array[i];
  }//end for
  // TODO: loop to add items
  return sum;
}//end sumAll

console.log('running sumAll with 54, 92, 22', sumAll([54,92,22]));
console.log('running sumAll with 5,6,7', sumAll([5,6,7]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let newArray = [];

function findPositiveNumbers( array ){
  console.log('in findPositiveNumbers', array );
    for(let i=0; i<array.length; i++){
      if(array[i] > 0){
        newArray.push(array[i]) = newArray;
      }//end for
      return newArray;
    }//end for loop
}//end findPositiveNumbers

console.log( 'running findPositiveNumbers with 0,5,-3,2', findPositiveNumbers([0, 5, -3, 2]));
console.log(newArray);

//argh!!! why is this one not working?



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//using this problem: https://edabit.com/challenge/8q54MKnRrm89pSLmW

//Write a function that takes an integer minutes and converts it to seconds

function convertToSeconds ( integer ){
  console.log('in convertToSeconds', integer );
  let conversion = integer * 60;
  return conversion;
}

console.log( 'running convertToSeconds with 5', convertToSeconds(5));
console.log( 'running convertToSeconds with 29', convertToSeconds(29));

