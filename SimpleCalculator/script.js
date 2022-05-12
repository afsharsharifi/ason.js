var ReslutElm = document.getElementById("result")

function PressKey(key) {
    if (CheckOperators(key)) {
        if (ReslutElm.value != 0) {
            ReslutElm.value += key
        } else {
            ReslutElm.value = key
        }
    }
}


function CheckOperators(key) {
    resultLength = ReslutElm.value.length;
    lastChar = ReslutElm.value.charAt(resultLength - 1)
    if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/" || lastChar == ".") {
        if (key == "+" || key == "-" || key == "*" || key == "/" || key == ".") {
            console.log(`The Last Char is => ${lastChar} and now pressed ${key}`);
            return false
        } else {
            console.log(`The Last Char is => ${lastChar} and now pressed ${key}`);
            return true
        }
    } else {
        return true
    }
}

function ClearResult() {
    ReslutElm.value = 0
}

function ShowReslut() {
    ReslutElm.value = eval(ReslutElm.value)
}