const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide-card");

let index = 0;

function slideReviews() {
    index++;

    if (index >= slides.length) {
        index = 0;
    }

    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Slide every 4 seconds
setInterval(slideReviews, 4000);
