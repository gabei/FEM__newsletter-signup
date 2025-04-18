import express, {Request, Response} from "express";
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());


app.post('/contact', async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.status(200).json({message: "login success!", data: req.body});
  }
  catch(e) {
    console.log(e);
    res.status(400).json({message: "problem logging in", data: e});
  }
})


app.listen(3000, ()=> {
  console.log("Server is listening on port 3000...");
})