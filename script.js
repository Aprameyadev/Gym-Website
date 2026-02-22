// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    
    // Select the header element
    const header = document.querySelector("header");

    // Listen for the user scrolling
    window.addEventListener("scroll", () => {
        
        // If the user scrolls down more than 50 pixels
        if (window.scrollY > 50) {
            // Apply a solid dark background with a glass blur effect
            header.style.background = "rgba(0, 0, 0, 0.9)";
            header.style.backdropFilter = "blur(10px)";
            header.style.webkitBackdropFilter = "blur(10px)"; // For Safari support
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.5)"; // Adds a subtle drop shadow
        } else {
            // If they are at the very top, keep it transparent
            header.style.background = "transparent";
            header.style.backdropFilter = "none";
            header.style.webkitBackdropFilter = "none";
            header.style.boxShadow = "none";
        }
    });

});