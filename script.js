const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');
const slidesCount = rightSlider.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlide = 0;
leftSlider.style.top = `-${(slidesCount - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// Scroll through the mouse wheel
container.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    changeSlide('down');
  } else if (event.deltaY < 0) {
    changeSlide('up');
  }
});

function changeSlide(direction) {
  const sliderHeight = container.clientHeight;

  if (direction === 'up') {
    activeSlide++;
    if (activeSlide === slidesCount) activeSlide = 0;
  } else if (direction === 'down') {
    activeSlide--;
    if (activeSlide < 0) activeSlide = slidesCount - 1;
  }

  leftSlider.style.transform = `translateY(${activeSlide * sliderHeight}px)`;
  rightSlider.style.transform = `translateY(-${activeSlide * sliderHeight}px)`;
}