$(document).ready(function(){
    console.log('hello')

    let $btns = $('.project-area .button-group button');

    $btns.click(function(e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        
        $('.project-area .grid').isotope({
            filter : selector
        })

        return false

    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });


      // owl carousel

      $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
      })

      $(window).scroll(function() {
        console.log($(window).scrollTop())
      })

      let headerPosition = $('.header_area').offset().top + 300;

      $(window).scroll(function () {
        let scrollValue = $(window).scrollTop();
        if (scrollValue > headerPosition) {
            $('.header_area').addClass('sticky')
        } else {
            $('.header_area').removeClass('sticky')
        }
      })

})