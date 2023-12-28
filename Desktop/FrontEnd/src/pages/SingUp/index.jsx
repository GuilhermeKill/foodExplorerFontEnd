import { Form, Container } from './style'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SingUp(){

    return(
        <Container>
            <Logo />
            <Form>
                <h1> Crie sua conta </h1>

                <Input label={"Nome"} placeholder={"Exemplo: Sandra"}/>
                <Input label={"Email"} placeholder={"Exemplo: exemplo@exemplo.com"}/>
                <Input label={"Senha"} placeholder={"******************"}/>
                
                <Button title={"Entrar"} />

                <a href="#"> Já tenho uma conta </a>
            </Form>
        </Container>
    )

}