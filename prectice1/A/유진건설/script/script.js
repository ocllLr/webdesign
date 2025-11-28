$(function(){
  //slider
  let currentIndex = 0;
  $(".images").hide().eq(0).show();
  setInterval(function(){
    let nextIndex = (currentIndex + 1) %3;
    $(".images").eq(currentIndex).fadeOut(1200);
    $(".images").eq(nextIndex).fadeIn(1200);
    currentIndex = nextIndex;
  }, 3000);

  // nav
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().fadeIn(600);
    $("#header").addClass("on");
  })
  $(".nav>ul>li").mouseout(function(){
    $(".submenu").stop().fadeOut(600);
    $("#header").removeClass("on");
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