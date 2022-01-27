// 변수 선언할 때: var, var, const
// 오래된 자바스크립트는 - var
// javascript 버전: es5... es6 - var, const 를 많이 씀.
// var 특징 - 재선언 가능, 같은 파일에서 같은 이름 할당가능
// 브라우저마다 호환되는 자바스크립트 버전이 있다 


/** 버튼 눌렀을때 수동으로 가도록 한다 */

var slideIndex = 0;

showSlides(slideIndex);

function plusSlides(n) {
  console.log('plusSlides');
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  console.log('currentSlide');
  showSlides(slideIndex = n);
}

function showSlides(n) {// 1번슬라이드
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  console.log('n : ', n); // 1번슬라이드
  console.log('slides.length : ', slides.length); // 총슬라이드 개수 : 5
  
  // 유효한 경우 0~4
  
  if (n > slides.length-1) { // 5 > 4
    // 이 if문이 실행되는 경우는
    // 마지막 슬라이드에서 오른쪽버튼을 누를때 더 갈 수 없으니까 첫번째 슬라이드로 가도록 바꾸기
    slideIndex = 0; 
  }
  
  if (n < 0) {  // -1 < 0
    // 이 if문이 실행되는 경우는
    // 첫번째 슬라이드에서 왼쪽 버튼을 누를 때 더 갈 수 없으니까 마지막 슬라이드로 가도록 바꾸기
    slideIndex = slides.length - 1; 
  }

  for (i = 0; i < slides.length; i++) {
    // TODO: 깜빡거리는 이슈 해결하기
    slides[i].style.display = "none"; // 이 문법이 뭐하는 문법일까? 슬라이드를 아예 없애는 것
  }

  // TODO: 버튼을 눌렀을때 해당 인덱스로 가도록 변경해야한다
  // TODO: 현재 index에서는 진한 색으로 보이도록 한다.
  for (i = 0; i < dots.length; i++) {
    // 모든 점을 "dot" (active 모두제거)
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // slides = [첫번째슬라이드DOM, 두번째슬라이드DOM, 세번째, 네번째, 다섯번째];
  // slideIndex = 2 
  // slides[2 - 1] = 두번째슬라이드;
  
  // slideIndex - 1~5
  // slides = []

  /**
   * array 
   * const num = [1,2,3,4]; 
   */

  // 첫번째 DOM 꺼냈어 
  slides[slideIndex].style.display = "block";
  // 첫번째 점을 꺼냈어 - 클래스
  dots[slideIndex].className += " active";
  // 변경후  "dot active"           변경전 "dot"                       +" active"
  // dots[slideIndex - 1].className = dots[slideIndex - 1].className + " active";
}

// 바꾸고싶은것
// 1. slideIndex 0 부터 시작하면 안되나.... > 해결
// 2. 깜박거리는거 없앨수 없나..
// 3. 점 눌렀을 때 이동하도록 한다.

// 정리
// 1. 한바퀴 다 돌면서 슬라이드를 display none처리한다
// 2. 한바퀴 다 돌면서 점을 연한색으로 처리한다 (className에서 active제거)
// 3. 해당되는 슬라이드를 block처리한다
// 4. 해당되는 점의 className에 active를 붙인다

/** 자동으로 넘어간다 */

var slideIndexTemp = 0;
// showSlidesTemp();

function showSlidesTemp() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndexTemp++;

  if (slideIndexTemp > slides.length) {
    slideIndexTemp = 1
  }

  slides[slideIndexTemp - 1].style.display = "block";

  setTimeout(showSlides, 10000);
}