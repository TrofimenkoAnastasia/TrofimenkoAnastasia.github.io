
/* Parallax / Параллакс */
/* https://www.youtube.com/watch?v=BfEQ1qgYsts&list=PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA&index=8 */

function parallax (element, distance, speed) {
  const item = document.querySelector(element);
  const h = item.previousElementSibling.getBoundingClientRect().top + pageYOffset + item.previousElementSibling.offsetHeight;
  item.style.transform = 'translateY(' + ((distance - h) * speed) + 'px)';
}

window.addEventListener('scroll', function(){
  parallax('.parallax', window.scrollY, 0.8);
});


/* Слайдер с преимуществами (срабатывает только на мобильной версии с помощью точек) */
/* https://www.youtube.com/watch?v=KcdBOoK3Pfw&list=PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA&index=3 */

/* Gallery-foto-carousel */

const popapFotoGallery = document.querySelector('#gallery-foto-popap');

gallery('.gallery-foto');
gallery('.gallery-video');

function gallery (element) {
	const gallery = document.querySelector(element);
	const carouselSlide = gallery.children[0].children[0]; /* '.gallery-foto-carousel' */
	const carouselImages = carouselSlide.children; /* Внутри карусели находим все картинки*/

	/* Кнопки / Buttons */
	const nextBtn = gallery.children[1]; 
	const prevBtn = gallery.children[2] 
	
	/*точки*/
	var dots = gallery.children[3].children;
	
	/* Counter / счетчик */
	let counter = 0;
	const size = carouselImages[0].clientWidth;

	dots[counter].classList.add('active');

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


/* Закрытие модальнвх окон */
var popap_close = document.querySelectorAll(".popap-close");
for (var i=0; i<popap_close.length; i++) {
	popap_close[i].addEventListener('click', ()=> {
	  popapFotoGallery.style.display = 'none';
	});
}
console.log(popapFotoGallery.children[0]);






/* Custom select */


var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

