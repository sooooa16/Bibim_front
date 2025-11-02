const func1 =()=>{
const childspan=document.createElement("span");
const parent = document.querySelector(".clock");

const date = new Date();
const str=date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
childspan.innerHTML=str;
parent.appendChild(childspan);
}
const func2 =(what)=>{
    const home = document.querySelector(".home img");
    const town = document.querySelector(".town img");
    const chatting = document.querySelector(".chating img");
    const me = document.querySelector(".me img");
    switch(what){
        case "Home":
            home.src = "imgs/Home_black.png";
            break;
        case "News":
            town.src = "imgs/News_black.png";
            break;
        case "Chat":
            chatting.src = "imgs/Chat_black.png";
            break;
        case "User":
            me.src = "imgs/User_black.png";
            break;

    }
}