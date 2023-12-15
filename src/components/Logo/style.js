import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    > h1{
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    }
    > img{

    }
    
`
