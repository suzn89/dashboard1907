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

// 검색 + 컨텐츠 박스 높이 계산
$(function() {
  var wrapHeight = $('.contents').height();
  var searchHeight = $('.search__box').height();
  $('.content__box').css('height', wrapHeight-searchHeight-45);
  $(window).resize(function(){
    var wrapHeight = $('.contents').height();
    var searchHeight = $('.search__box').height();
    $('.content__box').css('height', wrapHeight-searchHeight-45);
  });
});


// 팝업 열기,닫기
$(function(){
  $('.modal').hide();
  $('.modal__edit').on('click',function(){
    $('.modal').fadeIn();
  });
  $('.popup--close, .btnarea > .close').on('click',function(){
    $('.modal').fadeOut();
  });  
});