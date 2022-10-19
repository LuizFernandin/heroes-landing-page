import { createGlobalStyle } from "styled-components"
import Bkg from '../assets/elipse.png'

const globalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: #F8FDFF;
        background-image: url(${Bkg});
        background-repeat: no-repeat;
        background-position: top right;
        background-size: cover;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`

export default globalStyles