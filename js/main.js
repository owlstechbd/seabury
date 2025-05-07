// Service Slider

$(document).ready(function() {
  $('.destianation-all').owlCarousel({
    items: 3,
    loop: true,
    autoplay: true, 
    autoplayTimeout: 3000, 
    nav: false,
    autoplayHoverPause: true,
    margin:30,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 1
      },
      992: {
        items: 3
      }
    }
  });

  $('.custom-nav .prev').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });

  $('.custom-nav .next').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
});

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    nav: false,
    margin:30,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 1
      },
      992: {
        items: 3.5
      }
    }
  });


});

//animated
AOS.init();
