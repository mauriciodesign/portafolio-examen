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

