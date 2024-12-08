// JavaScript to handle form submission and alert
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get values from the form
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Display a simple alert for now (you can later integrate it with a backend to send the message)
    alert(`Message sent by: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Reset the form after submission
    document.getElementById("contactForm").reset();
});
