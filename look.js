const HOMEButton = document.getElementById("HOME");
const LOOKButton = document.getElementById("LOOK");
const FREEButton = document.getElementById("FREE");

HOMEButton.onclick = (evt) => {
    location.href = "./index.html";
}

LOOKButton.onclick = (evt) => {
    location.href = "./LOOK.html";
}

FREEButton.onclick = (evt) => {
    location.href = "./FREE.html";
}
