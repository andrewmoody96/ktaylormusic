export default function Contact() {
  return (
    <section
      id="contact"
      className="text-center text-[0.8rem] text-white tablet:text-[1rem] mb-10 w-[100vw] tablet:w-[85vw] desktop:w-[45vw] mx-4 flex flex-col desktop:flex-row justify-center items-center desktop:mb-20"
    >
      <div className="text-center text-[0.8rem] tablet:text-[1rem] m-2 mb-24 w-fit desktop:w-[35vw] desktop:self-start">
        <span className="headingFredericka text-[1.5rem] tablet:text-[2rem] m-2 underline">
          Booking & Contact
        </span>
        <br />
        <br></br>
        {/* BOOKING & CONTACT BUTTONS */}
        <div className="flex justify-center items-center w-[90vw]">
          <a
            className="text-base hover:text-white w-[30vw] m-2 px-2 py-1 rounded-2xl shadow-[inset_0_1px_5px_0_rgb(0,0,0);] items-center bg-[#d6445a]/90 border-4 border-white hover:bg-black"
            href="mailto:booking@smokeshowentertainment.com"
          >
            Booking Inquiries
          </a>
          <br />
          <a
            className="text-base hover:text-white w-[30vw] m-2 px-2 py-1 rounded-2xl shadow-[inset_0_1px_5px_0_rgb(0,0,0);] items-center bg-[#d6445a]/90 border-4 border-white hover:bg-black"
            href="mailto:juleeann@smokeshowentertainment.com"
          >
            Contact Management
          </a>
        </div>
        <br />
        {/* STAGEPLOT BUTTON */}
        <a
          aria-label="{null}"
          href="https://drive.google.com/drive/folders/1woERfjqQLwK0p7E-75Wq5AGOFlw71Enm?usp=share_link"
          title="Download Stageplot"
          target="_blank"
          rel="noreferrer"
          className="bg-black border-4 border-white hover:bg-[#d6445a] flex m-auto justify-center text-center w-[75vw] px-2 rounded-2xl shadow-[inset_0_1px_5px_0_rgb(0,0,0);] items-center"
        >
          <span className="headingFredericka text-lg">
            <i className="text-base m-2 fa-regular fa-file-pdf"></i>
            Download Stageplot
          </span>
        </a>
      </div>
      <div className="m-2 mb-20">{/* DUMMY DIV */}</div>
    </section>
  );
}
