function showtime(){
    let time =new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let Dateshow = time.toDateString();
    console.log(Dateshow);

    format = "AM";
    
    if(hours >= 12){
        hours-=12;
        format="PM";
    }
    if (hours == 0){
        hours = 12;
        format = "AM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const fulltime = document.querySelector('.clock');
    fulltime.innerHTML = `
    <p>${hours}</p>
    <p>${minutes}</p>
    <p>${seconds}</p>
    <p>${format}</p>
    `;
    const fulldate =document.querySelector('.date');
    fulldate.innerHTML= `
    <p>${Dateshow}</p>
    `;
}

setInterval(showtime,1000);
