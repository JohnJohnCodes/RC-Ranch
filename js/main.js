//allows hamburger menu to open//
document.addEventListener('DOMContentLoaded', function() {
    const menus = document.querySelectorAll('.navbar-burger');
    const dropdowns = document.querySelectorAll('.navbar-menu');

    if (menus.length && dropdowns.length) {
        for (var i = 0; i < menus.length; i++) {
            menus[i].addEventListener('click', function() {
                for (var j = 0; j < dropdowns.length; j++) {
                    dropdowns[j].classList.toggle('hidden');
                }
            });
        }
    }
});

//Google Translate//
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

//Jump to Top//
var btnTop = document.querySelector('#topBtn');
var btnReveal = function () {
  if (window.scrollY > 850) {
    btnTop.classList.remove('hidden');
  } else {
    btnTop.classList.add('hidden');
  }
}
var TopscrollTo = function () {
  if(window.scrollY!=0) {
    setTimeout(function() {
      window.scrollTo(0,window.scrollY-30);
      TopscrollTo();
    }, 5);
  }
}
window.addEventListener('scroll', btnReveal);
btnTop.addEventListener('click', TopscrollTo);
