/* hamburger & side-nav */
const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
menuBtn.addEventListener('click', () => {
sideNav.classList.toggle('active');
menuBtn.classList.toggle('open');
});
document.querySelectorAll('#sideNav a').forEach(a =>
a.addEventListener('click', () => sideNav.classList.remove('active'))
);
/* dark-mode with localStorage */
const darkBtn = document.getElementById('darkModeBtn');
const DARK_KEY = 'site-dark-mode';
function setDarkMode(on) {
document.body.classList.toggle('dark-mode', on);
darkBtn.textContent = on ? 'Light Mode' : 'Dark Mode';
localStorage.setItem(DARK_KEY, on ? '1' : '0');
}
setDarkMode(localStorage.getItem(DARK_KEY) === '1');
darkBtn.addEventListener('click', () =>
setDarkMode(!document.body.classList.contains('dark-mode'))
);
/* highlight current section in nav – works on every page */
window.addEventListener('scroll', highlightNav);
highlightNav();
function highlightNav() {
const sections = document.querySelectorAll('section, header');
const links = document.querySelectorAll('#sideNav a[data-target]');
const pos = window.scrollY + window.innerHeight / 3;
sections.forEach(sec => {
const id = sec.id || 'home';
if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
links.forEach(a => a.classList.toggle('active', a.dataset.target === id));
}
});
}