const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
let currentIdx = 1; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 300; //한개의 슬라이드 넓이
const slideMargin = 0; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
    slides.style.left = -num * 300 + 'px';
    currentIdx = num;
    slides.style.transition = `left ${0.5}s ease-out`;
}

//슬라이드가 넘어가는 시간(0.5s) 뒤에 효과 스킵하고 바로 처음, 또는 마지막 이미지로 넘긴다.
function skipEffect(){
    if(currentIdx == 0){
        setTimeout(function () {
            slides.style.left = -(currentIdx + 6) * 300 + 'px';
            currentIdx = currentIdx + 6;
            slides.style.transition = `${0}s`;
          }, 500);
    }else if(currentIdx == 7){
        setTimeout(function () {
            slides.style.left = -(currentIdx - 6) * 300 + 'px';
            currentIdx = currentIdx - 6;
            slides.style.transition = `${0}s`;
          }, 500);
    }
}

prev.addEventListener('click', function () {
  
  if (currentIdx > 1){
        moveSlide(currentIdx - 1); 
    }else if(currentIdx <= 1){
        moveSlide(currentIdx - 1);
        skipEffect();
    }
  
});

next.addEventListener('click', function () {
    if (currentIdx < 6) {
        moveSlide(currentIdx + 1);
    }else if(currentIdx >= 6){
        moveSlide(currentIdx + 1);
        skipEffect();
    }
});