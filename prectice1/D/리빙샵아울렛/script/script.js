$(function(){
  // slider
  let currentIndex = 0;
  $(".image").hide().eq(0).show();
  setInterval(function(){
    let nextIndex = (currentIndex + 1) % 3;
    $(".image").eq(currentIndex).fadeOut(1200);
    $(".image").eq(nextIndex).fadeIn(1200);
    currentIndex = nextIndex;
  },3000);

  // nav
  $(".submenu").hide();
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().fadeIn(300);
    $("#header").addClass("on");
  })
  $(".nav>ul>li").mouseout(function(){
    $(".submenu").stop().fadeOut(300);
    $("#header").removeClass("on");
  })

})