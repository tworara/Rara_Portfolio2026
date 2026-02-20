$(function () {

  var swiper = new Swiper(".rara_Swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true
  });




  $('.likemenu li').click(function () {
    // 1) 오른쪽 메뉴 on 토글
    $(this).addClass('on').siblings().removeClass('on');

    // 2) 클릭한 메뉴의 공통 클래스(otaku/kt/v/cafe) 찾기
    const target = $(this).attr('class').split(' ')
      .find(c => ['otaku', 'kt', 'v', 'cafe'].includes(c));

    // 3) 왼쪽 이미지 on 초기화 후, 같은 클래스만 on 추가
    $('.likeimg li').removeClass('on');
    $('.likeimg li.' + target).addClass('on');
  });







  $('.tmiq_btn').click(function () {
    const num = $(this).data('num')
    const text = $(this).data('text')

    $(this).addClass('on');

    $('.' + num).text(text)

  })


  $('.menubox div').click(function () {
    const target = $(this).data('target');
    const index = $('#' + target).index()

    swiper.slideToLoop(index);
  })

  /* swiper.on('init',function(){
    const currentIndex = swiper.realIndex;

    $('.menubox div[data-index="'+currentIndex+'"]').addClass('active');
    
  });

  swiper.init();
  
*/

  // 진짜 슬라이드(복제 제외)만 모아두기
  const $realSlides = $('.rara_Swiper .swiper-slide').not('.swiper-slide-duplicate');

  function setMenuActiveById(id) {
    $('.menubox > div').removeClass('active');
    $('.menubox > div[data-target="' + id + '"]').addClass('active');
  }

  function getRealIndexById(id) {
    return $realSlides.index($realSlides.filter('#' + id));
  }

  // 메뉴 클릭 → 정확한 순서로 이동
  $('.menubox > div').on('click', function () {
    const targetId = $(this).data('target'); // like/good/tmi
    const realIndex = getRealIndexById(targetId);

    if (realIndex === -1) return; // id 못 찾으면 중단

    setMenuActiveById(targetId);
    swiper.slideToLoop(realIndex, 600);
  });

  // 스와이프/버튼 이동 시 → 메뉴도 자동 동기화
  swiper.on('slideChange', function () {
    const realIndex = swiper.realIndex;
    const currentId = $realSlides.eq(realIndex).attr('id');
    setMenuActiveById(currentId);
  });

  // 최초 로딩 시 동기화
  $(function () {
    const realIndex = swiper.realIndex;
    const currentId = $realSlides.eq(realIndex).attr('id');
    setMenuActiveById(currentId);
  });


  

})