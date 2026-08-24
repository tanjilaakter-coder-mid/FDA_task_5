// js/highContrast.js

document.addEventListener('DOMContentLoaded', () => {
    const contrastBtn = document.getElementById('high-contrast-btn');
    let isHighContrast = false;

    if (contrastBtn) {
        contrastBtn.addEventListener('click', () => {
            isHighContrast = !isHighContrast;
            
            if (isHighContrast) {
                // কালার কন্ট্রাস্ট এবং স্যাচুরেশন বাড়িয়ে দেওয়া হলো
                document.documentElement.style.filter = 'contrast(130%) saturate(120%)';
            } else {
                // আগের অবস্থায় ফিরে আসা
                document.documentElement.style.filter = 'none';
            }
        });
    }
});