// clock span 생성
const clockContainer = document.getElementById('clock');
const s = document.createElement('span');
s.id = 'time';
clockContainer.appendChild(s);

// 시:분:초 String
const setClock = () => {
    const date = new Date();
    const timeString = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    s.innerHTML = timeString;
    setTimeout(setClock, 1000);
}

// 아이콘 변경
const changeImg = (icon) => {
    const homeImg = document.getElementById('home');
    const newsImg = document.getElementById('news');
    const chatImg = document.getElementById('chat');
    const userImg = document.getElementById('user');

    switch(icon) {
        case 'home':
            homeImg.src = 'images/home_black.png';
        case 'news':
            newsImg.src = 'images/news_black.png';
        case 'chat':   
            chatImg.src = 'images/chat_black.png';
        case 'user':
            userImg.src = 'images/user_black.png';
    }

}