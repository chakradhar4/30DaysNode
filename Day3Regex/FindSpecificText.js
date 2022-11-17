/*regex modifiers :
g : global scope
i : case insensitive
m : multiline   */

var fs = require("fs");
var filename = "data.txt";
var str = fs.readFileSync(filename).toString();
var pattern = /man/gim;
var myarray = str.match(pattern);
var len = myarray.length;
console.log("occurrences of the pattern in the string : " + len);
