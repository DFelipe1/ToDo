import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
    return (
        <main className="w-full max-w-xl p-3 rounded border border-border/80 space-y-5">
            <h1 className="text-2xl font-bold w-full text-center">Login</h1>
            <p className="text-base font-normal leading-relaxed w-full text-center">Olá é bom te ver aqui, vamos organizar sua rotina?</p>
            <form action="" className="w-full space-y-4">
            <div className="flex gap-2 items-center">
                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" placeholder="Digite seu email" required/>
            </div>
            <div className="flex gap-2 items-center">
                <Label htmlFor="password">Senha:</Label>
                <Input type="password" id="password" placeholder="Digite seu email" required/>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="w-fit">
                <span>Não tem uma conta? <a href="#">Crie uma agora</a></span>
                </div>
                <Button>
                    Entrar
                </Button>
            </div>
            </form>
      </main>
    )
}