

const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formError = document.querySelector(".contact-form__error");


contactForm.addEventListener('submit', (e)=> {
  if(validateForm(e)){
    contactForm.submit();
    formError.innerText = "Form submitted!";
  }
})

function validateForm(e){
  e.preventDefault();

  let formIsValid = true;
  let errors = [];
  formError.innerHTML = "";

  if(!isValidName(nameInput.value)){
    errors.push('Names must be between 2 and 20 characters long and contain no numbers');
    formIsValid = false;
  }

  if(!isValidEmail(emailInput.value)) {
    errors.push('Please enter a valid email address.');
    formIsValid = false;
  }

  formError.append(errorListElements(errors));
  return formIsValid;
}


function isValidEmail(address){
  address = address.trim();
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  return address.match(regex);
}


function isValidName(name){
  name = name.trim();
  return (
    typeof name === "string" && 
    name.length >= 2 && 
    name.length <=20);
}


function errorListElements(text){
  let errorList = document.createElement("ul");
  text.forEach((msg) => {
    let errorItem = document.createElement("li");
    errorItem.innerText = msg;
    errorList.append(errorItem);
  })
  return errorList;
}