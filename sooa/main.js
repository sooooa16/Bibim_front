// ===============================
// 1) 초기화 (onload 진입)
// ===============================
const init = () => {
  mountClock();
    wireLikeToggle();
    document.querySelector(".menu-icon-home").onclick = () => changeNavIcon("home");
  document.querySelector(".menu-icon-life").onclick = () => changeNavIcon("life");
  document.querySelector(".menu-icon-chat").onclick = () => changeNavIcon("chat");
  document.querySelector(".menu-icon-user").onclick = () => changeNavIcon("user");
};
window.init = init;

// ===============================
// 2) 상단 시계
// ===============================
const mountClock = () => {
  const el = document.getElementById('top-time-display');
  if (!el) return;

  const render = () => {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');
    el.textContent = `${hh}:${mm}:${ss}`;
  };

  render(); // 즉시 1회
  clearInterval(window.__clockTimer);
  window.__clockTimer = setInterval(render, 1000);
};
// ===============================
// 메뉴 바꾸기
// ===============================
const changeNavIcon = (name) => {
   switch (name) {
    case "home":
      document.querySelector(".menu-icon-home").src = "imgs/Home_unselected.png";
      break;
    case "life":
      document.querySelector(".menu-icon-life").src = "imgs/News_selected.png";
      break;
    case "chat":
      document.querySelector(".menu-icon-chat").src = "imgs/Chat_selected.png";
      break;
    case "user":
      document.querySelector(".menu-icon-user").src = "imgs/User_selected.png";
      break;
    default:
      console.log("아이콘 이름이 일치하지 않습니다:", name);
  }
};
// ===============================
// 좋아요 토글 (아이콘/숫자)
// ===============================
const wireLikeToggle = () => {
  document.addEventListener('click', (e) => {
    // .like-btn 영역(아이콘 또는 숫자)을 클릭했는지 확인
    const likeWrap = e.target.closest('.like-btn');
    if (!likeWrap) return;

    // 아이콘과 숫자 요소 가져오기
    const icon = likeWrap.querySelector('.like-icon');
    const countSpan = likeWrap.querySelector('span');

    if (!icon || !countSpan) return;

    // 경로: data-*가 있으면 우선 사용, 없으면 기본값 사용
    const outline = icon.dataset.outline || 'imgs/Heart.png';        
    const filled  = icon.dataset.filled  || 'imgs/Heart.png';    

    // 현재 상태 확인 (이미 활성화인지)
    const isActive = likeWrap.classList.toggle('is-active');

    // 이미지 교체
    icon.setAttribute('src', isActive ? filled : outline);

    // 숫자 증감
    const cur = parseInt(countSpan.textContent.trim(), 10) || 0;
    countSpan.textContent = isActive ? cur + 1 : Math.max(0, cur - 1);
  });
};
