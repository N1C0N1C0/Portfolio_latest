// Headerにて、ページをスクロールする時、ダークのスタイルが適用する。
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  };
});

// Homeにて、ページをスクロールすると、徐々にフェードアウトさせるようにする。
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrowボタンの制御を調整する。
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.display = 'block';
  } else {
    arrowUp.style.display = 'none';
  }
});

// Navbar トグルボタンクリック処理
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navbar メニュークリックする時、メニューを自動的に閉じる
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
})