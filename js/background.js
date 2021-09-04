const images = ["01.png", "02.png", "03.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#background-img");

bgImage.src = `../${chosenImage}`;
