/* living gradient on hero name */
const nameEl = document.getElementById('name');
let ang = 0;
setInterval(() => {
ang = (ang + 2) % 360;
nameEl.style.background = linear-gradient(${ang}deg, var(--accent-1), var(--accent-2), var(--accent-3));
}, 140);