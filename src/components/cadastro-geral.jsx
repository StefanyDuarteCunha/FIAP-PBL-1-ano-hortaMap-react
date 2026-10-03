import '../css/style.css';
import { useState } from 'react';
import React from "react";

export default function CadastroGeral() {

    const [mensagem, setMensagem] = useState("");
    const [telefone, setTelefone] = useState("");

    function aplicarMascaraCadGeral(valor) {
        // só números
        const numeros = valor.replace(/\D/g, "").slice(0, 11);

        // menos de 3 dígitos → não mascara ainda
        if (numeros.length <= 2) return numeros;

        // entre 3 e 7 dígitos → mascara parcialmente
        if (numeros.length <= 7) {
            return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
        }

        // 8 a 11 dígitos → máscara completa
        return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
    }

    function handleTelefoneChangeCadGeral(e) {      // o (e) é um parâmetro, utilizado em funções que reagem a algum evento, como onSubmit, onClick, onChange, onKeyDown, onFocus e onBlur
        const valorDigitado = e.target.value;
        setTelefone(aplicarMascaraCadGeral(valorDigitado));
    }

    function handleSubmitCadGeral(e) {
        e.preventDefault();
        alert("Cadastro encaminhado com sucesso! Em breve enviaremos detalhes sobre o seu cadastro.");
        e.target.reset();
        setMensagem("");
        setTelefone("");
    }

    return (
        <>
            <div>
                <form className="formsCadastro" onSubmit={handleSubmitCadGeral}>
                    <div className="secaoCadastro" id="dados_pessoais">
                        <p className="identificacaoSecao mb-3"><em>Dados pessoais:</em></p>
                        <div className="formularioSection">
                            <div className="lineForms">
                                <div className="campoForms">
                                    <label htmlFor="nomecompleto" className="tituloForms">Nome Completo</label>
                                    <input type="text" className="form-control campoControle" id="nomecompleto" pattern="^[A-Za-zÀ-ÿ]{2,}(?:\s+[A-Za-zÀ-ÿ]{2,})+$" title="Digite o seu nome e sobrenome com pelo menos 2 letras em cada" placeHolder="Digite o seu nome e sobrenome" required />
                                </div>
                                <div className="campoForms">
                                    <label htmlFor="cpf" className="tituloForms">CPF</label>
                                    <input type="text" maxlength="11" minlength="11" className="form-control campoControle" id="cpf" placeHolder="000.000.000-00" inputmode="numeric" required pattern="\d{11}" title="Digite o cpf com 11 caracteres" />
                                </div>
                                <div className="campoForms">
                                    <label htmlFor="datanascimento" className="tituloForms">Data de Nascimento</label>
                                    <input type="date" className="form-control campoControle" id="datanascimento" required />
                                </div>
                            </div>
                            <div className="lineForms">
                                <div className="campoForms">
                                    <label htmlFor="email" className="tituloForms">E-mail</label>
                                    <input type="email" className="form-control campoControle" id="email" placeHolder="name@example.com" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Digite o email no formato nome@example.com" required />
                                </div>
                                <div className="campoForms">
                                    <label htmlFor="telefone" className="tituloForms">Número de Celular</label>
                                    <input type="tel" className="form-control campoControle" id="telefone" placeHolder="(xx)xxxxx-xxxx" value={telefone} onChange={handleTelefoneChangeCadGeral} minLength="11" maxLength="15" title="Digite o telefone, somente números, no formato DDD número" required />
                                </div>
                                <div className="campoForms">
                                    <p className="tituloForms">Telefone é o mesmo para Whatsapp e ligação?</p>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="Telefone" id="inlineRadio1" value="Sim" required />
                                        <label className="form-check-label campoControle" htmlFor="inlineRadio1">Sim</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="Telefone" id="inlineRadio2" value="Não" required />
                                        <label className="form-check-label campoControle" htmlFor="inlineRadio2">Não</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="containerBtn">
                        <button type="submit" className="btnForms">Enviar</button>
                    </div>
                </form >
            </div >
        </>
    )
}