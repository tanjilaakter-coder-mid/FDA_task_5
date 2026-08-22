// js/smoothScroll.js
export const initSmoothScroll = () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // লিংকের টেক্সট অনুযায়ী সেকশন খুঁজে বের করা
            const targetText = link.textContent.toLowerCase();
            let targetSection;

            if (targetText === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            } else if (targetText === 'features') {
                targetSection = document.querySelector('section:nth-of-type(2)');
            } else if (targetText === 'pricing') {
                targetSection = document.querySelector('section:nth-of-type(5)');
            } else if (targetText === 'resources') {
                targetSection = document.querySelector('section:nth-of-type(4)'); // How it works section
            }

            // স্মুথলি স্ক্রোল করা
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
};