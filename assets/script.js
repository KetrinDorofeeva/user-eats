/*Переключение категорий меню*/
function switchDisplay(id) {
    let el = document.getElementById(id);

    if (!!el) {
        el.style.display = (el.style.display == 'none') ? '' : '';
        return false;
    }
}


/*Смена цвета выбранной категории меню*/
let nav = document.getElementById('nav_menu');
let selectedA;

function active(event) {
    if (selectedA) {
        selectedA.classList.remove('active_link');
    }

    selectedA = event;
    selectedA.classList.add('active_link');
}

nav.onclick = function(event) {
    let target = event.target;

    while (target != this) {
        if (target.tagName == 'A') {
            active(target);
            return;
        }

        target = target.parentNode;
    }
}


/*Фиксированное меню*/
$(document).scroll(function() {
    if ($(document).scrollTop() > $('header').height() + $('section').height() - 90) {
        $('nav').addClass('fixed');
        $('header').removeClass();
    } else {
        $('nav').removeClass('fixed');
        $('header').addClass()
    }
});


/*Модальное окно регистрации*/
var modal_registration = document.getElementById("myModal_registration");
var btn_registration = document.getElementById("myBtn_registration");
var cross_registration = document.getElementsByClassName("close_registration")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_registration.onclick = function() {
    modal_registration.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_registration.onclick = function() {
    modal_registration.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_registration) {
        modal_registration.style.display = "none";
    }
}


/*Переход с регистрации на авторизацию*/
function login() {
    modal_registration.style.display = "none";
    modal_login.style.display = "block";
}


/*Модальное окно авторизации*/
var modal_login = document.getElementById("myModal_login");
var btn_login = document.getElementById("myBtn_login");
var cross_login = document.getElementsByClassName("close_login")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_login.onclick = function() {
    modal_login.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_login.onclick = function() {
    modal_login.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_login) {
        modal_login.style.display = "none";
    }
}


/*Переход с авторизации на регистрацию*/
function registration() {
    modal_login.style.display = "none";
    modal_registration.style.display = "block";
}


/*Модальное окно корзины*/
// var modal_card = document.getElementById("myModal_card");
// var btn_card = document.getElementById("myBtn_card");
// var cross_card = document.getElementsByClassName("close_card")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
// btn_card.onclick = function() {
//     modal_card.style.display = "block";
// }

//Когда пользователь нажимает на крестик, закрывается модальное окно
// cross_card.onclick = function() {
//     modal_card.style.display = "none";
// }

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
// window.onclick = function(event) {
//     if (event.target == modal_card) {
//         modal_card.style.display = "none";
//     }
// }


/*Модальное окно товара*/
/*1. Сельдь на бородинском хлебе*/
var modal_1 = document.getElementById("myModal_1");
var btn_1 = document.getElementById("myBtn_1");
var cross_1 = document.getElementsByClassName("close_1")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_1.onclick = function() {
    modal_1.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_1.onclick = function() {
    modal_1.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_1) {
        modal_1.style.display = "none";
    }
}

/*2. Соленья ассорти*/
var modal_2 = document.getElementById("myModal_2");
var btn_2 = document.getElementById("myBtn_2");
var cross_2 = document.getElementsByClassName("close_2")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_2.onclick = function() {
    modal_2.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_2.onclick = function() {
    modal_2.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_2) {
        modal_2.style.display = "none";
    }
}

/*3. Грибы маринованные*/
var modal_3 = document.getElementById("myModal_3");
var btn_3 = document.getElementById("myBtn_3");
var cross_3 = document.getElementsByClassName("close_3")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_3.onclick = function() {
    modal_3.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_3.onclick = function() {
    modal_3.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_3) {
        modal_3.style.display = "none";
    }
}

/*4. Сало домашнее с горчицей*/
var modal_4 = document.getElementById("myModal_4");
var btn_4 = document.getElementById("myBtn_4");
var cross_4 = document.getElementsByClassName("close_4")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_4.onclick = function() {
    modal_4.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_4.onclick = function() {
    modal_4.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_4) {
        modal_4.style.display = "none";
    }
}

/*5. Малосольная семга*/
var modal_5 = document.getElementById("myModal_5");
var btn_5 = document.getElementById("myBtn_5");
var cross_5 = document.getElementsByClassName("close_5")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_5.onclick = function() {
    modal_5.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_5.onclick = function() {
    modal_5.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_5) {
        modal_5.style.display = "none";
    }
}

/*6. Язык говяжий с хреном*/
var modal_6 = document.getElementById("myModal_6");
var btn_6 = document.getElementById("myBtn_6");
var cross_6 = document.getElementsByClassName("close_6")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_6.onclick = function() {
    modal_6.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_6.onclick = function() {
    modal_6.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_6) {
        modal_6.style.display = "none";
    }
}

/*7. Цезарь*/
var modal_7 = document.getElementById("myModal_7");
var btn_7 = document.getElementById("myBtn_7");
var cross_7 = document.getElementsByClassName("close_7")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_7.onclick = function() {
    modal_7.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_7.onclick = function() {
    modal_7.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_7) {
        modal_7.style.display = "none";
    }
}

/*8. Мимоза*/
var modal_8 = document.getElementById("myModal_8");
var btn_8 = document.getElementById("myBtn_8");
var cross_8 = document.getElementsByClassName("close_8")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_8.onclick = function() {
    modal_8.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_8.onclick = function() {
    modal_8.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_8) {
        modal_8.style.display = "none";
    }
}

/*9. Оливье*/
var modal_9 = document.getElementById("myModal_9");
var btn_9 = document.getElementById("myBtn_9");
var cross_9 = document.getElementsByClassName("close_9")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_9.onclick = function() {
    modal_9.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_9.onclick = function() {
    modal_9.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_9) {
        modal_9.style.display = "none";
    }
}

/*10. Нисуаз*/
var modal_10 = document.getElementById("myModal_10");
var btn_10 = document.getElementById("myBtn_10");
var cross_10 = document.getElementsByClassName("close_10")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_10.onclick = function() {
    modal_10.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_10.onclick = function() {
    modal_10.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_10) {
        modal_10.style.display = "none";
    }
}

/*11. Минестроне*/
var modal_11 = document.getElementById("myModal_11");
var btn_11 = document.getElementById("myBtn_11");
var cross_11 = document.getElementsByClassName("close_11")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_11.onclick = function() {
    modal_11.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_11.onclick = function() {
    modal_11.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_11) {
        modal_11.style.display = "none";
    }
}

/*12. Солянка*/
var modal_12 = document.getElementById("myModal_12");
var btn_12 = document.getElementById("myBtn_12");
var cross_12 = document.getElementsByClassName("close_12")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_12.onclick = function() {
    modal_12.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_12.onclick = function() {
    modal_12.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_12) {
        modal_12.style.display = "none";
    }
}

/*13. Гаспачо*/
var modal_13 = document.getElementById("myModal_13");
var btn_13 = document.getElementById("myBtn_13");
var cross_13 = document.getElementsByClassName("close_13")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_13.onclick = function() {
    modal_13.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_13.onclick = function() {
    modal_13.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_13) {
        modal_13.style.display = "none";
    }
}

/*14. Сырный суп*/
var modal_14 = document.getElementById("myModal_14");
var btn_14 = document.getElementById("myBtn_14");
var cross_14 = document.getElementsByClassName("close_14")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_14.onclick = function() {
    modal_14.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_14.onclick = function() {
    modal_14.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_14) {
        modal_14.style.display = "none";
    }
}

/*15. Французский омлет*/
var modal_15 = document.getElementById("myModal_15");
var btn_15 = document.getElementById("myBtn_15");
var cross_15 = document.getElementsByClassName("close_15")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_15.onclick = function() {
    modal_15.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_15.onclick = function() {
    modal_15.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_15) {
        modal_15.style.display = "none";
    }
}

/*16. Цыпленок качьятори*/
var modal_16 = document.getElementById("myModal_16");
var btn_16 = document.getElementById("myBtn_16");
var cross_16 = document.getElementsByClassName("close_16")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_16.onclick = function() {
    modal_16.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_16.onclick = function() {
    modal_16.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_16) {
        modal_16.style.display = "none";
    }
}

/*17. Курзе*/
var modal_17 = document.getElementById("myModal_17");
var btn_17 = document.getElementById("myBtn_17");
var cross_17 = document.getElementsByClassName("close_17")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_17.onclick = function() {
    modal_17.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_17.onclick = function() {
    modal_17.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_17) {
        modal_17.style.display = "none";
    }
}

/*18. Люля-кебаб*/
var modal_18 = document.getElementById("myModal_18");
var btn_18 = document.getElementById("myBtn_18");
var cross_18 = document.getElementsByClassName("close_18")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_18.onclick = function() {
    modal_18.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_18.onclick = function() {
    modal_18.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_18) {
        modal_18.style.display = "none";
    }
}

/*19. Кетчуп*/
var modal_19 = document.getElementById("myModal_19");
var btn_19 = document.getElementById("myBtn_19");
var cross_19 = document.getElementsByClassName("close_19")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_19.onclick = function() {
    modal_19.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_19.onclick = function() {
    modal_19.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_19) {
        modal_19.style.display = "none";
    }
}

/*20. Сырный соус*/
var modal_20 = document.getElementById("myModal_20");
var btn_20 = document.getElementById("myBtn_20");
var cross_20 = document.getElementsByClassName("close_20")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_20.onclick = function() {
    modal_20.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_20.onclick = function() {
    modal_20.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_20) {
        modal_20.style.display = "none";
    }
}

/*21. Чесночный соус*/
var modal_21 = document.getElementById("myModal_21");
var btn_21 = document.getElementById("myBtn_21");
var cross_21 = document.getElementsByClassName("close_21")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_21.onclick = function() {
    modal_21.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_21.onclick = function() {
    modal_21.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_21) {
        modal_21.style.display = "none";
    }
}

/*22. Панна Котта*/
var modal_22 = document.getElementById("myModal_22");
var btn_22 = document.getElementById("myBtn_22");
var cross_22 = document.getElementsByClassName("close_22")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_22.onclick = function() {
    modal_22.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_22.onclick = function() {
    modal_22.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_22) {
        modal_22.style.display = "none";
    }
}

/*23. Торт Павлова*/
var modal_23 = document.getElementById("myModal_23");
var btn_23 = document.getElementById("myBtn_23");
var cross_23 = document.getElementsByClassName("close_23")[0];

//Когда пользователь нажимает на кнопку, открывается модальное окно
btn_23.onclick = function() {
    modal_23.style.display = "block";
}

//Когда пользователь нажимает на крестик, закрывается модальное окно
cross_23.onclick = function() {
    modal_23.style.display = "none";
}

//Когда пользователь щелкает в любом месте за пределами модального окна, оно зыкрывается
window.onclick = function(event) {
    if (event.target == modal_23) {
        modal_23.style.display = "none";
    }
}


/*Счетчик товаров*/
let minus = document.getElementById('minus');
let num = document.getElementById('num');
let plus = document.getElementById('plus');

minus.onclick = () => {
    if (num.value >= 2) {
        num.value--;
    }
}

plus.onclick = () => {
    if (num.value <= 9) {
        num.value++;
    }
}