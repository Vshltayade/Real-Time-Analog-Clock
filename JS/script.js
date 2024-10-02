const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

hourHand.style.transformOrigin = '0';
minuteHand.style.transformOrigin = '0';
secondHand.style.transformOrigin = '45px';

let [hr, min, sec] = [0, 20, 50];

setInterval(()=>{
    hourHand.style.transform = `rotate(${hr}deg)`;
    hr++;
    minuteHand.style.transform = `rotate(${min}deg)`;
    min+=2;
    secondHand.style.transform = `rotate(${sec}deg)`;
    sec+=5;
},1000);