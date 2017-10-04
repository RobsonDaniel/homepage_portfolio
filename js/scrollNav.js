$(document).ready(function() {
  $(".nav a").click(function(event) {

    if(this.hash !== ""){
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      },900);
    }

  });
});
