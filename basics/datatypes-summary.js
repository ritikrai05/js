// primitive
//primitive are of  7 types given below
// 7 tyes : String,Number,Boolean,Null,Undefined,Symbole,BigInt

const score = 100
const scoreValue = 100.3

//const id =symbol('123')
//const anotherId=symbol('123')

//console.log(id=== anotherId);
 

const bigNumber=7021495043n






// Reference(Non primitive)

// Arry,Objects,Functions
const heros=["shaktiman","naagraj","doga"]
{name:"ritik"}


const myfunction= function() {

    console.log("hello world");
}

console.log(typeof myfunction);



//***************************************************

// stack (primitive), heap(Non primitive)

let my="ritik"
let anothermy=my
 anothermy="rai"

 console.log(anothermy);
 console.log(my);

let user={
email:"user@gmail.com",
upi:"user@ybl"

}
let userOne = user

userOne.email="ritik@gmail.com"

console.log(userOne.email);



// In stack we get copy 

// In heap we get real one 

