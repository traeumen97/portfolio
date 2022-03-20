const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");

const slides = document.querySelectorAll(".project-slide");
const indicators = document.querySelectorAll('.indicator');

const totalSlides = 4;
let currentIndex = 1;

nextButton.addEventListener("click", (event) => {
  currentIndex = getNextIndex(currentIndex, totalSlides);

  const previousIndex = getPreviousIndex(currentIndex, totalSlides);
  const nextIndex = getNextIndex(currentIndex, totalSlides);

  slides.forEach((slide, index) => {
    switch(index) {
      case previousIndex:
        slide.classList.remove('current-slide')
        slide.classList.add('previous-slide');
        indicators[index].classList.remove('selected');
        break;
      case currentIndex:
        slide.classList.remove('next-slide');
        slide.classList.add('current-slide');
        indicators[index].classList.add('selected');
        break;
      case nextIndex: 
        slide.classList.remove('hidden-slide')
        slide.classList.add('next-slide');
        break;
      default:
        slide.classList.add('hidden-slide')
        slide.classList.remove('previous-slide', 'current-slide', 'next-slide');
        break;
    }
  });
  
  event.preventDefault();
});

previousButton.addEventListener("click", (event) => {
  currentIndex = getPreviousIndex(currentIndex, totalSlides);

  const previousIndex = getPreviousIndex(currentIndex, totalSlides);
  const nextIndex = getNextIndex(currentIndex, totalSlides);

  slides.forEach((slide, index) => {
    switch(index) {
      case previousIndex:
        slide.classList.remove('hidden-slide')
        slide.classList.add('previous-slide');
        break;
      case currentIndex:
        slide.classList.remove('previous-slide');
        slide.classList.add('current-slide');
        indicators[index].classList.add('selected');
        break;
      case nextIndex: 
        slide.classList.remove('current-slide')
        slide.classList.add('next-slide');
        indicators[index].classList.remove('selected');
        break;
      default:
        slide.classList.add('hidden-slide')
        slide.classList.remove('previous-slide', 'current-slide', 'next-slide');
        break;
    }
  });  

  event.preventDefault();
});

function getPreviousIndex(index, total) {
  return (index + total - 1) % total;
}

function getNextIndex(index, total) {
  return (index + 1) % total;
}
