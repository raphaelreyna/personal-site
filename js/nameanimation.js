const fadeROC = 0.1;
const firstPosROC = 2.4;
const lastPosROC = 0.8;
const overlapSpacing = 3.5;
const expandedSpacing = 60;

var expnsn_cntrctn = 1; // 1 for contraction, -1 for expansion
var animating = true;

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
        opacity += 0.01;
        opacity = opacity.toString();
        first.name.setAttribute("fill-opacity", opacity);
        first.tail.setAttribute("fill-opacity", opacity);
        last.name.setAttribute("fill-opacity", opacity);
        last.tail.setAttribute("fill-opacity", opacity);
        window.requestAnimationFrame(fadeInName);
    } else {
        expandContract();
    }
}

function needAnimationFrame() {
    const firstPos = parseFloat(first.name.getAttribute("x"));
    const lastPos = parseFloat(last.name.getAttribute("x"));
    const diff = lastPos - firstPos;
    if (expnsn_cntrctn == 1) {
        return (diff > overlapSpacing);
    } else {
        return (diff < expandedSpacing);
    }
}

function expandContract() {
    var firstPos = parseFloat(first.name.getAttribute("x"));
    var lastPos = parseFloat(last.name.getAttribute("x"));
    var opacity = parseFloat(last.tail.getAttribute("fill-opacity"));

    if (needAnimationFrame()) {
        firstPos += expnsn_cntrctn*firstPosROC;
        lastPos -= expnsn_cntrctn*lastPosROC;
        firstPos = firstPos.toString();
        lastPos = lastPos.toString();
        first.name.setAttribute("x", firstPos);
        last.name.setAttribute("x", lastPos);
        opacity -= expnsn_cntrctn*fadeROC;
        opacity = opacity.toString();
        first.tail.setAttribute("fill-opacity", opacity);
        last.tail.setAttribute("fill-opacity", opacity);
        window.requestAnimationFrame(expandContract);
    } else {
        animating = false;
    }
}

function handleMouse() {
    expnsn_cntrctn *= -1;
    if (!animating) {
        animating = true;
        expandContract();
    }
}

document.getElementById("nameAnimation").addEventListener("mouseenter", handleMouse);
document.getElementById("nameAnimation").addEventListener("mouseleave", handleMouse);
fadeInName();
