$(function () {
  'use strict';
  $(".topnav a").on({
    mouseenter: function(){
      $(this).addClass('active').siblings().removeClass('active');
    }
});

});
