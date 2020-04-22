import $ from 'jquery';

$('.menu').click(function() {
  $(this).toggleClass('active');
  $('.menu-popup').toggleClass('active');
});
