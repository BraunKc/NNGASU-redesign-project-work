const mainBgColor = '#24293b';
const secondColor = '#393e50';
const accentColor = '#fdfff5';

const transparency = 0;
const secondColorT = `rgba(51, 51, 51, ${transparency})`;

// HOME
const homeButton = document.querySelector('#homeButton');
let clicks = 0;
let isItUse = false;
const homeEasing = 'easeInOutQuart';

homeButton.addEventListener('click', function() {
  if (isItUse == false) {
    clicks++;
  }

  if (clicks <= 5 && window.innerWidth >= 1920 && isItUse == false) {
    isItUse = true;
    anime({
      targets: '#firstNotification',
      easing: homeEasing,
      translateY: [
        { value: 95, duration: 1000 },
        { value: 0, duration: 1000, delay: 1500},
      ],
      complete: function() {
        isItUse = false;
      }
    });
  } else if (clicks <= 5 && window.innerWidth < 1920 && isItUse == false) {
    isItUse = true;
    anime({
      targets: '#firstNotification',
      easing: homeEasing,
      translateX: [
      { value: 270, duration: 1000 },
      { value: 0, duration: 1000, delay: 1500},
    ],
    complete: function() {
      isItUse = false;
    }
    });
  } else if (clicks < 10 && clicks > 5 && window.innerWidth >= 1920 && isItUse == false) {
    isItUse = true;
    anime({
      targets: '#secondNotification',
      easing: homeEasing,
      translateY: [
        { value: 95, duration: 1000 },
        { value: 0, duration: 1000, delay: 1500},
      ],
      complete: function() {
        isItUse = false;
      }
    });
  } else if (clicks < 10 && clicks > 5 && window.innerWidth < 1920 && isItUse == false) {
    isItUse = true;
    anime({
      targets: '#secondNotification',
      easing: homeEasing,
      translateX: [
        { value: 270, duration: 1000 },
        { value: 0, duration: 1000, delay: 1500},
      ],
      complete: function() {
        isItUse = false;
      }
    });
  } else if (clicks >= 10 && clicks < 15 && window.innerWidth >= 1920 && isItUse == false) {
    isItUse = true;
    anime({
      targets: '#thirdNotification',
      easing: homeEasing,
      translateY: [
        { value: 95, duration: 1000 },
        { value: 0, duration: 1000, delay: 1500},
      ],
      complete: function() {
        isItUse = false;
      }
    });
  } else if (clicks >= 10 && clicks < 15 && window.innerWidth < 1920 && isItUse == false) {
    isItUse = true;
    anime({
      targets: '#thirdNotification',
      easing: homeEasing,
      translateX: [
      { value: 270, duration: 1000 },
      { value: 0, duration: 1000, delay: 1500},
    ],
    complete: function() {
      isItUse = false;
    }
    });
  } else if (clicks >= 15 && clicks < 20 && window.innerWidth >= 1920 && isItUse == false) {
    isItUse = true;
    anime({
        targets: '#fourthNotification',
        easing: homeEasing,
        duration: 1000,
        translateY: 95,
        color: '#ff0000',
        complete: function() {
            anime({
                targets: '#fourthNotification',
                translateY: [
                  { value: anime.random(90, 100), duration: 50 },
                  { value: anime.random(90, 100), duration: 50 },
                  { value: anime.random(90, 100), duration: 50 },
                  { value: anime.random(90, 100), duration: 50 }
                ],
                translateX: [
                  { value: anime.random(-5, 5), duration: 50 },
                  { value: anime.random(-5, 5), duration: 50 },
                  { value: anime.random(-5, 5), duration: 50 },
                  { value: anime.random(-5, 5), duration: 50 }
                ],
                easing: 'linear',
                loop: 10,
                direction: 'alternate',
                complete: function() {
                  anime({
                      targets: '#fourthNotification',
                      translateY: 0,
                      duration: 1000,
                      easing: homeEasing,
                      color: accentColor,
                      complete: function() {
                          isItUse = false;
                        }
                    })
                  }
              });
          }
      });
} else if (clicks >= 15 && clicks < 20 && window.innerWidth < 1920 && isItUse == false) {
  isItUse = true;
  anime({
      targets: '#fourthNotification',
      easing: homeEasing,
      duration: 1000,
      translateX: 270,
      color: '#ff0000',
      complete: function() {
          anime({
              targets: '#fourthNotification',
              translateY: [
                { value: anime.random(-5, 5), duration: 50 },
                { value: anime.random(-5, 5), duration: 50 },
                { value: anime.random(-5, 5), duration: 50 },
                { value: anime.random(-5, 5), duration: 50 }
              ],
              translateX: [
                { value: anime.random(265, 275), duration: 50 },
                { value: anime.random(265, 275), duration: 50 },
                { value: anime.random(265, 275), duration: 50 },
                { value: anime.random(265, 275), duration: 50 }
              ],
              easing: 'linear',
              loop: 10,
              direction: 'alternate',
              complete: function() {
                anime({
                    targets: '#fourthNotification',
                    translateX: 0,
                    duration: 1000,
                    easing: homeEasing,
                    color: accentColor,
                    complete: function() {
                        isItUse = false;
                      }
                  });
               }
            });
        }
    });
} else if (clicks >= 20 && isItUse == false) {
  isItUse = true;
  document.getElementById('fifthNotification').style.display = 'flex';
  anime({
    targets: '#fifthNotification',
    easing: homeEasing,
    duration: 20000,
    opacity: 100,
    height: '100%',
    width: '100%',
    complete: function() {
      anime({
        targets: '#fifthNotification',
        easing: homeEasing,
        duration: 3500,
        color: '#fff',
        complete: function(){
          document.documentElement.style.display = "none";
        }
      });
    }
  })
} 
});

// MENU
function menuAction(action) {
  if(action == 'on' && isMenuOpen == false || action == 'visible' && isMenuOpen == true) {
    menu.style.display = 'flex';
    anime({
      targets: menu,
      easing: 'easeOutCubic',
      duration: 300,
      opacity: 1,
      translateY: 20
    });
  } else if(action == 'off' && isMenuOpen == true || action == 'hidden' && isMenuOpen == true) {
    anime({
      targets: menu,
      easing: 'easeOutCubic',
      duration: 300,
      opacity: 0,
      translateY: 0,
      complete: function() {
        menu.style.display = 'none';
    }
    });
  }
};
function fullMenu(action) {
  const fullMenu = document.getElementById('fullMenu');
  if(action == 'show') {
    fullMenu.style.visibility = 'visible';
    fullMenu.style.opacity = '1';
  } else {
    fullMenu.style.opacity = '0';
    fullMenu.style.visibility = 'hidden';
  }
}

// NAVBAR
let lastScrollPosition = window.scrollY;
let scrollCount = 0;
let isActive = false; // Переместим isActive снаружи обработчика событий

const navbar = document.querySelector('#navbar');
const social = document.querySelector('#social');
const homeBtn = document.querySelector('#homeButton');

function animationEnd() {
  isActive = false; // Переключаем состояние активности
  scrollCount = 0; // Сбрасываем счетчик
}

window.addEventListener('scroll', () => {
  const animDuration = 500;

  // Вычисляем изменение прокрутки от последней позиции
  const currentScrollPosition = window.scrollY;
  const scrollDelta = currentScrollPosition - lastScrollPosition;

  // Обновляем счетчик прокрутки пикселей и последнюю позицию
  scrollCount += scrollDelta;
  lastScrollPosition = currentScrollPosition;

  // Проверка состояния активности и прокрутки
  if (scrollCount >= 200 && !isActive) {
    isActive = true; // Переключаем состояние активности
    menuAction('hidden');
    anime({
      targets: navbar,
      duration: animDuration,
      easing: 'easeOutExpo',
      translateY: -70,
      complete: animationEnd // Передаем функцию без вызова
    });
    anime({
      targets: social,
      duration: animDuration,
      easing: 'easeOutExpo',
      right: -20,
      top: 50,
      backgroundColor: secondColorT
    });
    anime({
      targets: homeBtn,
      duration: animDuration,
      easing: 'easeOutExpo',
      backgroundColor: secondColorT
    });
  } else if (scrollCount <= -100 && !isActive) {
    isActive = true; // Переключаем состояние активности
    menuAction('visible');
    anime({
      targets: navbar,
      easing: 'easeOutExpo',
      translateY: 0,
      duration: animDuration,
      complete: animationEnd // Передаем функцию без вызова
    });
    anime({
      targets: homeBtn,
      duration: animDuration,
      easing: 'easeOutExpo',
      backgroundColor: secondColor
    });
  }
});

// MENU_BUTTON
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');
const line4 = document.querySelector('#line4');
const menuBtn = document.querySelector('#menuBtn');

const buttonsEasing = 'easeInOutQuad';
let isMenuOpen = false;

menuBtn.addEventListener('click', function menuBtnAnim() {
const animDuration = 200;
  
  if (isMenuOpen == false) {
    isMenuOpen = null;
    anime({
      targets: line1,
      easing: buttonsEasing,
      duration: animDuration,
      translateY: 6
    });
    anime({
      targets: line3,
      easing: buttonsEasing,
      duration: animDuration,
      translateY: -6,
      complete: function() {
        anime({
          targets: [line1, line3],
          duration: 0,
          opacity: 0
        });
        anime({
          targets: line2,
          easing: buttonsEasing,
          duration: animDuration,
          transformOrigin: ['50%', '50%'], // Устанавливаем центр вращения посередине элемента
          rotate: 225
        });
        anime({
          targets: line4,
          easing: buttonsEasing,
          duration: animDuration,
          transformOrigin: ['50%', '50%'],
          rotate: 135,
          complete: function() {isMenuOpen = true}
        });
      }
    });
  } else if(isMenuOpen == true) {
    isMenuOpen = null;
    anime({
      targets: line4,
      easing: buttonsEasing,
      duration: animDuration,
      transformOrigin: ['50%', '50%'],
      rotate: 0
    });
    anime({
      targets: line2,
      easing: buttonsEasing,
      duration: animDuration,
      transformOrigin: ['50%', '50%'], // Устанавливаем центр вращения посередине элемента
      rotate: 0,
      complete: function() {
        anime({
          targets: [line1, line3],
          duration: 0,
          opacity: 100,
        });
        anime({
          targets: line3,
          easing: buttonsEasing,
          duration: animDuration,
          translateY: 0
        });
        anime({
          targets: line1,
          easing: buttonsEasing,
          duration: animDuration,
          translateY: 0,
          complete: function() {isMenuOpen = false;}
        });
      }
    });
  };
});
