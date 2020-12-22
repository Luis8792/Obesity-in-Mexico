const HOMEButton = document.getElementById("HOME");
const LOOKButton = document.getElementById("LOOK");
const FREEButton = document.getElementById("FREE");
const calculateyoursButton = document.getElementById("calculate yours");

HOMEButton.onclick = (evt) => {
    location.href = "./index.html";
}

LOOKButton.onclick = (evt) => {
    location.href = "./LOOK.html";
}

FREEButton.onclick = (evt) => {
    location.href = "./FREE.html";
}

calculateyoursButton.onclick = (evt) => {
    location.href = "./calcu.html";
}