// **************************numbers*************************************

const score = 400

const balance = new Number(100);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));


const num = 23.8765

console.log(num.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));



//*********************************************maths**************************************/


console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.sqrt(25));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) +min);

