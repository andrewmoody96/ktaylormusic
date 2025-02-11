import KT1 from "../../assets/kt1.webp";
import KT2 from "../../assets/kt2.webp";
import KT3 from "../../assets/kt3.webp";
import TT1 from "../../assets/tt1.webp";
import TT2 from "../../assets/tt2.webp";
import ZD1 from "../../assets/zd1.webp";

export default function About() {
  return (
    <section
      id="about"
      className="text-center text-[0.8rem] tablet:text-[1rem] mb-10 w-[100vw] tablet:w-[60vw] desktop:w-[100vw] flex flex-col desktop:flex-row justify-center items-center mx-auto"
    >
      <div className="mx-10 mb-4 w-[100vw] desktop:hidden">
        <div className="mySlides fade">
          <div className="hidden tablet:block numbertext">1 / 6</div>
          <img
            className="w-[100%]"
            src={KT1}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="mySlides fade">
          <div className="hidden tablet:block numbertext">2 / 6</div>
          <img
            className="w-[100%]"
            src={TT1}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="mySlides fade">
          <div className="hidden tablet:block numbertext">3 / 6</div>
          <img
            className="w-[100%]"
            src={KT3}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="mySlides fade">
          <div className="hidden tablet:block numbertext">4 / 6</div>
          <img
            className="w-[100%]"
            src={ZD1}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="mySlides fade">
          <div className="hidden tablet:block numbertext">5 / 6</div>
          <img
            className="w-[100%]"
            src={KT2}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="mySlides fade">
          <div className="hidden tablet:block numbertext">6 / 6</div>
          <img
            className="w-[100%]"
            src={TT2}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
      </div>
      <p className="w-[100vw] text-center desktop:w-[45vw] desktop:h-auto p-4 mx-10 desktop:p-2 desktop:mx-auto">
        <span className="headingFredericka text-[1.5rem] tablet:text-[2rem] m-2 underline">
          About Kolten
        </span>
        <br />
        Kolten Taylor brings a combination of country and rock to his writing.
        Rooted in outlaw country, Taylor draws inspiration from his experiences
        as a blue-collar worker, observations of the world around him, and
        country living. While attending college in Champaign-Urbana, Taylor
        picked up the guitar and began writing with his close friends and
        family. This evolved into a fully-fledged recording and regional act.
        His two latest singles are the first to feature the full band including
        Nashville guitarist Zach Dable. “Neon Glow” and “Good Time Bad” mark the
        start of this duo&apos;s dynamic writing and production partnership.
        Taylor has had the privilege to open for artists like Noah Hicks, Jason
        Boland, Alex Williams, and Huser Brother Band. Taylor&apos;s authentic
        and heartfelt lyrics resonate deeply with listeners, capturing audiences
        with relatability and the band&apos;s raw performances.
      </p>
    </section>
  );
}
