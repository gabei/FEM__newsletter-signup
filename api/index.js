const express = require('express');
const validate = require('validatejs');
const app = express();
app.use(express.json());


const constraints = {
  name: {
    presence: true,
    length: {
      minimum: 2,
      maximum: 20
    }, 
    format: {
      pattern: "[a-zA-Z]",
      message: "Name may only contain letters."
    }
  },
  email: {
    presence: true,
    email: true
  }
}


app.post('/contact', async (request, response) => {
  const isNotValid = validate(request.body, constraints);
  if(isNotValid) {
    response.status(400).json({error: isNotValid});
  } else {
    response.status(200).json({message: "login success", data: request.body});
  }
})


app.listen(3000, ()=> {
  console.log("Server is listening on port 3000...");
})