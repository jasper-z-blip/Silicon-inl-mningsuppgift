const toggleSwitch = document.getElementById('darkmode-switch'); //Hjälp av Chat-GPT och Joakims video//
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    }
});
//Denna section nedanför är tagen nästan uteslutande från chat-GPT//
document.addEventListener('DOMContentLoaded', function() {
    const darkModeSwitch = document.getElementById('darkmode-switch');
    const lightButtons = document.querySelector('.buttons');
    const darkButtons = document.querySelector('.buttons-dark');

    function updateButtonVisibility() {
        const isDarkMode = darkModeSwitch.checked;

        if (isDarkMode) {
            lightButtons.style.display = 'none';
            darkButtons.style.display = 'flex';
        } else {
            lightButtons.style.display = 'flex';
            darkButtons.style.display = 'none';
        }
    }

    updateButtonVisibility();

    darkModeSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
        updateButtonVisibility();
    });
});