AOS.init({
  delay: 0,
  duration: 1000, // 모든 AOS 애니메이션의 지속 시간을 1초(1000밀리초)로 설정
  disable: function() {
    // 화면 너비가 768픽셀 이하이면 AOS를 비활성화
    return window.innerWidth < 768;
  }
});


//브라우저를 스크롤할 때마다
window.addEventListener("scroll", function () {
  scroll = window.scrollY; // 현재 스크롤 값
  const $header = document.querySelector('.header')

  //스크롤 했을 시 메인 클래스에 on 붙이기
  if (scroll > 100) $header.classList.add("on");
  else $header.classList.remove("on");
});

//링크 이벤트 무시
(function(){
  const $subMenu = document.querySelector('.sub-menu');
  if($subMenu){
    const $$link = document.querySelectorAll('.sub-layout .sub-menu > ul > li > a');
    $$link.forEach(function(el){
      el.addEventListener("click",(e)=>{
        e.preventDefault();
        if(e.target.closest("li").querySelector("a") === el){
          let scollDiv = document.querySelector('#' + el.getAttribute("href"));
          let scollValue = scollDiv.offsetTop + 265;
          window.scrollTo({
            top: scollValue,
            behavior: "smooth", // 부드러운 스크롤 효과
          });
        }
      });
    });
  }
})();