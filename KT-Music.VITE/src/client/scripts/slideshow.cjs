// PHOTO SLIDESHOW
export default function photoSlideShow() {
  let galleryIndex = 0;
  let slideIndex = 0;
  showCoverSlides();
  showGallerySlides();

  function showGallerySlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    galleryIndex++;
    if (galleryIndex > slides.length) {
      galleryIndex = 1;
    }
    slides[galleryIndex - 1].style.display = "block";
    setTimeout(showGallerySlides, 5500); // Change image every 5.5 seconds
  }

  function showCoverSlides() {
    let i;
    let slides = document.getElementsByClassName("coverSlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showCoverSlides, 5500); // Change image every 5.5 seconds
  }
}
