let wallpaper = 0, wallslide = 0;
function fader() {
    setTimeout(fader, 60);
    document.getElementById("WallPaper" + wallpaper).style.opacity = 1.0 - Math.abs(100 - wallslide) / 100;
    wallslide -= 5;
    if(wallslide < 0) {
        wallslide = (wallslide + 200) % 200;
        wallpaper ++;
        if(!document.getElementById("WallPaper" + wallpaper))
            wallpaper = 0;
    }
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("items");
    let dots = document.getElementsByClassName("sliders-dotss_items");
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
        dots[i].className = dots[i].className.replace(" actives", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " actives";
}

function start() {
    fader();
    plusSlide();
    minusSlide(); 
}