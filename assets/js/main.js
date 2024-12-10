window.onscroll = function () {
  const header = document.querySelector('header')
  const fixNav = header.offsetTop

  if (window.pageYOffset > fixNav) {
    header.classList.add('nav-fixed')
  } else {
    header.classList.remove('nav-fixed')
  }
}

const hamburger = document.querySelector('#hamburger')
const NavMenu = document.querySelector('#NavMenu')

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active')
  NavMenu.classList.toggle('hidden')
})

const ModeStudNav = document.querySelector("#ModeStudyNav");
const ModeStudHome = document.querySelector("#ModeStudyHome");
const ModeStudAbout = document.querySelector("#ModeStudyAbout");
const ModeStudFooter = document.querySelector("#ModeStudyFooter");
const StudyList = document.querySelector(".StudyList");
const Preloader = document.querySelector('.preloader');

function ModeStudy() {
  Preloader.classList.add('loadhdn');
    setTimeout(function () {
        Preloader.classList.remove('loadhdn');
      }, 5000);
    ModeStudNav.innerHTML = "Marchelino";
    ModeStudHome.innerHTML = "Marchelino";
    ModeStudAbout.innerHTML = "Marchelino";
    ModeStudFooter.innerHTML = "Marchelino";
    hamburger.classList.toggle('hamburger-active');
    NavMenu.classList.toggle('hidden');
    StudyList.classList.add('hdn');
}
function VzxLoad() {
  Preloader.classList.add('loadhdn');
  setTimeout(function () {
      Preloader.classList.remove('loadhdn');
    }, 5000);
} 