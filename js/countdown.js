const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const countdown = document.querySelector('.countdown');
const cblock = document.querySelector('.cblock');
const currentMonth = new Date().getDate();
const newMonthTime = new Date(`April 21 ${currentMonth + 1} 00:00:00`);

function updateCountdown() {
    const currentMonth = new Date();
    const diff = newMonthTime - currentMonth;
    const d = Math.floor(diff / 10000 / 60 / 60 / 24);
    const h = Math.floor(diff / 24 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);