import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";

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
                <div className="w-full flex justify-end">
                    <Button>
                        criar tarefa
                    </Button>
                </div>
              <div className="w-full space-y-5">
                <div className="w-full flex gap-6 items-center">
                    <Checkbox className="w-5 h-5"/>

                    <strong>Tarefas</strong>
                </div>
                <div className="w-full">
                    <div className="w-full p-2 flex justify-between items-center">
                        <div className="w-full flex gap-6 items-center">
                            <Checkbox/>

                            <div className="flex flex-col gap-y-0.5">
                                <strong className="text-bas font-medium leading-none">AAAA</strong>
                                <span className="text-sm font-normar leading-tight">AAAA</span>
                            </div>
                        </div>

                        <MoreHorizontal size={20}/>

                    </div>
                    
                </div>
              </div>
            </main>
        </div>
    )
}