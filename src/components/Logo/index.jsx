import { Container } from "./style";
import  Logoimage  from '../../assets/logo.svg'

export function Logo({...rest}){

    return(
        <Container>
            <img src={Logoimage} alt="" />
            <h1>food explorer</h1>
        </Container>
    )
}