// js/textResizer.js

document.addEventListener('DOMContentLoaded', () => {
    const increaseBtn = document.getElementById('increase-text');
    const decreaseBtn = document.getElementById('decrease-text');
    const htmlElement = document.documentElement; // HTML ট্যাগ ধরছি
    
    // ওয়েবসাইটের ডিফল্ট সাইজ ১০০%
    let currentScale = 100;
    const maxScale = 120; // সর্বোচ্চ ২০% বড় করা যাবে
    const minScale = 90;  // সর্বনিম্ন ১০% ছোট করা যাবে

    if (increaseBtn && decreaseBtn) {
        // A+ বাটনে ক্লিক করলে
        increaseBtn.addEventListener('click', () => {
            if (currentScale < maxScale) {
                currentScale += 10;
                htmlElement.style.fontSize = currentScale + '%';
            }
        });

        // A- বাটনে ক্লিক করলে
        decreaseBtn.addEventListener('click', () => {
            if (currentScale > minScale) {
                currentScale -= 10;
                htmlElement.style.fontSize = currentScale + '%';
            }
        });
    }
});