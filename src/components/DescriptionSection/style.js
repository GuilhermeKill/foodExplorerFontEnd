import  { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    

    section{
        display: flex;
        flex-direction: column;
        width: 42.9375;
        overflow-wrap: break-word;
    }

    h1{
        
        margin-bottom: 1.4rem;
        font-weight: 500;
        font-size: 3rem;
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
    p{
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        margin-bottom: 1.4rem;
    }

    img{
        width: 24.37rem;
    }

    .ingredients{
        margin-bottom: 3rem;
        gap: 2rem;
    }
`