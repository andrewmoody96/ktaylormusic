export default function Contact() {
  return (
    <section
      id="contact"
      className="text-center text-[0.8rem] text-white tablet:text-[1rem] mb-10 w-[100vw] tablet:w-[85vw] mx-4 flex flex-col desktop:flex-row justify-center items-center desktop:mb-20"
    >
      <div className="text-center text-[0.8rem] tablet:text-[1rem] m-2 mb-20 w-fit desktop:w-[35vw] desktop:self-start">
        <span className="font-fredericka text-[1.5rem] tablet:text-[2rem] m-2 underline">
          Booking & Contact
        </span>
        <br />
        Zach Dable: <a href="tel:217-474-5617">217-474-5617</a>
        <br />
        Perry Dable: <a href="tel:217-497-5393">217-497-5393</a>
        <br />
        Email: <a href="mailto:kttoppers22@gmail.com">kttoppers22@gmail.com</a>
        <br />
        <br />
        <br />
        <a
          aria-label="{null}"
          href="https://drive.google.com/drive/folders/1woERfjqQLwK0p7E-75Wq5AGOFlw71Enm?usp=share_link"
          title="Download Stageplot"
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-fredericka text-lg hover:text-[#d6445a]">
            <i className="text-md m-2 fa-regular fa-file-pdf hover:text-[#d6445a]"></i>
            Download Stageplot
          </span>
        </a>
      </div>
      <div className="m-2 mb-20">{/* DUMMY DIV */}</div>
    </section>
  );
}
