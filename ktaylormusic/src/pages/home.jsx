export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center">
      <div className="desktop:hidden relative mb-4">
        <img
          className="m-auto w-[100vw] h-auto tablet:w-[100vw] tablet:h-[85vh]"
          src="./media/coverPhoto.jpg"
          alt="Kolten Taylor & The Truck Toppers"
        />
        <div
          className="img-text z absolute top-[17%] left=[50%] tablet:hidden w-[100vw]"
        >
          <h1 className="text-4xl text-center text-white font-ewert">
            Kolten Taylor<br /><span className="font-caveat text-2xl font-caveat"
              >& the Truck Toppers</span
            >
          </h1>
          <div className="w-[100vw] h-[7vh]"></div>
        </div>
        <div
          id="unwindBannerMobile"
          className="absolute top-0 left-[25%] translate-50 z-10"
        >
          <div className="shadow-[5px_5px_10px_0_rgba(0,0,0,0.5)]">
            <img src="./media/Unwind-Artwork.JPG" className="w-[50vw] border-10" />
            <div
              className="bg-[#ECEDEB] h-[7vh] flex justify-center items-center"
            >
              <a
                aria-label="{null}"
                href="https://snd.click/2bbq"
                title="Unwind - Streaming Link"
                target="_blank"
                rel="noreferrer"
                ><button
                  className="border-2 bg-black/75 hover:bg-white/75 text-white rounded-lg p-1 mx-2 shadow-[-2px_2px_12px_0_rgba(0,0,0,0.3)] text-xs font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-black"
                >
                  Stream
                </button></a
              ><button
                className="border-2 bg-red-600/90 hover:bg-white/75 text-xs text-white rounded-lg p-1 mx-2 shadow-[-5px_5px_23px_0_rgba(0,0,0,0.5)] font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-black"
                onClick="toggleMobileBanner(), toggleBanner()"
              >
                Hide
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden desktop:block slideshow-container mb-4 w-[100vw]">
        <div>
          <div className="coverSlides border-0 shadow-none fade">
            <div className="hidden numbertext">1 / 6</div>
            <img
              className="w-[100%]"
              src="./media/kt1.jpeg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
          <div className="coverSlides border-0 shadow-none fade">
            <div className="hidden numbertext">2 / 6</div>
            <img
              className="w-[100%]"
              src="./media/tt1.jpg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
          <div className="coverSlides border-0 shadow-none fade">
            <div className="hidden numbertext">3 / 6</div>
            <img
              className="w-[100%]"
              src="./media/kt3.jpg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
          <div className="coverSlides border-0 shadow-none fade">
            <div className="hidden numbertext">4 / 6</div>
            <img
              className="w-[100%]"
              src="./media/zd1.jpg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
          <div className="coverSlides border-0 shadow-none fade">
            <div className="hidden numbertext">5 / 6</div>
            <img
              className="w-[100%]"
              src="./media/kt2.jpg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
          <div className="coverSlides border-0 shadow-none fade">
            <div className="hidden numbertext">6 / 6</div>
            <img
              className="w-[100%]"
              src="./media/tt2.jpg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
        </div>
        <div
          id="unwindBanner"
          className="absolute top-0 left-[25%] translate-50 z-10"
        >
          <div className="shadow-[5px_5px_10px_0_rgba(0,0,0,0.5)]">
            <img src="./media/Unwind-Artwork.JPG" className="w-[50vw] border-10" />
            <div
              className="bg-[#ECEDEB] h-[7vh] flex justify-center items-center"
            >
              <a
                aria-label="{null}"
                href="https://snd.click/2bbq"
                title="Unwind - Streaming Link"
                target="_blank"
                rel="noreferrer"
                ><button
                  className="border-2 bg-black/75 hover:bg-white/75 text-white rounded-lg p-1 m-2 shadow-[-2px_2px_12px_0_rgba(0,0,0,0.3)] font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-black"
                >
                  Stream &quot;Unwind&quot;
                </button></a
              ><button
                className="border-2 bg-red-600/90 hover:bg-white/75 text-white rounded-lg p-1 m-2 shadow-[-5px_5px_23px_0_rgba(0,0,0,0.5)] font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-black"
                onClick="toggleBanner()"
              >
                Hide
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center my-4">
        <button
          id="showUnwind"
          className="hidden border-2 bg-black/50 hover:bg-white/75 text-white rounded-lg p-1 px-2 m-2 shadow-[-5px_5px_23px_0_rgba(217,124,37,1)] font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-black"
          onClick="toggleBanner(), toggleMobileBanner()"
        >
          &quot;Unwind&quot;
        </button>
        <div className="">
          <a
            aria-label="{null}"
            href="https://snd.click/gy6w"
            title="Download Stageplot"
            target="_blank"
            rel="noreferrer"
            ><button
              className="border-2 bg-[#f3b477]/75 text-white rounded-lg p-1 m-2 shadow-[-5px_5px_23px_0_rgba(217,124,37,1)] font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-[rgba(46,30,15,1)]"
            >
              &quot;Good Time Bad&quot;
            </button></a
          >
          <a
            aria-label="{null}"
            href="https://songwhip.com/koltentaylor/neon-glow"
            title="Download Stageplot"
            target="_blank"
            rel="noreferrer"
            ><button
              className="border-2 bg-[#653764]/80 text-white rounded-lg p-1 m-2 shadow-[5px_5px_24px_-0px_rgba(235,110,232,1)] font-fredericka hover:border-[rgba(235,110,232,1)] hover:text-[rgba(235,110,232,1)]"
            >
              &quot;Neon Glow&quot;
            </button></a
          >
        </div>
      </section>
      <section
        id="about"
        className="text-center text-[0.8rem] tablet:text-[1rem] mb-10 w-[100vw] tablet:w-[60vw] desktop:w-[100vw] mx-4 flex flex-col desktop:flex-row justify-center items-center"
      >
        <div className="slideshow-container mx-10 mb-4 w-[75vw] desktop:hidden">
          <div className="mySlides fade">
            <div className="hidden tablet:block numbertext">1 / 6</div>
            <img
              className="w-[100%]"
              src="./media/kt1.jpeg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
          <div className="mySlides fade">
            <div className="hidden tablet:block numbertext">2 / 6</div>
            <img
              className="w-[100%]"
              src="./media/tt1.jpg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
          <div className="mySlides fade">
            <div className="hidden tablet:block numbertext">3 / 6</div>
            <img
              className="w-[100%]"
              src="./media/kt3.jpg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
          <div className="mySlides fade">
            <div className="hidden tablet:block numbertext">4 / 6</div>
            <img
              className="w-[100%]"
              src="./media/zd1.jpg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
          <div className="mySlides fade">
            <div className="hidden tablet:block numbertext">5 / 6</div>
            <img
              className="w-[100%]"
              src="./media/kt2.jpg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
          <div className="mySlides fade">
            <div className="hidden tablet:block numbertext">6 / 6</div>
            <img
              className="w-[100%]"
              src="./media/tt2.jpg"
              alt="Kolten Taylor & The Truck Toppers"
            />
          </div>
        </div>
        <p
          className="w-[100vw] text-center desktop:w-[45vw] desktop:h-auto p-4 mx-10 desktop:p-2 desktop:mx-auto"
        >
          <span
            className="font-fredericka text-[1.5rem] tablet:text-[2rem] m-2 underline"
            >About Kolten</span
          ><br />
          Kolten Taylor brings a combination of country and rock to his writing.
          Rooted in outlaw country, Taylor draws inspiration from his
          experiences as a blue-collar worker, observations of the world around
          him, and country living. While attending college in Champaign-Urbana,
          Taylor picked up the guitar and began writing with his close friends
          and family. This evolved into a fully-fledged recording and regional
          act. His two latest singles are the first to feature the full band
          including Nashville guitarist Zach Dable. “Neon Glow” and “Good Time
          Bad” mark the start of this duo&apos;s dynamic writing and production
          partnership. Taylor has had the privilege to open for artists like
          Noah Hicks, Jason Boland, Alex Williams, and Huser Brother Band.
          Taylor&apos;s authentic and heartfelt lyrics resonate deeply with
          listeners, capturing audiences with relatability and the band&apos;s raw
          performances.
        </p>
        <div className="hidden desktop:block video-container mb-4">
          <iframe
            className="w-[45vw] h-[33vh]"
            src="https://www.youtube.com/embed/LMHlhLwYuIY?si=eS_dIZR-UcS1WS3g?autoplay=1&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          >
            </iframe>
        </div>
      </section>
      <section
        id="shows"
        className="text-center text-[0.8rem] tablet:text-[1rem] mb-10 w-[100vw] tablet:w-[85vw] mx-4 flex flex-col desktop:flex-row justify-center items-center desktop:mb-20"
      >
        <div className="video-container desktop:hidden mx-10 mb-4">
          <iframe
            className="w-[85vw]"
            src="https://www.youtube.com/embed/LMHlhLwYuIY?si=eS_dIZR-UcS1WS3g?autoplay=1&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="m-2">
          <span
            className="text-center text-[1.2rem] tablet:text-[2rem] m-2 underline"
            >Upcoming Shows</span
          >
          <ul className="text-[1rem] grid grid-cols-1 w-[75vw] desktop:w-[35vw]">
            <li
              className="calEvent bg-white border-2 border-red 600 rounded-md text-black m-2 drop-shadow-[0_1px_5px_rgba(255,255,255,0.7)] shadow-[2px_0px_5px_-0px_rgba(255,255,255,1)]"
            >
              Nov 15 @ 7:30PM<br />Winston&apos;s Old Bank<br />Sidney, IL
            </li>
            <li
              className="calEvent bg-white border-2 border-red 600 rounded-md text-black m-2 drop-shadow-[0_1px_5px_rgba(255,255,255,0.7)] shadow-[2px_0px_5px_-0px_rgba(255,255,255,1)]"
            >
              Dec 21 @ 8PM<br />Sliderz<br />Decatur, IL
            </li>
            <li
              className="calEvent bg-white border-2 border-red 600 rounded-md text-black m-2 drop-shadow-[0_1px_5px_rgba(255,255,255,0.7)] shadow-[2px_0px_5px_-0px_rgba(255,255,255,1)]"
            >
              Jan 11 @ 8:30PM<br />Exit 210 Saloon<br />Oakwood, IL
            </li>
          </ul>
        </div>
        <div
          id="contact"
          className="text-center text-[0.8rem] tablet:text-[1rem] m-2 mb-20 w-fit desktop:w-[35vw] desktop:self-start"
        >
          <span
            className="text-center text-[1.2rem] tablet:text-[2rem] m-2 underline"
            >Booking & Contact</span
          ><br />
          Zach Dable: <a href="tel:217-474-5617">217-474-5617</a><br />
          Perry Dable: <a href="tel:217-497-5393">217-497-5393</a><br />
          Email: <a href="mailto:kttoppers22@gmail.com">kttoppers22@gmail.com</a
          ><br />
          <br />
          <br />
          <a
            aria-label="{null}"
            href="https://drive.google.com/drive/folders/1woERfjqQLwK0p7E-75Wq5AGOFlw71Enm?usp=share_link"
            title="Download Stageplot"
            target="_blank"
            rel="noreferrer"
            ><span className="font-fredericka text-lg hover:text-[#d6445a]"
              ><i
                className="text-md m-2 fa-regular fa-file-pdf hover:text-[#d6445a]"
              ></i
              >Download Stageplot</span
            ></a
          >
        </div>
      </section>
    </main>
    )
}