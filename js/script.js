
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Typing Animation
    const typedElement = document.querySelector(".multiple-text");
    if (typedElement) {
        new Typed(".multiple-text", {
            strings: ["Cybersecurity Researcher", "Systems Engineer", "Hardware Developer"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }

    // 2. Scroll Reveal Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll("section, .card").forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });

    // 3. Theme Toggle (Light / Dark)
    const themeBtn = document.querySelector("#theme-toggle");
    if (themeBtn) {
        const themeIcon = themeBtn.querySelector("i");
        
        // Force Light Mode as Default
        let currentTheme = localStorage.getItem("theme") || "light";
        
        const applyTheme = (theme) => {
            if (theme === "dark") {
                document.body.classList.add("dark-mode");
                document.body.classList.remove("light-mode");
                themeIcon.className = "fas fa-sun";
            } else {
                document.body.classList.add("light-mode");
                document.body.classList.remove("dark-mode");
                themeIcon.className = "fas fa-moon";
            }
        };

        applyTheme(currentTheme);

        themeBtn.addEventListener("click", () => {
            currentTheme = currentTheme === "light" ? "dark" : "light";
            applyTheme(currentTheme);
            localStorage.setItem("theme", currentTheme);
        });
    }

    // 4. Active Navbar Link on Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // 5. Professional Welcome Note in Console
    console.log("%c Welcome to Mohanad Sayed Mutawea's Portfolio ", "background: #00bcd4; color: #fff; font-size: 14px; font-weight: bold; border-radius: 5px; padding: 5px;");
    console.log("Looking under the hood? I respect that. Let's connect!");
});
