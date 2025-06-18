// strings
let str = "this is a string";
let newstr = str.replace("is","isto");
console.log(newstr);

let newStr = str.replaceAll("is","in");
console.log(newStr);

console.log(str[5]);
console.log(str.charAt(3));

console.log(str.startsWith("a")); // it gives true or false if str is start with the letter or not
console.log(str.endsWith('ing'));
console.log(str.includes('ri'));
console.log(str.includes('gn'));

// split ka kaam string ko array me convert krna yahan hum space ke basis par convert kr rhe hai
let arrstring = str.split(" ");
console.log(arrstring);
let arrstring2 = str.split(" ")[0];
console.log(arrstring2);


