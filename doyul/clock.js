const showClock = () => {

    const date = new Date();
    
    const hours = date.getHours().toString(); 
    
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}`;

    const clockDiv = document.getElementById('clock');
    clockDiv.textContent = timeString;
};

setInterval(showClock, 1000); 

showClock();