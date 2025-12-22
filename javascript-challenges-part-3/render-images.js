const imgs = [
    "hip1.jpg",
    "hip2.jpg",
    "hip3.jpg"
]

function renderImages() {
    const container = document.getElementById("container")
    let html = ""

    for (let i = 0; i < imgs.length; i++) {
        html += `<img class="team-img" src="${imgs[i]}">`
    }

    container.innerHTML = html
}

renderImages()
