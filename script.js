let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function hideAllSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.opacity = 0;
    }
}

function showSlide(n) {
    hideAllSlides();
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].style.opacity = 1;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

hideAllSlides();
slides[currentSlide].style.opacity = 1;

setInterval(nextSlide, 3000);
