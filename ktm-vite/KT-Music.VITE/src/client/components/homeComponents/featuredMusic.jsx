export default function FeaturedMusic() {
  return (
    <section className="flex flex-col items-center justify-center mb-4">
      <a
        aria-label="{null}"
        href="https://snd.click/2bbq"
        title="Unwind"
        target="_blank"
        rel="noreferrer"
      >
        <button
          id="showDesktopBanner"
          className="border-2 bg-black/50 hover:bg-white/75 text-white rounded-lg p-1 px-2 m-2 shadow-[-1px_1px_23px_0_rgba(255,255,255,1)] font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-black"
        >
          &quot;Unwind&quot;
        </button>
      </a>
      <div>
        <a
          aria-label="{null}"
          href="https://snd.click/gy6w"
          title="Good Time Bad"
          target="_blank"
          rel="noreferrer"
        >
          <button className="border-2 bg-[#f3b477]/75 text-white rounded-lg p-1 m-2 shadow-[-5px_5px_23px_0_rgba(217,124,37,1)] font-fredericka hover:border-[rgba(46,30,15,1)] hover:text-[rgba(46,30,15,1)]">
            &quot;Good Time Bad&quot;
          </button>
        </a>
        <a
          aria-label="{null}"
          href="https://songwhip.com/koltentaylor/neon-glow"
          title="Neon Glow"
          target="_blank"
          rel="noreferrer"
        >
          <button className="border-2 bg-[#653764]/80 text-white rounded-lg p-1 m-2 shadow-[5px_5px_24px_-0px_rgba(235,110,232,1)] font-fredericka hover:border-[rgba(235,110,232,1)] hover:text-[rgba(235,110,232,1)]">
            &quot;Neon Glow&quot;
          </button>
        </a>
      </div>
    </section>
  );
}
