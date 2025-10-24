$(function(){
  // slider : 가로
  let currentIndex = 0;
  $(".sliderWrap").append($(".slider").eq(0).clone(true));
  
  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginLeft: -800 * currentIndex +"px"}, 600);
    
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginLeft:0}, 0);
        currentIndex=0;
      }, 600)
    }
  }, 3000)
  
  // nav
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().fadeIn(500);
  })
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().fadeOut(500);
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