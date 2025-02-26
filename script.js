// Navbar Toggle for Mobile View
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.createElement("button");
    navToggle.innerHTML = "☰";
    navToggle.classList.add("nav-toggle");
    
    const nav = document.querySelector("nav ul");
    document.querySelector("nav").insertBefore(navToggle, nav);

    navToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Animate skill bars when in view
    const skillBars = document.querySelectorAll(".bar");

    function animateSkills() {
        skillBars.forEach((bar) => {
            const skillName = bar.classList[1]; // Extract class name (e.g., html, css)
            let width = 0;

            switch (skillName) {
                case "html": width = 90; break;
                case "css": width = 85; break;
                case "js": width = 75; break;
                case "react": width = 70; break;
            }

            bar.style.width = width + "%";
        });
    }

    // Detect when skills section is visible
    const skillsSection = document.querySelector("#skills");
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateSkills();
        }
    }, { threshold: 0.5 });

    observer.observe(skillsSection);

    // Contact Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
    });
});
