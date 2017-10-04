$(document).ready(function() {
  $(".nav a").click(function(event) {
    var hash = this.hash;
    // O this.hash retorna o valor do href da propriedade clicada.
    
    event.preventDefault(); // Impede que o link abra.

    $("html, body").animate({
      scrollTop: $(hash).offset().top
    },900);

  });
});
