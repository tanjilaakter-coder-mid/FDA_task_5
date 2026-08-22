export const initThemeToggle = () => {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const darkIcon = document.getElementById('theme-icon-dark');
    const lightIcon = document.getElementById('theme-icon-light');

    // আইকন পরিবর্তন করার ফাংশন
    const toggleIcons = () => {
        darkIcon.classList.toggle('hidden');
        lightIcon.classList.toggle('hidden');
    };

    // লোকাল স্টোরেজ চেক করে থিম সেট করা
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            toggleIcons();
            
            // ইউজারের পছন্দ লোকাল স্টোরেজে সেভ করা
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
};