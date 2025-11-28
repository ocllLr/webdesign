$(function(){
  // slider
  let currentIndex = 0;
  $(".sliderWrap").append($(".images").first().clone(true));

  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginLeft : - 100 * currentIndex + "%"}, 600);
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginLeft:0}, 0);
      },600)
      currentIndex = 0;
    }
  }, 3000);

  // nav
  $(".submenu").hide();
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(400);
  })
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(400);
  })
  // popup
  $(".popup-view").hide();
  $(".popup-btn").on("click", function(){
    $(".popup-view").show();
  })
  $(".popup-close").on("click", function(){
    $(".popup-view").hide();
  })
})