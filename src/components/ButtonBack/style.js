import { styled } from 'styled-components'

export const Container = styled.a`
    margin: 2rem  8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 6.62rem;
    
    

    
    >p {
        font-weight: 700;
        font-size: 1.62rem;
        color: ${({ theme}) => theme.COLORS.LIGHT_300};
        font-family: ${({ theme}) => theme.FONTS.POPPINS};
    }
`