$(document).ready(function() {
    
$('a').on('click',function() {
    
    var area = $('.buscar');
    switch (true) {
            case area.val() === 'comida':
            $('.menus').text('gracias por nada');
              console.log('hola')
              break;
            case area.val() === 'italiana':
            $('.menus').text('genial');  
              break;
            case area.val() === 'peruana':
              imagesContainer.textContent = '';
              showCoders(arr6Lima, LIMA6);
              break;
            default:
              alert('lo siento');
     }
    event.preventDefault();
  });
});