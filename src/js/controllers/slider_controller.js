import Swiper from 'swiper/bundle';
import {Controller} from 'stimulus';

export default class extends Controller {
  static targets = [ `container`, `prev`, `next` ]
  connect() {
    this.init();
  }
  init() {
    const swiper = new Swiper(this.containerTarget, {
      autoplay: true,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }

}
