import { prisma } from "../service/prisma"

interface createRepositoryProps{
    name: string
    email: string
    password: string
}

export async function createRepository({name, email, password}: createRepositoryProps) {
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