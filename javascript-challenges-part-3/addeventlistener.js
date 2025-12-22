let data = [
    { player: "Jane", score: 52 },
    { player: "Mark", score: 41 }
]

const button = document.getElementById("button")

button.addEventListener("click", function () {
    console.log(data[0].score)
})
