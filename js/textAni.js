// .sub-banner 클래스를 가진 요소를 찾습니다.
const subBannerElement = document.querySelector('.sub-banner');

// 해당 요소가 존재하는 경우, 스크립트를 실행합니다.
if (subBannerElement) {

  const boxs = document.querySelectorAll('article');

  //box를 반복
  boxs.forEach((box,idx)=>{

    setTimeout(function(){
      box.classList.add("on");
    },10)

    const h1 = box.querySelector('h1');
    const txt = h1.innerText;

    let tags = '';

    // 각 ariticle 안쪽의 h1 문자를 다시 반복돌면서 span으로 감싸는 문자열 생성
    for(const el of txt){
      tags += `<span>${el}</span>`
    }

    // 생성된 태그구성 문자열을 h1 요소에 삽입
    h1.innerHTML = tags;

    // h1안쪽의 span요소의 갯수만큼 반복을 돌면서 transitionDelay값 설정
    const $$span = h1.querySelectorAll('span');

    $$span.forEach(function(el,idx){
      el.style.transitionDelay = 0.05 * idx + 's';
    });

  });


}

// Mask animation 

(function () {
const hero = document.querySelector(".hero-secondary")
const tl = gsap.timeline({
  delay: 1
})

tl.to(hero, {
  "--maskSize1": "4%",
  duration: 0.5,
  ease: "back.out(2)",
}).to(hero, {
  "--maskSize2": "10%",
  "--maskSize3": "calc(10% + 0.1rem)",
  duration: 0.5,
  delay: 0.5,
  ease: "back.out(2)",
})

// window.addEventListener("mousemove", (e) => {
//   const {
//     clientX,
//     clientY
//   } = e
//   const x = Math.round((clientX / window.innerWidth) * 100)
//   const y = Math.round((clientY / window.innerHeight) * 100)

//   gsap.to(hero, {
//     "--x": `${x}%`,
//     "--y": `${y}%`,
//     duration: 0.3,
//     // ease: "sine.out",
//      ease: "power2.out",
//   })
// })

  
  window.addEventListener("mousemove", (e) => {
    // 스크롤 위치를 고려한 계산
    const {
      clientX,
      clientY,
      pageY
    } = e
    const scrollY = window.scrollY

    // x는 viewport 너비 기준
    const x = Math.round((clientX / window.innerWidth) * 100)

    // y는 전체 문서 높이 기준으로 계산
    const y = Math.round(((clientY + scrollY) / document.documentElement.scrollHeight) * 100)

    gsap.to(hero, {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 0.3,
      ease: "sine.out",
    })
  })

})();
  

