//burger
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
})

//popup (включает в себя возможность делать попап в попапе)
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 400; //время равное указанному в свойстве transition для элемента

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener('click', function(e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    })
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i];
    el.addEventListener('click', function(e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    })
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function(e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    })
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  //убираем баг когда при открытии/закрытии попапа контент чуть смещается, добавляем паддинг равный ширине скролла боди
  const lockPaddingValue = window.innerWidth - document.querySelector('.modal-wrap').offsetWidth + 'px';
  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function() {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
    setTimeout(function() {
      if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
          const el = lockPadding[i];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
    }, timeout)

    unlock = false;
    setTimeout(function() {
      unlock = true;
    }, timeout)
}

document.addEventListener('keydown', function(e) {
  if (e.code == 'Escape') {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
})

//slider block5
const slides5 = document.querySelectorAll('.block5-slide');
const slides5cont = document.querySelector('.block5-slides');
const slide5 = document.querySelector('.block5-slide');
const slider5ArrowUp = document.querySelector('.block5-slider__arrow-up');
const slider5ArrowDown = document.querySelector('.block5-slider__arrow-down');

let slideHeight5 = slide5.offsetHeight;
let slideMoveDistance = 0;

let countSlider5 = 0;


slides5cont.style.height = `${slideHeight5 * 2}px`;


slider5ArrowUp.addEventListener('click', slideUp5);
slider5ArrowDown.addEventListener('click', slideDown5);



function slideUp5(func) {
    countSlider5++
    if (countSlider5 >= slides5.length) {
      countSlider5 = 0;
    }
    for (slide of slides5) {
      slide.style.transform = `translateY(-${slideHeight5 * countSlider5}px)`;
    }
}

function slideDown5(func) {
  countSlider5--
  if (countSlider5 < 0) {
    countSlider5 = slides5.length - 1;
  }
  for (slide of slides5) {
    slide.style.transform = `translateY(-${slideHeight5 * countSlider5}px)`;
  }
}

//
