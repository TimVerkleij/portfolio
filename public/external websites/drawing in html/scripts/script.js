function change() {
    var options = document.getElementById("options")
    options.classList.toggle("optionsDown")
    document.getElementById("arrow").classList.toggle("arrowUp")
}


function checkNumber(element) {
    if (element.value >= 1000) {
        element.value = 1000
    } else if (element.value < 0) {
        element.value = 1
    }
}


var mouseIsDown = false;

window.addEventListener('mousedown', function() {
    mouseIsDown = true;
    // console.log(mouseIsDown)
});

window.addEventListener('mouseup', function() {
    mouseIsDown = false;
    // console.log(mouseIsDown)
});


function mouseMove(e) {
    if (mouseIsDown) {
        var color = document.getElementById("colorPicker").value
        var thiccness = document.getElementById("numberPicker").value
        var x = e.clientX - (thiccness / 2)
        var y = e.clientY - (thiccness / 2)
        const div = document.createElement('div')
        div.className = "dot"
        div.style.width = thiccness + "px"
        div.style.height = div.style.width
        div.style.backgroundColor = color
        div.style.marginTop = y + "px"
        div.style.marginLeft = x + "px"
        document.getElementById("container").appendChild(div)
            // setTimeout(function() { console.log("Hello"); }, 3000);
    }
}


function loop(timestamp) {
    var progress = (timestamp - lastRender)
    document.onmousemove = mouseMove
}

var lastRender = 0
window.requestAnimationFrame(loop)