const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);
 
// const all = marvel_heros.concat(dc_heros) for concat we can use both this line one and the line given below .
const all = [...marvel_heros,...dc_heros]
console.log(all);

const l1 = [1,2,3,4,[5,6,7],[7,8,9,[9,0]]]

const l2 = l1.flat(Infinity);

console.log(l2);


console.log(Array.isArray("ritik"))
console.log(Array.from("ritik"));
console.log(Array.from(name = "ritik")); // interesting

let score1 = 100
let score2 = 200
let score3 = 300 
  
console.log(Array.of(score1,score2,score3));