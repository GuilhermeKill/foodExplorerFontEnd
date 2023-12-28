import { styled } from 'styled-components'


export const Container = styled.header`
    width: 100%;
    padding: 1.5rem 7.68rem ;
    gap: 2rem;
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${({ theme }) => theme.COLORS.DARK_600};

   
    > div:nth-child(1){
        font-size: 0.6rem;
        width: 12rem;
    }

    > div:nth-child(2){
        width: 60rem;
    }

    > input:nth-child(){
        padding: 12rem;
    }

    > button:nth-child(3){
        width: 13.5rem;
    }

    >img{
        width: 1.3rem;
    }
`