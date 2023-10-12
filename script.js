console.log("check");


var currentaudio = 0;

// HTML Elements
// var p1 = document.getElementById("p1");
// var p2 = document.getElementById("p2");
// var p3 = document.getElementById("p3");
// var p4 = document.getElementById("p4");
// var p5 = document.getElementById("p5");
// var p6 = document.getElementById("p6");
// var p1_text = document.getElementById("p1-text");
var page_end = document.getElementById("page-end"); // For page turning animation

// Element groups
var all_panels = document.getElementsByClassName("panel");
var all_text = document.getElementsByClassName("speech");
var images = document.getElementsByTagName("img");
var soundfiles = document.getElementsByTagName("audio");


// Event listeners
document.body.addEventListener('dblclick',pageTurn);
for (let item of all_panels) {
    item.addEventListener('click',speechPop);
    item.addEventListener('mouseover',playSound);
    item.addEventListener('mouseout',pauseSound);
}


// Function definitions
function speechPop() { // Make speech bubbles appear when clicking in panel
    if (this.firstElementChild.style.opacity == "0")
        this.firstElementChild.style.opacity = "1";
    else
        this.firstElementChild.style.opacity = "0";
}

function playSound() { // Play audio on mouseover
    if (currentaudio <= 2)
        soundfiles[currentaudio].volume = 0.2;
    else
        soundfiles[currentaudio].volume = 1.0;
    soundfiles[currentaudio].play();
}
function pauseSound() { // Stop audio on mouseout, // reset timestamp
    soundfiles[currentaudio].pause();
    // soundfiles[currentaudio].currentTime = 0;
}

function pageTurn() { // Animation for turning the page
    if (page_end.style.display == "none")
        page_end.style.display = "block";
    setTimeout(updatePage,2500)

    setTimeout(() => {page_end.style.display="none";}, 3500) // Reset animation after updating page
}

function updatePage() { // Update contents of page while animation is covering it
    for (let item of images) { // Cycle to next backgrounds
        if (item.className == "beach") {
            item.src = "./img/Forest Fire.svg";
            item.className = "forest-fire";
            currentaudio = 1;
        }
        else if (item.className == "forest-fire") {
            item.src = "./img/Arctic.svg";
            item.className = "arctic";
            currentaudio = 2;
        }
        else if (item.className == "arctic") {
            item.src = "./img/Beach.svg";
            item.className = "beach";
            currentaudio = 0;
        }
    }

    for (let item of all_text) { // Re-hide any visible text in panels
        if (item.style.opacity != 0)
            item.style.opacity = 0;
    }
}