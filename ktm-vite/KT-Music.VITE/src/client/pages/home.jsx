import { useEffect } from "react";
import coverPhoto from "../assets/coverPhoto.jpg";
import About from "../components/homeComponents/about";
import Contact from "../components/homeComponents/contact";
import Slideshow from "../components/homeComponents/slideShow";
import Shows from "../components/showsComponents/shows";
import photoSlideShow from "../scripts/slideshow.cjs";
import FeaturedMusic from "../components/homeComponents/featuredMusic";

export default function Home() {
  // ISSUE
  useEffect(() => {
    photoSlideShow();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center bg-black text-white">
      <div className="desktop:hidden flex justify-center relative mb-4">
        <img
          className="mt-5 m-auto w-[100vw] h-auto tablet:w-[85vw]"
          src={coverPhoto}
          alt="Kolten Taylor & The Truck Toppers"
        />
        <div className="img-text absolute top-[17%] left=[50%] tablet:hidden w-[100vw]">
          <h1 className="text-4xl text-center text-white headingEwert">
            Kolten Taylor
            <br />
            <span className="text-2xl headingCaveat">& the Truck Toppers</span>
          </h1>
          <div className="w-[100vw] h-[7vh]"></div>
        </div>
      </div>
      <Slideshow />
      <FeaturedMusic />
      <About />
      {/* YOUTUBE VIDEO */}
      <div className="video-container mx-10 mb-10 pb-10">
        <iframe
          className="w-[85vw]"
          src="https://www.youtube.com/embed/LMHlhLwYuIY?si=eS_dIZR-UcS1WS3g?autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      {/* SHOWS / CONTACT */}
      <section className="w-[100vw] flex flex-col desktop:flex-row items-center justify-center ">
        <Shows />
        <Contact />
      </section>
    </main>
  );ƒ
}
