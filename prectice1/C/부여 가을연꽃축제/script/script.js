$(function(){
  // slider
  $(".images").hide().first().show();  
  let currentIndex = 0;
  setInterval(function(){
    let nextIndex = (currentIndex + 1) % 3;
    $(".images").eq(currentIndex).fadeOut(1200);
    $(".images").eq(nextIndex).fadeIn(1200);
    currentIndex = nextIndex;
  }, 3000)
  // nav
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(600);
  })
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(600);
  })

  // popup
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })
})