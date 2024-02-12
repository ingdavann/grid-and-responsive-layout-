document.querySelectorAll(".grid-container img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});
document.querySelector(".btn-close").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
