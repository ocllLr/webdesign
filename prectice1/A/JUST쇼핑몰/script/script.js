$(function(){
  // slider
  let currentIndex =0;
  $(".sliderWrap").append($(".images").eq(0).clone(true));

  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginTop : -300 * currentIndex + "px"}, 600);
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginTop : 0}, 0)
      }, 600)
      currentIndex = 0;
    }
  }, 3000)
  
  // nav
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().slideDown(400);
  })
  $(".nav>ul>li").mouseout(function(){
    $(".submenu").stop().slideUp(400);
  })

  // tab
  const tabBtn = $(".info-menu > a");
  const tabCont = $(".info-cont > div");
  tabCont.hide().first().show();
  tabBtn.on("click", function(){
    const index = $(this).index();
    tabBtn.eq(index).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  })
  // popup
  $(".popup-view").hide();
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
})