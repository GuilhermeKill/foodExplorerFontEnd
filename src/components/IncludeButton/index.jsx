import { Container } from './style'
import { FiPlus, FiMinus } from "react-icons/fi";
import { Button } from '../Button'
export function IncludeButton({ title }){


    return(
        <Container>
                <button className="buttons"><FiPlus size={20}/></button>
                <span> 00 </span>
                <button className="buttons"><FiMinus size={20}/></button>
                
                <Button title={title}/>
        </Container>
    )
}