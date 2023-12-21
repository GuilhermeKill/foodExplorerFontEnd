import { Container } from "./style";

import Serach from '../../assets/search.svg'
import Leave from '../../assets/leave.svg'
import { Logo } from "../Logo";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header(){
    
    return(
        <Container>
            <Logo />
            <Input  placeholder={"Busque por pratos ou ingredientes"}/>
            <Button class="button" title={"Pedidos (0)"}/>
            <a href="">
                <img src={Leave}/>
            </a>
        </Container>
    )
}