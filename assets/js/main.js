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

const ModeStudNav = document.querySelector('#ModeStudyNav')
const ModeStudHome = document.querySelector('#ModeStudyHome')
const ModeStudAbout = document.querySelector('#ModeStudyAbout')
const ModeStudFooter = document.querySelector('#ModeStudyFooter')
const ModeStudyRole = document.querySelector('#RoleStudy')
const StudyList = document.querySelector('.StudyList')
const Preloader = document.querySelector('.preloader')
const Bodyx = document.querySelector('body')

function ModeStudy () {
  Preloader.classList.add('loadhdn')
  Bodyx.style.overflow = 'hidden'
  setTimeout(function () {
    Preloader.classList.remove('loadhdn')
    ModeStudNav.innerHTML = "Marchelino"
    ModeStudHome.innerHTML = "I'm Marchelino"
    ModeStudAbout.innerHTML = "Marchelino"
    ModeStudFooter.innerHTML = "Marchelino"
    ModeStudyRole.innerHTML = "Study at Bani Saleh University"
    Bodyx.style.overflow = 'auto'
  }, 5000)

  hamburger.classList.toggle('hamburger-active')
  NavMenu.classList.toggle('hidden')
  StudyList.classList.add('hdn')
}
function VzxLoad () {
  Bodyx.style.overflow = 'hidden'
  Preloader.classList.add('loadhdn')
  setTimeout(function () {
    Preloader.classList.remove('loadhdn')
    Bodyx.style.overflow = 'auto'
  }, 5000)
}
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Mencegah penggunaan F12 (DevTools)
document.addEventListener('keydown', function(e) {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
  }
});
