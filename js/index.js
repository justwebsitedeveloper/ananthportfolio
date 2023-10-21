// Recent
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
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


// experience-testimonials
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoWidth: true,
    dots: false,
    items: 6,
    margin: 10,
    loop: true,
    responsiveClass: true,
  });
});

// video
function toggle() {
  var trailer = document.querySelector(".trailer");
  var video = document.querySelector("video");
  trailer.classList.toggle("active");
  // video.pause();
  video.currentTime = 0;
}

// Side Nav
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("ham").style.marginRight = "0px";
  document.body.style.backgroundColor = "white";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("ham").style.marginRight = "0";
  document.body.style.backgroundColor = "white";
}

// Scroll Top

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Modern slider

$(".slick-slider").slick({
  slidesToShow: 4,
  // slidesToScroll: 1,
  autoplay: true,
  speed: 800,
  // dots: false, 
  arrows: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true,
      },
    },
  ],
});


