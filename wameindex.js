
function sendToWhatsApp() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;
    
    var message = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nLocation: ${location}`;
    
    var whatsappURL = `https://wa.me/+918610490939?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');


    // let whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}\nLocation: ${location}`;
    // let whatsappUrl = `https://wa.me/+919715179095?text=${encodeURIComponent(whatsappMessage)}`;

    // window.open(whatsappUrl, '_blank');
}
