import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import IMask from 'imask';
import NativejsSelect from 'nativejs-select';
const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

const menuOpenButton = document.querySelector(`.menu__button--open`);
const menuCloseButton = document.querySelector(`.menu__button--close`);
const menu = document.querySelector(`.menu__wrapper`);
const overlay = document.querySelector(`.overlay`);
const phones = document.querySelectorAll(`.field__input--phone`);
const phoneOption = {
  mask: '{+7} 000-000-00-00',
  lazy: false
}

phones.forEach((item) => {
  const mask = IMask(item, phoneOption);
})

menuOpenButton.addEventListener(`click`, () => {
  menu.classList.add(`menu__wrapper--active`);
  overlay.classList.add(`overlay--active`);
})

menuCloseButton.addEventListener(`click`, () => {
  menu.classList.remove(`menu__wrapper--active`);
  overlay.classList.remove(`overlay--active`);
})

overlay.addEventListener(`click`, () => {
  overlay.classList.remove(`overlay--active`);
  menu.classList.remove(`menu__wrapper--active`);
})

new NativejsSelect({
  selector: '.select__input'
});
