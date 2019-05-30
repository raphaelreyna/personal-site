document.onscroll = function() {handleScroll()};
var projectDescriptions = document.getElementsByClassName("sectionBreak");
const listElements = document.getElementsByClassName("sectionli");
var activeList = listElements[0];
var topMostElement = projectDescriptions[0];
var timesClicked = 0;

function handleScroll() {
    for (var i = 0; i < projectDescriptions.length; i++) {
        const projDescr = projectDescriptions[i];
        const y = projDescr.getBoundingClientRect().y;
        if ((y >= -20) && (Math.abs(y) < Math.abs(topMostElement.getBoundingClientRect().y))) {
            topMostElement = projDescr;
        }
    }
    highlightFor(topMostElement);
}

function highlightFor(element) {
    activeList.classList.remove("active");
    activeList.classList.remove("teal");
    activeList.classList.remove("lighten-2");
    activeList.classList.remove("blue-text");
    const className = element.id;
    activeList = document.getElementsByClassName(className)[0];
    activeList.classList.add("active");
    activeList.classList.add("teal");
    activeList.classList.add("lighten-2");
    activeList.classList.add("blue-text");
}
