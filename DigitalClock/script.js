let bgImages = {
    nightImages: [
        'https://wallpaperaccess.com/full/1320623.jpg',
        'https://wallpaperaccess.com/full/1320116.jpg',
        'https://wallpaperaccess.com/full/2859272.jpg',
        'https://wallpaperaccess.com/full/2541927.jpg',
        'https://wallpaperaccess.com/full/1685425.jpg',
        'https://wallpaperaccess.com/full/4790858.jpg',
        'https://wallpaperaccess.com/full/1324682.jpg',
        'https://wallpaperaccess.com/full/1638527.jpg',
        'https://wallpaperaccess.com/full/4790863.jpg',
        'https://wallpaperaccess.com/full/2182857.jpg',
    ],
    dayImages: [
        'https://wallpaperaccess.com/full/3265126.jpg',
        'https://wallpaperaccess.com/full/2777158.jpg',
        'https://wallpaperaccess.com/full/3265131.jpg',
        'https://wallpaperaccess.com/full/3265133.jpg',
        'https://wallpaperaccess.com/full/3265134.jpg',
        'https://wallpaperaccess.com/full/3265135.jpg',
        'https://wallpaperaccess.com/full/3265136.jpg',
        'https://wallpaperaccess.com/full/3265137.jpg',
        'https://wallpaperaccess.com/full/3265140.jpg',
        'https://wallpaperaccess.com/full/3265145.jpg',
    ]
}

let today = new Date()
let hours = today.getHours()
if (hours >= 20 || hours <= 7) {
    document.getElementsByClassName("main")[0].style.backgroundImage = `url('${bgImages.nightImages[Math.floor((Math.random() * bgImages.nightImages.length))]}')`
} else {
    document.getElementsByClassName("main")[0].style.backgroundImage = `url('${bgImages.dayImages[Math.floor((Math.random() * bgImages.dayImages.length))]}')`
}


setInterval(function() {
    let today = new Date()
    document.getElementById("time").innerHTML = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
}, 1000)