$(function(){
  // slider
  let currentIndex = 0;
  $(".sliderWrap").append($(".slider").first().clone(true));
  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginLeft: -1200 * currentIndex }, 600);

    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginLeft : 0}, 0);
        currentIndex = 0;
      }, 600)
    }
  }, 3000)

  //nav : 한번에
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().slideDown(400);
  })
  $(".nav>ul>li").mouseout(function(){
    $(".submenu").stop().slideUp(400);
  })

  // tab
  const tabBtn = $(".info-menu>a");
  const tabCont = $(".info-cont>div");
  tabCont.hide().first().show()

  tabBtn.on("click", function(){
    const index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  })
  //popup
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
})