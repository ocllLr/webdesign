$(function(){
  // nav : 한번에 보기
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().slideDown(200);
  })
  $(".nav>ul>li").mouseout(function(){
    $(".submenu").stop().slideUp(200);
  })

  // slider : 가로 넘기기
  let currentIndex = 0;
  $(".sliderWrap").append($(".slider").first().clone(true))
  
  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginTop: -300 * currentIndex + "px"}, 600)
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginTop:0}, 0)
        currentIndex = 0;
      }, 600)
    }
  }, 3000)

})