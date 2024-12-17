import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.#render();
    this.#eventArrows();
    this.#eventPlus();
  }

  #render() {
    let carousel = createElement(`
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
    `);

    let carouselInner = carousel.querySelector(".carousel__inner");
    for (let slide of this.slides) {
      carouselInner.append(
        createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${
            slide.image
          }" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `)
      );
    }

    return carousel;
  }

  #eventArrows() {
    const arrowLeft = this.elem.querySelector(".carousel__arrow_left");
    const arrowRight = this.elem.querySelector(".carousel__arrow_right");
    const carouselInner = this.elem.querySelector(".carousel__inner");
    let counter = 0;

    arrowLeft.style.display = "none";

    arrowLeft.addEventListener("click", () => {
      arrowRight.style.display = "";

      counter--;
      carouselInner.style.transform = `translateX(${
        -carouselInner.offsetWidth * counter
      }px)`;

      if (counter == 0) {
        arrowLeft.style.display = "none";
      }
    });

    arrowRight.addEventListener("click", () => {
      arrowLeft.style.display = "";

      counter++;
      carouselInner.style.transform = `translateX(${
        -carouselInner.offsetWidth * counter
      }px)`;

      if (counter == this.slides.length - 1) {
        arrowRight.style.display = "none";
      }
    });
  }

  #eventPlus() {
    const pluses = this.elem.querySelectorAll(".carousel__button");
    pluses.forEach((plus, index) => {
      plus.addEventListener("click", () => {
        const slide = this.slides[index];
        this.elem.dispatchEvent(
          new CustomEvent("product-add", {
            detail: slide.id,
            bubbles: true,
          })
        );
      });
    });
  }
}
