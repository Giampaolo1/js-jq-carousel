// DESCRIZIONE:
// RI-Creare lo slideshow/carousel base come fatto in live coding a lezione stamattina.
// Per chi ha meno tempo potete partire da questo repo: https://bitbucket.org/booleancareers/lc-ex-slider-layout/src/master/


$( document ).ready(function() {

  // Scelgo una freccia (next)

  $(".next").click(nextSlide);
    // console.log("cliccato");

  $(".prev").click(previousSlide)


});

// FUNZIONI (Passare da fx anonima a fx nominale)

function nextSlide (){

  var posizioneimg = $(".slider-wrapper .images img.active");

  posizioneimg.removeClass("active");

  // Se siamo all ultima IMG dello SLIDER, ritorna ad essere attiva la prima

  if (posizioneimg.hasClass("last")) {
    $(".slider-wrapper .images img.first").addClass("active")
  } else {

    // Altrimenti passa l active alla prossima
    posizioneimg.next("img").addClass("active");
  }
}
// IDEA:

function previousSlide (){

  var posizioneimg = $(".slider-wrapper .images img.active");

  posizioneimg.removeClass("active");

  // Se siamo alla prima IMG dello SLIDER, ritorna ad essere attiva l ultima

  if (posizioneimg.hasClass("first")) {
    $(".slider-wrapper .images img.last").addClass("active")
  } else {

    // Altrimenti passa l active alla precedente
    posizioneimg.prev("img").addClass("active");
  }
}
