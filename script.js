console.log("check");



var counter = 0;

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");





document.addEventListener('click',jump);



function jump() {
    console.log(counter);
    // Reset counter to zero
    if (counter % 6 == 0)
        counter = 0;

    // // Jump to correct element
    // switch(counter) {
    //     case 0:
    //         // p1.scrollIntoView();
    //         window.scrollTo(0,p1.offsetHeight)
    //     case 1:
    //         p2.scrollIntoView();
    //     case 2:
    //         p3.scrollIntoView();
    //     case 3:
    //         p4.scrollIntoView();
    //     case 4:
    //         p5.scrollIntoView();
    //     case 5:
    //         p6.scrollIntoView();
    // }
    // Increment counter
    counter++;



    window.scrollBy(0,300);
}