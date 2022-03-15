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