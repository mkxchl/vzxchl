const EmsAuthor = document.querySelector(".VxAuthor");
const VxAuthorContent = document.querySelector('.VxAuthorContent')
const VxAuthorBtnList = document.querySelector('.VxAuthorBtnList')
const Contx = document.getElementById('Contx');
const Homex = document.getElementById('Homex');
const Profile = document.getElementById('Profile');
const Profxxx = document.getElementById('Profxxx');
function VzxLoad() {
    setTimeout(function () {
      EmsAuthor.classList.add("AuthorShow");
    }, 5);
    setTimeout(function () {
        VxAuthorContent.classList.add("UpdateHeight");
        Profile.classList.add('BtnXActive')
      }, 3000);
  }

function OpenCont() {
  VxAuthorContent.classList.add('Contactxx');
  Contx.classList.add('BtnXActive');
  Profile.classList.remove('BtnXActive')
}
