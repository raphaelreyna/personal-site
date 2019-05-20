document.onscroll = function() {handleScroll()};
var projectDescriptions = document.getElementsByClassName("projDescr");
var activeList = document.getElementsByClassName("projli")[0];
var topMostElement = projectDescriptions[0];

function handleScroll() {
    for (var i = 0; i < projectDescriptions.length; i++) {
        const projDescr = projectDescriptions[i];
        const y = projDescr.getBoundingClientRect().y;
        if ((y > 0) && (Math.abs(y) < Math.abs(topMostElement.getBoundingClientRect().y))) {
            topMostElement = projDescr;
        }
    }
    activeList.classList.remove("active");
    activeList.classList.remove("cyan");
    activeList.classList.remove("lighten-3");
    const className = topMostElement.parentNode.parentNode.id;
    activeList = document.getElementsByClassName(className)[0];
    activeList.classList.add("active");
    activeList.classList.add("cyan");
    activeList.classList.add("lighten-3");
}
