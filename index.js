console.log("Hello World check");
// Exercise 1

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check
// if the current number is odd or even, and display a message to the screen.

// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log("This is even:", i);
//   } else {
//     console.log("This is odd:", i);
//   }
// }

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} EEEVEN`);
//   } else {
//     console.log(`${i} OOOddd`);
//   }
// }
//------------------------------------------------------------------------------------------------------------------------------------------------
/*
Exercise 2
 
7. Write a JavaScript program which iterates the integers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
0 1 2 "Fizz" 4 "Buzz" "Fizz" 7 8 "Fizz" "Buzz" etc
*/
//------------------------------------------------------------------------------------------------------------------------------------------------

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FIZZBUZZ`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} BUZZ`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} FIZZ`);
//   }
// }
//------------------------------------------------------------------------------------------------------------------------------------------------
/*
Exercise 3
 
Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too.
 
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
Example output:
276 + 351 = 627
 */
// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
// let sumOfSecondArray = 0;
// let sumOfFirstArray = 0;
// for (let i = 0; i < arr_1.length; i++) {
//   sumOfFirstArray = sumOfFirstArray + arr_1[i];
//   sumOfSecondArray = sumOfSecondArray + arr_2[i];
// }
// console.log(sumOfFirstArray);
// console.log(sumOfSecondArray);
// console.log(sumOfFirstArray + sumOfSecondArray);

//------------------------------------------------------------------------------------------------------------------------------------------------
/*
Exercise 4

Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 24;
Example output:
2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
*/
// let n1 = Number(24);
// for (let i = 1; i <= n1; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*
//------------------------------------------------------------------------------------------------------------------------------------------------
Exercise 5
 
Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.
 
let str1 = "javascript";  
Example output:
 1 3 5
jZvZsZrZpZ OR each letter on a new line
HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
 */
//          1,2,3,4,5,6,7,8,9,10
// let str1 = "javascript";
// let newString = "";
// for (let i = 0; i < str1.length; i++) {
//   if ((i + 1) % 2 === 0) {
//     // console.log("Z");
//     newString = newString + "Z";
//   } else {
//     // console.log(str1[i]);
//     newString = newString + str1[i];
//   }
// }
// console.log(newString);

// 1 loop
//  i = 0
// if ((0+1)% 2 == 0)
//   1%2 == 0.5
//   0.5 == ?

// 2 loop
// i = 1
//  if (2%2 == 0)
//  0 == 0 ?

// 3 loop
//  i =2
//  if((2+1)/2 ==0 )
//  3%2 == 0
// 1 == 0

// 4 loop
// i = 3
// if ((3+1)%2 ==0 )
//  3+1 = 4
// 4%2 == 0

/*
//------------------------------------------------------------------------------------------------------------------------------------------------
Exercise 6
 
Check if a string contains the letter “y”.
Print “yes” if it does and “no” if it does not.
 
let str2 = "don’t know why";
Example output:
“yes”
 */
// let str2 = "Don't know why";
// for (i = 1; i < str2.length; i++) {
//   if (str2[i] == "y") {
//     console.log("yes");
//   } else {
//     console.log("No");
//   }
// }
/*
------------------------------------------------------------------------------------------------------------------------------------------------
Exercise 7
 
Given a number n Calculate the factorial of the number
 
let n2 = 4; //  4 * 3 * 2 * 1 = 24
Example output:
24
 */

// let n3 = 4;
// let summOfFactorial = 1;
// for (let i = 1; i <= n3; i++) {
//   summOfFactorial = summOfFactorial * i;
// }
// console.log(summOfFactorial);

//------------------------------------------------------------------------------------------------------------------------------------------------
//  Exercise 8

// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the
// for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from
// 1 to 10 (100 results total).
// const multiplier = 9;
// for (i = 0; i <= 10; i++) {
//   console.log(i + "*" + multiplier + "=" + multiplier * i);
// }

// for (let k = 1; k <= 10; k++) {
//   for (let o = 1; o <= 10; o++) {
//     console.log(`${k} x ${o} = ${k * o}`);
//   }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 9

// The Grade Assigner
// Check the results of your assignGrade function from the conditionals exercise
// by logging every value from 60 to 100: your log should show "For 88, you got a
// B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
// logging each grade point in the range.

// let assignGrade = prompt("Dungee oruulna uu:");
// if (assignGrade >= 90 && assignGrade <= 100) {
//   console.log("You got an A");
// } else if (assignGrade >= 80 && assignGrade <= 89) {
//   console.log("You got an B");
// } else if (assignGrade >= 70 && assignGrade <= 79) {
//   console.log("You got an C");
// } else if (assignGrade >= 60 && assignGrade <= 69) {
//   console.log("You got an D");
// }

// for (let assignGrade = 60; assignGrade <= 100; assignGrade++) {
//   let assignGrade = assignGrade[i];
// }
//------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 10

//Print Numbers from 1 to 10 Write a loop that prints numbers from 1 to 10.

// Example Output:
// 1 2 3 4 5 6 7 8 9 10

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}`);
// }

//------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 11

// Sum of Numbers from 1 to 20 Write a loop to calculate the sum of numbers from 1 to 20.

// Example Output:
// The sum is 210
// let sumOfNUmber = 0;
// for (let i = 1; i <= 20; i++) {
//   sumOfNUmber = sumOfNUmber + i;
// }
// console.log(`The 0 to 20 sum is : ${sumOfNUmber}`);
//------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 12

// Count Vowels in a String Write a loop to count how many vowels are in a given string.

// let str = "hello world";
// Example Output:
// Number of vowels: 3

// let helloString = "hello world";
// let vowels_arr = ["a", "i", "e", "o", "u"];
// let sumOfvowels = 0;
// for (let i = 0; i < helloString.length; i++) {
//     if (vowels_arr.includes(helloString[i])){
//         sumOfvowels++;
// }
// }
// console.log(`Sum of Vowels: ${sumOfvowels}`);

//------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 13

// Print Odd Numbers Write a loop to print all odd numbers from 1 to 15.

// Example Output:
// 1 3 5 7 9 11 13 15
// for (let i = 1; i <= 15; i++) {
//   if (i % 2 >= 1) {
//     console.log(i);
//   }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 14

// Check if a Number is Prime Write a loop to check if a number n is prime.

// let n = 7;
// Example Output:
// 7 is a prime number
// let n = 7;
// for (let i = 1; i <= 7; i++){
//     if (i % n === 1 || i % n === 0 ){
//         console.log(`${i} is a Prime Number`);
//     }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 15

// Reverse a String Write a loop to reverse the characters in a string.

// let str = "javascript";
// Example Output:
// tpircsavaj
// let n4 = "javascript";
// let reversed = "";
// for (let i = n4.length - 1; i >= 0; i--) {
//    reversed += n4[i];
// }
// console.log(reversed);

//------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 16

// Calculate Power of a Number Write a loop to calculate base^exponent.

// let base = 2, exponent = 5;
// Example Output:
// 2^5 = 32
// let base = 2, exponent = 5;
// let sum = 1;
// for (let i = 1; i <= exponent; i ++) {

// }
// console.log(Math.PI);
//------------------------------------------------------------------------------------------------------------------------------------------------

// Exercise 1

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check
// if the current number is odd or even, and display a message to the screen.

// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------
// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even number`);
//   } else {
//     console.log(`${i} is even odd`);
//   }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------
// Exercise 2

// 7. Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
// 0 1 2 "Fizz" 4 "Buzz" "Fizz" 7 8 "Fizz" "Buzz" etc
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   }
//   console.log(i);
// }

/*
 
Exercise 3
 
Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too.
 
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
Example output:
276 + 351 = 627
*/

// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
// let sumOfFirstArray = 0;
// let sumOfSecondArray = 0;
// let sumOfArray;
// for (let i = 0; i < arr_1.length; i++) {
//   sumOfFirstArray += arr_1[i];
//   sumOfSecondArray += arr_2[i];
//   sumOfArray = sumOfFirstArray + sumOfSecondArray;
// }
// console.log(sumOfFirstArray, sumOfSecondArray);
// console.log(sumOfArray);
/*

Exercise 4
 
Using a for loop print all even numbers up to and including n. Don’t include 0.
 
let n1 = 22;
Example output:
2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
*/

/* let n1 = 22;
for (let i = 1; i <= n1; i++) {
  if (i % 2 === 0) console.log(i);
}
  for (let i = 2; i <= n1; i=i+2) {
    if (i % 2 === 0) console.log(i);
  } */

/*
Exercise 5
 
Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.
 
let str1 = "javascript";  
Example output:
jZvZsZrZpZ OR each letter on a new line
HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
*/

// let str1 = "javascript";
// let result = "";

// for (let i = 0; i < str1.length; i++) {
//   if ((i + 1) % 2 === 0) {
//     result = result + "Z";
//   } else {
//     result = result + str1[i];
//   }
// }
// console.log(result);

/*
Exercise 6
 
Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
 
let str2 = "don’t know why";
Example output:
“yes”
 */

// let str2 = "Don’t know why";
// let yLetter = 'y';
// for (let i = 0; i < str2.length; i++) {
//   if (str2[i] === yLetter){
//     console.log('yes');
//   }
//    else if (str2[i] !== yLetter) {
//     console.log("no");
//   }
// }

/*
Exercise 7
 
Given a number n Calculate the factorial of the number
 
let n2 = 4; //  4 * 3 * 2 * 1 = 24
Example output:
24
*/

/* 
let n2 = 4;
let sum = 1;
for (let i = 1; i <= n2; i ++) {
  // console.log(i);
  sum = sum * i;
}console.log(sum);
 */

//  Exercise 8

// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the
// for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from
// 1 to 10 (100 results total).

// let multiplier = 9;
// let sum;
// for (i = 1; i <= 10; i ++) {
//   sum = i * multiplier
//  console.log(`${i} * ${multiplier} = ${sum}`);
// }

// Exercise 9

// The Grade Assigner
// Check the results of your assignGrade function from the conditionals exercise
// by logging every value from 60 to 100: your log should show "For 88, you got a
// B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
// logging each grade point in the range.
// console.log(assignGrade(70));

// let score = 100;
// function assignGrade(value1) {
//   if (value1 <= 100 && value1 >= 90) {
//     console.log(`You got an A`);
//   } else if (value1 <= 89 && value1 >= 80) {
//     console.log(`You got a B`);
//   } else if (value1 <= 79 && value1 >= 70) {
//     console.log(`You got a C`);
//   } else if (value1 <= 69 && value1 >= 60) {
//     console.log(`You got a D`);
//   } else if (value1 <= 59) {
//     console.log(`You got a F`);
//   }
// }
// assignGrade(score);

// Exercise 10

//Print Numbers from 1 to 10 Write a loop that prints numbers from 1 to 10.

// Example Output:
// 1 2 3 4 5 6 7 8 9 10
// let trim = "";
// for (let i = 1; i <= 10; i++) {
//   trim += i + " ";
// }
// console.log(trim.trim());

// Exercise 11

// Sum of Numbers from 1 to 20 Write a loop to calculate the sum of numbers from 1 to 20.

// Example Output:
// The sum is 210

// let lastNumber = 20;
// let sum = 0;
// for (let i = 1; i <= lastNumber; i++) {
//   sum = i + sum;
// }
// console.log(sum);

// Exercise 12

// Count Vowels in a String Write a loop to count how many vowels are in a given string.

// let str = "hello world";
// Example Output:
// Number of vowels: 3

// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const vowels = "AEIOUaeiou";
// const str = "Hello world";
// let sumOfVowels = 0;
// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) {
//     sumOfVowels++;
//   }
// }
// console.log(sumOfVowels);

// Exercise 13

// Print Odd Numbers Write a loop to print all odd numbers from 1 to 15.

// Example Output:
// 1 3 5 7 9 11 13 15

// let nNumber = 15;
// let numInLine = '';
// for (let i = 1; i <= nNumber; i++) {
//   if (i % 2 !== 0) {
//     numInLine += i + ' ';
//   }
// } console.log(numInLine.trim());

// Exercise 14

// Check if a Number is Prime Write a loop to check if a number n is prime.

// let n = 7;
// Example Output:
// 7 is a prime number

// let n = 8;
// for (i = 1; i <= 7; i++) {
//   if (n % n == 0) {
//   }
//   console.log(`${n} is a prime number`);
// }

// Exercise 15

// Reverse a String Write a loop to reverse the characters in a string.

// let str = "javascript";
// Example Output:
// tpircsavaj

// let str = "javascript";
// str = str.split("").reverse().join("");
// console.log(str);

// Exercise 16

// Calculate Power of a Number Write a loop to calculate base^exponent.

// let base = 2, exponent = 5;
// Example Output:
// 2^5 = 32
// let base = 2, exponent = 5;
// let sum = 1;
// for (let i = 1; i <= exponent; i++){
//   sum *= base;
// } console.log(`${base}^${exponent}=${sum}`);

// Exercise 17

// Print Multiples of 5 Write a loop to print multiples of 5 up to 50.

// Example Output:
// 5 10 15 20 25 30 35 40 45 50

// let endNumber = 10;
// let multiplier = 5;
// let sum;
// for (let i = 1; i <= endNumber; i++) {
//   sum = i*multiplier
//   console.log(sum);
// }

// Exercise 18

// Find the Largest Number in an Array Write a loop to find the largest number in an array.

// let arr = [3, 67, 15, 98, 23];
// Example Output:
// Largest number: 98

// let arr = [3, 67, 15, 98, 23];
// let container = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > container) {
//     container = arr[i];
//   }
// }
// console.log(container);

// Exercise 19

// Count Specific Letter Write a loop to count how many times the letter "a" appears in a string.

// let str = "javascript is amazing";
// Example Output:
// Number of 'a': 4

// let str = "javascript is amazing";
// let sum = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "a") {
//     sum++;
//   }
// }

// Exercise 20

// Print Fibonacci Sequence Write a loop to print the first n numbers in the Fibonacci sequence.

// let n = 7;
// Example Output:
// 0 1 1 2 3 5 8

// let n = 5;
// let a = 0,
//   b = 1;

// for (let i = 0; i < n; i++) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }

//loop-1-------------------------
// next = 0+1 -> next -> 1
// 0 = 1
// 1 = 1
//loop-2-------------------------
// next = 1 + 1 / next = 2
// 1 = 1
// 1 = 2
//loop-3-------------------------
// next = 1 + 2 / next 3
// 1 = 2
// 2 = 3
//loop-4-------------------------
// 2 + 3 = 5 (next)
// 2 = 3
// 3 = 5
//loop-5-------------------------
// 3 + 5 = 8 (next)
// 3 = 5
// 5 = 8
//loop-6-------------------------
// 5 + 8 = 13 (next)
// 5 = 8
// 8 = 13
//loop-7-------------------------
// 8 + 13 = 21
// 8 = 13
// 13 = 21

// Exercise 21

// Find All Divisors Write a loop to find all divisors of a number n.

// let n = 28;
// Example Output:
// 1 2 4 7 14 28

// let n = 28;
// for (i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

// Exercise 22

// Check Palindrome Write a loop to check if a string is a palindrome.

// let str = "radar";
// Example Output:
// radar is a palindrome

// let str = "radar";
// let reverseStr = str.split("").reverse().join("");
// if (str === reverseStr) {
//   console.log(str);
//   console.log("String is a palindrom");
// } else {
//   console.log("String is not a palindrom");
// }

// Exercise 23

// Count Words in a Sentence Write a loop to count the number of words in a sentence.

// let sentence = "Loops are fun to learn";
// Example Output:
// Number of words: 5

// let sentence = "Loops are fun to learn";
// let sumOfWordNumber = 0;
// sentence = sentence.split(" ");

// for (let i = 0; i < sentence.length; i++) {
//   sumOfWordNumber = sentence.length;
// }
// console.log(`Number of words: ${sumOfWordNumber}`);

// Exercise 24

// Find Missing Number Write a loop to find the missing number in an array of integers from 1 to 10.

// let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// Example Output:
// Missing number: 4

// let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// let plusArr = 0;

// for (let i = 0; i < arr.length; i++) {
//   plusArr += arr[i];
// }
// let jSum = 0;
// for (let j = 1; j <= 10; j++) {
//   jSum += j;
// }
// let totalSum = jSum - plusArr;
// console.log(totalSum);

// Exercise 25

// Filter Positive Numbers Write a loop to filter out positive numbers from an array.

// let arr = [-3, 5, -2, 0, 9, -8];
// Example Output:
// [5, 9]

// let arr = [-3, 5, -2, 0, 9, -8];
// let positiveNumber = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     positiveNumber.push(arr[i]);
//   }
// }
// console.log(positiveNumber);

// Exercise 26

// Create a Pyramid Pattern Write a loop to create the following pyramid pattern.
// Example Output:
// markdown
// Copy code
// *
// **
// ***
// ****
// *****

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// Exercise 27

// Sum of Digits Write a loop to calculate the sum of the digits of a number.

// let num = 12345;
// Example Output:
// Sum of digits: 15

/* let num = 12345;
let sum = 0;

// Convert number to string to loop through each digit
let numStr = num.toString();
// Loop through each character in the string
for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);  // Convert each character back to a number and add to sum  

}
console.log("Sum of digits:", sum);
 */

// Exercise 28

// Remove Duplicates from an Array Write a loop to remove duplicate elements from an array.

// let arr = [1, 2, 3, 2, 1, 4];
// Example Output:
// [1, 2, 3, 4]

// const arr = [1, 2, 3, 2, 1, 4, 5, 6, 7];
// const myArr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   // console.log(`===THIS IS OUTER=== ${arr[i]}`);
//   let matchedNumbers = [];
//   for (let j = 0; j < myArr.length; j++) {
//     // console.log(`INNER ${myArr[j]}`);
//     matchedNumbers.push(myArr[j]);
//     if ( myArr[j].includes(matchedNumbers)  /* myArr[j] === arr[i] */) {

//     }

//   } console.log(matchedNumbers);
// }

// let arr = [1, 2, 3, 2, 1, 4, 5, 7, 1];
// let uniqueArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!uniqueArr.includes(arr[i])) {
//     uniqueArr.push(arr[i]);
//   }
// }

// console.log(uniqueArr); // Output: [1, 2, 3, 4]

// Exercise 29

// Find Second Largest Number Write a loop to find the second largest number in an array.

// let arr = [4, 10, 9, 2, 7];
// Example Output:
// Second largest number: 9

// let arr = [4, 10, 9, 2, 7];
// let firstNumber = [];
// // let secondNumber = [];

// for (let i = 0; i < arr.length; i++) {
//   firstNumber = firstNumber.push(arr[i])
//   console.log(firstNumber);
  
/*   if (arr[i] > firstNumber) {
    secondNumber = firstNumber;
    firstNumber = arr[i];
    console.log(arr[i]);
    
  } else if (arr[i] > secondNumber) {
    secondNumber = arr[i];
    console.log(arr[i]);
  } */
// } 
// console.log(secondNumber);

//-----loop - 1, arr index - 0 -----





// Exercise 30

// Sort an Array Write a loop to sort an array in ascending order without using built-in functions.

// let arr = [5, 3, 8, 1, 4];
// Example Output:
// [1, 3, 4, 5, 8]

// let arr = [5, 3, 8, 1, 4];
// arr.sort()
// console.log(arr);

// Exercise 31
// Generate a Diamond Pattern Write a loop to create a diamond pattern.
// Example Output:
// markdown
// Copy code
//    *
//   ***
//  *****
//   ***
//    *
