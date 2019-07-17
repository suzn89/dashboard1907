// menu panel open / close
$(function() {
  $('#menu').hover(
    function(){
      $(this).addClass('wide');
      $(this).stop().animate({'width':'290px'},500);
    },
    function(){          
      $(this).stop().animate({'width':'80px'},500);
      $(this).removeClass('wide');
    }
  );
});
