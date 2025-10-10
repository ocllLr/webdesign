$(function(){
  // nav
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(400);
  })
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(400);
  })
  // slider
  let currentIndex = 0;
  $(".sliderWrap").append($(".slider").first().clone(true));

  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginTop: -300 * currentIndex + "px"}, 600);
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginTop:0}, 0)
      },600)
      currentIndex = 0;
    }
  },3000)
  // tab
  const tabBtn = $(".info-menu>a");
  const tabCont = $(".info-cont>div");
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function(){
    const index = $(this).index();
    tabBtn.eq(index).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  })
  // poupup
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
})