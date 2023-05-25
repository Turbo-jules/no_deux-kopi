let slideIndex = 1;
showSlides(slideIndex);

document.querySelector(".prev").addEventListener("mousedown", minusSlides);
document.querySelector(".next").addEventListener("mousedown", plusSlides);

function minusSlides() {
  showSlides((slideIndex += -1));
  console.log("plus");
}
function plusSlides() {
  showSlides((slideIndex += 1));
  console.log("plus");
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
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
