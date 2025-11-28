$(function(){
  // slider
  let currentIndex = 0;
  $(".sliderWrap").append($(".images").eq(0).clone(true));
  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginLeft: - currentIndex * 100 + "%"}, 1200);
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginLeft:0}, 0);
        currentIndex =0;
      }, 600)
    }
  }, 3000)

  // nav 

})