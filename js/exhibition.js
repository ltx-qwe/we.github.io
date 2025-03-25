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
    
    // 展厅标记点击事件
    document.querySelectorAll('.exhibit-marker').forEach(marker => {
        marker.addEventListener('click', function() {
            const exhibitId = this.getAttribute('data-exhibit');
            const exhibitItem = document.getElementById(exhibitId);
            if (exhibitItem) {
                exhibitItem.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});