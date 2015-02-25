// @codekit-prepend 'lib/jquery.js';
// @codekit-prepend 'lib/breakpoints.js';
// @codekit-prepend 'plugins/jquery.bxslider.js';

$(window).setBreakpoints({
  // use only largest available vs use all available
  distinct: true,
  // breakpoint array
  breakpoints: [
    700,
    1200
  ]
});

var workslider = null;

$(document).ready(function() {
  // cover next button
  $('.cover-down').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#work').offset().top
    }, 400);
  });
  
  // home button
  $('.home').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('.site-page').offset().top
    }, 400);
  });
  
  // work slider
  $(window).bind('enterBreakpoint1200',function() {
    workslider = $('.work-body').bxSlider({
      speed: 600,
      slideSelector: '.work-section',
      infiniteLoop: false,
      controls: false
    });
  });
  
  $(window).bind('exitBreakpoint1200',function() {
    workslider.destroySlider();
  });
});