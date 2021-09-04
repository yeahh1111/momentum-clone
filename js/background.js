const images = [
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgV7ma%2FbtqACPJ6BWu%2FhEYxW2SwvlykokkUXp3ns0%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbUNFlB%2FbtqACOEoR8f%2FaXKpiyD7FVRtIN4Ok31PPk%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbxHjgs%2FbtqABrczePG%2FsEVQR6LAIC62zm2okDD761%2Fimg.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#background-img");

bgImage.src = `${chosenImage}`;
