import '../css/style.css';
import { useState } from "react";
import CadastroHorta from "./cadastro-horta.jsx";
import CadastroVoluntario from "./cadastro-voluntario.jsx";
import CadastroGeral from "./cadastro-geral.jsx";
import Ilustracao from "./ilustracao.jsx"

export default function BotaoCadastro() {

    const [ativo, setAtivo] = useState(<Ilustracao />); // valor inicial

    function renderComponente() {
        if (ativo === "gestor") return <CadastroHorta />;
        if (ativo === "voluntario") return <CadastroVoluntario />;
        if (ativo === "comunidade") return <CadastroGeral />;
        return <Ilustracao />;
    }

    return (
        <>
            <div className="paginaCadastro">
                <div className="containerTitle">
                    <div className="titlePage">
                        <p className="m-0"><span className="titleGreen">Cadastre-se</span> <span className="titleOrange">aqui</span></p>
                    </div>
                    <div className="titleDetail">
                        <p className="m-0">Cadastre-se e faça parte da plataforma que conecta dados, pessoas e alimentos para um mundo mais sustentável.</p>
                        <p className="m-0"> Para começar, selecione o tipo de cadastro que você deseja e preencha as informações solicitadas.</p>
                    </div>
                </div>
                <div>
                    <div className="tipoCadastro">
                        <button className={`cadastroButton ${ativo === "gestor" ? "active" : ""}`} onClick={() => setAtivo("gestor")}>Gestor</button>
                        <button className={`cadastroButton ${ativo === "voluntario" ? "active" : ""}`} onClick={() => setAtivo("voluntario")}>Voluntário</button>
                        <button className={`cadastroButton ${ativo === "comunidade" ? "active" : ""}`}  onClick={() => setAtivo("comunidade")}>Comunidade</button>
                    </div>
                </div>
                {/* Espaço dedicado ao componente que será chamado */}
                <div>
                    {renderComponente()}
                </div>
            </div>
        </>
    )
}