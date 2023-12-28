import  { styled } from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
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
        
        @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            align-items: center;
        }
    }

    h1{
        
        margin-bottom: 1.4rem;
        font-weight: 500;
        font-size: 3rem;
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
     }

    }
    p{
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        margin-bottom: 1.4rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
     }
    }

    img{
        width: 24.37rem;
    }

    .ingredients{
        margin-bottom: 3rem;
        gap: 2rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            gap: 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            
     }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

     }
     .button{
        width: 8rem;
        
     }
`