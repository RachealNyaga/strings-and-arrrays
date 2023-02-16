//1. The push() method adds new items to the end of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");
console.log(fruits)

// 2.The shift() method removes the first item of an array.

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruit)

// 3.The unshift() method adds new elements to the beginning of an array.
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruitss)

// The pop() method removes (pops) the last element of an array and returns the removed element.
const x = ["Banana", "Orange", "Apple", "Mango"];
let removed = x.pop();

// The length property sets or returns the number of elements in an array.

const b = ["Banana", "Orange", "Apple", "Mango"];
let length = b.length;

// The splice() method adds and/or removes array elements.It overwrites the original array.
const c = ["Banana", "Orange", "Apple", "Mango"];
c.splice(2, 0, "Lemon", "Kiwi"); 
// The reduce() method executes a reducer function for array element.

// The includes() method returns true if an array contains a specified value.
const d = ["Banana", "Orange", "Apple", "Mango"];
d.includes("Mango");
// the join() method returns an array as a string.

let list =[jane, joy, jack, jude]
let liststring= list.join ("")
// The indexOf() method returns the first index (position) of a specified value.
let arr = ["ten", "five","ret"]
console.log(arr.indexOf("five"))
// The find() method returns the value of the first element that passes a test.
let age =[12,34,26,54]
let newage= age.find(age=> age>20)
console.log(newage);
// The findIndex() method returns the index (position) of the first element that passes a test.
const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
// The fill() method fills specified elements in an array with a value. overwrites the original array.
const e = ["Banana", "Orange", "Apple", "Mango"];
e.fill("Kiwi");

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
// The filter() method creates a new array filled with elements that pass a test provided by a function.
let Age= [21,29,34,65,12,13]
let aboveage= Age.filter (Age=>Age>18)

// The fill() method fills specified elements in an array with a value.
const f = ["Banana", "Orange", "Apple", "Mango"];
f.fill("Kiwi");
// The reverse() method reverses the order of the elements in an array.
const g = ["Banana", "Orange", "Apple", "Mango"];
g.reverse();

// The split() method splits a string into an array of substrings.
let text = "How are you doing today?";
const myArray = text.split(" ");
// The concat() method joins two or more strings.
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);
// The charAt() method returns the character at a specified index (position) in a string.
let txt = "HELLO WORLD";
let letter = txt.charAt(0);
// The replace() method searches a string for a value or a regular expression.It returns a new string with the value(s) replaced.
let text3 = "Racheal mine";
let result1 = text3.replace("mine", "Nyaga");
// The substr() method extracts a part of a string.
let txt1 = "Hello world!";
let txtresult = txt1.substr(1, 4);
// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
let text4 = "Hello world!";
let result4 = text4.substring(1, 4);
// The slice() method extracts a part of a string.
let text5 = "Hello world!";
let result5 = text5.slice(0, 5);
// converts to lowercase 
let text6 = "Hello World!";
let result6 = text6.toLowerCase();
// The toUpperCase() method converts a string to uppercase letters.
let text7 = "Hello World!";
let result7 = text7.touppercaseCase();
// The trim() method removes whitespace from both sides of a string.
let text8 = "     Hello World!        ";
let result8 = text8.trim();
// The includes() method returns true if a string contains a specified string.
// Otherwise it returns false.method is case sensitive.
let text9 = "Hello world, welcome to the universe.";
let result9 = text9.includes("world");
// The search() method matches a string against a regular expression. returns the index (position) of the first match.
let text0 = "Mr. Blue has a blue house";
let position = text0.search("Blue");


