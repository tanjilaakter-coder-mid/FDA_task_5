// js/dynamicFooter.js

document.addEventListener('DOMContentLoaded', () => {
    // ফুটারে 2026 লেখাটা খুঁজে বের করে বর্তমান সাল বসিয়ে দেওয়া
    const footerText = document.querySelector('footer p');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        // এটি আপনার আগের হার্ডকোড করা সালটিকে বর্তমান সালে আপডেট করবে
        footerText.innerHTML = footerText.innerHTML.replace(/20\d{2}/, currentYear);
    }
});