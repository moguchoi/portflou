// 배너 영역 자동 슬라이드 초기화
const bannerSwiper = new Swiper('.banner-swiper', {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 4000, // 4초마다 자동 슬라이드
        disableOnInteraction: false, // 마우스 클릭 후에도 자동 슬라이드 유지
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// 2. Signature 영역 슬라이드
const signatureSwiper = new Swiper('.signature-swiper', {
    slidesPerView: 4,     // 한 화면에 4개 표시
    slidesPerGroup: 1,    // 1개씩 슬라이드 진행
    spaceBetween: 20,     // 슬라이드 간격
    loop: true,           // 무한 반복
    autoplay: {           // 자동 슬라이드 추가
        delay: 3000,      // 3초마다 슬라이드
        disableOnInteraction: false, // 클릭 후에도 자동 슬라이드 유지
    },
    navigation: {
        nextEl: '.sig-next',
        prevEl: '.sig-prev',
    },
});

const dessertSwiper = new Swiper('.dessert-swiper', {
    slidesPerView: 4,     // 한 화면에 4개 표시
    slidesPerGroup: 1,    // 1개씩 슬라이드 진행
    spaceBetween: 20,     // 슬라이드 간격
    loop: true,           // 무한 반복
    autoplay: {           // 자동 슬라이드 추가
        delay: 3000,      // 3초마다 슬라이드
        disableOnInteraction: false, // 클릭 후에도 자동 슬라이드 유지
    },
    navigation: {
        nextEl: '.sig-next',
        prevEl: '.sig-prev',
    },
});

//about 탭버튼
$(document).ready(function () {
    // 탭 버튼 클릭 이벤트 바인딩
    $('.tab-btn').on('click', function () {
        // 1. 클릭한 버튼의 타겟 패널 ID 가져오기
        const panelId = $(this).attr('data-id');

        // 2. 버튼 활성화 상태 변경
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');

        // 3. 현재 열려있는 패널 숨기고 새로운 패널 서서히 나타내기
        $('.tab-panel').removeClass('active').hide();
        $('#' + panelId).fadeIn(400).addClass('active');
    });
});

//space 스와이퍼
$(document).ready(function () {
    // Swiper 초기화
    const swiper = new Swiper(".space_swiper", {
        loop: true,
        speed: 800,
        effect: "fade", // 부드러운 전환을 원할 경우 'fade' 사용 가능
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
        },
        on: {
            init: function () {
                $('.total').text(String(this.slides.length).padStart(2, '0'));
            },
            slideChange: function () {
                // 루프 모드일 때 실제 인덱스 계산
                let realIdx = this.realIndex + 1;
                $('.curr').text(String(realIdx).padStart(2, '0'));
            }
        }
    });
});