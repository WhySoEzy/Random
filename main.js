let badge = document.querySelector('.badge');
let badgeValue = document.getElementById('badge-text')

let addToCart = document.getElementById('button');
let removeQty = document.getElementById('outline');
let clearAll = document.getElementById('clearAllValue');

let Count = 0;

addToCart.addEventListener('click', function () {
    Count++
    if (Count == 1) {
        badge.classList.add('show');
        clearAll.classList.add('show');
    }
    if (Count > 0) {
        badgeValue.textContent = Count;
    }
});

removeQty.addEventListener('click', function () {
    if (Count == 0) {
        badge.classList.remove('show');
        clearAll.classList.remove('show');
        badgeValue.textContent = Count;
    }
    if (Count > 0) {
        badgeValue.textContent = Count--;
    }
})

clearAll.addEventListener('click', function () {
    if (Count >= 1) {
        badgeValue.textContent = Count;
        clearAll.classList.remove('show');
        badge.classList.remove('show');
        Count = 0;
    }
});

let isDark = document.getElementById('themeSwitch');
let h1 = document.getElementsByTagName('h1')
let h2 = document.getElementsByTagName('h2')
let h3 = document.getElementsByTagName('h3')
let p = document.getElementsByTagName('p')
let box = document.getElementsByClassName('box')
let cart = document.getElementsByClassName('cart')


isDark.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    for (let i = 0; i < h1.length; i++) {
        h1[i].classList.toggle('dark');
    }
    for (let i = 0; i < h2.length; i++) {
        h2[i].classList.toggle('dark');
    }
    for (let i = 0; i < h3.length; i++) {
        h3[i].classList.toggle('dark');
    }
    for (let i = 0; i < p.length; i++) {
        p[i].classList.toggle('dark');
    }
    for (let i = 0; i < box.length; i++) {
        box[i].classList.toggle('dark');
    }
    for (let i = 0; i < cart.length; i++) {
        cart[i].classList.toggle('dark');
    }
})