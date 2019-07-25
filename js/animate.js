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
  $('.content__box > .listwrap').css('height', wrapHeight-searchHeight-140);
  $('.content__box > .listwrap').css('overflow-y', 'scroll');
  $(window).resize(function(){
    var wrapHeight = $('.contents').height();
    var searchHeight = $('.search__box').height();
    $('.content__box').css('height', wrapHeight-searchHeight-45);
    $('.content__box > .listwrap').css('height', wrapHeight-searchHeight-140);
    $('.content__box > .listwrap').css('overflow-y', 'scroll');
  });
});


// 팝업 열기,닫기
$(function(){ // edit modal
  $('.modal').hide();
  $('.modal__edit').on('click',function(){
    $('.edit_modal').fadeIn();
  });
  $('.popup--close, .btnarea > .close').on('click',function(){
    $('.edit_modal').fadeOut();
  });  
});

$(function(){ // mapping modal
  $('.modal').hide();
  $('.modal__mapping').on('click',function(){
    $('.mapping_modal').fadeIn();
  });
  $('.popup--close, .btnarea > .close').on('click',function(){
    $('.mapping_modal').fadeOut();
  });  
});