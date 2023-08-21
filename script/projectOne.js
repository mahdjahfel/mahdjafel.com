
const imageElement = document.getElementById("scroll-to-top-image");

imageElement.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


