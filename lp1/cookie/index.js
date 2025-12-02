"use strict";

var body = document.getElementsByTagName('body')[0];
var ppCookiePopup = document.getElementById('cookie__popup');
var ppCookieSetting = document.getElementById('cookie-policy');
var ppCookieOpen = document.getElementById('cookie-set-open');
var ppCookieLayer = document.getElementById('cookie-policy__layer');
var ppCookieClose = document.getElementById('cookie__popup__close');
var ppCookieChangeBtn = document.getElementById('open-cookie-setting');
var ppCookieStrageOfPerformance = localStorage.getItem('ppCookiePerformance');
var ppCookieStrageOfTargeting = localStorage.getItem('ppCookieTargeting');
var ppCookiePerformanceField = document.getElementById('performance_cookie');
var ppCookieTargetingField = document.getElementById('targeting_cookie');
var ppCookiePopupClose = localStorage.getItem('ppCookiePopupClose');

if (ppCookiePopupClose !== 'true') {
  ppCookiePopup.classList.add('open');
}

window.addEventListener("load", function () {
  if (ppCookieStrageOfPerformance !== 'false' || !ppCookieStrageOfPerformance) {
    ppCookiePerformanceField.checked = true;
  }

  if (ppCookieStrageOfTargeting !== 'false' || !ppCookieStrageOfTargeting) {
    ppCookieTargetingField.checked = true;
  }
});
ppCookieOpen.addEventListener('click', function () {
  ppCookieSetting.classList.add('open');
  body.classList.add('open');
});
ppCookieChangeBtn.addEventListener('click', function () {
  ppCookieSetting.classList.add('open');
  body.classList.add('open');
});
ppCookieLayer.addEventListener('click', function () {
  ppCookieSetting.classList.remove('open');
  body.classList.remove('open');
});
ppCookieClose.addEventListener('click', function () {
  ppCookiePopup.classList.remove('open');
  body.classList.remove('open');
});
var ppCookieMenu = document.getElementsByClassName('pp-item');
var ppCookieContents = document.getElementsByClassName('pp-content');

var _loop = function _loop(i) {
  ppCookieMenu[i].addEventListener('click', function () {
    var $this = ppCookieMenu[i];
    var $target = document.getElementById($this.dataset.target);

    if ($this.classList.contains('active') === false) {
      for (var k = 0; k < ppCookieMenu.length; k++) {
        ppCookieMenu[k].classList.remove('active');
      }

      $this.classList.add('active');

      for (var _k = 0; _k < ppCookieContents.length; _k++) {
        ppCookieContents[_k].classList.remove('active');
      }

      $target.classList.add('active');
    }
  });
};

for (var i = 0; i < ppCookieMenu.length; i++) {
  _loop(i);
}

var pp_pcContainer = document.getElementById('cookie-policy__contents');
var pp_changeContents = document.getElementsByClassName('pp-content');
var pp_spContainer = document.getElementsByClassName('pp-list-item');
var pp_spItems = document.getElementsByClassName('pp-item');
window.addEventListener('load', function () {
  changeLayout();
});
window.addEventListener('resize', function () {
  changeLayout();
});

function changeLayout() {
  if (document.documentElement.clientWidth < 769) {
    for (var _i = 0; _i < pp_spItems.length; _i++) {
      var $this = pp_spItems[_i];
      var $container = $this.nextElementSibling;

      if (!$container) {
        for (var k = 0; k < pp_spContainer.length; k++) {
          pp_spContainer[k].appendChild(pp_changeContents[k]);
        }
      }
    }
  } else {
    if (pp_pcContainer.childElementCount == 0) {
      for (var _i2 = 0; _i2 < pp_spItems.length; _i2++) {
        pp_pcContainer.appendChild(pp_spItems[_i2].nextElementSibling);
      }
    }
  }
}

var ppCookieDetailBtn = document.getElementById('pp-agree-btn');
var ppCookieAgree = document.getElementById('pp_agree_btn');
var ppCookiePerformance;
var ppCookieTargeting;
ppCookieDetailBtn.addEventListener('click', function () {
  CookieSetting();
});
ppCookieAgree.addEventListener('click', function () {
  CookieSetting();
});

function CookieSetting() {
  if (ppCookiePerformanceField.checked) {
    ppCookiePerformance = true;
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  } else {
    ppCookiePerformance = false;
    gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  }

  if (ppCookieTargetingField.checked) {
    ppCookieTargeting = true;
    gtag('consent', 'update', {
      'ad_storage': 'granted'
    });
  } else {
    ppCookieTargeting = false;
    gtag('consent', 'update', {
      'ad_storage': 'denied'
    });
  }

  localStorage.setItem('ppCookiePerformance', ppCookiePerformance);
  localStorage.setItem('ppCookieTargeting', ppCookieTargeting);
  ppCookieSetting.classList.remove('open');
  ppCookiePopup.classList.remove('open');
  body.classList.remove('open');
  localStorage.setItem('ppCookiePopupClose', true);
}