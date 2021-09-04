const images = ["01.jpeg", "02.jpeg", "03.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#background-img");

bgImage.src = `/img/${chosenImage}`;
