
/**
 * Example 1
 * 
 * Given a string s consisting of words and spaces, return the length of the last word in the string. 
Split the string into an array of words.
 */ 
let str1="Hello World";
//let count=str1.length;
let str2=str1.split(" ");//Here split the string into two words
console.log(str2);//Print the splited strings
var word = str2[1]//Index
console.log(word);
var word = str2[1].length;//length
console.log(word);

/**
 * Example 2
 * 
 * Given a string s consisting of words and spaces, return the length of the last word in the string. 
Split the string into an array of words.
 */ 
let str3= "   fly me   to   the moon  " ;
let str4=str3.trim("");
console.log("++==="+str4);
let result =str4.split("  ");
console.log(result);
console.log(result[2].trim());
let result1 =result[2].split(" ");
console.log(result1);
console.log(result1[2].length);





