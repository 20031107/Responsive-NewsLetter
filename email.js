const form = document.getElementById('form');
const email = document.getElementById('email');


form.addEventListener('submit', (e) => {
    if (!checkingInputs()) {
      e.preventDefault();
    }
  });
  

function checkingInputs(){
    const emailValue = email.value.trim();

    let isValid = true;


    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
        isValid = false;
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'valid email is required');
        isValid = false;
    }

    return isValid;
}




function setErrorFor(input, message){
    const inputBox = input.parentElement;
    const small = document.getElementById('emailError');

  
    inputBox.className = 'foremail error';
    small.innerText = message
  }

  function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


