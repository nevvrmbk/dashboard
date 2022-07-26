window.addEventListener("DOMContentLoaded", async function (e) {
    
    // Service Worker
    if ("serviceWorker" in this.navigator) {
        try {
            const registration = await this.navigator.serviceWorker.register("service-worker.js");
            if (registration.installing) {
                console.log("[main] Installing service worker.");
            } else if (registration.active) {
                console.log("[main] Service worker is active.");
            } else if (registration.waiting) {
                console.log("[main] Service worker installed.");
            } else {
                console.log("[main] Unknown status of service worker.");
            }
        } catch (error) {
            console.log("[main] Service worker not installed.");
            console.error(error);
        }
    }
});
