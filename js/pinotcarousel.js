const images = [
    "image/pinot-noir.jpg",
    "image/noir.jpg"
]

let currentSlide = 0;


function showSlide() {
    const carouselImage = document.querySelector('.products-carousel img');
    carouselImage.src = images[currentSlide];
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= images.length) currentSlide = 0;
    showSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = images.length - 1;
    showSlide();
}

setInterval(nextSlide, 2000);

showSlide();