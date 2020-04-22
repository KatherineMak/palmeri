import './lib/swiper.js';
import './lib/menu.js';
import './lib/pop-up.js';

import $ from 'jquery';

$('form').submit(function(e) {
  var $form = $(this);
  $.ajax({
    type: 'POST',
    url: 'send.php',
    data: $form.serialize()
  }).done(function() {
    $('.thank').addClass('active');
  }).fail(function() {
    alert('что-то пошло не так, попробуйте еще раз');
  });
  //отмена действия по умолчанию для кнопки submit
  e.preventDefault(); 
});

$('.thank .close, .thank .btn').click(function() {
  $('.thank').removeClass('active');
  $('input').val('');
});
