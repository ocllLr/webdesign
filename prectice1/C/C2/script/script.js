$(function(){
  // nav
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(400);
  })
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(400);
  })

  // slider
  let currentIndex = 0;
  $(".slider").hide().eq(0).show();
  setInterval(function(){
    let nextIndex = (currentIndex+1) % 3;
    $(".slider").eq(currentIndex).fadeOut(1200);
    $(".slider").eq(nextIndex).fadeIn(1200);
    currentIndex = nextIndex;
  }, 3000)

  // tab
  const tabBtn = $(".info-menu>a");
  const tabCont = $(".info-cont>div");
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function(){
    const index = $(this).index();
    tabCont.eq(index).show().siblings().hide();
    tabBtn.eq(index).addClass("active").siblings().removeClass("active")
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