import Swiper from 'swiper/bundle';
import {Controller} from 'stimulus';

export default class extends Controller {
  static targets = [ `container`, `prev`, `next` ]
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
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }

}
