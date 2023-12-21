import { styled } from 'styled-components'


export const Container = styled.button`
    width: 100%;
    height: 3rem;
    padding: 0.8rem;
    border: none;
    border-radius: 0.31rem;

    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.TOMATO_1OO};
` 