
//下拉菜单的实现事件
document.querySelectorAll('.toper > ul > li > a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      // 关闭其他菜单
      document.querySelectorAll('.submenu').forEach(menu => {
          if (menu !== this.nextElementSibling) {
              menu.style.display = 'none';
          }
      });
      // 切换当前菜单
      const submenu = this.nextElementSibling;
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  });
});

// 点击页面其他位置关闭菜单
document.addEventListener('click', function(e) {
  if (!e.target.closest('.toper li')) {
      document.querySelectorAll('.submenu').forEach(menu => {
          menu.style.display = 'none';
      });
  }
});

//轮播图
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // 更新轮播图位置
    function updateCarousel() {
        const offset = -currentIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
        
        // 更新指示器
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // 下一张幻灯片
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }
    
    // 上一张幻灯片
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // 绑定按钮事件
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // 绑定指示器事件
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateCarousel();
        });
    });
    
    // 自动轮播
    let interval = setInterval(nextSlide, 1000);
    
    // 鼠标悬停时暂停自动轮播
    document.querySelector('.carousel').addEventListener('mouseenter', function() {
        clearInterval(interval);
    });
    
    // 鼠标离开时恢复自动轮播
    document.querySelector('.carousel').addEventListener('mouseleave', function() {
        interval = setInterval(nextSlide, 5000);
    });
});
