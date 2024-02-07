const toggleButton = document.getElementById('theme-toggle');

// Function to switch theme and save preference
function switchTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Toggle theme class on body
    document.body.classList.remove(`${currentTheme}-theme`);
    document.body.classList.add(`${newTheme}-theme`);

    // Save the user's theme preference
    localStorage.setItem('theme', newTheme);
}

// Event listener for the button
toggleButton.addEventListener('click', switchTheme);

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.body.classList.add(`${savedTheme}-theme`);
});
