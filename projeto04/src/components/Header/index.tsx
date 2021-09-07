import * as S from "./styles"
import logo from "assets/img/Group 1.svg"

const Header = () => {
    return (
        <S.Header>
            <section>
                <picture>
                    <img id="menu" src={logo} alt="menu"/>
                </picture>
                <h1>
                    <a className="centralize" href="index.html"> Falar DE CARRO</a>
                </h1>
            </section>
            <nav>
                <ul>
                    <li>
                        <a className="left" href="assinaturaMensal.html" target="_blank">Assinatura Mensal</a>
                    </li>
                    <li>
                        <a className="right" href="AssinaturaAnual.html" target="_blank">Assinatura Anual</a>
                    </li>
                </ul>
            </nav>
        </S.Header>
    )
}

export default Header