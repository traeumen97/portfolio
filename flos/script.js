/** 버튼 눌렀을때 수동으로 가도록 한다 */

var slideIndex = 0;

showSlides(slideIndex);

function plusSlides(n) {
  console.log('plusSlides');
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  // 이 로직은 버튼 클릭했을때 해당되는 페이지로가도록 하는로직
  // 1. slideIndex를 점에 해당되는 인덱스로 변경
  // 2. showSlides(n)를 실행해서 슬라이드가 실제로 보이도록 함.
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

  for (i=0; i<slides.length; i++) {
    if (slideIndex !== i) {
      slides[i].style.display = "none"; 
    } else {
      slides[i].style.display = "block"; 
    }
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex].className += " active";
}

/** 점을 클릭했을 때 해당되는 슬라이드로 이동하도록 한다 */
// 1. 점에 해당되는 dom 여러개를 받아온다.
// 2. 점에 해당되는 dom에 이벤트를 바인딩한다.
// 이벤트 - 클릭하면 이동함

/** 자동으로 넘어간다 */

function interval() {
  currentSlide(slideIndex+1);
}

setInterval(interval, 3000);
