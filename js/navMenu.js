const navItems = document.querySelector(".nav-items");
const navbar = document.querySelector(".navbar");
const socials = document.querySelector(".socials");

navbar.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" || e.target.closest("#menu-btn")) {
        if (navItems.classList.contains("inactive")) {
            navItems.style.maxHeight = "1000px";
            socials.style.maxHeight = "1000px";
            navItems.classList.remove("inactive");
            navItems.classList.add("active");
        } else if (navItems.classList.contains("active")) {
            navItems.style.maxHeight = "0px";
            socials.style.maxHeight = "0px";
            navItems.classList.remove("active");
            navItems.classList.add("inactive");
        }
    } else if (e.target.tagName === "A" && navItems.classList.contains("active")) {
            navItems.style.maxHeight = "0px";
            socials.style.maxHeight = "0px";
            navItems.classList.remove("active");
            navItems.classList.add("inactive");
    }
});