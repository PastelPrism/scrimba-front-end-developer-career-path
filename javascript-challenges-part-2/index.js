// Challenge 1: Objects and functions

let personObject = {
    name: "Amy",
    age: 26,
    country: "A house"
};

function logData() {
    console.log(`${personObject.name} is ${personObject.age} years old and lives in ${personObject.country}`);
}

logData() 

// Challenge 2: if else

let age = 15;

if (age < 6) {
    console.log("Free");
} else if (age >= 6 && age <= 17) {
    console.log("Child discount");
} else if (age >= 18 && age <= 26) {
    console.log("Student discount");
} else if (age >= 27 && age <= 66) {
    console.log("Full price");
} else {
    console.log("Senior citizen discount");
}

// Challenge 3: Loops and arrays

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

console.log("The 5 largest countries in the world:");
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}

// Challenge 4: Push, pop, unshift, shift challenge

let largeCountries1 = ["Tuvalu","India","USA","Indonesia","Monaco"]

largeCountries1.shift();
largeCountries1.unshift("China");
largeCountries1.pop();
largeCountries1.push("Pakistan");

console.log(largeCountries1);

// Challenge 5: Logical operators

let dayOfMonth = 13;
let weekday = "Friday";

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱");
}

// Challenge 6: See 'Emoji Fighter'

// Challenge 7: See 'Sorting Fruits'