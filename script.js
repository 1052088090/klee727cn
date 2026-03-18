const navLinks = Array.from(document.querySelectorAll(".nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === id);
      });
    });
  },
  {
    rootMargin: "-35% 0px -45% 0px",
    threshold: 0.1,
  },
);

sections.forEach((section) => observer.observe(section));

const sparkValue = document.querySelector("#spark-value");
if (sparkValue) {
  const start = 72;
  const end = 87;
  const duration = 1000;
  const begin = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - begin) / duration, 1);
    const value = Math.round(start + (end - start) * progress);
    sparkValue.textContent = `${value}%`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
}
