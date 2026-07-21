
const textSvijetlaTema = 'Prebaci na ☀️ svijetlu temu';
const textTamnaTema = 'Prebaci na 🌙 tamnu temu';

const themeLink = document.getElementById('theme-link');
const container = document.getElementById('theme-switcher-container');

const themeBtn = document.createElement('button');
themeBtn.textContent = 'Prebaci na 🌙 tamnu temu';
themeBtn.className = 'btn';
container.appendChild(themeBtn);


themeBtn.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === 'style1.css') {
        themeLink.setAttribute('href', 'style2.css');
        themeBtn.textContent = textSvijetlaTema;
    } else {
        themeLink.setAttribute('href', 'style1.css');
        themeBtn.textContent = textTamnaTema;
    }
});