// js/app.js
import { initMobileMenu } from './mobileMenu.js';
import { initSmoothScroll } from './smoothScroll.js';

// DOM লোড হওয়ার পর সব ফাংশন কল হবে
document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Toggle (আমরা HTML ফাইলেই দিয়েছি, তাই এখানে আর ইমপোর্ট করতে হবে না)
    
    // Mobile Menu
    initMobileMenu();
    
    // Smooth Scroll
    initSmoothScroll();
});