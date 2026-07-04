// TARGET UNLOCK TIME: JULY 6, 2026 00:00:00 LOCAL TIME
const targetBirthdayTime = new Date("July 6, 2026 00:00:00").getTime();

const countdownScreen = document.getElementById("countdown-screen");
const mainDeck = document.getElementById("main-deck");

function runCountdownEngine() {
    const timeNow = new Date().getTime();
    const timelineGap = targetBirthdayTime - timeNow;

    // Time evaluation transition threshold
    if (timelineGap <= 0) {
        clearInterval(clockInterval);
        countdownScreen.style.opacity = "0";
        setTimeout(() => {
            countdownScreen.style.display = "none";
            mainDeck.style.display = "flex";
            fireContinuousRoyalPoppers();
        }, 1000);
        return;
    }

    // Standard metric parsing logic
    const days = Math.floor(timelineGap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timelineGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timelineGap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timelineGap % (1000 * 60)) / 1000);

    // Apply values inside DOM UI elements
    document.getElementById("d-days").innerText = String(days).padStart(2, '0');
    document.getElementById("d-hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("d-minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("d-seconds").innerText = String(seconds).padStart(2, '0');
}

// Tick the clock every second
const clockInterval = setInterval(runCountdownEngine, 1000);
runCountdownEngine(); // Immediate call execution to prevent placeholder layout jumps

// HYPER-ACTIVE ENDLESS PARTY POPPER ENGINE
function fireContinuousRoyalPoppers() {
    const canvasHandle = document.getElementById('royal-popper-canvas');
    const premiumConfetti = confetti.create(canvasHandle, { resize: true, useWorker: true });

    // Hyperactive non-stop party poppers loop (Fires instantly from left and right corners)
    setInterval(() => {
        // Left Corner Cheering Cannon
        premiumConfetti({
            particleCount: 5,
            angle: 60,
            spread: 75,
            origin: { x: 0, y: 0.8 },
            colors: ['#daaf37', '#ff4081', '#ffb300', '#ffffff', '#921b3a']
        });
        // Right Corner Cheering Cannon
        premiumConfetti({
            particleCount: 5,
            angle: 120,
            spread: 75,
            origin: { x: 1, y: 0.8 },
            colors: ['#daaf37', '#ff4081', '#ffb300', '#ffffff', '#921b3a']
        });
    }, 120); // Sped up interval to 120ms for absolute endless cheering energy!
}

/* ====================================================================
   💡 DEVELOPER LOCAL PREVIEW BYPASS:
   To instantly bypass the lock screen so you can preview the 
   cake adjustments and non-stop poppers right now, just remove the 
   two forward slashes "//" right in front of the line below:
   ==================================================================== */
// countdownScreen.style.display = "none"; mainDeck.style.display = "flex"; fireContinuousRoyalPoppers();
