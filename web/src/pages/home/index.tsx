import { Task } from "@/components/task";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useEffect, useState } from "react";
import { api } from "@/server/api";
import { useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Tasks {
    id: string,
    title: string,
    description: string,
    isChecked: boolean,
    created_at: string,
    authorId: string
}

interface User {
    id: string,
    name: string,
    email: string,
   
}

export function Home() {

    const [tasks, setTasks] = useState<Tasks[] | undefined>()
    const [user, setUser] = useState<User | undefined>()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    
    const { token } = JSON.parse(localStorage.getItem("ToDo-App") || "{}")

    if(!token){
        navigate("/")
    }

    async function getDataUser(){

        const { data } = await api.post('/validate', {token})
        setUser(data)
    }

    async function getTasks(){

        const { data } = await api.get('/task', {
            headers: { 
                Authorization: token
            }
        })
        setTasks(data)
    }
    useEffect(() => {

        getDataUser()
        getTasks()
    })

    async function handleCreateTask(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        const data = {title, description}
        await api.post('/task', data, {
            headers: { 
                Authorization: token
            }
        })
    }

    async function deleteAccount(){
        await api.delete(`/user/${user?.id}`, {
            headers: { 
                Authorization: token
            }
        })
        localStorage.clear()
        navigate('/login')
    }

    async function logout(){
        localStorage.removeItem('ToDo-App')
        navigate('/login')
    }

    return (
        <div className="w-full h-4/5 max-w-4xl p-3 space-y-7">
            <header className="w-full flex justify-between items-center">
                <div className="space-y-3">
                    <h1 className="text-2xl font-extrabold leading-snug">Bem vindo, {user?.name}!</h1>
                    <span className="text-base font-normal leading-relaxed">Quais tarefas vamos fazer agora?</span>
                </div>

                <Popover>
                <PopoverTrigger>
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>{user?.name[0]}</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-2 flex flex-col gap-2">
                    <Button onClick={logout} variant={"ghost"}>Logout</Button>
                    <Button onClick={deleteAccount}variant={"ghost"} className="text-red-600 hover:text-red-400">Deletar a conta</Button>
                    
                </PopoverContent>
            </Popover>
              
            </header>

            <main className="w-full">
                
              <div className="w-full space-y-5">
                <div className="w-full flex justify-between items-center">
                    <strong>Tarefas</strong>
                    <Dialog>
                        <DialogTrigger>
                            <Button>
                                <span>Criar tarefa</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="space-y-5">
                            <DialogHeader>
                                <DialogTitle>Crie o que vai fazer</DialogTitle>
                                <DialogDescription>
                                    Descreva qual tarefa você ira fazer hoje
                                </DialogDescription>
                            </DialogHeader>

                            <form onSubmit={handleCreateTask} className="space-y-5 outline-none" action="">
                                <div className="space-y-2">
                                    <Label>
                                        titulo:
                                    </Label>
                                    <Input onChange={e => setTitle(e.target.value)}/>
                                </div>

                                <div className="space-y-2">
                                    <Label>
                                        description:
                                    </Label>
                                    <Textarea className="resize-none" onChange={e => setDescription(e.target.value)}/>
                                </div>

                                <div className="w-full flex gap-4">
                                    <DialogClose asChild>
                                        <Button className="w-full" variant={'outline'}>Cancelar</Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button type="submit" className="w-full" >Criar</Button>
                                    </DialogClose>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="w-full">
                    {tasks && tasks.map((task, index) => (
                        <Task key={index} id={task.id} title={task.title} description={task.description} checked={task.isChecked} />
                    ))}
                    
                </div>
              </div>
            </main>
        </div>
    )
}