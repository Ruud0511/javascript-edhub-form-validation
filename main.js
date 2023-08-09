// Referenties inputvelden //
const usernameInput = document.getElementById('username-field');
const passwordInput = document.getElementById('password-field')

// Referenties form warnings //
const usernameWarning = document.getElementById('username-warning');
const passwordWarning = document.getElementById('password-warning');

// Eventlisteners //
usernameInput.addEventListener('keyup', checkUsername);
passwordInput.addEventListener('keyup', checkPassword);

// Functie username input en aanroep door eventlistener //

function checkUsername(e) {
    if (e.target.value.includes('@')) {
        usernameWarning.textContent = 'Gebruikersnaam mag geen @ bevatten';
    }
    else {
        usernameWarning.textContent = ''
    }
}


// Functie password en aanroep door event listener //

function checkPassword(e) {
    if (e.target.value.length >= 6) {
        passwordWarning.textContent = '';
    }
    else {
        passwordWarning.textContent = 'Wachtwoord is te kort, gebruik minimaal 6 tekens';
    }
}