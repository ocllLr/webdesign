$(function(){
  // 이미지 슬라이드
  let currentIndex = 0;
  $(".sliderWrap").append($(".slider").first().clone(true));

  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginLeft:-1200*currentIndex}, 600);

    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginLeft:0}, 0)
        currentIndex = 0;
      }, 600)
    }
  }, 3000)

  // 메뉴 : 한번에 보기, 가상배경
  $(".nav>ul>li").mouseover(function(){
    $(".nav>ul>li>ul").stop().fadeIn(400);
    $("#header .container").addClass("on");
  })
  $(".nav>ul>li").mouseout(function(){
    $(".nav>ul>li>ul").stop().fadeOut(400);
    $("#header .container").removeClass("on");
  })

});//끝