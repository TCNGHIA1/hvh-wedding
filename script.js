const weddingDateText = "04 / 06 / 2024";
const slidesData = [
  {
    imageUrl:
      "image/slide/Default_bride_and_groom_hug_blur_around_big_tree_0.jpg",
    title: "Chúng tôi chuẩn bị cưới!",
    names: ["Huy Hoàng", "Huy Hoàng"],
    weddingDate: weddingDateText,
  },
  {
    imageUrl:
      "image/slide/Default_bride_and_groom_hug_blur_around_big_tree_1.jpg",
    title: "Chúng tôi chuẩn bị cưới!",
    names: ["Huy Hoàng", "Huy Hoàng"],
    weddingDate: weddingDateText,
  },
  {
    imageUrl:
      "image/slide/Default_bride_and_groom_hug_blur_around_big_tree_2.jpg",
    title: "Chúng tôi chuẩn bị cưới!",
    names: ["Huy Hoàng", "Huy Hoàng"],
    weddingDate: weddingDateText,
  },
  // Add data for other slides here (following the same format)
  {
    imageUrl:
      "image/slide/Default_bride_and_groom_hug_blur_around_big_tree_3.jpg",
    title: "Chúng tôi chuẩn bị cưới!",
    names: ["Huy Hoàng", "Huy Hoàng"],
    weddingDate: weddingDateText,
  },
];

function createSlide(slideData) {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  slide.style.backgroundImage = `url(${slideData.imageUrl})`;

  const container = document.createElement("div");
  container.classList.add("container");

  const row = document.createElement("div");
  row.classList.add("row", "align-items-center", "justify-content-center");

  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const title = document.createElement("div");
  title.classList.add("title");

  const titleSpan1 = document.createElement("span");
  const titleText = document.createElement("p");
  titleText.textContent = slideData.title;
  const titleSpan2 = document.createElement("span");

  title.appendChild(titleSpan1);
  title.appendChild(titleText);
  title.appendChild(titleSpan2);

  const namesList = document.createElement("ul");
  namesList.classList.add("names");

  slideData.names.forEach((name) => {
    const nameItem = document.createElement("li");
    nameItem.textContent = name;
    namesList.appendChild(nameItem);
  });

  const heart = document.createElement("li");
  heart.classList.add("heart");
  heart.style.position = "relative";
  namesList.insertBefore(heart, namesList.children[1]);

  const weddingDate = document.createElement("h3");
  weddingDate.classList.add("wedding-date");
  weddingDate.textContent = weddingDateText;

  homeContent.appendChild(title);
  homeContent.appendChild(namesList);
  homeContent.appendChild(weddingDate);

  row.appendChild(homeContent);
  container.appendChild(row);
  slide.appendChild(container);

  return slide;
}

const slideContainer = document.querySelector("#home"); // Replace with your container class

slidesData.forEach((slideData) => {
  const slide = createSlide(slideData);
  slideContainer.appendChild(slide);
});

const firstSlide = slideContainer.querySelector(".slide");
firstSlide.classList.add("active");

function createHearts(number) {
  const heartsContainer = document.querySelector(".loader");

  for (let i = 0; i < number; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heartsContainer.appendChild(heart);

    const randomX =
      Math.random() * (heartsContainer.offsetWidth - heart.offsetWidth - 10);
    const randomY =
      Math.random() * (heartsContainer.offsetHeight - heart.offsetHeight - 10);
    heart.style.left = `${randomX}px`;
    heart.style.top = `${randomY}px`;
  }
}
if (document.querySelector(".loader") != null) {
  createHearts(20);

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
      loader.parentNode.removeChild(loader);
    });
  });
}

window.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.querySelectorAll(".slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }
});
