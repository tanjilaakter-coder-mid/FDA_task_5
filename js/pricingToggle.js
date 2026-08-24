// js/pricingToggle.js

document.addEventListener('DOMContentLoaded', () => {
    const pricingToggle = document.getElementById('pricing-toggle');
    const toggleCircle = document.getElementById('pricing-toggle-circle');
    const price1 = document.getElementById('price-1');
    const price2 = document.getElementById('price-2');

    let isYearly = false;

    if (pricingToggle && toggleCircle && price1 && price2) {
        pricingToggle.addEventListener('click', () => {
            isYearly = !isYearly;
            
            if (isYearly) {
                // Yearly Pricing
                toggleCircle.style.transform = 'translateX(24px)';
                pricingToggle.classList.remove('bg-slate-300', 'dark:bg-slate-700');
                pricingToggle.classList.add('bg-primary');
                
                price1.innerHTML = '$278';
                price2.innerHTML = '$758';
            } else {
                // Monthly Pricing
                toggleCircle.style.transform = 'translateX(0px)';
                pricingToggle.classList.remove('bg-primary');
                pricingToggle.classList.add('bg-slate-300', 'dark:bg-slate-700');
                
                price1.innerHTML = '$29';
                price2.innerHTML = '$79';
            }
        });
    }
});