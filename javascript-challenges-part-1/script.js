// Exercise 1: Variables Practice

let firstName = "Amy";
let lastName = " van Leeuwen";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Excersize 2: Concatenate two strings in a function

let name = "Linda"
let greeting = "Hi there"

function message() {
    console.log(greeting + ", " + name + "!")
}

message()

// Exercise 3: Incrementing and decrementing

let myPoints = 3

function add3Points() {
  myPoints += 3
}

function remove1Point() {
  myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)

// Exercise 4: Strings and Numbers

console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114

// Exercise 5: See "Rendering an error message folder"

// Exercise 6: See "See calculator-challenge folder"

// Excercise 7: Arithmetic Operator Precedence

const tripLengthDays = 2
const tripDistanceKM = 300
const fuelPricePerKM = 1.5
const hotelCostPerNight = 60
const hotelDiscountPerNight = 6
const foodCost = 50

const totalCost = foodCost 
  + (tripDistanceKM * fuelPricePerKM) 
  + (hotelCostPerNight - hotelDiscountPerNight) * tripLengthDays

console.log(totalCost)

// Exercise  