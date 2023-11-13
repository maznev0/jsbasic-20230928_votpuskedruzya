import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.querySelector('.container');;
    this.render();
    this.eventArrows();
    this.eventPlus();
  }

  render() {
    this.elem.append(createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
        </div>
      </div>
    `));

    let carouselInner = document.querySelector('.carousel__inner');
    for (let slide of this.slides) {
      carouselInner.append(createElement(`
        <div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `));
    }
  }

  eventArrows() {
    const arrowLeft = document.querySelector('.carousel__arrow_left');
    const arrowRight = document.querySelector('.carousel__arrow_right');
    const carousel = document.querySelector('.carousel__inner');
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
      
      if (counter == this.slides.length - 1) {
        arrowRight.style.display = 'none';
      }
    });
  }

  eventPlus() {
    const plus = document.querySelector('.carousel__button');
    for (let slide of this.slides) {
      plus.addEventListener('click', () => {
        this.elem.dispatchEvent(new CustomEvent("product-add", { 
          detail: slide.id, 
          bubbles: true
        }))
      });
    }
  }

}
