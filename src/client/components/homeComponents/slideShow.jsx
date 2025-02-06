import KT1 from "../../assets/kt1.jpeg";
import KT2 from "../../assets/kt2.jpg";
import KT3 from "../../assets/kt3.jpg";
import TT1 from "../../assets/tt1.jpg";
import TT2 from "../../assets/tt2.jpg";
import ZD1 from "../../assets/zd1.jpg";

export default function Slideshow() {
  return (
    <div className="hidden desktop:block slideshow-container mb-4 w-[100vw]">
      <div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">1 / 6</div>
          <img
            className="w-[100%]"
            src={KT1}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">2 / 6</div>
          <img
            className="w-[100%]"
            src={TT1}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">3 / 6</div>
          <img
            className="w-[100%]"
            src={KT3}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">4 / 6</div>
          <img
            className="w-[100%]"
            src={ZD1}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">5 / 6</div>
          <img
            className="w-[100%]"
            src={KT2}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
        <div className="coverSlides border-0 shadow-none fade">
          <div className="hidden numbertext">6 / 6</div>
          <img
            className="w-[100%]"
            src={TT2}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </div>
      </div>
    </div>
  );
}
