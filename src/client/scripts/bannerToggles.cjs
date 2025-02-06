// BANNER TOGGLES
export default function toggleBanner() {
  let desktopBanner = document.getElementById("desktopBanner");
  let showDesktopBanner = document.getElementById("showDesktopBanner");
  let mobileBanner = document.getElementById("mobileBanner");
  let showMobileBanner = document.getElementById("showMobileBanner");

  let desktopBannerClasses = Array.from(desktopBanner.classList);
  let desktopButtonClasses = Array.from(showDesktopBanner.classList);
  let mobileBannerClasses = Array.from(mobileBanner.classList);
  let mobileButtonClasses = Array.from(showMobileBanner.classList);

  console.log(`${desktopBannerClasses} ||| ${desktopButtonClasses}`);
  console.log(`${mobileBannerClasses} ||| ${mobileButtonClasses}`);

  if (
    desktopBannerClasses.includes("hidden") &&
    mobileBannerClasses.includes("hidden") === false
  ) {
    desktopBanner.classList.add("hidden");
    showDesktopBanner.classList.remove("hidden");
    mobileBanner.classList.add("hidden");
    showMobileBanner.classList.remove("hidden");
  } else {
    desktopBanner.classList.remove("hidden");
    showDesktopBanner.classList.remove("hidden");
    mobileBanner.classList.remove("hidden");
    showMobileBanner.classList.remove("hidden");
  }
}
