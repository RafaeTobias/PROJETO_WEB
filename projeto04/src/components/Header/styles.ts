import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header`
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Playfair', serif;
    background-color: ${colors.blue};
    section {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    section picture {
        width: 20%;
    }
    section picture img {
        margin-left: -3rem;
        padding: 0.3rem;
        width: 2rem;
    }
    section h1{
        text-decoration: none;
        font-size: 2.5rem;
        width: 80%;
        margin-left: 5rem;
        display: flex;
        align-items: center;
    }
    nav {
        padding-top: 0.5rem;
        background-color: white;
        margin: 0;
        display: flex;
        flex-direction: row;
    }
    nav ul {
    padding: 0%;
    margin: 0rem;
    font-size: 1.1rem;
    }
    nav ul li {
        margin: 0rem;
        padding: 0rem;
        padding-right: 0rem;
        display: inline;
        list-style: none;
    }
    nav ul li a{
        padding-top: 0.5rem;
    }
`

