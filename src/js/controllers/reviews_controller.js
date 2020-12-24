import Swiper from 'swiper/bundle';
import {Controller} from 'stimulus';

export default class extends Controller {
  static targets = [ `container`, `prev`, `next`, `play`, `slide` ]

  connect() {
    this.init();
  }

  init() {
    const swiper = new Swiper(this.containerTarget, {
      effect: "fade",
      lazy: true,
      autoHeight: true,
      navigation: {
        nextEl: this.nextTarget,
        prevEl: this.prevTarget,
      },
    });
  }

}
