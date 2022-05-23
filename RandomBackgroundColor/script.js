document.body.onload = randomColorRGB()
document.getElementById("change-color").addEventListener("click", randomColorRGB)


function randomColorRGB() {
    let randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    document.body.style.backgroundColor = randomColor
    document.getElementById("current-color").innerHTML = randomColor
}