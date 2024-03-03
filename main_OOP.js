console.log('test')

// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default:
        // code block
} 
*/
let num = 1
switch(num % 2 == 0){
  case true:
  break;
default:
  console.log('odd')
}

let temp = 50

switch(temp){
  case (temp <60):
    console.log('chilly')
    break;
  case (temp < 80):
    console.log(' nice wheather')
    break;
  default:
    console.log('stay inside')
}

// JS Objects (Python Dicts)

// access data in objects (using bracket or dot notation)
// keys are ot strings
// Inclass Exercise #1 (Get the Value 'Manchester United')
const person = {
  name: 'Edwin',
  age: 33,
  location: 'Covid-Towm'
}

console.log(person['name'])
console.log(person.location)






// const person2 = {
//     name: "Max",
//     age: 31,
//     prog_languages: ["JavaScript", "Python", "C++", "Java"],
//     fav_color: "Blue",
//     teams: [
//       {
//         baseball: "Chicago White Sox",
//         football: "Chicago Bears",
//         hockey: "Chicago Blackhawks",
//         basketball: ["Chicago Bulls", "Chicago Sky"],
//         soccer: ["Chicago Fire", "Naperville Yellowjacks"],
//       },
//       {
//         baseball: "Toronto Bluejays",
//         football: "LA Rams",
//         basketball: "Milwalkee Bucks",
//         soccer: ["Manchester United", "Liverpool"],
//       },
//     ],
//   };

// Solution Here: the result from the solution below is Manchester Untied
console.log(person2.teams[1].soccer[0])





// JS Object methods ((Object.keys(object), Object.values(object))
console.log(object.keys(person2))
console.log(object.values(person2))
// looping an object using for in
// for in: iterates over keys in object or indices in an array
for (let key in person2){
  console.log(key)
}

for (let key in person2){
  console.log(person[key])
}



// ---------- Creating a JS Class ----------

class Team{

  constructor(city, name){
    this.city = city
    this.name = name
  }

  printTeamInfo(){
    return `This ${this.name} is from ${this.city}`
  }

}

// Creating an instance
const dawgs = new Team('Georgia', 'Bulldogs')

console.log(dawgs.printTeamInfo())

// Inheriting from a class using 'extends'

class Player extends Team {
  constructor(city, name, playername){
    super(city, name)
    this.playerName = playerName
  }


printPlayerInfor(){
  return `${this.playerName} plays for the ${this.city} ${ this.name}`
  }
}

const todd = Player('Atlanta', 'Falcon', 'Todd Gurly')

console.log(todd.printTeamInfo())


// ---------- JS Closures ----------

let grandpa = 'grandpa'

function a(){
  let father  = 'father'
  return function b(){
    let son = 'son'
    return `${grandpa} ${father} ${son}`
  }
}

new_func = a()
console.log(a())




// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/
// returns a pending promise
/console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject)

// handle pending promise with .then(), .catch()
fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((response) =>{
  console.log(response.status)
  return response.json()
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.error(error)
})




// viewing our data if promise resolved: 200 status code

// Second way: Using async/await (ES6)


const pokemonData = async () => {
  try{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json()
    console.log(data)
  } catch(error) {
    console.error('there was an error: ${error}')
  }
}

pokemonData()



//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
  pizza:["Deep Dish","South Side Thin Crust"],
  tacos:"Anything not from Taco bell",
  burgers:"Portillos Burgers",
  ice_cream:["Chocolate","Vanilla","Oreo"],
  shakes:[{
      oberwise:"Chocolate",
      dunkin:"Vanilla",
      culvers:"All of them",
      mcDonalds:"Sham-rock-shake",
      cupids_candies:"Chocolate Malt"
  }]
}

const displayFoods = (person) => {
  for (let key in person) {
    if (Array.isArray(person[key])) {
      console.log(`${key}:`);
      person[key].forEach(item => console.log(`- ${item}`));
    } else {
      console.log(`${key}: ${person[key]}`);
    }
  }
}
displayFoods(person3);

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  incrementAge() {
    this.age++;
  }
}

let person1 = new Person('Edwin', 33);
let person2 = new Person('Rachel', 29);

person1.printInfo();
person2.printInfo();

person1.incrementAge();
person2.incrementAge();

person1.printInfo();
person2.printInfo();

// ============= Exercise #3 ============//
/*
  Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
  handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/
fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('There was a problem with the fetch operation:', error));


// JAVA SCRIPT CODEWARS -----------------
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34
function opposite(number) {
  return -number
    
}

console.log(opposite(1))
console.log(opposite(14))
console.log(opposite(-34))

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
  if (bool) {
      return "Yes";
    
    } else {
      return "No";
  }
}
console.log(boolToWord(true));
console.log(boolToWord(false));


// main_blank_thieves.js
// Displaying main_blank_thieves.js.
// Week 7: Day 2 - JavaScript OOP, Callbacks, Promises, & Fetching
// Dylan Katina
// •
// Feb 20
// We will continue our discussion of JavaScript today, this time exploring the topics of Objects, Callbacks and Promises

// Below you will find the reference code for today's lecture.

// Callback Hell, Promises, and Async/Await
// https://blog.avenuecode.com/callback-hell-promises-and-async/await

// main_blank_thieves.js
// Javascript
// Class comments

// Add class comment…