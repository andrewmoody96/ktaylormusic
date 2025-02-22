import KTlogo from "../assets/KTlogo.webp";

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-black text-white font-noto">
      <h1 className="hidden tablet:block tablet:w-[33vw] text-2xl text-center text-white mt-4 font-ewert">
        Kolten Taylor
        <br />
        <span className="text-xl font-caveat">& the Truck Toppers</span>
      </h1>
      <div className="tablet:w-[33vw] tablet:m-auto">
        <a
          href="."
          title="Link to Homepage"
          aria-label="{null}"
          className="hover:border-2 hover:border-[#]"
        >
          <img
            className="max-w-[20vw] w-[20vw] tablet:w-[15vw] h-auto tablet:m-auto"
            width="288"
            height="288"
            src={KTlogo}
            alt="Kolten Taylor & The Truck Toppers"
          />
        </a>
      </div>
      <nav className="tablet:w-[33vw] text-[0.8rem] font-fredericka text-center m-auto">
        <button className="p-2 m-2 hover:text-[#d6445a]">
          <a href="#about">About</a>
        </button>
        <button className="p-2 m-2 hover:text-[#d6445a]">
          <a href="#shows">Calendar</a>
        </button>
        <button className="p-2 m-2 hover:text-[#d6445a]">
          <a href="#contact">Contact</a>
        </button>
      </nav>
    </header>
  );
}
