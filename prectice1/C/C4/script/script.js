$(function(){
  // slider
  let currentIndex = 0;
  $(".sliderWrap").append($(".slider").eq(0).clone(true));
  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginTop: -350 * currentIndex + "px"}, 600);
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginTop: 0}, 0)
      }, 600)
      currentIndex = 0;
    }
  }, 3000)

  // nav
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().fadeIn(400);
  })
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().fadeOut(400);
  })
  
  // popup
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
})