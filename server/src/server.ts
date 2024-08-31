import { Application } from "express";
import express from "express";
import cors from "cors";
import { create, deleteUser } from "./controllers/userController";
import 'dotenv/config'
import { authenticate, validate } from "./controllers/authController";
import { createTask, deleteTask, getAllTasks, toggleCheckTask, updateTask } from "./controllers/taskController";
import { varifyToken } from "./middleware/auth";

const app: Application = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/user', create)
app.delete('/user/:id', deleteUser)

app.post('/login', authenticate)
app.post('/validate', validate)

app.post('/task', varifyToken, createTask)
app.get('/task', varifyToken, getAllTasks)
app.put('/task/:id', varifyToken, updateTask)
app.patch('/task/toggle-checked/:id', varifyToken, toggleCheckTask)
app.delete('/task/:id', varifyToken, deleteTask)

app.listen('3333' ,() => {
    console.log('Server is Running!');
});