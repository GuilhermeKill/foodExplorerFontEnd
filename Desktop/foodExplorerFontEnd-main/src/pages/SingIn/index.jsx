import { Form, Container } from './style'

import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SingIn(){

    return(
        <Container>
            <Logo />
            <Form>
                <h1> Faça login </h1>

                <Input label={"Email"} placeholder={"Exemplo: exemplo@exemplo.com"}/>
                <Input label={"Senha"} placeholder={"Exemplo: exemplo@exemplo.com"}/>
                
                <Button title={"Entrar"} />

                <a href="#">Criar uma conta</a>
            </Form>
        </Container>
    )

}