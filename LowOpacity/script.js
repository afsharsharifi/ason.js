let opacity = 100
let lowerOpacity = setInterval(function() {
    if (opacity === 0) {
        clearInterval(lowerOpacity)
    }
    document.body.style.opacity = opacity + "%"
    console.log(opacity);
    opacity = opacity - 10
}, 1000)