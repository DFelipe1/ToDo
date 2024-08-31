import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import z from "zod";
import { prisma } from "../service/prisma";

export async function authenticate(req: Request, res: Response){
    try {
        const User = z.object({
            email: z.string().email(),
            password: z.string().min(5).max(10)
        });
        const { email, password } = User.parse(req.body)

        // if (!(email && password)) {
        //     return res.status(400).json({ message: "Email e senha são obrigatórios"})
        // }

        const user = await prisma.user.findFirst({
            where: { 
                email
            }
        })

        if(user && password === user.password){
            const token = jwt.sign(
                { id: user.id, name: user.name, email: user.email},
                process.env.TOKEN_KEY || "aaaaa",
                { expiresIn: '6h'}
            )
            res.status(201).send({token})
        } else {
            return res.status(401).json({ message: 'Usuário e/ou senha incorretos'})
            
        }


    } catch (error) {
        res.status(401).send(error)
    }
}

export function validate(req: Request, res: Response){
    try {
        if(!req.body.token){
            return res.status(400).json({ message: "necessário informar o token"})
        }

        const decode = jwt.decode(req.body.token)
        res.status(200).send(decode)
    } catch (error) {
        res.status(401).send(error)
    }
}