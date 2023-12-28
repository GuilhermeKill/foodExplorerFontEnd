import { Container } from './style'

export function InputSelect({ label, placeholder, type, icon: Icon, ...rest }){

    return(
        <Container>
            {label && <label htmlFor={type}>{label}</label>}
            <select name="estado">
                <option value="Refeição">Refeição</option>
                <option value="Bebida">Bebida</option>
                <option value="Sobremesa">Sobremesa</option>
	        </select>
        </Container>
    )
}