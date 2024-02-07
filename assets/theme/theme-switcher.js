document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.body.classList.add(`${savedTheme}-theme`);

    // Update icon visibility based on the saved theme or system preference
    updateIconVisibility(savedTheme);
});

function updateIconVisibility(theme) {
    document.getElementById('icon-light-theme').style.display = theme === 'light' ? 'block' : 'none';
    document.getElementById('icon-dark-theme').style.display = theme === 'dark' ? 'block' : 'none';
}

// Function to switch theme and save preference
function switchTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Toggle theme class on body
    document.body.classList.remove(`${currentTheme}-theme`);
    document.body.classList.add(`${newTheme}-theme`);

    // Save the user's theme preference
    localStorage.setItem('theme', newTheme);

    // Update icon visibility
    updateIconVisibility(newTheme);
}

// Event listener for the button
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', switchTheme);
