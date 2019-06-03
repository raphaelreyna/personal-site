document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, null);
    elems = document.querySelectorAll('.sidenav');
    instances = M.Sidenav.init(elems, {preventScrolling: false});
    elems = document.querySelectorAll('.pushpin');
    instances = M.Pushpin.init(elems, null);
    elems = document.querySelectorAll('.modal');
    instances = M.Modal.init(elems, {startingTop: '50%'});
});
