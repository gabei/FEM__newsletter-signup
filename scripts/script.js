console.log("loaded");


const form = document.getElementById('form');

function handleSubmit(e){
  e.preventDefault(e);
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  console.log(data);
};

form.addEventListener('submit', handleSubmit);










// ___________________custom_constraints___________________

// function validateName(name){
//   const isString = typeof name === "string";
//   const lengthIsValid = validateLength(name, 2, 20);
//   return isString && lengthIsValid;
// }

// function validateEmail(email){
//   const isString = typeof email === "string";
// }

// // plain text!
// function validatePassword(pass, retypePass){
//   const isString = 
//         typeof pass === "string" && 
//         typeof retypePass === "string";
//   const lengthIsValid = validateLength(pass, 8, 30);
//   const passwordsMatch = pass === retypePass;
//   return isString && lengthIsValid && passwordsMatch;
  
// }

// function validateLength(word, min, max){
//   return word.length >= min && word.length <= max;
// }

