$(function(){

  // 슬라이더 : 페이드 효과
  let currentIndex =0; // 현재 이미지 설정
  $(".slider").hide().first().show(); // 모든 이미지를 숨기고 첫번째 이미지를 나타냄

  setInterval(function(){ // 3초마다 한번씩 실행
    let nextIndex = (currentIndex+1) % 3

    $(".slider").eq(currentIndex).fadeOut(1200);
    $(".slider").eq(nextIndex).fadeIn(1200);

    currentIndex = nextIndex;
  }, 3000)

  // 메뉴 : 하나씩 나오기
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
  });
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
  });

  // 탭
  const tabBtn = $(".info-menu>a"); //탭메뉴 설정
  const tabCont = $(".info-cont>div") // 탭 콘텐츠 설정
  tabCont.hide().eq(0).show(); // 탭 컨텐츠 숨기고 첫번쩨 컨텐츠만 보임
  
  tabBtn.on("click", function(){
    const index = $(this).index();  //클릭한 버튼의 번호 저장

    $(this).addClass("active").siblings().removeClass("active");  // 클릭한 버튼에 클래스 추가, 나머지는 삭제
    tabCont.eq(index).show().siblings().hide();
  })

  //팝업
  $(".popup-btn").click(function(){
    $(".popup-view").show();
  })
  $(".popup-close").click(function(){
    $(".popup-view").hide();
  })

}) // 끝