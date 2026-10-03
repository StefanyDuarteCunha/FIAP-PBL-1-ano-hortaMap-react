import '../css/style.css';
import logoHorizontal from '../img/logo_HortaMap_horizontal.png'
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault(); // impede o form de recarregar a página
        navigate("/minhaarea");
    }

    return (
        <>
            <div className="containerSenha">
                <div className="fraseImpacto">
                    <h1>Mapear para <span className="titleGreen">Conectar</span>, <br></br>Conectar para <span className="titleOrange">Alimentar</span>!</h1>
                    <button type="button" className="menu"><Link to="/experimente">Novo usuário? <br></br> Clique aqui para se cadastrar</Link></button>
                </div>
                <form className="campoLogin" onSubmit={handleLogin}>
                    <div className="lineLogin">
                        <label htmlFor="email" className="form-label titulo-label">E-mail</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Digite o email no formato nome@example.com" required/>
                    </div>
                    <div className="lineLogin senha">
                        <label htmlFor="inputPassword" className="col-form-label titulo-label">Senha</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="**********" required/>
                    </div>
                    <div className="">
                        <div id="botao_envio">
                            <button type="submit" className="btnForms">Acessar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
