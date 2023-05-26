let slideIndex = 1;
showSlides(slideIndex);

window.addEventListener("load", changeTestimonial);

document.querySelector(".prev").addEventListener("mousedown", minusSlides);
document.querySelector(".next").addEventListener("mousedown", plusSlides);

function changeTestimonial() {
  setInterval(plusSlides, 10000);
}
function minusSlides() {
  showSlides((slideIndex += -1));
  window.removeEventListener("load", changeTestimonial);
  console.log("minus");
}
function plusSlides() {
  showSlides((slideIndex += 1));
  window.removeEventListener("load", changeTestimonial);
  console.log("plus");
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
