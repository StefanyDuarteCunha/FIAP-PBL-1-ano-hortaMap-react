import logo from '../img/logo_HortaMap_horizontal.png';
import '../css/style.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="logo">
                <Link to="/conheca"><img src={logo} alt="HortaMap"/></Link>
            </div>
            <div className="navegacao">
                <div className="esquerda">
                    <h2><Link to="/conheca">Conheça a solução</Link></h2>
                    <h2><Link to="/fale-conosco">Fale conosco</Link></h2>
                </div>
                <div className="direita">
                    <button type="button" className="menu"><Link to="/reserva">Reservas</Link></button>
                    <button type="button" className="menu"><Link to="/login">Login</Link></button>
                    <button type="button" className="menu"><Link to="/experimente">Experimente a Solução</Link></button>
                </div>
            </div>
        </>
    )
}