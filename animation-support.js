document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navbarCollapse = document.querySelector("#navbarNav");
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutContainer = document.querySelector("#about");
    const navLinks = document.querySelectorAll(".nav-link");
    const cards = document.querySelectorAll(".card");

    if (navbar && navbarCollapse) {
        // Add glow effect to the navbar when it is clicked
        navbar.addEventListener("click", () => {
            navbar.style.boxShadow = "0 0 30px 15px rgba(97, 22, 141, 0.8)";
            navbar.style.transition = "box-shadow 1s ease-in-out"; // Smooth transition for glow effect

            // Remove the glow effect after 2 seconds
            setTimeout(() => {
                navbar.style.boxShadow = "none";
            }, 2000);
        });
    }
    
    if (aboutLink && aboutContainer) {
        // Add glow effect to the about container when the "About" link is clicked
        aboutLink.addEventListener("click", () => {
            aboutContainer.style.boxShadow = "0 0 30px 15px rgba(97, 22, 141, 0.8)";
            aboutContainer.style.transition = "box-shadow 1s ease-in-out"; // Increase duration for smoother glow-out

            // Remove the glow effect after 2 seconds
            setTimeout(() => {
                aboutContainer.style.boxShadow = "none";
            }, 2000);
        });
    }

    if (navLinks) {
        // Add glow effect to the correct section when a navbar link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default anchor behavior
                const targetId = link.getAttribute("href");
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Scroll to the target section
                    targetSection.scrollIntoView({ behavior: "smooth" });

                    // Add glow effect to the target section
                    targetSection.style.boxShadow = "0 0 30px 15px rgba(97, 22, 141, 0.8)";
                    targetSection.style.transition = "box-shadow 1s ease-in-out";

                    // Remove the glow effect after 2 seconds
                    setTimeout(() => {
                        targetSection.style.boxShadow = "none";
                    }, 2000);
                }
            });
        });
    }
});