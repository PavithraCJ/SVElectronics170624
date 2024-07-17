// script.js
document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    let location = document.getElementById('location').value;

    console.log(name+" "+email+" "+message+" "+phone)
    let whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}\nLocation: ${location}`;
    let whatsappUrl = `https://wa.me/+919715179095?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
});
