import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";

export default function HomeCarousel() {
  const containerRef = useRef(null);
  useEffect(() => {
    let swiperInstance = null;
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href =
      "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css";
    document.head.appendChild(cssLink);

    // Load the ESM browser build of Swiper from CDN and initialize
    const esmUrl =
      "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";
    let cancelled = false;

    import(esmUrl)
      .then((mod) => {
        if (cancelled) return;
        const Swiper = mod.default || mod.Swiper || mod;
        swiperInstance = new Swiper(containerRef.current, {
          loop: true,
          pagination: { el: ".swiper-pagination", clickable: true },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error("Failed to load Swiper:", err);
      });

    return () => {
      cancelled = true;
      if (swiperInstance && swiperInstance.destroy)
        swiperInstance.destroy(true, true);
      if (cssLink && cssLink.parentNode)
        cssLink.parentNode.removeChild(cssLink);
    };
  }, []);

  return (
    <div id="homeSwiper" class="swiper" ref={containerRef}>
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  );
}
