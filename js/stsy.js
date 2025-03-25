document.addEventListener('DOMContentLoaded', function() {
    // 轮播图功能
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    const indicatorsContainer = carousel.querySelector('.indicators');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // 创建指示器
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        if (i === 0) {
            indicator.classList.add('active');
        }
        indicator.dataset.index = i;
        indicatorsContainer.appendChild(indicator);
    }
    
    const indicators = document.querySelectorAll('.indicator');
    
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
    let interval = setInterval(nextSlide, 7000);
    
    // 鼠标悬停时暂停自动轮播
    carousel.addEventListener('mouseenter', function() {
        clearInterval(interval);
    });
    
    // 鼠标离开时恢复自动轮播
    carousel.addEventListener('mouseleave', function() {
        interval = setInterval(nextSlide, 7000);
    });
    
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
    
    // 添加滚动动画效果
    const animatedElements = document.querySelectorAll('.form-card, .content-card, .significance-card, .artifact-card');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // 初始样式
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // 检查滚动位置
    window.addEventListener('scroll', checkScroll);
    
    // 初始化检查
    setTimeout(checkScroll, 100);
});