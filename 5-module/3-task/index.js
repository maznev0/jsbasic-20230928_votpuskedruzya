function initCarousel() {
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let carousel = document.querySelector('.carousel__inner');
  let carouselLength = document.querySelectorAll('.carousel__slide').length;
  let counter = 0; 

  arrowLeft.style.display = 'none';

  arrowLeft.addEventListener('click', () => {
    arrowRight.style.display = '';
    
    counter--;
    carousel.style.transform = `translateX(${-carousel.offsetWidth * counter}px)`;
    
    if (counter == 0) {
      arrowLeft.style.display = 'none';
    }
  });

  arrowRight.addEventListener('click', () => {
    arrowLeft.style.display = '';
    
    counter++;
    carousel.style.transform = `translateX(${-carousel.offsetWidth * counter}px)`;
    
    if (counter == carouselLength - 1) {
    //or (carousel.children.length - 1) * -carousel.offsetWidth
      arrowRight.style.display = 'none';
    }
  });
}
