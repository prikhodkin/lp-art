import Swiper from 'swiper/bundle';
import {Controller} from 'stimulus';

export default class extends Controller {
  static targets = [ `container`, `prev`, `next`, `play`, `slide` ]

  connect() {
    this.init();
    this.playTargets.forEach(item => this.play(item))
  }

  play(button) {
    const PAUSE_CLASS = `play--pause`;
    const _this = button;
    const parent = _this.parentNode;
    const video = parent.querySelector(`video`);
    let isActive = true;

    _this.addEventListener(`click`, function () {
      if(isActive) {
        // _this.classList.add(PAUSE_CLASS);
        video.play();
        _this.style.display = 'none';
        isActive = !isActive;
      } else {
        // _this.classList.remove(PAUSE_CLASS);
        video.pause();
        isActive = !isActive;
      }

      video.addEventListener(`ended`, () => {
        isActive = true;
        console.log(isActive)
        _this.style.display = 'flex';
        // _this.classList.remove(PAUSE_CLASS)
      })
    })
  }

  init() {
    const swiper = new Swiper(this.containerTarget, {
      navigation: {
        nextEl: this.nextTarget,
        prevEl: this.prevTarget,
      },
    });
  }

}
