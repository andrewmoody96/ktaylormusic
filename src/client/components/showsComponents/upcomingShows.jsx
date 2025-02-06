export default function Shows() {
  return (
    <section
      id="shows"
      className="text-center text-[0.8rem] tablet:text-[1rem] mb-10 w-[100vw] tablet:w-[85vw] mx-4 flex flex-col desktop:flex-row justify-center items-center desktop:mb-20"
    >
      <div className="m-2">
        <span className="font-fredericka text-[1.5rem] tablet:text-[2rem] m-2 underline">
          Upcoming Shows
        </span>
        <ul className="text-[1rem] grid grid-cols-1 w-[75vw] desktop:w-[35vw]">
          <li className="calEvent bg-white border-2 border-red 600 rounded-md text-black m-2 drop-shadow-[0_1px_5px_rgba(255,255,255,0.7)] shadow-[2px_0px_5px_-0px_rgba(255,255,255,1)]">
            Nov 15 @ 7:30PM
            <br />
            Winston&apos;s Old Bank
            <br />
            Sidney, IL
          </li>
          <li className="calEvent bg-white border-2 border-red 600 rounded-md text-black m-2 drop-shadow-[0_1px_5px_rgba(255,255,255,0.7)] shadow-[2px_0px_5px_-0px_rgba(255,255,255,1)]">
            Dec 21 @ 8PM
            <br />
            Sliderz
            <br />
            Decatur, IL
          </li>
          <li className="calEvent bg-white border-2 border-red 600 rounded-md text-black m-2 drop-shadow-[0_1px_5px_rgba(255,255,255,0.7)] shadow-[2px_0px_5px_-0px_rgba(255,255,255,1)]">
            Jan 11 @ 8:30PM
            <br />
            Exit 210 Saloon
            <br />
            Oakwood, IL
          </li>
        </ul>
      </div>
      <div className="m-2">{/* DUMMY DIV */}</div>
    </section>
  );
}
