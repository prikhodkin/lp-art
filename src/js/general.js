import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import IMask from 'imask';
import NativejsSelect from 'nativejs-select';
import {Popup, PopupThanks } from "%modules%/popup/popup";
const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
import $ from "jquery";
global.jQuery = $;

const popups = document.querySelectorAll(`.popup`);
const thx = document.querySelector(`.popup--thx`);
const menuOpenButton = document.querySelector(`.menu__button--open`);
const menuCloseButton = document.querySelector(`.menu__button--close`);
const menu = document.querySelector(`.menu__wrapper`);
const overlay = document.querySelector(`.overlay`);
const phones = document.querySelectorAll(`.field__input--phone`);
const phoneOption = {
  mask: '{+7} 000-000-00-00',
  lazy: false
}

// Инициализация попапов
popups.forEach(function (popup) {
  new Popup(popup);
});

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

const languageArrow = document.querySelector(`.language__arrow`);

languageArrow.addEventListener(`click`, () => {
  languageArrow.parentNode.classList.toggle(`language__wrapper--active`);
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Ajax отправка формы
$(".form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "vendor/mail.php", //Change
    data: th.serialize()
  }).done(function() {
    new PopupThanks(thx).openPopup();
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});
