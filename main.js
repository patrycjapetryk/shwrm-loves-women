import './style.css';

// photos position

const movingPhotos = document.querySelectorAll('.person__photo');
const photosMarginTop = [0, 0, -20, 15, 0, 0, 13, 0, 13, 0, 10];

const photosPosition = () => {
  let scrollTop = window.scrollY;

  movingPhotos.forEach((photo, index) => {
    if (!photo.classList.contains('person__photo--slower')) {
      if (scrollTop < movingPhotos[index].parentElement.offsetTop - window.innerHeight) {
        photo.style.marginTop = photosMarginTop[index] + '%';
      } else if (scrollTop > movingPhotos[index].parentElement.offsetTop - window.innerHeight / 3) {
        photo.style.marginTop = photosMarginTop[index] - 5 + '%';
      } else {
        photo.style.marginTop = photosMarginTop[index] - 2.5 + '%';
      }
    } else {
      if (scrollTop < movingPhotos[index].parentElement.offsetTop - window.innerHeight + 200) {
        photo.style.marginTop = photosMarginTop[index] + '%';
      } else if (
        scrollTop >
        movingPhotos[index].parentElement.offsetTop - window.innerHeight / 3 + 200
      ) {
        photo.style.marginTop = photosMarginTop[index] - 5 + '%';
      } else {
        photo.style.marginTop = photosMarginTop[index] - 2.5 + '%';
      }
    }
  });
};

// names position

const names = document.querySelectorAll('.person__name--js');

const namesPosition = () => {
  names.forEach((name) => {
    let rowOffsetTop = name.parentElement.offsetTop;
    let rowHeight = name.parentElement.offsetHeight;

    if (window.pageYOffset + 500 - rowOffsetTop >= 0) {
      if (window.pageYOffset - rowOffsetTop + 500 < rowHeight - 120) {
        name.style.top = window.pageYOffset + 500 - rowOffsetTop + 'px';
      } else {
        name.style.top = '90%';
      }
    } else {
      name.style.top = '0%';
    }
  });
};

// header position

const header = document.querySelector('.main-header__container--js');
const title = document.querySelector('.main-header--js');

const headerPosition = () => {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add('main-header__container--sticky');
    title.classList.add('main-header__title-padding');
    document.querySelector('.main-header__image--js').style.width = 500 + 'px';
  } else {
    header.classList.remove('main-header__container--sticky');
    title.classList.remove('main-header__title-padding');
    document.querySelector('.main-header__image--js').style.width = 1000 + 'px';
  }

  if (window.scrollY > document.querySelector('.photo-with-links--first-js').offsetTop) {
    header.style.opacity = 0;
  } else {
    header.style.opacity = 1;
  }
};

const animationsOnScroll = () => {
  headerPosition();
  photosPosition();
  namesPosition();
};

window.addEventListener('scroll', animationsOnScroll);
