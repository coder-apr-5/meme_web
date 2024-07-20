document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you,ab 150 rupay nikal, ${name}. Phir meme bhejunga tere ${email} mai.`);

    // Reset form fields
    document.getElementById('contact-form').reset();
});