document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  const navLinks = document.querySelectorAll("nav ul li a");

  // Smooth scrolling to sections
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      const headerHeight = header.offsetHeight;
      const positionToScroll = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: positionToScroll,
        behavior: "smooth",
      });
    });
  });
});
