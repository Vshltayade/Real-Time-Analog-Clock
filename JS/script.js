const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

hourHand.style.transformOrigin = '0';
minuteHand.style.transformOrigin = '0';
secondHand.style.transformOrigin = '46px';

setInterval(()=>{
    let date = new Date();
    let time = date.toLocaleTimeString();
    time = time.split(':');
    
    // let [hour, minute, second] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    let [hour, minute, second] = [time[0], time[1], time[2].slice(0,2)];
    // let [hour, minute, second] = [12,59,59];
    // console.log(hour, minute, second);
    let min = minute * 6;
    let hr = (hour * 30) + (min/12);
    let sec = second * 6;

    

    hourHand.style.transform = `rotate(${hr-90}deg)`;

    minuteHand.style.transform = `rotate(${min-90}deg)`;

    secondHand.style.transform = `rotate(${sec-90}deg)`;
    
},1000);