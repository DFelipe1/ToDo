import { Application } from "express";
import express from "express";
import cors from "cors";

const app: Application = express();

app.use(cors({ origin: "*" }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen('3333' ,() => {
    console.log('Server is Running!');
});