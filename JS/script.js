const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

hourHand.style.transformOrigin = '0';
minuteHand.style.transformOrigin = '0';
secondHand.style.transformOrigin = '46px';


// let [hr, min, sec] = [0, 0, 0];

setInterval(()=>{
    let date = new Date();
    const [hr, min, sec] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    hourHand.style.transform = `rotate(${hr}deg)`;
    minuteHand.style.transform = `rotate(${min}deg)`;
    secondHand.style.transform = `rotate(${sec}deg)`;
},0);