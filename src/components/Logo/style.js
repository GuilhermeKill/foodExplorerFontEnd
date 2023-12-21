import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    > h1{
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    } 
`
