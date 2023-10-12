console.log("check");


var currentaudio = 0;
var narration = ["Once upon a time, there was a little boy named Sam. Sam loved to travel and explore the world. However, Sam was no ordinary boy. Sam had a special superpower that allowed him to understand and speak to animals.",
"One day, Sam went to Mauritius to enjoy his summer at the beach. Sam swam a lot at the beach so he had to drink water. He grabbed his water bottle, finished it up, and carelessly threw it. Later on, he came across a little turtle.",
"After a few days, Sam travelled to Australia. Sam loved camping so he went to the forest. As he was there, he came across a little deer.",
"A few days later, Sam travelled to Antarctica. Sam loved skating so he went to skate. As he was there, he came across a little penguin.",
"Sam's holiday was almost over, He soon returned back to his country. Meanwhile, he was thinking of how to save the world while returning back.",
"Sam decided to go his beach and tell all the kids to recycle their bottles. Also, sam advised all his friends to be more environmentally friendly. As a result, Sam was a hero that has saved the world from climate change."]

var dialog = [];
// Panel 2 Dialogue: Turtle: "Hi Sam", sam looks confused that he understands the turtle , Sam: "Hi there." Turtle: "I see that you threw your water bottle here, you know, us turtles are very sensitive to plastic and cannot stand it, we would really appreciate it if you would use more sustainable bottles for your water." Sam: "Thank you for informing me of this, I did not know this before."
// Panel 3 Dialogue: Deer: "Hi Sam", Sam: "Hi there." Deer: "I see that you are making a campfire, you know, us deers are living here in the forest and are very exposed to forest fires. Please make sure that you take down the campfire after you are done with it as many people just leave it there." Sam: "Thank you for informing me of this, I did not know this before."
// Panel 4 Dialogue: Penguin: "Hi Sam", Sam: "Hi there." Penguin: "I see you are skating, that's very cool. You know, us penguins are living here in the glaciers and are very scared of global warming. I think that climate change is real and it is affecting us penguins since the sea levels are rising gradually. I would love it if you could tell your people back home to care more about the environment to help us all with this matter." Sam: "Thank you for informing me of this, I did not know this before."







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
    window.scrollTo(0,0); // Scroll back to top of page
    for (let item of images) { // Cycle to next backgrounds, change accompanying audio and text
        if (item.className == "beach") {
            item.src = "./img/Forest Fire.svg";
            item.className = "forest-fire";
            currentaudio = 1;
            all_text[0].innerHTML = narration[2];
            all_text[1].innerHTML = narration[3];
        }
        else if (item.className == "forest-fire") { 
            item.src = "./img/Arctic.svg";
            item.className = "arctic";
            currentaudio = 2;
            all_text[0].innerHTML = narration[4];
            all_text[1].innerHTML = narration[5];
        }
        else if (item.className == "arctic") {
            item.src = "./img/Beach.svg";
            item.className = "beach";
            currentaudio = 0;
            all_text[0].innerHTML = narration[0];
            all_text[1].innerHTML = narration[1];
        }
    }

    for (let item of all_text) { // Re-hide any visible text in panels
        if (item.style.opacity != 0)
            item.style.opacity = 0;
    }
}