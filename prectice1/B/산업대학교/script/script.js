$(function(){
  // slider
  let currentIndex = 0;
  $(".sliderWrap").append($(".images").first().clone(true));
  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginLeft : - 1200 * currentIndex + "px"}, 600)
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginLeft : 0}, 0);
        currentIndex = 0;
      }, 600);
    }
  }, 3000);

  // nav
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().fadeIn(400);
    $("#header").addClass("on");
  })
  $(".nav>ul>li").mouseout(function(){
    $(".submenu").stop().fadeOut(400);
    $("#header").removeClass("on");
  })

  // popup
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })

})