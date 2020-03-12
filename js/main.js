$(function () {
  'use strict';
  // adjust slider height
  var winH    = $(window).height(),
      upperH  = $('.upper-nav').innerHeight(),
      navH    = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH - ( upperH + navH ));

  //featuredwork shuffel
  $('.featured ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.padding-control .col-md').css('opacity', 1);
    } else {
      $('.padding-control .col-md').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });
});
