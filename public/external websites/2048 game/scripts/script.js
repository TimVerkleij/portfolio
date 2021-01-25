//! You can edit these values

var numberOfStartingSquares = 4

//!

var numberOfMoves = 0

var keyUp2 = true
var start = []




for (let i = 0; i < numberOfStartingSquares; i++) {
    let xPos = Math.ceil(Math.random() * 4) - 1
    let yPos = Math.ceil(Math.random() * 4) - 1
    let cords = xPos + "." + yPos

    if (!start.includes(cords)) {
        start.push(cords)
    } else {
        console.log("1 square has been overwritten")
    }

}


// start = ["2.0", "3.0","1.0", "0.1"]

document.querySelectorAll('td').forEach(element => {
    if (start.includes(element.getAttribute("id"))) {
        element.className = "active"
        element.setAttribute("value", 2)
    } else {
        element.className = ""
    }
})


document.querySelectorAll('td').forEach(element => {
    if (start.includes(element.getAttribute("id"))) {
        element.innerHTML = element.getAttribute("value")
    } else {
        element.innerHTML = ""
    }
})

var keysTried = []

document.addEventListener("keypress", keyPressed)
document.addEventListener("keyup", keyUp)

function keyPressed(pressedKey) {
    if (!event.key) { event.key = pressedKey; keyUp2 = true }
    if (keyUp2) {
        var squareHasMoved = 0; //deze wordt 1 als het spelbord veranderd
        for (var i = 0; i < 3; i++) {
            keyDown(event.key)
        }

        var emptySquares = []

        document.querySelectorAll('td').forEach(element => {
            if (!start.includes(element.getAttribute("id"))) {

                emptySquares.push(element.getAttribute("id"))
            }
        })
        if (emptySquares.length != 0) {
            var randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)]
            start.push(randomEmptySquare)
            var newSquare = document.getElementById(randomEmptySquare)
            newSquare.className = "val2 active"
            newSquare.setAttribute("value", 2)
            newSquare.innerHTML = 2
        } else {
            keysTried.push(event.key)
            if (keysTried.includes("w") && keysTried.includes("a") && keysTried.includes("s") && keysTried.includes("d")) {
                gameOver()
            }
        }

        keyUp2 = false
    }
}

function keyDown(keycode) {
    var elementArray = []

    if (keycode == "a") {
        document.querySelectorAll(".active").forEach(element => {
            if (parseInt(element.getAttribute("id").split(".")[0]) != 0) {
                var position = element.getAttribute("id")
                var newXpos = parseInt(position.split(".")[0]) - 1
                var ypos = position.split(".")[1]
                var newPosition = newXpos.toString() + "." + ypos
                if (!start.includes(newPosition)) {
                    start.push(newPosition)
                    start.forEach(removeItems)

                    function removeItems(value, index, array) {
                        if (value == position) {
                            array.splice(index, 1)
                        }
                    }

                    var squareValue = element.getAttribute("value")
                    var newSquare = document.getElementById(newPosition)

                    newSquare.className = "val" + squareValue + " active"
                    newSquare.setAttribute("value", squareValue)
                    element.className = ""
                    element.removeAttribute("value")
                } else if (element.getAttribute("value") === document.getElementById(newPosition).getAttribute("value")) {
                    start.forEach(removeItems)

                    function removeItems(value, index, array) {
                        if (value == position) {
                            array.splice(index, 1)
                        }
                    }
                    let newValue = document.getElementById(newPosition).getAttribute("value") * 2
                    document.getElementById(newPosition).setAttribute("value", newValue)
                    document.getElementById(newPosition).className = "val" + newValue + " active"
                    element.removeAttribute("value")
                    element.className = ""
                }

            }
        })

    }
    if (keycode == "s") {
        document.querySelectorAll(".active").forEach(element => {

            elementArray.push(element)
        })
        elementArray.reverse()
        elementArray.forEach(element => {
            if (parseInt(element.getAttribute("id").split(".")[1]) != 3) {
                var position = element.getAttribute("id")
                var newYpos = parseInt(position.split(".")[1]) + 1
                var xpos = position.split(".")[0]
                var newPosition = xpos + "." + newYpos.toString()
                if (!start.includes(newPosition)) {
                    start.push(newPosition)
                    start.forEach(removeItems)

                    function removeItems(value, index, array) {
                        if (value == position) {
                            array.splice(index, 1)
                        }
                    }
                    var squareValue = element.getAttribute("value")
                    var newSquare = document.getElementById(newPosition)

                    newSquare.className = "val" + squareValue + " active"
                    newSquare.setAttribute("value", squareValue)
                    element.className = ""
                    element.removeAttribute("value")
                } else if (element.getAttribute("value") === document.getElementById(newPosition).getAttribute("value")) {
                    start.forEach(removeItems)

                    function removeItems(value, index, array) {
                        if (value == position) {
                            array.splice(index, 1)
                        }
                    }
                    let newValue = document.getElementById(newPosition).getAttribute("value") * 2
                    document.getElementById(newPosition).setAttribute("value", newValue)
                    document.getElementById(newPosition).className = "val" + newValue + " active"
                    element.removeAttribute("value")
                    element.className = ""
                }

            }
        })
    }
    if (keycode == "w") {
        document.querySelectorAll(".active").forEach(element => {
            if (parseInt(element.getAttribute("id").split(".")[1]) != 0) {
                var position = element.getAttribute("id")
                var newYpos = parseInt(position.split(".")[1]) - 1
                var xpos = position.split(".")[0]

                var newPosition = xpos + "." + newYpos.toString()

                if (!start.includes(newPosition)) {
                    start.push(newPosition)
                    start.forEach(removeItems)

                    function removeItems(value, index, array) {
                        if (value == position) {
                            array.splice(index, 1)
                        }
                    }
                    var squareValue = element.getAttribute("value")
                    var newSquare = document.getElementById(newPosition)

                    newSquare.className = "val" + squareValue + " active"
                    newSquare.setAttribute("value", squareValue)
                    element.className = ""
                    element.removeAttribute("value")
                } else if (element.getAttribute("value") === document.getElementById(newPosition).getAttribute("value")) {
                    start.forEach(removeItems)

                    function removeItems(value, index, array) {
                        if (value == position) {
                            array.splice(index, 1)
                        }
                    }
                    let newValue = document.getElementById(newPosition).getAttribute("value") * 2
                    document.getElementById(newPosition).setAttribute("value", newValue)
                    document.getElementById(newPosition).className = "val" + newValue + " active"
                    element.removeAttribute("value")
                    element.className = ""
                }


            }
        })
    }
    if (keycode == "d") {
        document.querySelectorAll(".active").forEach(element => {

            elementArray.push(element)
        })
        elementArray.reverse()
        elementArray.forEach(element => {
            if (parseInt(element.getAttribute("id").split(".")[0]) != 3) {
                var position = element.getAttribute("id")
                var newXpos = parseInt(position.split(".")[0]) + 1
                var ypos = position.split(".")[1]
                var newPosition = newXpos.toString() + "." + ypos
                if (!start.includes(newPosition)) {
                    start.push(newPosition)
                    start.forEach(removeItems)

                    function removeItems(value, index, array) {
                        if (value == position) {
                            array.splice(index, 1)
                        }
                    }
                    var squareValue = element.getAttribute("value")
                    var newSquare = document.getElementById(newPosition)

                    newSquare.className = "val" + squareValue + " active"
                    newSquare.setAttribute("value", squareValue)
                    element.className = ""
                    element.removeAttribute("value")
                } else if (element.getAttribute("value") === document.getElementById(newPosition).getAttribute("value")) {
                    start.forEach(removeItems)

                    function removeItems(value, index, array) {
                        if (value == position) {
                            array.splice(index, 1)
                        }
                    }
                    let newValue = document.getElementById(newPosition).getAttribute("value") * 2
                    document.getElementById(newPosition).setAttribute("value", newValue)
                    document.getElementById(newPosition).className = "val" + newValue + " active"
                    element.removeAttribute("value")
                    element.className = ""
                }
            }
        })
    }

    document.querySelectorAll('td').forEach(element => {
        if (start.includes(element.getAttribute("id"))) {
            element.innerHTML = element.getAttribute("value")
        } else {
            element.innerHTML = ""
        }
    })

}

function keyUp() {
    keyUp2 = true
}

function gameOver() {
    document.getElementById("table").style.backgroundColor = "red"
    document.getElementById("gameOverScreen").style.display = "block"
}

function right() {
    keyPressed("d")
}

function up() {
    keyPressed("w")
}

function left() {
    keyPressed("a")
}

function down() {
    keyPressed("s")
}