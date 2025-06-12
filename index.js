function navigateTo(pageid) {
    // 최상위 id를 기준으로만 숨김 처리
    document.querySelectorAll('body > div').forEach(div => div.style.display = 'none');
    document.getElementById(pageid).style.display = 'block';
}

// 스크롤 감지 후 애니메이션 효과 추가
document.addEventListener('scroll', function() {
    const items = document.querySelectorAll('.timeline-item');
    const triggerBottom = window.innerHeight * 0.8;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
});




