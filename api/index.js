const express = require('express');
const validate = require('validatejs');
const app = express();
import constraints from './validation/constraints';
app.use(express.json());

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