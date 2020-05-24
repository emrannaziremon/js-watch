const deg = 6;
const hour = document.querySelector('#hr');
const minute = document.querySelector('#mn');
const second = document.querySelector('#sc');

setInterval(() => {
    let myDay = new Date();
    let hr = myDay.getHours() * 30;
    let mn = myDay.getMinutes() * deg;
    let sc = myDay.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hr + (mn/12)}deg)`;
    minute.style.transform = `rotateZ(${mn}deg)`;
    second.style.transform = `rotateZ(${sc}deg)`;
})