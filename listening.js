const MkChoose = document.querySelector(".MkChoose");
function VzxLoad() {
    setTimeout(function () {
        MkChoose.classList.add("MkChooseShow");
    }, 2000);
  }
function OpenSpotify() {
    window.location.replace("https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=1ea15ab3e8aa4d45")
    klik.play();
}
function OpenMusic() {
    klik.play();
}
function Author() {
    window.location.replace("https://www.instagram.com/direct/t/17844566204750254/")
    klik.play();
}

var klik = new Audio("https://editor-miring-squad.netlify.app/am/mix/klik.mp3");
klik.loop = false;
klik.autoplay = false;
