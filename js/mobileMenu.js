// js/mobileMenu.js

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuDropdown = document.getElementById('mobile-menu-dropdown');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenuDropdown) {
        // মেনু বাটনে ক্লিক করলে
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = mobileMenuDropdown.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenuDropdown.classList.remove('hidden');
                mobileMenuDropdown.style.maxHeight = mobileMenuDropdown.scrollHeight + 'px';
                mobileMenuBtn.innerHTML = '✕'; // ক্লোজ আইকন
            } else {
                mobileMenuDropdown.style.maxHeight = '0px';
                setTimeout(() => {
                    mobileMenuDropdown.classList.add('hidden');
                }, 300);
                mobileMenuBtn.innerHTML = '☰'; // আবার মেনু আইকন
            }
        });

        // যেকোনো লিংকে ক্লিক করলে মেনু অটোমেটিক বন্ধ হয়ে যাবে
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuDropdown.style.maxHeight = '0px';
                setTimeout(() => {
                    mobileMenuDropdown.classList.add('hidden');
                }, 300);
                mobileMenuBtn.innerHTML = '☰';
            });
        });

        // মেনুর বাইরে স্ক্রিনে ক্লিক করলে মেনু বন্ধ হয়ে যাবে
        document.addEventListener('click', (e) => {
            if (!mobileMenuDropdown.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenuDropdown.style.maxHeight = '0px';
                setTimeout(() => {
                    mobileMenuDropdown.classList.add('hidden');
                }, 300);
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    }
});