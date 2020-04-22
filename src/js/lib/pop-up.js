import $ from 'jquery';

$('.btn-secondary').click(function() {
  $('.pop-up').toggleClass('active');
});

$('.btn-close, .close').click(function() {
  $('.pop-up').toggleClass('active');
});
