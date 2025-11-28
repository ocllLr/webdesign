$(function(){
  // slider
  $(".sliderWrap").append($(".images").first().clone(true));
  let currentIndex =0;

  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginTop: - (currentIndex * 100) + "vh"}, 600);
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginTop: 0}, 0);
      }, 600)
      currentIndex=0;
    }
  }, 3000)

  // nav
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(400);
  });
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(400);
  });

  // popup
  $(".popup-view").hide();
  $(".popup-btn").on("click", function(){
    $(".popup-view").show();
  })
  $(".popup-close").on("click", function(){
    $(".popup-view").hide();
  })
})