(function () {
    emailjs.init("t_K0XGwAws2aaD0AA");
})();

window.onload = function () {
    document.getElementById('newsletter-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const btn = event.target.querySelector('button');
        btn.innerText = 'Sending...';

        emailjs.sendForm('service_wdl', 'template_gdvpo3t', this)
            .then(function () {
                const userEmail = document.getElementById('email').value;

                emailjs.send('service_wdl', 'template_yo4xzrv', {
                    user_email: userEmail
                }).then(() => {
                    console.log("Auto-reply sent successfully");
                }).catch((err) => {
                    console.error("Auto-reply failed:", err);
                });

                alert('Success! You are now subscribed.');
                btn.innerText = 'Subscribe';
                document.getElementById('newsletter-form').reset();
            }, function (error) {
                alert('FAILED... Please try again later.');
                console.log('FAILED...', error);
                btn.innerText = 'Subscribe';
            });
    });
}
