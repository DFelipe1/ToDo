import { Request, Response } from 'express';
import { createRepository } from '../repositories/userRepository';
import { z } from "zod";
import jwt from 'jsonwebtoken'

export  async function create(req: Request, res: Response){
    try {
        const User = z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(5).max(10)
        });
        const {name, email, password} = User.parse(req.body);
    
        const user = await createRepository({name, email, password})

        const token = jwt.sign(
            { id: user.id, name: req.body.name, email: req.body.email},
            process.env.TOKEN_KEY || "aaaaa",
            { expiresIn: '6h'}
        )

    
        res.status(200).send({user, token})
    } catch (error) {
        res.status(400).send(error)
    }
        
}