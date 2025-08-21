import Button from "./Button";

function ImageClipBox({ src, clipClass, alt }) {
  return (
    <div className={clipClass}>
      <img
        src={src}
        alt={alt || "decorative image"}
        loading="lazy"
        className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px] h-auto object-contain"
      />
    </div>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="my-20 min-h-screen w-full px-6 sm:px-10"
    >
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">

        {/* Bloc gauche */}
        <div
          className="absolute -left-10 top-0 hidden sm:block md:-left-5 lg:left-20"
        >
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/contact-1.webp"
            alt="abstract shape 1"
          />

          <ImageClipBox
            clipClass="contact-clip-path-2 translate-y-32 lg:translate-y-40"
            src="img/contact-2.webp"
            alt="abstract shape 2"
          />
        </div>

        {/* Bloc droit */}
        <div
          className="absolute left-1/2 top-10 w-48 -translate-x-1/2 sm:top-1/3 md:left-auto md:right-10 md:translate-x-0 lg:top-20 lg:w-72"
        >
          <ImageClipBox
            clipClass="absolute md:scale-110"
            src="img/swordman-partial.webp"
            alt="swordman silhouette"
          />

          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-110"
            src="img/swordman.webp"
            alt="swordman character"
          />
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="font-general text-xs uppercase tracking-widest">
            Join Zentry
          </p>

          <h2 className="special-font mt-10 w-full font-zentry text-4xl leading-[0.9] sm:text-5xl md:text-6xl lg:text-[6rem]">
            Let&apos;s <span className="font-bold">b</span>uild the <br />
            new era of <br />
            g<span className="font-bold">a</span>ming t
            <span className="font-bold">o</span>gether
          </h2>

          <Button
            title="Contact Us"
            aria-label="Contact us via form"
            containerClass="mt-10 bg-blue-50 text-black"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
