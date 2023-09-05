/*function formValidation(){
    
var name=document.getElementById('first-name');
var last_name=document.getElementById('last-name');
var email=document.getElementById('email');
var  number=document.getElementById('phone-number');
var  message= document.getElementById('floatingTextarea');

//Validate name is not empty
if (name.trim()==='') {
    alert('Please enter your first name');
    Event.preventDefault();
    return false;  
}
//email validation
const emailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!emailPattern.text(email)) {
    alert('Enter a valid email  address');
    Event.preventDefault();
    return false;
}
//Phone number validation
if (number.trim() !=='' && !/^\d{10}$/.text(number)) {
    alert('Please enter 10 digit number');
    Event.preventDefault();
    return false;
}
//Validate message is not empty
if (message.trim()=='') {
    alert('Please enter a message');
    Event.preventDefault();
    return false;
}
return true;
}

var form=document.getElementById('form');
form.addEventListener('button',formValidation);


document.getElementById('homepage-video').play();
*/

// Get a reference to the form and error message container
const form = document.getElementById('myForm');
const errorMessages = document.getElementById('errorMessages');

// Function to validate the form
function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Clear previous error messages
  errorMessages.innerHTML = '';

  // Get form values
  const first_name=document.getElementById('first-name').value.trim();
  const last_name=document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const number = document.getElementById('phone-number').value.trim();
  const message = document.getElementById('floatingTextarea').value.trim();

  // Validation rules (you can customize these)
  if (first_name === '') {
    displayError('first Name is required');
  }
  if (last_name === '') {
    displayError('last Name is required');
  }

  if (email === '') {
    displayError('Email is required');
  } else if (!isValidEmail(email)) {
    displayError('Invalid email format');
  }

    //Phone number validation
    if (number === '') {
        displayError('Please enter 10 digit number');
    }
    else if (!isValidNumber(number)) {
        displayError('Invalid number format');
      }
    
    //Validate message is not empty
    if (message === '') {
        displayError('Please enter a message');
    }
  // If no errors, submit the form (you can replace this with your submission logic)
  if (errorMessages.innerHTML === '') {
    alert('Form submitted successfully!');
    form.reset(); // Optionally, reset the form
  }
}

// Function to display error messages
function displayError(message) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessages.appendChild(errorMessage);
}

// Function to validate email using a simple regex
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
function isValidNumber(number) {
    const phonePattern = /^\d{10}$/; // Assumes a 10-digit format, modify for your region
    return phonePattern.test(number);
  }
// Attach the form validation function to the form's submit event
form.addEventListener('submit', validateForm);
