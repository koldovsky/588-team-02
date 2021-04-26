                            /* CAROUSEL BLOCK 1*/
let slideIndex = 1;
showSlides(slideIndex);
 
function plusSlide() {
    showSlides(slideIndex += 1);
}
 
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
 
function currentxSlide(n) {
    showSlides(slideIndex = n);
}
 
function showSlides(n) {
    const slides = document.getElementsByClassName("item");
    const dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.querySelector('.prev').addEventListener('click', minusSlide);
document.querySelector('.next').addEventListener('click', plusSlide);


                          /* CAROUSEL BLOCK 3*/
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


