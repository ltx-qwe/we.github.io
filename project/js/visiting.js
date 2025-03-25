document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动到各部分
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // 预约按钮点击事件
    const bookNowBtn = document.getElementById('book-now-btn');
    const loginBtn = document.getElementById('login-btn');
    
    bookNowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('预约功能将在浏览器中打开新标签页。在实际应用中，这里会跳转到预约页面。');
        // 实际应用中，这里会使用 window.open('booking.html', '_blank');
    });
    
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('登录功能将在浏览器中打开新标签页。在实际应用中，这里会跳转到登录页面。');
        // 实际应用中，这里会使用 window.open('login.html', '_blank');
    });
});