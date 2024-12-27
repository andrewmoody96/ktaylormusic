import Unwind from "../assets/Unwind.jpg";

export default function DesktopBanner() {
  return (
    <div
      id="mobileBanner"
      className="hidden desktop:block absolute desktop:top-36 left-[25%] translate-50 z-10"
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
            <button className="border-2 bg-black/75 hover:bg-white/75 text-white rounded-lg p-1 mx-2 shadow-[-2px_2px_12px_0_rgba(0,0,0,0.3)] text-xs font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-black">
              Stream
            </button>
          </a>
          <button
            className="border-2 bg-red-600/90 hover:bg-white/75 text-xs text-white rounded-lg p-1 mx-2 shadow-[-5px_5px_23px_0_rgba(0,0,0,0.5)] font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-black"
            // onClick={}
          >
            Hide
          </button>
        </div>
      </div>
    </div>
  );
}
