function $(x) {return document.getElementById(x);} 

function firstClicked() {
    $("changer").innerHTML = 'Clicked first button';
    $("firstPar").className = "closed";
    $("secondPar").className = "open";
}

function secondClicked() {
    $("changer").innerHTML = 'Clicked second button';
    $("firstPar").className = "open";
    $("secondPar").className = "closed";
}