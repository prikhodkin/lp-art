import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ "item" ]
  connect() {
    this.toggle();
  }

  toggle() {
    this.itemTargets.forEach((item) => {
      item.addEventListener(`click`, () => {
        item.classList.toggle(`faq__item--active`);
      })
    })
  }
}
