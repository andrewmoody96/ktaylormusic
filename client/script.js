// PHOTO SLIDESHOW
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
  setTimeout(showGallerySlides, 3500); // Change image every 3.5 seconds
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
  setTimeout(showCoverSlides, 3500); // Change image every 3.5 seconds
}

// BANNER TOGGLE

function toggleBanner() {
  let unwindBanner = document.getElementById("unwindBanner");
  let showBanner = document.getElementById("showUnwind");

  let bannerClasses = Array.from(unwindBanner.classList);
  let buttonClasses = Array.from(showBanner.classList);

  console.log(`${bannerClasses} ||| ${buttonClasses}`);

  if (bannerClasses.includes("hidden") === false) {
    unwindBanner.classList.add("hidden");
    showBanner.classList.remove("hidden");
  } else {
    unwindBanner.classList.remove("hidden");
    showBanner.classList.remove("hidden");
  }
}
