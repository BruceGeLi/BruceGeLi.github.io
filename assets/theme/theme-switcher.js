document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.body.classList.add(`${savedTheme}-theme`);
    updateLabelVisibility(savedTheme);
});

function switchTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.classList.replace(`${currentTheme}-theme`, `${newTheme}-theme`);
    localStorage.setItem('theme', newTheme);
    updateLabelVisibility(newTheme);
}

function updateLabelVisibility(theme) {
    document.getElementById('light-label').style.display = theme === 'dark' ? 'block' : 'none';
    document.getElementById('dark-label').style.display = theme === 'light' ? 'block' : 'none';
}

const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', switchTheme);
