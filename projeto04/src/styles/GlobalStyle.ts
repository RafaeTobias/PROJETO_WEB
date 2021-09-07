import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    /* latin */
    @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/playfairdisplay/v22/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKd3vXDXbtM.woff2') format('woff2');
    }
    *{
        border: 0;
        margin: 0;
        width: 100%;
        max-width: 648px;
        margin: 0 auto;
    }
`
export const font = {
    fonte: 'Playfair Display'
}
export const colors = {
    blue: "#7CCAEC",
    blue_responsivo: "#65c3eb",
    white: "white",
    black: "balck",
    grey: "grey",
    light_grey: "cornsilk",

}