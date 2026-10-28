// Находим кнопку по её ID
const themeButton = document.getElementById('theme-btn');

// Навешиваем событие клика
themeButton.addEventListener('click', () => {
    // Переключаем классы тем оформления у элемента body
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});
