$(function(){
  // nav
  $(".submenu").hide();
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().fadeIn(300);
  })
  $(".nav>ul>li").mouseout(function(){
    $(".submenu").stop().fadeOut(300);
  })
  // slider
  let currentIndex = 0;
  $(".image").hide().eq(currentIndex).show();
  setInterval(function(){
    let nextIndex = (currentIndex + 1) %3;
    $(".image").eq(currentIndex).fadeOut(1200);
    $(".image").eq(nextIndex).fadeIn(1200);

    currentIndex = nextIndex;
  }, 3000)
  // tab
  const tabBtn = $(".info-menu > a");
  const tabCont = $(".info-cont > div");
  tabCont.hide().first().show();

  tabBtn.click(function(){
    const index = $(this).index();
    tabBtn.eq(index).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  })
  // popup
  $(".popup-view").hide()
  $(".popup-btn").on("click", function(){
    $(".popup-view").show();
  })
  $(".popup-close").on("click", function(){
    $(".popup-view").hide();
  })
})
