import { Task } from "@/components/task";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { tasks } from "@/server/data";

export function Home() {
    return (
        <div className="w-full h-4/5 max-w-4xl p-3 space-y-7">
            <header className="w-full flex justify-between items-center">
                <div className="space-y-3">
                    <h1 className="text-2xl font-extrabold leading-snug">Bem vindo, Felipe!</h1>
                    <span className="text-base font-normal leading-relaxed">Quais tarefas vamos fazer agora?</span>
                </div>

                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>F</AvatarFallback>
                </Avatar>
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

                            <form className="space-y-5 outline-none" action="">
                                <div className="space-y-2">
                                    <Label>
                                        titulo:
                                    </Label>
                                    <Input/>
                                </div>

                                <div className="space-y-2">
                                    <Label>
                                        description:
                                    </Label>
                                    <Textarea className="resize-none"/>
                                </div>

                                <div className="w-full flex gap-4">
                                    <DialogClose asChild>
                                        <Button className="w-full" variant={'outline'}>Cancelar</Button>
                                    </DialogClose>
                                    <Button className="w-full" >Criar</Button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="w-full">
                    {tasks.map((task, index) => (
                        <Task key={index} title={task.title} description={task.description} checked={task.completed} />
                    ))}
                    
                </div>
              </div>
            </main>
        </div>
    )
}