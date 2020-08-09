function $(x) {
    return document.getElementById(x);
} 

function firstClicked() {
    $("firstPar").className = "open";
    $("changer").innerHTML = 'Clicked first button';
    $("secondPar").className = "closed";
}

function secondClicked() {
    $("firstPar").className = "closed";
    $("changer").innerHTML = 'Clicked second button';
    $("secondPar").className = "open";
}

function imgHover() {
    $("changer").innerHTML = "Hovering on image " + this.alt;
    console.log("Hovering on image " + this.alt);
    $("floatingWolf").src = this.src;
    document.getElementsByClassName("floater")[0].style.display = "block";
}

images = document.getElementsByTagName("img");
for(let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", imgHover);
}
