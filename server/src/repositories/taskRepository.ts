import { prisma } from "../service/prisma";

export async function createTaskRepository(title: string, description: string, userId: string){
    
    const user = prisma.user.findUnique({
        where: { 
            id: userId,
        }
    })

    if(!user){
        return "usuário não existe"
    }
    
    const task = prisma.task.create({
        data: {
            title: title,
            description: description,
            authorId: userId
        }
    })

    return task
}

export async function getAllTasksRepository(userId: string){

    if(userId.trim() === ''){
        return "usuário inválido"
    }

    const tasks = await prisma.task.findMany({
        where: {
            authorId: userId
        }
    })

    return tasks
}

export async function updateTaskRepository(title: string, description: string, taskId: string, userId: string){
    const newTask = await prisma.task.update({
        where: {
            id: taskId,
            authorId: userId
        },
        data: {
            title: title,
            description: description
        }
    })

    return newTask
}

export async function checkTaskRepository(taskId: string, userId: string){

    const task = await  prisma.task.findUnique({
        where: {
            id: taskId,
            authorId: userId
        }
    })

    if(!task){
        return "tarefa inválida"
    }

    const isCompleted = await prisma.task.update({
        where: {
            id: taskId,
            authorId: userId
        },
        data: {
            isChecked: !task.isChecked
        }
    })

    return isCompleted
}

export async function deleteTaskRepository(taskId: string, userId: string){
    await prisma.task.delete({
        where: {
            id: taskId,
            authorId: userId
        }
    })
}