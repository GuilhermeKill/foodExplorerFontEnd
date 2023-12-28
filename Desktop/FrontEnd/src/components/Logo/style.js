import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    > div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    }
    span{
        position: absolute;
        top: 4rem;
        left: 13rem;
        font-family:  ${({ theme }) => theme.FONTS.ROBOTO};
        color:  ${({ theme }) => theme.COLORS.CAKE_200};
        font-weight: 400;
        font-size: 1rem;
        line-height: 29px;
    }

    @media (max-width: 731px) {
        >div:nth-child(1){
            justify-content: center;
        }
    }

`
