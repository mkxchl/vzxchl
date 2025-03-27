const EmsAuthor = document.querySelector('.VxAuthor')
const VxAuthorContent = document.querySelector('.VxAuthorContent')
const VxAuthorBtnList = document.querySelector('.VxAuthorBtnList')
const Contx = document.getElementById('Contx')
const Homex = document.getElementById('Homex')
const Profile = document.getElementById('Profile')
const Profxxx = document.getElementById('Profxxx')
const playPauseButton = document.getElementById('playPauseButton')
const NavMusic = document.querySelector(".NavMusic");
const VxAuthorMeta = document.querySelector('.VxAuthorMeta')
let isPlaying = false

function VzxLoad () {
  setTimeout(function () {
    EmsAuthor.classList.add('AuthorShow')
  }, 5)
  setTimeout(function () {
    VxAuthorContent.classList.add('UpdateHeight')
    Profile.classList.add('BtnXActive')
  }, 3000)
}

function OpenCont () {
  VxAuthorContent.classList.add('Contactxx')
  Contx.classList.add('BtnXActive')
  Profile.classList.remove('BtnXActive')
}
function PlayxMusic () {
  if (isPlaying) {
    MkXadios.pause()
    playPauseButton.classList.remove('bx-pause')
    playPauseButton.classList.add('bx-play')
    NavMusic.classList.remove('ShowMsc')
    VxAuthorMeta.classList.remove('NonActive')
    VxAuthorContent.classList.remove('DelHeight')
  } else {
    MkXadios.play()
    playPauseButton.classList.remove('bx-play')
    playPauseButton.classList.add('bx-pause')
    NavMusic.classList.add('ShowMsc')
    VxAuthorMeta.classList.add('NonActive')
    VxAuthorContent.classList.add('DelHeight')
  }
  isPlaying = !isPlaying;
}
function Remove() {
  VxAuthorContent.classList.remove('DelHeight')
  NavMusic.classList.remove('ShowMsc')
    VxAuthorMeta.classList.remove('NonActive')
}
var klik = new Audio('https://editor-miring-squad.netlify.app/am/mix/klik.mp3')
klik.loop = false
klik.autoplay = false

var MkXadios = new Audio('mix/Sick.mp3')
MkXadios.loop = false
MkXadios.autoplay = false
