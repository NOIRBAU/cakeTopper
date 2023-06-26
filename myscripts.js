// CARRUSEL //

const btnLeft = document.querySelector(".btn--izquierdo"),
    btnRight = document.querySelector(".btn--derecho"),
    slider = document.querySelector("#carrusel-slider"),
    sliderSection = document.querySelectorAll(".slider__section");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval ( () => {
    moveToRight()
}, 3000);

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter= sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
}

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter= 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    counter++;    
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
}

// SCROLL UP //

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.goTop__container')
        .classList.add('show');
    }else{
        document.querySelector('.goTop__container')
        .classList.remove('show');
    }   
}

document.querySelector('.goTop__container')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
