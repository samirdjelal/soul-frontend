import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";

const logos = [
  { src: "/home/partners/kzaad.png", alt: "Kzaad" },
  { src: "/home/partners/payd.png", alt: "Payd" },
  { src: "/home/partners/click2secure.png", alt: "Click2Secure" },
];

const PartnersSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.5, spacing: 12 },
      },
    },
  });

  // Autoplay loop
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (instanceRef.current) {
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, 2500); // 2.5s delay
    }
    return () => clearInterval(timer.current);
  }, [instanceRef]);

  return (
    <section style={{ padding: "3rem 1rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "2rem" }}>
        Our Partners
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {logos.map((logo, index) => (
          <div className="keen-slider__slide" key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                maxHeight: 80,
                maxWidth: 180,
                margin: "0 auto",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
