$(function(){
  // slider : 페이드
  let currentIndex = 0;
  $(".slider").hide().first().show();
  setInterval(function(){
    let nextIndex = (currentIndex+1) % 3
    $(".slider").eq(currentIndex).fadeOut(1200);
    $(".slider").eq(nextIndex).fadeIn(1200);
    currentIndex = nextIndex
  }, 3000)

  // nav : 가상배경
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().fadeIn(600);
    $("#header").addClass("on")
  })
  $(".nav>ul>li").mouseout(function(){
    $(".submenu").stop().fadeOut(600);
    $("#header").removeClass("on")
  })

  // 탭
  const tabBtn = $(".info-menu>a")
  const tabCont = $(".info-cont>div")
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function(){
    const index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  })

})