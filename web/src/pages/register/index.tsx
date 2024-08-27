import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Register() {

    return (
        <main className="w-full max-w-xl p-3 rounded border border-border/80 space-y-5">
            <h1 className="text-2xl font-bold w-full text-center">Criar conta</h1>
            <p className="text-base font-normal leading-relaxed w-full text-center">Que bom que deseja se juntar a nós! deixe-me te conhecer melhor</p>
            <form action="" className="w-full grid grid-cols-4 items-center gap-4 text-right">
            
                <Label htmlFor="name">Qual seu nome?</Label>
                <Input 
                    type="text"
                    id="name"
                    placeholder="Informe seu nome ou como deseja ser chamado"
                    required
                    className="col-span-3 "
                />

                <Label htmlFor="email">Informe seu email</Label>
                <Input 
                    type="email"
                    id="email"
                    placeholder="Digete seu melhor email"
                    required
                    className="col-span-3 "
                />

                <Label htmlFor="password">Crie uma senha</Label>
                <Input 
                    type="password"
                    id="password"
                    placeholder="Faça sua senha"
                    required
                    className="col-span-3 "
                />

                <Button className="col-span-full" >
                   Criar conta
                </Button>
               
                
            </form>
    </main>
    )
}