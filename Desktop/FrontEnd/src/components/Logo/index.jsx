import { Container } from "./style";
import  Logoimage  from '../../assets/logo.svg'

export function Logo({isFooter,span,...rest}){

    return(
        <Container>
            <div>
                <img src={Logoimage} alt="" />
                <h1>food explorer</h1>
            </div>
            { span && <span>{span}</span> }

        </Container>
    )
}