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

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length-1) {
    slideIndex = 0; 
  }
  
  if (n < 0) { 
    slideIndex = slides.length - 1; 
  }

  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "block"; 
  // }

  // 나머지(총4개)를 안보이게 한다 0 1 2 3 4
  // slides[2].style.display = "none";
  // slides[3].style.display = "none";
  // slides[4].style.display = "none";
  // slides[0].style.display = "none";

  for (i=0; i<slides.length; i++) {
    // "특정 경우에만" : 현재 슬라이드아닌 경우
    // slideIndex 얘네 두개가 다를 때 쓰는 연산자가 뭘까..? i
    // 현재 슬라이드가 아닐때는
    if (slideIndex !== i) {
      slides[i].style.display = "none"; 
    } else {
      slides[i].style.display = "block"; 
    }
    // 현재 슬라이드일때는 block으로 처리하라
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }


  // slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// 바꾸고싶은것
// 1. slideIndex 0 부터 시작하면 안되나.... > 해결
// 2. 깜박거리는거 없앨수 없나.. > 어쩔 수 없는 시간차로...알아봐야할듯..
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