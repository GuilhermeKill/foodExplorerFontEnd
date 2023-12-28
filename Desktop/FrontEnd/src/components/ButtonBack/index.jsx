import { Container } from './style.js'
import { TfiAngleLeft } from 'react-icons/tfi';

export function ButtonBack(){
    return(
        <Container>
            <TfiAngleLeft size={25}/> 
            <p>Voltar</p>
        </Container>
    )
}