const pages = document.querySelectorAll('.page');

const nextBtns =
document.querySelectorAll('.next');

const prevBtns =
document.querySelectorAll('.prev');

let current = 0;

function showPage(index){

pages.forEach(page=>{
page.classList.remove('active');
});

pages[index].classList.add('active');
}

nextBtns.forEach(btn=>{

btn.addEventListener('click',()=>{

if(current < pages.length - 1){

current++;

showPage(current);

}

});

});

prevBtns.forEach(btn=>{

btn.addEventListener('click',()=>{

if(current > 0){

current--;

showPage(current);

}

});

});

showPage(0);

/* swipe mobile */

let startX = 0;

document.addEventListener(
'touchstart',
e=>{

startX =
e.touches[0].clientX;

}
);

document.addEventListener(
'touchend',
e=>{

const endX =
e.changedTouches[0].clientX;

if(startX - endX > 70){

if(current < pages.length - 1){

current++;

showPage(current);

}

}

if(endX - startX > 70){

if(current > 0){

current--;

showPage(current);

}

}

}
);

/* countdown */

const weddingDate =
new Date(
'2026-08-01T14:00:00'
);

const countdown =
document.getElementById(
'countdown'
);

function updateCountdown(){

if(!countdown) return;

const now =
new Date();

const diff =
weddingDate - now;

const days =
Math.floor(
diff / 1000 / 60 / 60 / 24
);

const hours =
Math.floor(
(diff / 1000 / 60 / 60)
% 24
);

countdown.innerHTML =

`
${days} днів
${hours} годин
`;

}

setInterval(
updateCountdown,
1000
);

updateCountdown();
