const buyButtons = document.querySelectorAll(".buy-button");
const cart = document.querySelector(".shopping-cart ul");
const payButton = document.querySelector("#pay-button");

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const picture = button.parentNode;
    const pictureSrc = picture.querySelector("img").src;
    const pictureAlt = picture.querySelector("img").alt;

    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");

    img.src = pictureSrc;
    img.alt = pictureAlt;

    span.innerText = pictureAlt;

    li.appendChild(img);
    li.appendChild(span);

    cart.appendChild(li);

    // Add a "hidden" class to the picture element to hide it from view
    picture.classList.add("hidden");
  });
});

payButton.addEventListener("click", () => {
  cart.innerHTML = "";
  alert("Thank you for your purchase!");

  // Loop through all picture elements and remove the "hidden" class
  const pictures = document.querySelectorAll(".picture");
  pictures.forEach((picture) => {
    picture.classList.remove("hidden");
  });
});