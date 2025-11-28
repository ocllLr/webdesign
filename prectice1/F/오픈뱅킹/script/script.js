$(function(){
  // slider
  let currentIndex = 0;
  $(".sliderWrap").append($(".images").first().clone(true))

  setInterval(function(){
    currentIndex ++; 
    $(".sliderWrap").animate({marginLeft : - 100 * currentIndex + "%"}, 600);
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginLeft : 0}, 0);
        currentIndex = 0;
      })
    }
  }, 3000)
  // nav
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().slideDown(400);
    $("#header").addClass("on");
  })
  $(".nav>ul>li").mouseout(function(){
    $(".submenu").stop().slideUp(400);
    $("#header").removeClass("on");
  })

  // popup
  $(".popup-view").hide();
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })

  // tab
  const tabBtn = $(".info-menu>a");
  const tabCont = $(".info-cont > div");
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function(){
    const index = $(this).index();
    tabBtn.eq(index).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  })

})