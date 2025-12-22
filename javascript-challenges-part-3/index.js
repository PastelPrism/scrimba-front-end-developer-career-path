// Excersize 1: Let and const

const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false


points += 100
hasWon = true

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Excersize 2: Log out items in an array

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function logCourses(arr) {
    for (let item of arr) {
        console.log(item)
    }
}

logCourses(myCourses)

// Excersize 3: Save to local storage

const value = localStorage.getItem("myValue")
console.log(value)

// Excersize 4: addEventListener and object in array see addeventlistener.html

// Excersize 5: Genererate sentence

function generateSentence(desc, arr) {
    let sentence = `The ${arr.length} ${desc} are `

    for (let i = 0; i < arr.length; i++) {
        sentence += arr[i]
        
        if (i < arr.length - 1) {
            sentence += ", "
        }
    }
    
    return sentence
}

// Excersize 6: Render images 
// See render-images.html

// Excersize 7: Rounding numbers 
// See rounding-numbers.html

// Excersize 8: Convert String to Number challenge
// See string-to-number.html

