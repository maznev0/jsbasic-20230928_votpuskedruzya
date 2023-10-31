function initCarousel() {
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let carousel = document.querySelector('.carousel__inner');
  let carouselLength = document.querySelectorAll('.carousel__slide').length;
  let width = 0; 

  arrowLeft.style.display = 'none';

  arrowLeft.addEventListener('click', () => {
    arrowRight.style.display = '';

    width += carousel.offsetWidth;
    carousel.style.transform = `translateX(${width}px)`;
    
    if (width == 0) {
      arrowLeft.style.display = 'none';
    }
  });

  arrowRight.addEventListener('click', () => {
    arrowLeft.style.display = '';

    width -= carousel.offsetWidth;
    carousel.style.transform = `translateX(${width}px)`;
    
    if (width == (carouselLength - 1) * -carousel.offsetWidth) {
    //or (carousel.children.length - 1) * -carousel.offsetWidth
      arrowRight.style.display = 'none';
    }
  });
}
