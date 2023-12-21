import { styled } from 'styled-components'

export const Container = styled.div`
    
    margin: 10rem auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    position: relative;
    height: 16.25rem;
    width: 70rem;

    h1{
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    p{
        font-family:${({ theme }) => theme.FONTS.ROBOTO};
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > div {
        display: flex;
        flex-direction: column;

        margin-left:  30rem;
    }

    > img {
        left: -3rem;
        bottom: 0;
    
        width: 40rem;
        position: absolute;
    }
`