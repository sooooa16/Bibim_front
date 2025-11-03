const createNewTimeSpan = () => {
    const parentDiv = document.getElementById("clock");
    const newSpan = document.createElement("span");
    parentDiv.appendChild(newSpan);

    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());
    const str = hours + ':'+ minutes + ':' + seconds;

    newSpan.innerText = str;
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const clickingImg = this.querySelector("img");
        clickingImg.src = clickingImg.dataset.active;
    });
});
