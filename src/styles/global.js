import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        font-size: 16px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    body, input, button, textarea{
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
    } 
    
    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
    



`