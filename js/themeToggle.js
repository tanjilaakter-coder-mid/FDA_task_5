// js/themeToggle.js

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-icon-dark');
    const lightIcon = document.getElementById('theme-icon-light');

    const toggleIcons = () => {
        if (darkIcon && lightIcon) {
            darkIcon.classList.toggle('hidden');
            lightIcon.classList.toggle('hidden');
        }
    };

    // Check Local Storage for previous theme preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        if (lightIcon && darkIcon) {
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
        }
    }

    // Toggle logic
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            toggleIcons();
            
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    }
});