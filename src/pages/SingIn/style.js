import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 3.47rem auto 0 auto;
    
`

export const Form = styled.form`
    
    width: 29.75rem;
    height: 38rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

`