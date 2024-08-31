import z from "zod";
import { Request, Response } from 'express';
import { checkTaskRepository, createTaskRepository, deleteTaskRepository, getAllTasksRepository, updateTaskRepository } from "../repositories/taskRepository";

export async function createTask(req: Request, res: Response){
    try {
        const Task = z.object({
            user: z.object({
                id: z.string()
            }),
            title: z.string(),
            description: z.string(),
        })

        const { title, description, user } = Task.parse(req.body)

        const task = await createTaskRepository(title, description, user.id)

        res.status(200).send(task)
    } catch (error) {
        res.status(401).send(error)
    }
}

export async function getAllTasks(req: Request, res: Response){
    try {
        const User = z.object({
            id: z.string()
        })

        const { id } = User.parse(req.body.user)

        const tasks = await getAllTasksRepository(id)

        res.status(200).send(tasks)
    } catch (error) {
        res.status(401).send(error)
    }
}

export async function updateTask(req: Request, res: Response){
    try {
        const Task = z.object({
            user: z.object({
                id: z.string()
            }),
            title: z.string(),
            description: z.string(),
        })

        const { title, description, user } = Task.parse(req.body)
        const taskId = req.params.id

        const newTask = await updateTaskRepository(title, description, taskId, user.id)

        res.status(200).send(newTask)
    } catch (error) {
        
    }
}

export async function toggleCheckTask(req: Request, res: Response){
    try {
        const User = z.object({
            id: z.string()
        })

        const userId = User.parse(req.body.user)
        const taskId = req.params.id

        const isCompleted = await checkTaskRepository( taskId , userId.id)

        res.status(201).send(isCompleted)
    } catch (error) {
        res.status(400).send(error)
    }
}

export async function deleteTask(req: Request, res: Response){
    try {
        const User = z.object({
            id: z.string()
        })

        const userId = User.parse(req.body.user)
        const taskId = req.params.id

        await  deleteTaskRepository(taskId , userId.id)

        res.status(200).send("deletado com sucesso")
    } catch (error) {
        res.status(400).send(error)
    }
}