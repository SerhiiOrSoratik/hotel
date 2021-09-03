import express, { Request, Response } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router)


app.listen(3001, () => {
  console.log("SERVER RUNING ON PORT 3001");
});


