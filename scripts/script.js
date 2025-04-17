console.log("yes it loaded.");


const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formError = document.querySelector(".contact-form__error");


contactForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  formError.innerHTML = "";
  let errors = [];

  if(!isValidName(nameInput.value)){
    // error message
    errors.push('Names must be between 2 and 20 characters long and contain no numbers');
    // aria-live update
  }

  if(!isValidEmail(emailInput.value)) {
    // error message
    errors.push('Please enter a valid email address.');
    // aria-live update
  }

  formError.append(makeFormErrorListElements(errors));
  

})



function isValidEmail(address){
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  return address.match(regex);
}

function isValidName(name){
  return (
    typeof name === "string" && 
    name.length >= 2 && 
    name.length <=20);
}

function makeFormErrorListElements(text){
  let errorList = document.createElement("ul");
  text.forEach((msg) => {
    let errorItem = document.createElement("li");
    errorItem.innerText = msg;
    errorList.append(errorItem);
  })
  return errorList;
}