$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $('html, body').animate({
        scrollTop: (($(gato).offset().top)-50)
      }, 1800, function(){
        window.location.hash = gato - 50;
      });
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

});

// $(function () {
//   $(window).on('scroll', function () {
//       if ( $(window).scrollTop() > 100 ) {
//           $('.navbar').addClass('active');
//       } else {
//           $('.navbar').removeClass('active');
//       }
//   });
// });
