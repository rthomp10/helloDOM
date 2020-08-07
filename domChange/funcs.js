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

function imgHover() {
    console.log("Hovering on image " + this.alt);
    this.width = 350;
}

function imgNotHover() {
    this.width = 300;
}

images = document.getElementsByTagName("img");
console.log(images);
console.log(images[0])
images.width = 1000;
for(let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", imgHover);
    images[i].addEventListener("mouseout", imgNotHover);
}
