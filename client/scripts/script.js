
const contactForm = document.getElementById("contact-form");
const signupSuccess = document.getElementById("success");

const userName = {
  input: document.getElementById("name"),
  error: document.querySelector(".name-error"),
}

const userEmail = {
  input: document.getElementById("email"),
  error: document.querySelector(".email-error"),
}


contactForm.addEventListener('submit', async (e) => {
  let data = await tryEmailSignup(e);
  console.log(data);
});
  

async function tryEmailSignup(event){
  event.preventDefault();
  try {
    return (
      validateForm() 
      ? postContactToApi({
          name: userName.input.value,
          email: userEmail.input.value
        })
      : null
    )
  }
  catch(error)
  {
    console.log(error);
    return "Email signup unsuccessful.\n" + error;
  }
}

function displayErrorMessage() {
  alert("Signup error");
}



function validateForm(){
  let formIsValid = true;
  resetErrorText();
  
  if(!isValidName(userName.input.value)){
    userName.error.classList.remove("hidden");
    formIsValid = false;
  }

  if(!isValidEmail(userEmail.input.value)) {
    userEmail.error.classList.remove("hidden");
    formIsValid = false;
  }

  return formIsValid;
}

function resetErrorText(){
  userName.error.classList.add("hidden");
  userEmail.error.classList.add("hidden");
}


function isValidEmail(address){
  address = address.trim();
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  return address.match(regex);
}


function isValidName(name){
  const nameRegex = /[A-Za-z]/ig;
  name = name.trim();

  return (
    typeof name === "string" && 
    name.length >= 2 && 
    name.length <=20) &&
    nameRegex.test(name);
}


async function postContactToApi(formData){
  let options = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json;charset=utf-8'
      },
      body: JSON.stringify(formData),
      mode: "cors",
  }

  try {
    let response = await fetch('http://localhost:3000/contact', options);
    let result = await response.json();
    return result;
  }

  catch(e){
    // redirect or reload page. Display error message to user
    console.error(e);
  };
}

