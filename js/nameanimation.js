const fadeInROC = 0.01;
const fadeOutROC = 0.018;
const posROC = 1.0;
const overlapSpacing = 3.5;

const first = {
    name: document.getElementById('firstName'),
    head: document.getElementById('firstHead'),
    tail: document.getElementById('firstTail')
};

const last = {
    name: document.getElementById('lastName'),
    head: document.getElementById('lastHead'),
    tail: document.getElementById('lastTail')
};

function fadeInName() {
    var opacity = parseFloat(last.name.getAttribute("fill-opacity"));
    if (opacity < 1.0) {
        opacity += fadeInROC;
        opacity = opacity.toString();
        first.name.setAttribute("fill-opacity", opacity);
        first.tail.setAttribute("fill-opacity", opacity);
        last.name.setAttribute("fill-opacity", opacity);
        last.tail.setAttribute("fill-opacity", opacity);
        window.requestAnimationFrame(fadeInName);
    }
    else {
        fadeOutTails();
    }
}

function fadeOutTails() {
    var opacity = parseFloat(first.tail.getAttribute("fill-opacity"));
    if (opacity > 0.0) {
        opacity -= fadeOutROC;
        opacity = opacity.toString();
        first.tail.setAttribute("fill-opacity", opacity);
        last.tail.setAttribute("fill-opacity", opacity);
        window.requestAnimationFrame(fadeOutTails);
    } else {
        centerNames();
    }
}

function centerNames() {
    var firstPos = parseFloat(first.name.getAttribute("x"));
    var lastPos = parseFloat(last.name.getAttribute("x"));
    if ((lastPos - firstPos) > overlapSpacing) {
        firstPos += 1.2*posROC;
        lastPos -= 0.4*posROC;
        firstPos = firstPos.toString();
        lastPos = lastPos.toString();
        first.name.setAttribute("x", firstPos);
        last.name.setAttribute("x", lastPos);
        window.requestAnimationFrame(centerNames);
    }
}

fadeInName();
