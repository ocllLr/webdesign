$(function(){
  // nav
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(300);
  })
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(300);
  })

  // slider
  let currentIndex = 0;
  $(".sliderWrap").append($(".image").eq(0).clone(true));
  
  setInterval(function(){
    currentIndex++;
    $(".sliderWrap").animate({marginTop : -400 * currentIndex + "px"}, 600);
    if(currentIndex == 3){
      setTimeout(function(){
        $(".sliderWrap").animate({marginTop: 0}, 0)
      }, 600)
      currentIndex = 0;
    }
  }, 3000)

  // tab
  const tabBtn = $(".info-menu>a");
  const tabCont = $(".info-cont>div");
  tabCont.hide().eq(0).show();

  tabBtn.click(function(){
    const index = $(this).index();
    tabCont.eq(index).show().siblings().hide();
    tabBtn.eq(index).addClass("active").siblings().removeClass("active");
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