(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
  // This function finds the greatest value of two numbers
  // The parameters are the two numbers that you want to compare to see which one is the greatest
  // The output is the greater of the two numbers
  const max = (num1, num2) => {
	  if (num1 >= num2) {
		  return num1;
	  }
	  else {
		  return num2;
	  }
  }


  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  // This function finds the greatest value of three numbers
  // The parameters are three numbers that you want to compare to see which one is the greatest
  // The output is the greatest of the three numbers
  const maxOfThree = (num1, num2, num3) => {
	  if (num1 >= num2 && num1 >= num3) {
		  return num1;
	  }
	  else if (num2 >= num3) {
		  return num2;
	  }
	  else {
		  return num3;
	  }
  }


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  // This function determines if a given character is a vowel
  // The parameter to this function is a single character that we want to test
  // The output is a boolean value stating whether or not this character is a vowel
  const isVowel = (char) => {
	  const vowels = ['a','e','i','o','u'];
	  return vowels.includes(char.toLowerCase());
  }

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  // This function will take a string and return it with consonants replaced with '[consonant]+[letter o]+[consonant]'
  // The paramater is any string
  // The output is a new string that has the converted format
  const rovarspraket = (string) => {
	const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];  
	let newString = "";
	  for (let char of string) {
		  if (consonants.includes(char.toLowerCase())) {
			newString += (char + 'o' + char);
		  }
		  else {
			newString += char;
		  }
	  }
	return newString;
  }


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  // The function sum() will find the sum of all values in a given array, and the function multiply() will find the product of all values in a given array
  // The parameter for each function is a single array of any length of numbers
  // The output for sum() is a number that is the sum of the numbers in the input array. The output for multiply() is a number that is the product of the numbers in the input array.
  const sum = (array) => {
	  let result = 0;
	  for (let entry of array) {
		  result += entry;
	  }
	  return result;
  }

  const multiply = (array) => {
	  let result = 1;
	  for (let entry of array) {
		  result *= entry;
	  }
	  return result;
  }  

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  // This function reverses the order of the characters in a given string
  // The parameter to this function is a string
  // The output of this function is the reversed string
  const reverse = (string) => {
	  let result = "";
	  for (let char of string) {
		  result = char + result;
	  }
	  return result;
  }

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
  // This function should find the length of the longest word in an array of words
  // The parameter is an array of strings
  // The output is a number representing the length of the longest string in the array

  const findLongestWord = (array) => {
	let result = 0;
	for (let entry of array) {
		if (entry.length > result) {
			result = entry.length;
		}
	}
	return result;
  }

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
  // This function finds words in a given array that are greater than a given length
  // The parameters for this function are an array of words and an integer
  // The output for this function is an array of words whose length is greater than the input integer
  const filterLongWords = (array,num) => {
	  let result = [];
	  for (let entry of array) {
		  if (entry.length > num) {
			  result.push(entry);
		  }
	  }
	  return result;
  }


  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  // This function takes a string and returns an object of the letters in the string and their frequency of appearing
  // The parameter is a string
  // The output is a Javascript object where the keys are the unique letters in the string and the values are the frequencies that they appear
  const charFreq = (string) => {
	  let result = {};
	  for (let char of string) {
		  if (result.hasOwnProperty(char)) {
			  result[char] += 1;
		  }
		  else {
			  result[char] = 1;
		  }
	  }
	  return result;
  }

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
