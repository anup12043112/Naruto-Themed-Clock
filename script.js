
function updateTime(){
    let currentHour, currentMin, currentSec;
    const time = new Date()
    currentHour = time.getHours();
    currentSec = time.getSeconds();
    currentMin = time.getMinutes();
    hourAngle = currentHour*30;
    minAngle = currentMin*6;
    secAngle = currentSec*6;
    var hour = document.getElementById("hour");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    sec.style.transform = `rotate(${secAngle}deg)`;
    min.style.transform = `rotate(${minAngle}deg)`;
    hour.style.transform = `rotate(${hourAngle + (minAngle/10) - 5}deg)`;
    var hourD = document.getElementById("hourD");
    var minD = document.getElementById("minD");
    var secD = document.getElementById("secD");
    if(currentHour < 10){
        hourD.innerHTML = "0" + currentHour;
    } else {
        hourD.innerHTML = currentHour;
    }
    if(currentMin < 10){
        minD.innerHTML = "0" + currentMin;
    } else {
        minD.innerHTML = currentMin;
    }
    if(currentSec < 10){
        secD.innerHTML = "0" + currentSec;
    } else {
        secD.innerHTML = currentSec;
    }
   
}
setInterval(updateTime, 1000);


