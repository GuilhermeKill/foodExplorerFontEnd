import { Container } from './style'

export function Input({ label, placeholder, type, icon: Icon, ...rest }){

    return(
        <Container>
            {label && <label htmlFor={type}>{label}</label>}
            <input {...rest} type={type} placeholder={placeholder}></input>
        </Container>
    )
}