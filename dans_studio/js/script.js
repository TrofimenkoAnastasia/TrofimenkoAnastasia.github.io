/* Бургер меню */ /*https://www.youtube.com/watch?v=gXkqy0b4M5g*/
/* Burger menu */
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    console.log('nav.classList');
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

}
navSlide();









/* Модальные окна */


var popap_bell = document.querySelector(".popap");
var bell = document.getElementsByClassName("header-btn");
var popap_close = document.querySelector(".popap-close");
const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

for (var i=0; i<bell.length; i++) {
  bell[i].onclick = function() {
    popap_bell.style.display = 'block';
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  }
}

popap_close.addEventListener('click', ()=> {
  popap_bell.style.display = 'none';
  
});
/*for (var i=0; i<popap_close.length; i++) {
	popap_close[i].onclick = function () {
		popap_bell.style.display = 'none';
		popap_question.style.display = 'none';
		popap_option.style.display = 'none';
		popap_order.style.display = 'none';
	}
}
*/



/* Бургер меню */ /*https://www.youtube.com/watch?v=gXkqy0b4M5g*/
/* Burger menu */
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    console.log('nav.classList');
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle')
  });

}
navSlide();


/* Главный слайдер */
/* Mein slider */
var slideIndex = 1;
var dots = document.querySelectorAll('main .dot');
showSlides(slideIndex);

for (i = 0;  i < dots.length; i++) {
  (function(index) {
    dots[i].onclick = function(){
      slideIndex = index + 1;
      showSlides(slideIndex);
    }    
  })(i);
}
function showSlides(slideIndex) {
  var i;
  var slides = document.getElementsByClassName("slider-item");
  var dots = document.querySelectorAll('main .dot');
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var timer;
autoMainSlaider();
function autoMainSlaider() {
  timer = setTimeout(function () {
    var i;
    var slides = document.getElementsByClassName("slider-item");
    var dots = document.querySelectorAll('main .dot');
    
    if (slideIndex > slides.length) {slideIndex = 1} 
    if (slideIndex < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
    slideIndex++
    autoMainSlaider();
  }, 3000)
}


/* Слайдер с преимуществами (срабатывает только на мобильной версии с помощью точек) */
/* Virtues-carousel */
/* https://www.youtube.com/watch?v=KcdBOoK3Pfw&list=PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA&index=3 */

const carouselSlide = document.querySelector('.virtues-items');
const carouselImages = document.querySelectorAll('.virtues-item');

/* Кнопки / Buttons */
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

prevBtn.classList.add('active');
/* слушатели кнопки / button listeners */
nextBtn.addEventListener('click', ()=>{
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  carouselSlide.style.transform = 'translateX(' + (-320) + 'px)';
  nextBtn.classList.add('active');
  prevBtn.classList.remove('active');
});
prevBtn.addEventListener('click', ()=>{
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  carouselSlide.style.transform = 'translateX(' + (0) + 'px)';
  prevBtn.classList.add('active');
  nextBtn.classList.remove('active');
});


/* Читать подробнее / read more */
var text = document.querySelector('.company-content-text');
var img = document.querySelector('.company img').clientHeight;
var moreBtn = document.querySelector('.more');

text.style.height = img - 40 + 'px';

moreBtn.addEventListener('click', () => {
  text.style.height = 100 + '%';
  moreBtn.style.display = 'none';
});





/* Модальные окна */


var popap_bell = document.querySelector(".popap");
var bell = document.getElementsByClassName("header-btn");
var popap_close = document.querySelector(".popap-close");
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

for (var i=0; i<bell.length; i++) {
  bell[i].onclick = function() {
    popap_bell.style.display = 'block';
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  }
}

popap_close.addEventListener('click', ()=> {
  popap_bell.style.display = 'none';
});
/*for (var i=0; i<popap_close.length; i++) {
  popap_close[i].onclick = function () {
    popap_bell.style.display = 'none';
    popap_question.style.display = 'none';
    popap_option.style.display = 'none';
    popap_order.style.display = 'none';
  }
}
*/



/* Слайдер с преимуществами (срабатывает только на мобильной версии с помощью точек) */
/* https://www.youtube.com/watch?v=KcdBOoK3Pfw&list=PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA&index=3 */

/* Gallery-foto-carousel */

const carouselSlide = document.querySelector('.gallery-foto-carousel');
const carouselImages = carouselSlide.children; /* Внутри карусели находим все картинки*/

/* Кнопки / Buttons */
const nextBtn = carouselSlide.parentElement.nextElementSibling; /* Выходим на родителя карусели и находим следующий элемент */
const prevBtn = nextBtn.nextElementSibling; /* Находим следующий элемент за кнопеой */
// точки
var dots = prevBtn.nextElementSibling.querySelectorAll('.dot');

console.log(carouselSlide.querySelectorAll('a'));


/* Counter / счетчик */
let counter = 0;
const size = carouselImages[0].clientWidth;

dots[counter].classList.add('active');


/*for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        console.log(i);
        
    });
}*/

for (i = 0;  i < dots.length; i++) {
  (function (index) {
    dots[i].onclick = function(){
      console.log(index);
      if (index > counter) {
        counter = index - 1;
        next();
        console.log(counter);
      } 
      if (index < counter) {
        counter = index;     /*. !!!!!!!!!! */
        prev();
        console.log(counter);
      }
        else {}
    }    
  })(i);
}

/*dots.forEach((item, index) => {
  
  console.log(index);
});*/

/* слушатели кнопки / button listeners */
nextBtn.addEventListener('click', ()=>{
  next();
});

function next() {
  if (counter >= (carouselImages.length / 3 - 1) ){
    nextBtn.style.display = 'none';
    return;
  }
  counter++;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  carouselSlide.style.transform = 'translateX(' + (-27 * 3 * counter) + 'vw)';
  prevBtn.style.display = 'inline-block';
  nextBtn.style.display = 'inline-block';
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[counter].classList.add('active');

}


prevBtn.addEventListener('click', ()=>{
  prev();
});

function prev() {
    if (counter < 0) {
      prevBtn.style.display = 'none';
      return;
    }
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-27 * 3 * counter) + 'vw)';
    prevBtn.style.display = 'inline-block';
    nextBtn.style.display = 'inline-block';
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[counter].classList.add('active');
}

/* Считыватель нажатой картинки и открытие ее в модальном окне */
/* https://learn.javascript.ru/task/image-gallery */
carouselSlide.onclick = function(event) {
  let thumbnail = event.target.closest('a');
  if (!thumbnail) return;
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
}
const popapFotoGallery = document.querySelector('#gallery-foto-popap');
function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
  popapFotoGallery.style.display = 'block';
  
}


/* Закрытие модальнвх окон */
var popap_close = document.querySelectorAll(".popap-close");
for (var i=0; i<popap_close.length; i++) {
  popap_close[i].addEventListener('click', ()=> {
    popapFotoGallery.style.display = 'none';
  });
}
console.log(popapFotoGallery.children[0]);




  


























videoGallery();

function videoGallery () {
  const vgallery = document.querySelector('.gallery-video');
  console.log(vgallery.children[3].children)
  const vcarouselSlide = vgallery.children[0].children[0]; /* '.gallery-foto-carousel' */
  const vcarouselImages = vcarouselSlide.children; /* Внутри карусели находим все картинки*/

  /* Кнопки / Buttons */
  const vnextBtn = vgallery.children[1]; 
  const vprevBtn = vgallery.children[2] 
  
  /*точки*/
  const vdots = vgallery.children[3].children;
  
  /* Counter / счетчик */
  let counter = 0;
  const vsize = vcarouselImages[0].clientWidth;

  vdots[counter].classList.add('active');

  console.log(gallery.children[3].children)

  /* при клике на точку считывактся индекс точки и подставляется в счктчик */
  for (i = 0;  i < dots.length; i++) {
    (function (index) {
      dots[i].onclick = function(){
        console.log(index);
        if (index > counter) {
          counter = index - 1;
          next();
          console.log(counter);
        } 
        if (index < counter) {
          counter = index;     /*. !!!!!!!!!! */
          prev();
          console.log(counter);
        }
          else {}
      }    
    })(i);
  }

  /* слушатели кнопки / button listeners */
  nextBtn.addEventListener('click', ()=>{
    next();
  });

  prevBtn.addEventListener('click', ()=>{
    prev();
  });

  function next() {
    if (counter >= (carouselImages.length / 3 - 1) ){
      nextBtn.style.display = 'none';
      return;
    }
    counter++;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-27 * 3 * counter) + 'vw)';
    prevBtn.style.display = 'inline-block';
    nextBtn.style.display = 'inline-block';
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[counter].classList.add('active');

  }

  function prev() {
      if (counter < 0) {
        prevBtn.style.display = 'none';
        return;
      }
      carouselSlide.style.transition = 'transform 0.4s ease-in-out';
      counter--;
      carouselSlide.style.transform = 'translateX(' + (-27 * 3 * counter) + 'vw)';
      prevBtn.style.display = 'inline-block';
      nextBtn.style.display = 'inline-block';
      for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      dots[counter].classList.add('active');
  }

  /* Считыватель нажатой картинки и открытие ее в модальном окне */
  /* https://learn.javascript.ru/task/image-gallery */
  carouselSlide.onclick = function(event) {
    let thumbnail = event.target.closest('a');
    if (!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
  }

  function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
    popapFotoGallery.style.display = 'block';
    
  }
}

  

























