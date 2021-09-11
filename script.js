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
let countSlider5 = 0;


slides5cont.style.height = `${slideHeight5 * 2}px`;

slider5ArrowUp.addEventListener('click', slideUp5);
slider5ArrowDown.addEventListener('click', slideDown5);


function slideDown5(func) {
    countSlider5++
    if (countSlider5 >= slides5.length) {
      countSlider5 = 0;
    }
    for (slide of slides5) {
      slide.style.transform = `translateY(-${slideHeight5 * countSlider5}px)`;
    }
}

function slideUp5(func) {
  countSlider5--
  if (countSlider5 < 0) {
    countSlider5 = slides5.length - 1;
  }
  for (slide of slides5) {
    slide.style.transform = `translateY(-${slideHeight5 * countSlider5}px)`;
  }
}

//slider block6
const slides6 = document.querySelectorAll('.block6-slider__icon');
const slide6Line = document.querySelector('.block6-slider__line');
const slide6 = document.querySelector('.block6-slider__icon');
let slide6Main = document.querySelector('.block6-slider__icon_main');
const slide6Imgs = document.querySelectorAll('.block6-slider__img');
const slide6ImgMain = document.querySelector('.block6-slider__img_main');
const slider6ArrowLeft = document.querySelector('.block6-slider__arrow-left');
const slider6ArrowRight = document.querySelector('.block6-slider__arrow-right');
const sliderArticleName = document.querySelector('.block6-slider__name');
const sliderArticleInfo = document.querySelector('.block6-slider__info');


let countSlider6 = 1;
let marginSlide6 = parseInt((getComputedStyle(slide6).marginRight).slice(0, -2)); 
let moveWidth6 = slide6Main.offsetWidth - marginSlide6 / 2;
let currentMember = slide6Main.id;

let team = {

  lolita: {
    name: 'Lolita',
    info: 'Considered an invitation do introduced sufficient understood instrument it. Of decisively friendship in as collecting at. No affixed be husband ye females brother garrets proceed. Least child who seven happy yet balls young. Bore less when had and john shed hope.',
  },

  cristian: {
    name: 'Cristian',
    info: 'Is we miles ready he might going. Own books built put civil fully blind fanny. Projection appearance at of admiration no. As he totally cousins warrant besides ashamed do. Therefore by applauded acuteness supported affection it.',
  },

  maya: {
    name: 'Maya',
    info: 'Cause dried no solid no an small so still widen. Ten weather evident smiling bed against she examine its. Rendered far opinions two yet moderate sex striking. Sufficient motionless compliment by stimulated assistance at.',
  },

  ivan: {
    name: 'Ivan',
    info: 'On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter. In me he at collecting affronting principles apartments. Has visitor law attacks pretend you calling own excited painted.',
  },

  kattie: {
    name: 'Kattie',
    info: 'Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two. His six are entreaties instrument acceptance unsatiable her.',
  },

  karl: {
    name: 'Karl',
    info: 'In post mean shot ye. There out her child sir his lived. Design at uneasy me season of branch on praise esteem. Abilities discourse believing consisted remaining to no. Mistaken no me denoting dashwood as screened.',
  }
}

slider6ArrowLeft.addEventListener('click', prevSlide);
slider6ArrowRight.addEventListener('click', nextSlide);
slider6IconAddListener();
setMemberArticle(currentMember);

function nextSlide() {
  countSlider6++
  if (countSlider6 > slides6.length - 1) {
    countSlider6--
    return;
  }
  slider6IconRemoveListener();
  for (slide of slides6) {
    slide.style.transform = `translateX(-${moveWidth6 * (countSlider6 - 1)}px)`;
    slide.classList.remove('block6-slider__icon_main')
  }
  slides6[countSlider6].classList.add('block6-slider__icon_main');
  for (img of slide6Imgs) {
    img.classList.remove('block6-slider__img_main')
  }
  slide6Imgs[countSlider6].classList.add('block6-slider__img_main');
  slide6Main = document.querySelector('.block6-slider__icon_main');
  currentMember = slide6Main.id;
  setMemberArticle(currentMember);
  slider6IconAddListener();

}

function prevSlide() {
  countSlider6--
  if (countSlider6 < 0) {
    countSlider6 = 0;
    return;
  }
  slider6IconRemoveListener();

  for (slide of slides6) {

    if (countSlider6 == 0) {
      slide.style.transform = `translateX(${moveWidth6 * (countSlider6 + 1)}px)`;
      slide.classList.remove('block6-slider__icon_main')
    }

    slide.style.transform = `translateX(-${moveWidth6 * (countSlider6 - 1)}px)`;
    slide.classList.remove('block6-slider__icon_main')
  }
  slides6[countSlider6].classList.add('block6-slider__icon_main');
  for (img of slide6Imgs) {
    img.classList.remove('block6-slider__img_main')
  }
  slide6Imgs[countSlider6].classList.add('block6-slider__img_main');
  slide6Main = document.querySelector('.block6-slider__icon_main');
  currentMember = slide6Main.id;
  setMemberArticle(currentMember);
  slider6IconAddListener();

}

function slider6IconAddListener() {
  if (slide6Main.previousElementSibling) {slide6Main.previousElementSibling.addEventListener('click', prevSlide);}
  if (slide6Main.nextElementSibling) {slide6Main.nextElementSibling.addEventListener('click', nextSlide);}
}

function slider6IconRemoveListener() {
  if (slide6Main.previousElementSibling) {slide6Main.previousElementSibling.removeEventListener('click', prevSlide);}
  if (slide6Main.nextElementSibling) {slide6Main.nextElementSibling.removeEventListener('click', nextSlide);}
}

function setMemberArticle (memberId) {
  sliderArticleName.innerText = team[memberId]['name'];
  sliderArticleInfo.innerText = team[memberId]['info'];
}

console.log('landing page:\n-BEM\n-responsive\n-vertical slider\n-slider with extended capabilities (you can click on portraits)\n-menu-burger\n-modal window on signup button')