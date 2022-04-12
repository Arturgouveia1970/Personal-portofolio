const mobileBtn = document.getElementById('mobileMenu');
const nav = document.querySelector('.nav-list');

const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
  nav.style.display = 'block';
});

mobileBtnExit.addEventListener('click', () => {
  nav.style.display = 'none';
});

nav.addEventListener('click', () => {
  nav.style.display = 'none';
});