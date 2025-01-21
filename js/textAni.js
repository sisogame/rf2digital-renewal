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


  const pinnedImages = document.querySelectorAll('.pinned-image');

  pinnedImages.forEach(pinnedImage => {
    const container = pinnedImage.querySelector('.pinned-image__container');
    const image = container.querySelector('img');
    const overlay = container.querySelector('.pinned-image__container-overlay');
    const quote = pinnedImage.querySelector('.pinned-image__quote');

    const tl = gsap.timeline({
      paused: true
    });
    tl.to(container, {
      scale: 1.1,
    }, 0);
    tl.from(quote, {
      autoAlpha: 0,
    }, 0);
    tl.from(overlay, {
      autoAlpha: 0,
    }, 0);
    const trigger = ScrollTrigger.create({
      animation: tl,
      trigger: pinnedImage,
      start: "top top",
      markers: false,
      pin: true,
      scrub: true,


      // end: "+=50px", // // 원래 요소 높이 + 50px , end: "+=50px"로 설정하면 pin-spacer의 전체 높이는 원래 요소의 높이 + 50px가 됩니다.예를 들어:만약.pinned - image의 높이가 800 px이라면pin - spacer의 최종 높이는 850 px(800 px + 50 px) 가 됩니다
      //  pinSpacing: true,

      // end: "+=600px", // 필요한 경우 스크롤 길이 설정
      // anticipatePin: 1

    });
  });

})();







// AOS 초기화
// AOS.init();

// window.addEventListener('scroll', function () {
//   const scroll = Math.min(window.pageYOffset || document.documentElement.scrollTop, 530);
//   const zoomContent = document.querySelectorAll('.zoom__content');

//   zoomContent.forEach(content => {
//     content.style.transform = `translate(-50%, -50%) scale(${(100 + scroll/5)/100})`;
//   });
// });

