// I will be creating a different pen with touch support but right // now I have no time for it due to school
console.log("Hello World")
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button_prev = document.querySelectorAll(".button-prev");
const button_next = document.querySelectorAll(".button-next");

let current = 0;
let prev = 4;
let next = 1;

button_prev.addEventListener("click", function() {
    console.log("Go to previous slide")
    if(current-1 < 0){
        gotoNum(slides.length -1)
    }else{
        gotoNum(current - 1)
    }
})

button_next.addEventListener("click", function () {
    console.log("Go to next slide")
    if (current + 1 > slides.length) {
        gotoNum(0)
    } else {
        gotoNum(current + 1)
    }
})

/*
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);
*/
function gotoNum(number){
    new_slide = number;
    console.log(new_slide)
    prev = new_slide - 1;
    next = new_slide + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 4;
    }

    slides[current_slide].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}