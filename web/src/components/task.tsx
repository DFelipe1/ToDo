import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface TaskProps {
    title: string
    description: string
    checked?: boolean
}

export function Task({ title, description, checked= false }: TaskProps) {

    const [ isChecked, setIsChecked ] = useState<CheckedState>(checked)

    return (
        <div className={`w-full p-2 flex justify-between items-center ${isChecked && 'opacity-80'}`}>
            <div className="w-full flex gap-6 items-center">
                <Checkbox
                    checked={isChecked}
                    onCheckedChange={(e) => setIsChecked(e)}
                />

                <div className="flex flex-col gap-y-0.5">
                    <strong className={`text-base font-medium leading-none ${isChecked && 'line-through'}`}>
                        {title}
                    </strong>
                    <span className={`text-sm font-normar leading-tight ${isChecked && 'line-through'}`}>
                        {description}
                    </span>
                </div>
            </div>

            <Popover>
                <PopoverTrigger>
                    <MoreHorizontal size={20}/>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-2 flex gap-4 ">
                    <Dialog>
                        <DialogTrigger>
                            <Button variant={"secondary"} className="space-x-2">
                                <span>Editar</span>
                                <Edit  size={16}/>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="space-y-5">
                            <DialogHeader>
                            <DialogTitle>Edite a tarefa {title}</DialogTitle>
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
                                    <Button className="w-full" >Confirmar</Button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger>
                            <Button variant={"destructive"} className="space-x-2">
                                <span>Excluir</span>
                                <Trash2 size={16}/>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="space-y-5">
                            <DialogHeader>
                            <DialogTitle>deseja excluir essa tarefa {title}?</DialogTitle>
                            </DialogHeader>
                            
                            <div className="w-full flex gap-4">
                                <DialogClose asChild>
                                    <Button className="w-full" variant={'outline'}>Cancelar</Button>
                                </DialogClose>
                                <Button className="w-full" variant={'destructive'}>Excluir</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                    
                </PopoverContent>
            </Popover>
        
           
    </div>
    )
}