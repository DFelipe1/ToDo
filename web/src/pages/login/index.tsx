import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export function Login() {

    const navigate = useNavigate()

    function toRegisterPage(){
        navigate('/register')
    }

    return (
        <main className="w-full max-w-xl p-3 rounded border border-border/80 space-y-5">
            <h1 className="text-2xl font-bold w-full text-center">Login</h1>
            <p className="text-base font-normal leading-relaxed w-full text-center">Olá é bom te ver aqui, vamos organizar sua rotina?</p>
            <form action="" className="w-full grid grid-cols-4 items-center gap-4 text-right">
                <Label htmlFor="email">Email:</Label>
                <Input 
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    required
                    className="col-span-3 "
                />

                <Label htmlFor="password">Senha:</Label>
                <Input 
                    type="password"
                    id="password"
                    placeholder="Digite seu email"
                    required
                    className="col-span-3 "
                />
            
                <div className="w-full col-span-full flex gap-3 items-center justify-end">
                    <Button onClick={toRegisterPage} variant={"outline"} className="w-fit col-span-2">
                        Criar conta
                    </Button>
                    <Button className="w-fit col-span-2">
                        Entrar na plataforma
                    </Button>
                </div>
                
            </form>
      </main>
    )
}