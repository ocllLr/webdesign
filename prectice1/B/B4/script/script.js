$(function(){
  // 슬라이더
  let currentIndex = 0;
  $(".sliderWrap").append($(".slider").first().clone(true));
  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginLeft : -1200 * currentIndex}, 600);

    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginLeft: 0}, 0);
        currentIndex = 0;
      })
    }
  }, 3000)
  
  // nav : 가상배경
  $(".nav>ul>li").mouseover(function(){
    $("#header .container").addClass("on");
    $(".submenu").stop().fadeIn(400);
  })
  $(".nav>ul>li").mouseout(function(){
    $("#header .container").removeClass("on");
    $(".submenu").stop().fadeOut(400);
  })

  // tab
  const tabBtn = $(".info-menu>a");
  const tabCont = $(".info-cont>div");
  tabCont.hide().eq(0).show();
  
  tabBtn.on("click", function(){
    const index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");

    tabCont.eq(index).show().siblings().hide();
  })

  // popup
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
})