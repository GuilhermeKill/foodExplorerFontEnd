import { styled } from 'styled-components'

export const Container = styled.input`
    border: none;
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    padding: 0.8rem 1rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    background: ${({ theme }) => theme.COLORS.DARK_900};
`