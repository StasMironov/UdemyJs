let newEl = document.createElement("div"),
    menu = document.querySelector(".menu"),
    item = document.querySelectorAll('.menu-item'),
    wrapper = document.querySelector('body'),
    titleEl = document.getElementById("title"),
    adv = document.querySelector(".adv"),
    promts = document.getElementById("prompt"),
    temp = item[1];

    promts.textContent = prompt('Test', "");

    adv.parentNode.removeChild(adv);


menu.replaceChild(item[2], item[1]);
menu.insertBefore(temp, item[3]);

newEl.classList.add("menu-item");
newEl.textContent = "Пятый пункт";
menu.appendChild(newEl);

wrapper.style.backgroundImage = "url('./img/apple_true.jpg')";

titleEl.textContent = "Мы продаем только подлинную технику Apple";
adv.innerHTML = 'efefef';
