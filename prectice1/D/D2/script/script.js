$(function(){
  // nav
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(600);
  })
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(600);
  })
  // slider
  let currentIndex = 0;
  $(".sliderWrap").append($(".images").eq(0).clone(true))

  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginLeft: - 100 * currentIndex + "%"}, 600)

    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginLeft:0}, 0)
      },600)
      currentIndex = 0;
    }
  }, 3000)

  // popup
  $(".popup-view").hide();
  $(".popup-btn").click(function(){
    $(".popup-view").show()
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide()
  })
})