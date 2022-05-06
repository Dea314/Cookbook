const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const rightButton = document.querySelector(".right");
const leftButton = document.querySelector(".left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// console.dir(slideWidth);

// Arrange slides

// slides[0].style.left = slideWidth * 0 +'px';
// slides[1].style.left = slideWidth * 1 +'px';
// slides[2].style.left = slideWidth * 2 +'px';
// slides[3].style.left = slideWidth * 3 +'px';

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

// Move to target slide

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (slides, leftButton, rightButton, targetIndex) => {
  if (targetIndex === 0) {
    leftButton.classList.add("is-hidden");
    rightButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    leftButton.classList.remove("is-hidden");
    rightButton.classList.add("is-hidden");
  } else {
    leftButton.classList.remove("is-hidden");
    rightButton.classList.remove("is-hidden");
  }
};

// Move slides to the right when clicked

rightButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  //   console.dir(currentSlide);
  const nextSlide = currentSlide.nextElementSibling;
  //   const amountToMove = nextSlide.style.left;

  //   track.style.transform = `translateX(-${amountToMove})`;
  //   currentSlide.classList.remove("current-slide");
  //   nextSlide.classList.add("current-slide");
  moveToSlide(track, currentSlide, nextSlide);

  //   update dot on button click
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;

  updateDots(currentDot, nextDot);

  //   hide and show right arrow
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  hideShowArrows(slides, leftButton, rightButton, nextIndex);
});

// Move to the left when clicked

leftButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);

  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;

  updateDots(currentDot, prevDot);

  //   hide and show left arrow
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  hideShowArrows(slides, leftButton, rightButton, prevIndex);
});

// Move indicator on click

dotsNav.addEventListener("click", (e) => {
  // Which dot we choose

  const targetDot = e.target.closest("button");

  //   console.dir(e);

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);

  //   currentDot.classList.remove("current-slide");
  //   targetDot.classList.add("current-slide");

  updateDots(currentDot, targetDot);

  //   hide and show arrows

  //   if (targetIndex === 0) {
  //     leftButton.classList.add("is-hidden");
  //     rightButton.classList.remove("is-hidden");
  //   } else if (targetIndex === slides.length - 1) {
  //     leftButton.classList.remove("is-hidden");
  //     rightButton.classList.add("is-hidden");
  //   } else {
  //     leftButton.classList.remove("is-hidden");
  //     rightButton.classList.remove("is-hidden");
  //   }

  hideShowArrows(slides, leftButton, rightButton, targetIndex);
});
