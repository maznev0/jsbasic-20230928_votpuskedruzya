import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.#render();
    this.#eventArrows();
    this.#eventSelect();
  }

  #render() {
    const ribbonMenu = createElement(`
      <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner">
    <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
      <a href="#" class="ribbon__item" data-id="salads">Salads</a>
      <a href="#" class="ribbon__item" data-id="soups">Soups</a>
      <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
      <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
      <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
      <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
      <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
      <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
    </nav>
     <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    </div>
    `);

    return ribbonMenu;
  }

  #eventArrows() {
    const arrowLeft = this.elem.querySelector(".ribbon__arrow_left");
    const arrowRight = this.elem.querySelector(".ribbon__arrow_right");
    const ribbonInner = this.elem.querySelector(".ribbon__inner");

    arrowLeft.classList.remove("ribbon__arrow_visible");
    arrowRight.classList.add("ribbon__arrow_visible");

    arrowLeft.addEventListener("click", () => {
      ribbonInner.scrollBy(-350, 0);
    });

    arrowRight.addEventListener("click", () => {
      ribbonInner.scrollBy(350, 0);
    });

    ribbonInner.addEventListener("scroll", () => {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if (scrollLeft > 0) {
        arrowLeft.classList.add("ribbon__arrow_visible");
      } else {
        arrowLeft.classList.remove("ribbon__arrow_visible");
      }

      if (scrollRight < 1) {
        arrowRight.classList.remove("ribbon__arrow_visible");
      } else {
        arrowRight.classList.add("ribbon__arrow_visible");
      }
    });
  }

  #eventSelect() {
    const ribbonItems = this.elem.querySelectorAll(".ribbon__item");

    ribbonItems.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        ribbonItems.forEach((el) => el.classList.remove("ribbon__item_active"));

        item.classList.add("ribbon__item_active");

        const category = this.categories[index];
        this.elem.dispatchEvent(
          new CustomEvent("ribbon-select", {
            detail: category.id,
            bubbles: true,
          })
        );
      });
    });
  }
}
