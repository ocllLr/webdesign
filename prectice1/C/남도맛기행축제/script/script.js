$(function(){
  // slider
  let currentIndex = 0;
  $(".sliderWrap").append($(".images").first().clone(true));
  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginLeft: -800 * currentIndex + "px"}, 600);
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginLeft:0}, 0);
        currentIndex = 0;
      }, 600)
    }
  }, 3000);
  
  // nav
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().fadeIn(600);
  })
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().fadeOut(600);
  })
  
})