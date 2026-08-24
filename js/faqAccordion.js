// js/faqAccordion.js

document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-btn');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            // উত্তরের div টি খুঁজে বের করা
            const answer = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');
            
            // ক্লিক করলে উত্তর বের হবে বা বন্ধ হবে
            if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
                answer.style.maxHeight = '0px';
                icon.textContent = '+';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '−';
            }
        });
    });
});