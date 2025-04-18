import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());


app.post('/contact', async (request, response) => {
  try {
    console.log(request.body);
    response.status(200).json({message: "login success!", data: request.body});
  }
  catch(e) {
    console.log(e);
    response.status(400).json({message: "problem logging in", data: e});
  }
})


app.listen(3000, ()=> {
  console.log("Server is listening on port 3000...");
})