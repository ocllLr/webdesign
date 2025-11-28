$(function(){
  // slider
  let currentIndex = 0;
  $(".images").hide().first().show();
  setInterval(function(){
    let nextIndex = (currentIndex + 1) % 3;
    $(".images").eq(currentIndex).fadeOut(1200);
    $(".images").eq(nextIndex).fadeIn(1200);

    currentIndex = nextIndex;
  }, 3000)

  // nav
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(400);
  })
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(400);
  })
  // tab
  const tabBtn = $(".info-menu>a");
  const tabCont = $(".info-cont > div");
  tabCont.hide().first().show();

  tabBtn.on("click", function(){
    const index = $(this).index();
    tabBtn.eq(index).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
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