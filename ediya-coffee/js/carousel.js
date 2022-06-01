const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
let currentIdx = 1; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 300; //한개의 슬라이드 넓이
const slideMargin = 0; //슬라이드간의 margin 값

const btn1 = document.querySelector('.btn1');  //슬라이드 하단 버튼
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const controllerBtn = document.querySelectorAll('.controller-button span'); //모든 하단 버튼


//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

//이미지 슬라이드 효과
function moveSlide(num) {
    slides.style.left = -num * 300 + 'px';
    currentIdx = num;
    slides.style.transition = `left 0.3s ease-out`;


    // controllerBtn[currentIdx-1].style.border = '5px solid darkblue';

}

//슬라이드가 넘어가는 시간(0.3s) 뒤에 효과 스킵하고 바로 처음, 또는 마지막 이미지로 넘김
function skipEffect(){
    if(currentIdx == 0){
        setTimeout(function () {
            slides.style.left = -(currentIdx + (slideCount-2)) * 300 + 'px';
            currentIdx = currentIdx + (slideCount-2);
            slides.style.transition = `0s`;
          }, 300);
    }else if(currentIdx == 7){
        setTimeout(function () {
            slides.style.left = -(currentIdx - (slideCount-2)) * 300 + 'px';
            currentIdx = currentIdx - (slideCount-2);
            slides.style.transition = `0s`;
          }, 300);
    }
}

// prev 버튼 클릭 이벤트
prev.addEventListener('click', function () {
  if (currentIdx > 1){
        moveSlide(currentIdx - 1); 
    }else if(currentIdx <= 1){
        moveSlide(currentIdx - 1);
        skipEffect();
    }
  
});

// next 버튼 클릭 이벤트
next.addEventListener('click', function () {
    if (currentIdx < 6) {
        moveSlide(currentIdx + 1);
    }else if(currentIdx >= 6){
        moveSlide(currentIdx + 1);
        skipEffect();
    }
});