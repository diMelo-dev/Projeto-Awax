//Dados iniciais
let sliders = document.querySelectorAll('.sliders');
let pointers = document.querySelectorAll('.pointer');



//Eventos
document.querySelector('.menu_mobile').addEventListener('click', menuAction); 
pointers.forEach(item => {
    item.addEventListener('click', e => {
        clickSlide(e);
    });
});



//Funções
function menuAction() {
    let nav = document.querySelector('header nav');
    let menuDisplayStatus = window.getComputedStyle(nav).display;
    
    if (menuDisplayStatus === 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
  
}


function clickSlide(e) {
    //Quero passar do slide atual para o proximo
    let pointer = e.target;
    let clickedPointer = parseInt(pointer.getAttribute('data-pointer'));
    let sliderPointer = e.target.parentNode;
    let sliderLength = parseInt(sliderPointer.querySelectorAll('.pointer').length);
    let sliderOrder = sliderPointer.getAttribute('data-slider');
    let currentSlider = sliders[sliderOrder];
    let sliderGap = parseInt(window.getComputedStyle(currentSlider).gap.slice(0, -2));
    let slidesWidth = parseInt(window.getComputedStyle(currentSlider.querySelector('.slide')).width.slice(0, -2));
    let margin = -(sliderGap + ((clickedPointer-1) * slidesWidth));

    console.log(margin);

    sliderPointer.querySelectorAll('.pointer').forEach(item => {
        item.classList.remove('active');
    });
    pointer.classList.add('active');
    
    //Em qual seção do site estou?
    //console.log(currentSlider);



    //Qual o slide atual?
    //console.log(currentPointer);



    //Qual o próximo slide?
    
    if (clickedPointer-1 === 0) {
        let margin = -(((clickedPointer-1) * slidesWidth));
        currentSlider.style.marginLeft = `${margin}px`;
    } else {
        let margin = -((clickedPointer-1)*sliderGap + ((clickedPointer-1) * slidesWidth));
        currentSlider.style.marginLeft = `${margin}px`;
    }



    
    //A conta é margin-left: -(gap + (slide atual) * width);
}
