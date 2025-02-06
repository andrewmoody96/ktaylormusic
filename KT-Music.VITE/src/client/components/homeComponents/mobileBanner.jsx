// TRIGGER STATE CHANGE ON CLICK
import Unwind from "../assets/Unwind.jpg";

export default function MobileBanner() {

  // const handleClose = (tOf) => {
  //   toggleBanner(tOf);
  // };

  return (
    <div
      id="desktopBanner"
      className="desktop:hidden absolute top-0 left-[25%] translate-50 z-10"
    >
      <div className="shadow-[5px_5px_10px_0_rgba(0,0,0,0.5)]">
        <img src={Unwind} className="w-[50vw] border-10" />
        <div className="bg-[#ECEDEB] h-[7vh] flex justify-center items-center">
          <a
            aria-label="{null}"
            href="https://snd.click/2bbq"
            title="Unwind - Streaming Link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hidden desktop:block border-2 bg-black/75 hover:bg-white/75 text-white rounded-lg p-1 m-2 shadow-[-2px_2px_12px_0_rgba(0,0,0,0.3)] font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-black">
              Stream &quot;Unwind&quot;
            </button>
            <button className="desktop:hidden border-2 bg-black/75 hover:bg-white/75 text-white rounded-lg p-1 m-2 shadow-[-2px_2px_12px_0_rgba(0,0,0,0.3)] font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-black">
              Stream
            </button>
          </a>
          <button
            className="border-2 bg-red-600/90 hover:bg-white/75 text-white rounded-lg p-1 m-2 shadow-[-5px_5px_23px_0_rgba(0,0,0,0.5)] font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-black"
            // onClick={() => handleClose(false)}
          >
            Hide
          </button>
        </div>
      </div>
    </div>
  );
}
