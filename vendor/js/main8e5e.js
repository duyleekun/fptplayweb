$(document).ready(function() {

  $("#chat_fpt_play").click(function(event) {
    event.preventDefault();
    $("#facebook").stop().animate({
      height: 'toggle'
    });
  });

  $('#modal_banner').modal();

  $(window).on('load resize', function() {
    var width = $(window).width();
    if (width > 992) {
      $('.carousel').carousel({
        carouselWidth: 940,
        carouselHeight: 390,
        autoplayInterval: 6000,
        buttonNav: 'bullets',
        frontWidth: 610,
        frontHeight: 343
      });
    } else if (width > 748) {
      $('.carousel').carousel({
        carouselWidth: 720,
        carouselHeight: 270,
        autoplayInterval: 6000,
        buttonNav: 'bullets',
        frontWidth: 400,
        frontHeight: 225
      });
    } else {
      $('.carousel').carousel({
        carouselWidth: 300,
        carouselHeight: 150,
        autoplayInterval: 6000,
        buttonNav: 'bullets',
        frontWidth: 200,
        frontHeight: 113
      });
    }
  });

  $("#navbar li a").on('click', function(e) {
    // e.preventDefault();
    var obj = $(this);
    $('.collapse.in').collapse('hide');

    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 90
    }, 1000, function() {
      window.location.hash = hash;
      $("#navbar li").removeClass('active');
      obj.parent().addClass('active');
    });

  });

});