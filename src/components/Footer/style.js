import { styled } from 'styled-components'

export const Container = styled.footer`
    height: 4.81rem;
    width: 100%;
    margin-top: auto;

    padding: 0 7.68rem 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_200}; 

    span{
        width: 20rem;
    }

    >svg{
        color: white;
    }
`