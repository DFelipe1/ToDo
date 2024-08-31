import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'


export function varifyToken(req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({ message: "token é obrigatório"}) 
    }
    
    try {
        const tokenReplaced = token.replace("Bearer ", "")
        const decoded = jwt.verify(tokenReplaced, process.env.TOKEN_KEY || 'aaaaa')
        if(!decoded){
            res.status(401).send("token invalido")
        }
        req.body.user = decoded
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "credencias inválidas"})
    }
}