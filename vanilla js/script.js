const hh = document.querySelector('#hour');//red
const mh = document.querySelector('#min');//blue
const sh = document.querySelector('#sec');
function setDate() {
    let Time = new Date()
    let hours = Time.getHours()
    let minutes = Time.getMinutes()    
    let seconds = Time.getSeconds()
    //  console.log(hours,minutes,seconds)



    hh.style.transform=`rotate(${(hours*30)+minutes/2}deg)`
    mh.style.transform=`rotate(${minutes*6}deg)`
    sh.style.transform=`rotate(${seconds*6}deg)`
   

}

setInterval(setDate, 1000);

