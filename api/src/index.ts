import express, {Request, Response} from "express";
const app = express();
const cors = require('cors');
const helmet = require('helmet');
import validateUser from "./validation/validation";


// basic middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.disable('x-powered-by');


app.post('/contact', async (req: Request, res: Response) => {
  try {
    const validatedUserData = validateUser(req.body);
    if(validatedUserData){
      res.status(200).json({message: "login success!", data: validatedUserData});
    }
  }
  
  catch(e) {
    console.log(e);
    res.status(400).json({message: "problem logging in", data: e});
  }
})


app.listen(3000, ()=> {
  console.log("Server is listening on port 3000...");
})