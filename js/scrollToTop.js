// js/scrollToTop.js

document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById('scroll-to-top');

    if (scrollBtn) {
        // পেজ স্ক্রোল করলে বাটনটি দেখাবে
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                scrollBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                scrollBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                scrollBtn.classList.remove('opacity-100', 'translate-y-0');
            }
        });

        // বাটনে ক্লিক করলে স্মুথলি একদম ওপরে চলে যাবে
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});