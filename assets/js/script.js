$(function () {

  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $('html, body').animate({
        scrollTop: (($(gato).offset().top) - 60)
      }, 1800, function () {
        window.location.hash = gato - 60;
      });
    }
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 280) {
      $('.navbar').addClass('active');
    } else {
      $('.navbar').removeClass('active');
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

});