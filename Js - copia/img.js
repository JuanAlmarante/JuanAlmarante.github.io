var slideIndex = 1;

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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
// Desactivar la selección de texto en la página
document.body.style.userSelect = 'none';

// Desactivar animaciones en todas las imágenes
var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  images[i].style.transition = 'none';
  images[i].style.animation = 'none';
}

// Puedes agregar más líneas de código para otras propiedades de estilo que desees desactivar.
// Por ejemplo, puedes usar images[i].style.transform = 'none'; para desactivar transformaciones.
