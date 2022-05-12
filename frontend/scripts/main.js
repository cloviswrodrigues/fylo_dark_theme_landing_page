const form = document.querySelector('.js-form');
const inputEmail = form.querySelector('.form__input');

form.addEventListener('submit', (e) => {         
    e.preventDefault();        
    let emailValid = validateInput(inputEmail);

    if (emailValid) {
        inputEmail.value = ''
    }
})

form.addEventListener('focusin', (e) => {
    activateMsgError(inputEmail, false);
    activateMsgSucess(inputEmail, false);
});


function validateInput(fieldEmail) {
    console.log('fieldEmail:' +fieldEmail);
   if (!isValidEmail(fieldEmail.value)){
    activateMsgError(fieldEmail, true);
        return false;
    }else{
        activateMsgSucess(fieldEmail, true);
        return true;
    }
}

function isValidEmail(email){
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.exec(email) == null ? false : true;
}

function activateMsgError(fieldEmail, isError) {
    spanMsg = fieldEmail.parentElement.querySelector('.msg__error');
    if (isError){
        fieldEmail.classList.add('input__error');
        spanMsg.classList.add('activate');
    }else {
        fieldEmail.classList.remove('input__error');
        spanMsg.classList.remove('activate');
    }
}

function activateMsgSucess(fieldEmail, isSucess) {
    spanMsg = fieldEmail.parentElement.querySelector('.msg__success');

    if (isSucess){
        spanMsg.classList.add('activate');
    } else {
        spanMsg.classList.remove('activate');
    }    
}