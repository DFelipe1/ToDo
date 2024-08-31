import { prisma } from "../service/prisma"

interface createRepositoryProps{
    name: string
    email: string
    password: string
}

export async function createUserRepository({name, email, password}: createRepositoryProps) {
    const user = await prisma.user.create({
        data: {
            email: email,
            name: name,
            password: password,
        },
        select: {
            id: true,
            email: true,
            name: true,
            password: false
        }
    })

    return user
}

export async function deleteUserRepository(id: string){

    await prisma.task.deleteMany({
        where: {
            authorId: id
        }
    })
    
    const user = await prisma.user.delete({
        where: {
            id: id
        }
    })

    return user
}