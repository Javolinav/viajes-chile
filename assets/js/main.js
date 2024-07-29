$(document).ready(function(){
  // Función para desplazamiento suave al hacer clic en los enlaces de navegación
  $('a.nav-link').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
  });
});