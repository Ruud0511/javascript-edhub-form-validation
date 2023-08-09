//
// function handleUsername() {
//     console.log('Ik heb een gebruikersnaam ingevoerd')
// }
//
// const username = document.getElementById('username-field');
//
// username.addEventListener('click', handleUsername);

// 1. username //
function handleInputUsername (e) {
    console.log(e.target.value);
}

const usernameInputField = document.getElementById('username-field');

usernameInputField.addEventListener('keyup', handleInputUsername);

// console.log('Gebruikersnaam mag geen @ bevatten')


// 2. password //
function handleInputPassword (e) {
    console.log(e.target.value);
}

const passwordInputField = document.getElementById('password-field');

passwordInputField.addEventListener('keyup', handleInputPassword);
