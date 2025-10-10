$(function(){
  // nav
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().fadeIn(600);
    $("#header .container").addClass("on");
  })
  $(".nav>ul>li").mouseout(function(){
    $(".submenu").stop().fadeOut(600);
    $("header .container").removeClass("on");
  })
  // slider
  let currentIndex = 0;
  $(".sliderWrap").append($(".slider").first().clone(true));
  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginTop: -300 *currentIndex + "px"}, 600);
    if(currentIndex==3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginTop:0}, 0);
      }, 600)
      currentIndex=0;
    }
  }, 3000)
  // tab
  const tabBtn = $(".info-menu>a");
  const tabCont = $(".info-cont>div");
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function(){
    let index = $(this).index();
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