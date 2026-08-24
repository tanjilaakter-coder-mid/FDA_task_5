// js/formValidation.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form-element');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const termsCheckbox = document.getElementById('contact-terms');
    const feedbackBox = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameVal = nameInput.value.trim();
            const emailVal = emailInput.value.trim();
            const subjectVal = subjectInput.value.trim();
            const messageVal = messageInput.value.trim();
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            // Condition 1: Name
            if (nameVal.length < 3) {
                showError('Please enter your full name (at least 3 characters).');
                return;
            }

            // Condition 2: Email
            if (!emailPattern.test(emailVal)) {
                showError('Please enter a valid email address.');
                return;
            }

            // Condition 3: Subject
            if (subjectVal === '') {
                showError('Subject field cannot be empty.');
                return;
            }

            // Condition 4: Message length
            if (messageVal.length < 10) {
                showError('Message must be at least 10 characters long.');
                return;
            }

            // Condition 5: Terms Checkbox
            if (!termsCheckbox.checked) {
                showError('You must agree to the terms and privacy policy.');
                return;
            }

            // Success Message
            if (feedbackBox) {
                feedbackBox.textContent = '🎉 Thank you! Your message has been sent successfully.';
                feedbackBox.className = 'p-4 rounded-lg text-sm font-medium text-center bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300';
                feedbackBox.classList.remove('hidden');
            }

            contactForm.reset();

            // ৫ সেকেন্ড পর সাকসেস মেসেজ হাইড হয়ে যাবে
            setTimeout(() => {
                if (feedbackBox) feedbackBox.classList.add('hidden');
            }, 5000);
        });
    }

    function showError(message) {
        if (feedbackBox) {
            feedbackBox.textContent = message;
            feedbackBox.className = 'p-4 rounded-lg text-sm font-medium text-center bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300';
            feedbackBox.classList.remove('hidden');
        }
    }
});