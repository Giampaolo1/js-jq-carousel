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
  // PALLINI
  var posizioneNav = $(".nav i.active");

  posizioneimg.removeClass("active");
  // PALLINI
  posizioneNav.removeClass("active");

  // Se siamo all ultima IMG dello SLIDER, ritorna ad essere attiva la prima

  if (posizioneimg.hasClass("last")) {
    $(".slider-wrapper .images img.first").addClass("active");
    // PALLINI
    $(".nav i.first").addClass("active");

  } else {
    // Altrimenti passa l active alla prossima
    posizioneimg.next("img").addClass("active");
    posizioneNav.next("i").addClass("active");
  }
}
// FRECCIA SX:

function previousSlide (){

  var posizioneimg = $(".slider-wrapper .images img.active");
  // PALLINI
  var posizioneNav = $(".nav i.active");


  posizioneimg.removeClass("active");
  // PALLINI
  posizioneNav.removeClass("active");


  // Se siamo alla prima IMG dello SLIDER, ritorna ad essere attiva l ultima

  if (posizioneimg.hasClass("first")) {
    $(".slider-wrapper .images img.last").addClass("active")
    // PALLINI
    $(".nav i.last").addClass("active");

  } else {

    // Altrimenti passa l active alla precedente
    posizioneimg.prev("img").addClass("active");
    // PALLINI
    posizioneNav.prev("i").addClass("active");


  }
}
