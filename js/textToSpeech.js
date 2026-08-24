// js/textToSpeech.js

document.addEventListener('DOMContentLoaded', () => {
    const readBtn = document.getElementById('read-aloud-btn');
    const iconOn = document.getElementById('speech-icon-on');
    const iconOff = document.getElementById('speech-icon-off');
    let isReading = false;

    if (readBtn && iconOn && iconOff) {
        readBtn.addEventListener('click', () => {
            if (isReading) {
                // পড়া বন্ধ করা
                window.speechSynthesis.cancel(); 
                isReading = false;
                
                // আইকন পরিবর্তন
                iconOn.classList.remove('hidden');
                iconOff.classList.add('hidden');
                readBtn.title = "Read Page Aloud";
            } else {
                // পড়া শুরু করা
                const textToRead = document.body.innerText;
                const speech = new SpeechSynthesisUtterance(textToRead);
                speech.lang = 'en-US'; 
                speech.rate = 0.9;     
                speech.volume = 1;     
                
                window.speechSynthesis.speak(speech);
                isReading = true;
                
                // আইকন পরিবর্তন করে মিউট/স্টপ আইকন দেখানো
                iconOn.classList.add('hidden');
                iconOff.classList.remove('hidden');
                readBtn.title = "Stop Reading";

                // পড়া শেষ হলে আবার আগের আইকনে ফিরে যাওয়া
                speech.onend = () => {
                    isReading = false;
                    iconOn.classList.remove('hidden');
                    iconOff.classList.add('hidden');
                    readBtn.title = "Read Page Aloud";
                };
            }
        });
    }
});