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


 

