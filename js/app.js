// elements to be used
var hiringRadioButton = document.querySelector("#reason-hiring");
var questionRadioButton = document.querySelector("#reason-question");
var commentRadioButton = document.querySelector("#reason-comment");
var rateInput = document.querySelector("#rate"); // rate input and label
var hourlyRateInput = document.querySelector("#hourly-rate"); // just rate input

var contactForm = document.querySelector("#contact-form");
var contactMeButton = document.querySelector("#contact-me")

window.addEventListener("load", function() {
    // set event listeners for radio buttons
    // show hourly rate input field if hiring radio button is checked, hide otherwise
    // change event doesn't seem to fire when unchecked?
    // add event listeners to all radio buttons
    toggleHourlyRate();
    hiringRadioButton.addEventListener("change", toggleHourlyRate);
    commentRadioButton.addEventListener("change", toggleHourlyRate);
    questionRadioButton.addEventListener("change", toggleHourlyRate);

    // add event listener to "Contact Me" button
    // scroll down to contact form
    contactMeButton.addEventListener("click", function() {
        contactForm.scrollIntoView({behavior: "smooth"});
    })});

// make hourly rate input visible and required if hiring radio button is clicked
function toggleHourlyRate() {
    if (hiringRadioButton.checked) {
        rateInput.style.display = "";
        hourlyRateInput.required = true;
    }
    else {
        rateInput.style.display = "none";
        hourlyRateInput.required = false;
    }
}