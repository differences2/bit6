// 获取导航栏元素
const sidebar = document.getElementById('sidebar');
const headline = document.getElementById('headline');
const news = document.getElementById('news');
const special = document.getElementById('special');
const international = document.getElementById('international');
const social = document.getElementById('social');
const finance = document.getElementById('finance');
const backToTop = document.getElementById('back-to-top');

// 滚动事件处理函数
window.addEventListener('scroll', function () {
    // 获取滚动距离
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 根据滚动距离显示/隐藏导航栏和返回按钮
    if (scrollTop >= 50) {
        sidebar.classList.add('visible');
        backToTop.style.display = 'block';
    } else {
        sidebar.classList.remove('visible');
        backToTop.style.display = 'none';
    }

    // 根据滚动距离设置元素样式
    if (scrollTop >= 50 && scrollTop < 200) {
        headline.style.color = 'red';
    } else {
        headline.style.color = '';
    }

    if (scrollTop >= 200 && scrollTop < 400) {
        news.style.color = 'red';
    } else {
        news.style.color = '';
    }

    if (scrollTop >= 400 && scrollTop < 950) {
        special.style.color = 'red';
    } else {
        special.style.color = '';
    }
    if (scrollTop >= 950 && scrollTop < 1200) {
        international.style.color = 'red';
    } else {
        international.style.color = '';
    }
    if (scrollTop >= 1200) {
        social.style.color = 'red';
    } else {
        social.style.color = '';
    }
});

// 点击事件处理函数
sidebar.addEventListener('click', function (event) {
    const target = event.target;

    // 检查点击的元素并滚动到相应位置
    if (target === headline) {
        window.scrollTo({ top: 70, behavior: 'smooth' });
    } else if (target === news) {
        window.scrollTo({ top: 200, behavior: 'smooth' });
    } else if (target === special) {
        window.scrollTo({ top: 400, behavior: 'smooth' });
    } else if (target === international) {
        window.scrollTo({ top: 950, behavior: 'smooth' });
    } else if (target === social) {
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    }
});

// 返回顶部按钮点击事件处理函数
backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});