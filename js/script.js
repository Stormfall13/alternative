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
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "hidden";
        divsToHide[i].style.display = "none";
        
    }
	elements[0].style.display = "none";
    valid[0].style.display = "block";
    images[0].style.display = "none";
    textForm[0].style.display = "none";
    };
}
