document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".home-hero-slide");
  const container = document.querySelector(".home-hero-bg");
  const secondsPerSlide = parseFloat(container.dataset.slideDuration);

  slides.forEach((video, index) => {
    const startTime = secondsPerSlide * index * 1000;

    setTimeout(() => {
      video.currentTime = 0;
      video.play();

      setInterval(() => {
        video.currentTime = 0;
        video.play();
      }, secondsPerSlide * slides.length * 1000);
    }, startTime);
  });
});