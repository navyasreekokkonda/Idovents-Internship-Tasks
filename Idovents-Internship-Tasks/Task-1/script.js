// Scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent! Thank you for contacting me.");
});
