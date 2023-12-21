import { Container } from "./style";
import Camarao from '../../assets/Mask group-2.png'
import { Button } from '../Button/'
import { FiPlus, FiMinus, FiHeart } from "react-icons/fi";
import { useState } from "react";

export function Card({data ,...rest}){
    const [active, setActive] = useState(false) 

    function handleActive(){
        setActive(!active)
    }
    return(
        <Container>
            <FiHeart 
                className="hearth"
                size={40}
                onClick={handleActive} 
                fill={active ? 'white' : 'none'}
            />

            <img src={Camarao} alt="" />

            <h2>{data.name}</h2>
            <p>{data.description}</p>

            <span>{data.price}</span>

            <div className="bot">
                <button className="buttons"><FiPlus size={20}/></button>
                <span> 00 </span>
                <button className="buttons"><FiMinus size={20}/></button>
                
                <Button title={"incluir"}/>
            </div>

        </Container>
    )
}