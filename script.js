// Countdown timer for promotional banners
function startCountdown(elementId, hours, minutes, seconds) {
    const countdownElement = document.getElementById(elementId);
    
    const endTime = new Date().getTime() + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            clearInterval(timer);
            countdownElement.innerHTML = "Offer Expired";
            return;
        }

        const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    }, 1000);
}

// Start countdowns for both promotions
startCountdown('timer1', 1, 30, 0); // 1 hour 30 minutes countdown
startCountdown('timer2', 0, 45, 0); // 45 minutes countdown
