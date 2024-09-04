import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/server/api";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleCreateAccount(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        try {
            const { data } = await api.post('/user', {name, email, password})
            if( data.token ){
                api.defaults.headers.Authorization = `Bearer ${data.token}`

                const object = {
                    logged: true,
                    token: data.token
                }

                localStorage.setItem("ToDo-App", JSON.stringify(object))
                navigate("/")
                return
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="w-full max-w-xl p-3 rounded border border-border/80 space-y-5">
            <h1 className="text-2xl font-bold w-full text-center">Criar conta</h1>
            <p className="text-base font-normal leading-relaxed w-full text-center">Que bom que deseja se juntar a nós! deixe-me te conhecer melhor</p>
            <form onSubmit={handleCreateAccount} action="" className="w-full grid grid-cols-4 items-center gap-4 text-right">
            
                <Label htmlFor="name">Qual seu nome?</Label>
                <Input 
                    type="text"
                    id="name"
                    placeholder="Informe seu nome ou como deseja ser chamado"
                    required
                    className="col-span-3 "
                    onChange={e =>  setName(e.target.value)}
                />

                <Label htmlFor="email">Informe seu email</Label>
                <Input 
                    type="email"
                    id="email"
                    placeholder="Digete seu melhor email"
                    required
                    className="col-span-3 "
                    onChange={e =>  setEmail(e.target.value)}
                />

                <Label htmlFor="password">Crie uma senha</Label>
                <Input 
                    type="password"
                    id="password"
                    placeholder="Faça sua senha"
                    required
                    className="col-span-3 "
                    onChange={e =>  setPassword(e.target.value)}
                />

                <Button type="submit" className="col-span-full" >
                   Criar conta
                </Button>
               
                
            </form>
    </main>
    )
}