$(function(){
  // slider : 가로 넘기기
  let currentIndex = 0;
  $(".sliderWrap").append($(".slider").first().clone(true))

  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginLeft: -1200 * currentIndex}, 600)

    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginLeft: 0}, 0)
        currentIndex = 0;
      }, 600)
    }
  }, 3000)

  // nav : 가상배경
  $(".nav>ul>li").mouseover(function(){
    $(".nav>ul>li>ul").stop().slideDown(200);
    $("#header").addClass("on");
  })
  $(".nav>ul>li").mouseout(function(){
    $(".nav>ul>li>ul").stop().slideUp(200);
    $("#header").removeClass("on");
  })

  // 탭
  const tabBtn = $(".info-menu>a");
  const tabCont = $(".info-cont>div");
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function(){
    const index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  })

  // 팝업
  $(".popup-btn").click(function(){
    $(".popup-view").show()
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
})