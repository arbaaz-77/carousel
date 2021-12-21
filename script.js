const slides = document.getElementsByClassName("carousel-item");
const prevSlide = document.getElementById("carousel-button-prev");
const nextSlide = document.getElementById("carousel-button-next");

const totalSlides = slides.length

let slidePosition = 0;

prevSlide.addEventListener('click', MoveToPrevSlide);
nextSlide.addEventListener('click', MoveToNextSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}

function MoveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-item-visible")
}

function MoveToPrevSlide() {
    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible")
}



