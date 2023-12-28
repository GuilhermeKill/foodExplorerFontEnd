import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 28.87rem;
    width: 19rem;


    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 0.5rem;
  
    .hearth, .Edit{
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
       
        background: none;
        border: none;
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
    }


    img{
        width: 12rem;
        margin: 1.5rem 1rem ;
    }

    h2{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: ${({ theme }) =>  theme.FONTS.POPPINS};
        font-weight: 400;
        margin-bottom: 1rem;

    }

    span{
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: ${({ theme }) =>  theme.FONTS.ROBOTO};
        font-weight: 400;
        font-size: 2rem;
    }
    
    p{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: ${({ theme }) =>  theme.FONTS.ROBOTO};
        font-weight: 400;
        margin-bottom: 1rem;
    }
    
    >.bot{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        padding: 0 3rem  0 3rem ;

        gap: 1rem;

        .buttons{
            background: none;
            border: none;

            svg{    
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }
        }
        
    }
`