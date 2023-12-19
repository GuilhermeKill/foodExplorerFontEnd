import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 9rem    20rem;
    gap: 19.12rem; 
`

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 4rem;
    width: 29.75rem;
    height: 38rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > h1{
        margin: 4rem 0 2rem 0;
        
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        font-weight: 400;
    }

    > button{
        margin-top: 2rem;
    }

    a{
        margin-top: 2rem;
        font-weight: 400;
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`