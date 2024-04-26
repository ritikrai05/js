// Array

const myArry = [ 0,1,2,3,4,5,"Ritik"]
const myHero = ["shaktiman","naagraj"]
console.log(myArry[6]);

//Array methods

myArry.push(6)
myArry.push(7)
myArry.pop()
console.log(myArry);

myArry.unshift(9)
myArry.shift()


console.log(myArry.includes(9));
console.log(myArry.indexOf(9));

const new1 = myArry.join()
 
console.log(new1);

// slice, splice

console.log("A",myArry);

const my1 = myArry.slice(1,3)

console.log(my1);
console.log("B",myArry);

const my2 = myArry.splice(1,3)
console.log(my2)
console.log("c",myArry)
