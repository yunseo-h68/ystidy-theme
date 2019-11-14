/* Slideshow */
var mainSlideIndex = 1;
var aMainSlideIndex = 1; // for automatic slideshow

mainShowSlides(mainSlideIndex);
aMainShowSlides(); // for automatic slideshow

function mainPlusSlides(n) {
  mainShowSlides(mainSlideIndex += n);
}

function mainCurrentSlide(n) {
  mainShowSlides(mainSlideIndex = n);
}

function mainShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("main-slide");
  var dots = document.getElementsByClassName("main-dot");

  aMainSlideIndex = n;

  if (n > slides.length) {mainSlideIndex = 1}
  if (n < 1) {mainSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" main-active", "");
  }
  slides[mainSlideIndex-1].style.display = "block";
  dots[mainSlideIndex-1].className += " main-active";
}

/* Automatic Slideshow */
function aMainShowSlides() {
  var i;
  var slides = document.getElementsByClassName("main-slide");
  var dots = document.getElementsByClassName("main-dot");

  if (aMainSlideIndex > slides.length) {aMainSlideIndex = 1}
  if (aMainSlideIndex < 1) {aMainSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" main-active", "");
  }

  slides[aMainSlideIndex-1].style.display = "block";
  dots[aMainSlideIndex-1].className += " main-active";
  aMainSlideIndex++;
  setTimeout(aMainShowSlides, 5000); // Change image every 2 seconds
}
