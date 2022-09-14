const navToggle = document.querySelector(".nav-toggle");
const mainMenu = document.querySelector(".main-menu");
const navToggleLabel = document.querySelector(".nav-toggle-label");

navToggle.addEventListener("click", () => {
    mainMenu.classList.toggle("active");
    navToggleLabel.classList.toggle("active");
});

mainMenu.addEventListener("click", (event) => {
    if(event.target){
        mainMenu.classList.remove("active");
        navToggleLabel.classList.remove("active");
    }
}); 




let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
        body.style.overflow = "auto";
        body.style.margin = "0px";
    };
}
close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};







var elements = document.querySelectorAll(".btn");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function(){
    var divsToHide = document.getElementsByClassName("input");
    var valid = document.getElementsByClassName("valid");
    var images = document.getElementsByClassName("bg__form");
    var textForm = document.getElementsByClassName("text__form");
    var modalMain = document.getElementsByClassName("modal");
    var popupWrapp = document.getElementsByClassName("popup__wrapp");
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "hidden";
        divsToHide[i].style.display = "none";
    }
	elements[0].style.display = "none";
    valid[0].style.display = "block";
    images[0].style.display = "none";
    textForm[0].style.display = "none";
    modalMain[0].style.height = "290px";
    modalMain[0].style.top = "15%";
    popupWrapp[0].style.display = "flex";
    };
};

var element = document.querySelectorAll(".btn__next");
for (var i = 0; i < element.length; i++) {
    element[i].onclick = function(){
    var divToHide = document.getElementsByClassName("input__next");
    var validNext = document.getElementsByClassName("valid__next");
    for(var i = 0; i < divToHide.length; i++){
        divToHide[i].style.visibility = "hidden";
        divToHide[i].style.display = "none";
    }
	element[0].style.display = "none";
    validNext[0].style.display = "block";
    };
};



$('.slider').slick({
    dots:false,
    arrows: true,
    adaptiveHeight:true,
    slidesToShow: 3,
    loop:true,
    infinite:true,
    speed:800,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                dots:true,
                arrows:false

            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                dots:true,
                arrows:false
            }
        },
    ]
    
})

$('.mySwiper').slick({
    infinite: true,
    dots:false,
    slidesToShow:3,
    slidesToScroll: 1,
    speed:500,
    responsive: [
        {
            breakpoint:1450,
            settings: {
                slidesToShow:2,
                dots:true,
                arrows:false
            }
        },
        {
            breakpoint:1000,
            settings: {
                slidesToShow:1,
                dots:true,
                arrows:false
            }
        }

    ]
})
$('.slider__edge').slick({
    infinite: true,
    dots:false,
    slidesToShow:3,
    slidesToScroll: 1,
    speed:500,
    responsive: [
        {
            breakpoint:1450,
            settings: {
                slidesToShow:2,
                dots:true,
                arrows:false
            }
        },
        {
            breakpoint:760,
            settings: {
                slidesToShow:1,
                dots:true,
                arrows:false
            }
        }

    ]
})


$(document).ready(function(){
    $('.social__slider').slick({
        Infinity: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
    });
});





$('body').append('<div class="upbtn"></div>');            
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            bottom: '315px'
        });
        } else {
        $('.upbtn').css({
            bottom: '-80px'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});






