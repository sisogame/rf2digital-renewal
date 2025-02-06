// .sub-banner 클래스를 가진 요소를 찾습니다.
const subBannerElement = document.querySelector('.sub-banner');

// 해당 요소가 존재하는 경우, 스크립트를 실행합니다.
if (subBannerElement) {

  const boxs = document.querySelectorAll('article');

  //box를 반복
  boxs.forEach((box, idx) => {

    setTimeout(function () {
      box.classList.add("on");
    }, 10)

    const h1 = box.querySelector('h1');
    const txt = h1.innerText;

    let tags = '';

    // 각 ariticle 안쪽의 h1 문자를 다시 반복돌면서 span으로 감싸는 문자열 생성
    for (const el of txt) {
      tags += `<span>${el}</span>`
    }

    // 생성된 태그구성 문자열을 h1 요소에 삽입
    h1.innerHTML = tags;

    // h1안쪽의 span요소의 갯수만큼 반복을 돌면서 transitionDelay값 설정
    const $$span = h1.querySelectorAll('span');

    $$span.forEach(function (el, idx) {
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
    "--maskSize1": "3%",
    duration: 0.5,
    ease: "back.out(2)",
  }).to(hero, {
    "--maskSize2": "6%",
    "--maskSize3": "calc(6% + 1px)",
    duration: 0.5,
    delay: 0.5,
    ease: "back.out(2)",
  })


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


//Blob Mouse Trail
(function () {
  const blob = document.getElementById('blob');

  document.body.onpointermove = event => {
    const {
      clientX,
      clientY
    } = event;

    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, {
      duration: 3000,
      fill: 'forwards'
    });
  }
})();


// zoom-image-scroll

(function () {
  gsap.registerPlugin(ScrollTrigger);

  // 기본 배너 애니메이션
  gsap.fromTo(".banner .background", {
    scale: 1.25,
    opacity: 1
  }, {
    scale: 1,
    opacity: 1,
    duration: 6.5,
    ease: "power1.inOut"
  });

  // 배경 패럴랙스
  gsap.to(".banner .background", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // 텍스트 아래로 이동하는 패럴랙스
  gsap.to(".banner-title", {
    yPercent: 30, // 양수값으로 변경하여 아래로 이동
    ease: "none",
    scrollTrigger: {
      trigger: ".banner",
      start: "top top",
      end: "bottom top",
      scrub: 0.5
    }
  });

})();




// (function () {
//     var image = document.getElementById('myImage');

//     image.addEventListener('click', function(){
//         changeImage();
//     });

//     function changeImage(){
//         image.src = '../img/logo-sub.png';
//     }
//   })();



