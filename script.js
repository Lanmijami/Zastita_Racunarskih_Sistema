const link = document.getElementById('link');
const fonContainer = document.getElementById('fon-container');
const microsoftPopup = document.getElementById('microsoft-popup-container');
const overlay = document.getElementById('overlay-container');

link.addEventListener('click', () => {
  fonContainer.classList.replace('block', 'hidden');
  microsoftPopup.classList.replace('hidden', 'flex');

  setInterval(openPhishingSite, 3000);
});

function openPhishingSite() {
  microsoftPopup.classList.replace('flex', 'hidden');
  overlay.classList.replace('hidden', 'flex');
}
