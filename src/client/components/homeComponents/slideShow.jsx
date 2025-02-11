import KT1 from "../../assets/kt1.webp";
import KT2 from "../../assets/kt2.webp";
import KT3 from "../../assets/kt3.webp";
import TT1 from "../../assets/tt1.webp";
import TT2 from "../../assets/tt2.webp";
import ZD1 from "../../assets/zd1.webp";

export default function Slideshow() {
  return (
    <div className="hidden desktop:block slideshow-container mb-4 w-[100vw]">
      <div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">1 / 6</div>
          <img
            width="960px"
            height="734px"
            className="w-[100%]"
            src={KT1}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">2 / 6</div>
          <img
            width="3600px"
            height="2405px"
            className="w-[100%]"
            src={TT1}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">3 / 6</div>
          <img
            width="3600px"
            height="2405px"
            className="w-[100%]"
            src={KT3}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">4 / 6</div>
          <img
            width="3600px"
            height="2405px"
            className="w-[100%]"
            src={ZD1}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">5 / 6</div>
          <img
            width="3600px"
            height="2405px"
            className="w-[100%]"
            src={KT2}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">6 / 6</div>
          <img
            width="6817px"
            height="4480px"
            className="w-[100%]"
            src={TT2}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
      </div>
    </div>
  );
}
