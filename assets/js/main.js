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
const VanzCard = document.querySelector('.VanzCard')
const VanzCardContent = document.querySelector('.VanzCardContent')
const VzxBody = document.querySelector(".VzxBody")

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
  // VanzCard.classList.add('CardShow')
  // setTimeout(function () {
  //   VzxBody.classList.add("Vz3D")
  // }, 5000)
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

function ShowCard() {
  VanzCard.classList.add('CardShow')
  Bodyx.style.overflow = 'hidden'
  hamburger.classList.toggle('hamburger-active')
  NavMenu.classList.toggle('hidden')
  Bodyx.style.overflow = 'hidden'
  setTimeout(function () {
    VzxBody.classList.add("Vz3D")
  }, 9000)
  
}
function CLoseCard() {
  VanzCard.classList.remove('CardShow')
  Bodyx.style.overflow = 'auto'
}
// Social Media

function Insta() {
  window.location.replace("https://instagram.com/marchell_kevandra")
}
function Face() {
  window.location.replace("https://facebook.com/chellgnzxz")
}
function Gthub() {
  window.location.replace("https://github.com/mkxchl")
}
function Tiktok() {
  window.location.replace("https://tiktok.com/@mkxchl")
}
function Sptfy() {
  window.location.replace("https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=c3ab6e9e91c449d4")
}
