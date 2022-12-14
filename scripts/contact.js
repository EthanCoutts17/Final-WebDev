// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submit_Button = document.getElementById("submit-button");
var contact_Page = document.getElementById("contact-page");



submit_Button.addEventListener("click", change_page);

function change_page () {
    contact_Page.innerHTML = "Thank you for your message!"
}

