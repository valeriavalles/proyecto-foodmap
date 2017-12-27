$(document).ready(function() {


  


  $('#search').on('click', function() {
    var area = $('.buscar');
    event.preventDefault();
   
    switch (true) {
    case area.val() === 'comida peruana':
     // $('.menus').text('gracias por nada');
     $('.men')
    .attr('src','../assets/images/uno.jpg')
    .addClass('img-thumbnail'); 
      break;
    case area.val() === 'italiana':
    $('.men')
    .attr('src','../assets/images/dos.jpg'); 
      break;
    case area.val() === 'mexicana':
    $('.men')
    .attr('src','../assets/images/tres.jpg');
      break;
    default:
      alert('Disculpe aun estoy aprendiendo!');
    }
    // event.preventDefault();
  });

  
  $('.men').on('mouseover', function() {
    var prueba = $(this).text('hola')
  });

  
});

