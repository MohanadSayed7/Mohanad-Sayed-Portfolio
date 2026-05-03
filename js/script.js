document.addEventListener("DOMContentLoaded", () => {
    
    const typedElement = document.querySelector(".multiple-text");
    if (typedElement) {
        new Typed(".multiple-text", {
            strings: ["Cybersecurity Researcher", "Systems Engineer", "Hardware Developer"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }

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

    const themeBtn = document.querySelector("#theme-toggle");
    if (themeBtn) {
        const themeIcon = themeBtn.querySelector("i");
        
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

    document.querySelectorAll('header nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener('keydown', e => {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) || 
            (e.ctrlKey && ['U', 'u'].includes(e.key))) {
            e.preventDefault();
        }
    });

    console.log("%c Welcome to Mohanad Sayed Mutawea's Portfolio ", "background: #00bcd4; color: #fff; font-size: 14px; font-weight: bold; border-radius: 5px; padding: 5px;");
    console.log("Looking under the hood? I respect that. Let's connect!");
});
