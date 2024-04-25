const name="ritik"
const repoCount =50

console.log(name+repoCount+"value");

console.log(`hello my name is ${name}and my repo count is ${repoCount}`);


const gamename= new String('ritik_rai');


console.log(gamename[0]);

console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.indexOf('t'));
console.log(gamename.charAt(2));

const newString = gamename.substring(0,5)

console.log(newString);
const anotherString =gamename.slice(-8,3);

console.log(anotherString);

const one = "    ritik   "
console.log(one);
console.log(one.trim());


const url = "https://ritik.com/ritik%20rai"
 console.log(url.replace('%20','_'))

 console.log(url.includes('ritik'))

 console.log(gamename.split('_'));