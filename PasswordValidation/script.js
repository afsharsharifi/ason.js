function using_symbols(str) {
    return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str)
}

function using_numbers(str) {
    return /[0-9]/gm.test(str)
}

function length_more_8(str) {
    return str.length >= 8
}

function using_lowercase(str) {
    return str.toUpperCase() != str
}

function using_uppercase(str) {
    return str.toLowerCase() != str
}

function howManyTrueForThis(str) {
    let counter = 0
    using_symbols(str) ? counter += 20 : counter -= 20
    using_numbers(str) ? counter += 20 : counter -= 20
    length_more_8(str) ? counter += 20 : counter -= 20
    using_lowercase(str) ? counter += 20 : counter -= 20
    using_uppercase(str) ? counter += 20 : counter -= 20
    if (counter < 0) { counter = 0 }
    return counter
}

document.getElementById("password").addEventListener("keyup", function() {
    let password = document.getElementById("password").value
    let progress = document.getElementById("progress")
    switch (howManyTrueForThis(password)) {
        case 0:
            progress.className = 'progress0'
            break;
        case 20:
            progress.className = 'progress20'
            break;
        case 40:
            progress.className = 'progress40'
            break;
        case 60:
            progress.className = 'progress60'
            break;
        case 80:
            progress.className = 'progress80'
            break;
        case 100:
            progress.className = 'progress100'
            break;
        default:
            console.log("None of above");
    }
});