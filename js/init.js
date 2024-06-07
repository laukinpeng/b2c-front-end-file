{
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  //EXPAND + SHRINK SEARCH BAR 
  function expandSearch() {
    document.getElementById("body").classList.add("no-scroll");
    document.getElementById("header").classList.add("searching");
    document.getElementById("search-tab").classList.add("active");
    document.getElementById("header").classList.add("shrink");
    if (window.innerWidth < 768) {
      document.getElementById("logo").classList.add("dissolve");
    }
  }

  function shrinkSearch() {
    document.getElementById("body").classList.remove("no-scroll");
    document.getElementById("header").classList.remove("searching");
    document.getElementById("search-tab").classList.remove("active");
    if (window.scrollY < 91) {
      document.getElementById("header").classList.remove("shrink");
    }
    if (window.innerWidth < 768) {
      document.getElementById("logo").classList.remove("dissolve");
    }

  }
  function scrolltoID (contentId) {
	  document.getElementById(contentId).scrollIntoView( {behaviour: 'smooth'} );
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    //TOGGLE CLASS
    const togglebutton = document.getElementsByClassName('toggle');

    function togglethis() {
      this.classList.toggle('active');
    }
    document.querySelectorAll('.toggle').forEach(togglebutton => {
      togglebutton.addEventListener('click', togglethis);
    });

    // MAIN MENU SCROLL
    window.onscroll = function () {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementById("header").classList.add("shrink");
      } else {
        document.getElementById("header").classList.remove("shrink");
      }
    }

    // BURGER MENU
    document.getElementById("burger").addEventListener('click', function () {
      document.getElementById("body").classList.toggle("slide");
    });
    document.getElementById("nav-4-slideback").addEventListener('click', function () {
      document.getElementById("body").classList.remove("slide")
    });

    // TINY SLIDERS INIT
    if (isMobile.any()) {
      document.getElementById("body").classList.add("mobile");
    } else {
      document.getElementById("body").classList.add("desktop");
      var slidecounter = 0;
      document.querySelectorAll('.my-slider').forEach(
        slider => {
          tns({
            container: slider,
            loop: true,
            items: 1,
            slideBy: 'page',
            nav: false,
            speed: 400,
            autoplayButtonOutput: false,
            mouseDrag: true,
            controlsContainer: "#custom-controls-" + slidecounter,
            responsive: {
              300: {
                items: 1,
              },
              330: {
                items: 2,
              },
              640: {
                items: 3,
              },
              768: {
                items: 4,
              },
              1024: {
                items: 5,
              },
              1280: {
                items: 6,
              },
              1680: {
                items: 7,
              },
            }
          });
          slidecounter++;
        }
      );
    }
  }, false);
  new Accordion('.accordion-container');
	
  var slider = tns({
  container: ".banners-slider",
  items: 1,
  slideBy: 1,
  controlsPosition: "bottom",
  navPosition: "bottom",
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  loop: false,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
  }
  // mode: 'gallery',
  // speed: 2000,
  // animateIn: "scale",
  // controls: false,
  // nav: false,
  // edgePadding: 20,
  // loop: false,
  });
	
  var slider = tns({
  container: ".slider-vendor",
  items: 2,
  slideBy: "page",
  "mouseDrag": true,
  "swipeAngle": false,
  "speed": 400
  // mode: 'gallery',
  // speed: 2000,
  // animateIn: "scale",
  // controls: false,
  // nav: false,
  // edgePadding: 20,
  // loop: false,
  });
}