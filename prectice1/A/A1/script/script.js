$(function(){
  // slider : 세로
  let currentIndex = 0;
  $(".sliderWrap").append($(".slider").first().clone(true));
  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginTop:-300 * currentIndex + "px"}, 600)
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginTop:0}, 0)
        currentIndex = 0;
      }, 600)
    }
  }, 3000)

  // nav : 한번에 내리기
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().slideDown(200);
  })
  $(".nav>ul>li").mouseout(function(){
    $(".submenu").stop().slideUp(200);
  })

  // 탭
  const tabBtn = $(".info-menu > a");
  const tabCont = $(".info-cont > div");
  tabCont.hide().eq(0).show();

  tabBtn.click(function(){
    const index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active")
    tabCont.eq(index).show().siblings().hide()
  })

  // 팝업
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
})