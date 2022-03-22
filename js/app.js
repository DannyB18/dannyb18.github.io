const landingPage = document.querySelector(".landing-page");
const callButton = document.getElementById("call-button");
const emailButton = document.getElementById("email-button");

const createElement = (elementName, property = null, value = null) => {
    const element = document.createElement(elementName);
    element[property] = value;
    return element;
};

const contactButton = document.getElementById("contact-button");
landingPage.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.closest("#contact-btn")) {
        if (contactButton.classList.contains("inactive")) {
            callButton.classList.add('show-call');
            callButton.classList.remove('hide-call');
            emailButton.classList.add('show-email');
            emailButton.classList.remove('hide-email');
            contactButton.classList.remove('inactive');
            contactButton.classList.add("active");

        } else if (contactButton.classList.contains("active")) {
            callButton.classList.add('hide-call');
            callButton.classList.remove('show-call');
            emailButton.classList.add('hide-email');
            emailButton.classList.remove('show-email');
            contactButton.classList.remove('active');
            contactButton.classList.add("inactive");
        }
    }
})

const navItems = document.querySelector(".nav-items");
const navbar = document.querySelector(".navbar");
const navHeader = document.querySelector(".nav-header");
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
            navItems.classList.add("inactive")
        }
    } else if (e.target.tagName === "A" && navItems.classList.contains("active")) {
            navItems.style.maxHeight = "0px";
            navItems.classList.remove("active");
            navItems.classList.add("inactive")
    }
})