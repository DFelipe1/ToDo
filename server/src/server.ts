import { Application } from "express";
import express from "express";
import cors from "cors";
import { create } from "./controllers/userController";
import 'dotenv/config'

const app: Application = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/user', create)

app.listen('3333' ,() => {
    console.log('Server is Running!');
});