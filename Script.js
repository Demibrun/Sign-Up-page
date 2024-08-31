document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value.trim();
    const weburl = document.getElementById('weburl').value.trim();
  
    const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    const emailRegex = /^\w{3,}@[a-zA-Z]+[.][a-zA-Z]{2,4}[.]{0,1}[a-zA-Z]{0,4}$/;
    const phoneRegex = /^[0][7-9][0-1][0-9]{8}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const weburlRegex = /^https:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  
    let isValid = true;
  
    function setErrorFor(input, message) {
        const errorElement = document.getElementById(input + 'Error');
        errorElement.textContent = message;
        isValid = false;
    }
  
    function clearErrorFor(input) {
        const errorElement = document.getElementById(input + 'Error');
        errorElement.textContent = '';
    }
  
    if (!nameRegex.test(name)) {
        setErrorFor('name', 'Please enter a valid full name (First Last).');
    } else {
        clearErrorFor('name');
    }
  
    if (!emailRegex.test(email)) {
        setErrorFor('email', 'Please enter a valid email address.');
    } else {
        clearErrorFor('email');
    }
  
    if (!passwordRegex.test(password)) {
        setErrorFor('password', 'Password must be at least 8 characters long and contain at least one letter and one number.');
    } else {
        clearErrorFor('password');
    }
  
  
  
    if (!phoneRegex.test(phone)) {
        setErrorFor('phone', 'Please enter a valid phone number.');
    } else {
        clearErrorFor('phone');
    }
  
    if (!weburlRegex.test(weburl)) {
        setErrorFor('weburl', 'Please enter a valid secure (https) URL.');
    } else {
        clearErrorFor('weburl');
    }
  
    if (isValid) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPhone', phone);
        localStorage.setItem('userWebURL', weburl);
        alert('Sign up successful!');
        this.reset();
    }
});
