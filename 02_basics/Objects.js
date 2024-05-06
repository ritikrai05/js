 // singleton 
//Object.create
//Object literals 
 const my = Symbol("key1")

const js = {
     name: "ritik",
     age : 18,
     location: "mumbai",
     [my] : "key1"
};
 
//  console.log(js["age"]);
//  console.log(js.age);



// console.log(js[my1]);

js.greeting = function(){
console.log('Hello JS User,${this.name}');
}

console.log(js.greeting());













