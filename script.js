console.log("check");

var currentpage = 1;
var currentaudio = 0;
var narration = ["Once upon a time, there was a little boy named Sam. Sam loved to travel and explore the world. However, Sam was no ordinary boy. Sam had a special superpower that allowed him to understand and speak to animals.",
"One day, Sam went to Mauritius to enjoy his summer at the beach. Sam swam a lot at the beach so he had to drink water. He grabbed his water bottle, finished it up, and carelessly threw it. Later on, he came across a little turtle.",
"After a few days, Sam travelled to Australia. Sam loved camping so he went to the forest. As he was there, he came across a little deer.",
"A few days later, Sam travelled to Antarctica. Sam loved skating so he went to skate. As he was there, he came across a little penguin.",
"Sam's holiday was almost over, He soon returned back to his country. Meanwhile, he was thinking of how to save the world while returning back.",
"Sam decided to go his beach and tell all the kids to recycle their bottles. Also, sam advised all his friends to be more environmentally friendly. As a result, Sam was a hero that has saved the world from climate change."]


// HTML Elements
var page_end = document.getElementById("page-end"); // For page turning animation
var recycleicon = document.getElementById("recycle-icon");
var toptext = document.getElementById("p1-text");
var bottext = document.getElementById("p2-text");
var topbg = document.getElementById("top-bg");
var botbg = document.getElementById("bot-bg");
var topsam = document.getElementById("top-sam");
var botsam = document.getElementById("bot-sam");
var topanimal = document.getElementById("top-animal");
var botanimal = document.getElementById("bot-animal");
var toplefty = document.getElementById("topLefty");
var toprighty = document.getElementById("topRighty");
var botlefty = document.getElementById("botLefty");
var botrighty = document.getElementById("botRighty");

// Element groups
var all_panels = document.getElementsByClassName("panel");
var all_text = document.getElementsByClassName("speech");
var all_images = document.getElementsByTagName("img");
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
    for (let subitem of this.children) {
        if (subitem.className != "bg") {
            if (subitem.style.opacity == 0)
                subitem.style.opacity = 1;
            else
                subitem.style.opacity = 0;
        }
    }
}

function playSound() { // Play audio on mouseover
    if (currentaudio <= 2)
        soundfiles[currentaudio].volume = 0.2;
    else
        soundfiles[currentaudio].volume = 1.0;
    soundfiles[currentaudio].play();
}
function pauseSound() { // Stop audio on mouseout
    soundfiles[currentaudio].pause();
    // soundfiles[currentaudio].currentTime = 0; // reset timestamp
}

function pageTurn() { // Animation for turning the page
    if (page_end.style.display == "none")
        page_end.style.display = "block";
    setTimeout(updatePage,2500)

    setTimeout(() => {page_end.style.display="none";}, 3500) // Reset animation after updating page
}

function updatePage() { // Update contents of page while animation is covering it
    window.scrollTo(0,0); // Scroll back to top of page
    switch(currentpage) { // Cycle to next backgrounds, change accompanying audio and text
        case 1: 
            topbg.src = "./img/Forest Fire.svg";
            botbg.src = "./img/Arctic.svg";
            topsam.src = "./img/sampray.png";
                topsam.style.top = "65%"; topsam.style.left = "60%";
            botsam.src = "./img/samcold.png";
                botsam.style.top = "78%"; botsam.style.left = "25%";
            topanimal.src = "./img/deer.png"; topanimal.style.display = "block";
            botanimal.src = "./img/penguin.png"; botanimal.style.display = "block";
                botanimal.style.top = "70%"; botanimal.style.left = "40%";
            toplefty.style.display = "block"; toprighty.style.display = "block"; botlefty.style.display = "block"; botrighty.style.display = "block";
                botrighty.style.top = "53%"; botrighty.style.left = "9%";
                botlefty.style.top = "45%"; botlefty.style.left = "45%";
                botlefty.getElementById("Turtletext").style.display = "none";
                botlefty.getElementById("Penguintext").style.display = "block";
            currentaudio = 1;
            toptext.innerHTML = narration[2];
            bottext.innerHTML = narration[3];
            currentpage = 2;
            break;
        case 2: 
            topbg.src = "./img/Beach.svg";
            botbg.src = "./img/Beach.svg";
            topsam.src = "./img/sambottle.png";
                topsam.style.top = "60%"; topsam.style.left = "50%";
            botsam.src = "./img/samold.png";
                botsam.style.top = "65%"; botsam.style.left = "60%"; botsam.style.maxHeight = "35%";
            topanimal.src = "./img/recycle.png"; topanimal.style.display = "none";
            botanimal.src = "./img/recycle.png"; botanimal.style.display = "none";
            toplefty.style.display = "none"; toprighty.style.display = "none"; botlefty.style.display = "none"; botrighty.style.display = "none"; 
            currentaudio = 2;
            toptext.innerHTML = narration[4];
            bottext.innerHTML = narration[5];
            currentpage = 3;
            break;
        case 3:
            topbg.src = "./img/Beach.svg";
            botbg.src = "./img/Beach.svg";
            topsam.src = "./img/sambottle.png";
                topsam.style.top = "60%"; topsam.style.left = "30%";
            botsam.src = "./img/sambeach.png";
                botsam.style.top = "75%"; botsam.style.left = "30%"; botsam.style.maxHeight = "25%";
            topanimal.src = "./img/recycle.png"; topanimal.style.display = "none";
            botanimal.src = "./img/turtle.png"; botanimal.style.display = "block";
                botanimal.style.top = "80%"; botanimal.style.left = "50%";
            botlefty.style.display = "block"; botrighty.style.display = "block";
                botrighty.style.top = "50%"; botrighty.style.left = "15%";
                botlefty.style.top = "55%"; botlefty.style.left = "55%";
                botlefty.getElementById("Penguintext").style.display = "none";
                botlefty.getElementById("Turtletext").style.display = "block";
            currentaudio = 0;
            toptext.innerHTML = narration[0];
            bottext.innerHTML = narration[1];
            currentpage = 1;
            break;
    }
    for (let item of all_panels) { // Re-hide any visible items in panels
        for (let subitem of item.children) {
            if (subitem.className != "bg") {
                subitem.style.opacity = 0;
            }
        }
    }
}