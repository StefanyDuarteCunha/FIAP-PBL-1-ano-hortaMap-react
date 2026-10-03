import '../css/style.css';
import { useState } from 'react';
import React from "react";

export default function FaleConosco() {
    const [mensagem, setMensagem] = useState("");
    const [telefone, setTelefone] = useState("");

    function aplicarMascaraFale(valor) {
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

    function handleTelefoneChangeFale(e) {      // o (e) é um parâmetro, utilizado em funções que reagem a algum evento, como onSubmit, onClick, onChange, onKeyDown, onFocus e onBlur
        const valorDigitado = e.target.value;
        setTelefone(aplicarMascaraFale(valorDigitado));
    }

    function handleSubmitFale(e) {
        e.preventDefault();
        alert("Mensagem encaminhada com sucesso! Entraremos em contato em até 07 dias úteis.");
        e.target.reset();
        setMensagem("");
        setTelefone("");
    }

    return (
        <>
            <div>
                <div className="containerTitle">
                    <div className="titlePage">
                        <p className="m-0"><span className="titleGreen">Fale </span> <span className="titleOrange">Conosco</span></p>
                    </div>
                    <div className="titleDetail">
                        <p className="m-0">Está com alguma dúvida? Tem alguma sugestão, dicas, elogios ou reclamação?</p>
                        <p className="m-0"> O nosso tempo de retorno é de até 7 dias úteis</p>
                    </div>
                </div> 
                <form className="formsFale" id="formulario_JS" onSubmit={handleSubmitFale}>
                    <div className="lineForms">
                        <div className="campo50">
                            <label htmlFor="nomecompleto" className="tituloForms">Nome Completo</label>
                            <input type="text" className="form-control campoControle" id="nomecompleto" pattern="^[A-Za-zÀ-ÿ]{2,}(?:\s+[A-Za-zÀ-ÿ]{2,})+$" title="Digite o nome e sobrenome com pelo menos 2 letras em cada" placeHolder="Digite o seu nome e sobrenome" required />
                        </div>
                        <div className="campo50">
                            <label htmlFor="email" className="tituloForms">E-mail</label>
                            <input type="email" className="form-control campoControle" id="email" placeHolder="name@example.com" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Digite o email no formato nome@example.com" required />
                        </div>
                    </div>
                    <div className="lineForms">
                        <div className="campo50">
                            <label htmlFor="telefone" className="tituloForms">Número de Celular</label>
                            <input type="tel" className="form-control campoControle" id="telefone" placeHolder="(xx)xxxxx-xxxx" value={telefone} onChange={handleTelefoneChangeFale} minLength="11" maxLength="15" title="Digite o telefone, somente números, no formato DDD número" required />
                        </div>
                        <div className="campo50">
                            <p className="tituloForms">Telefone é o mesmo para Whatsapp e ligação?</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Telefone" id="inlineRadio1" value="Sim"
                                    required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio1">Sim</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Telefone" id="inlineRadio2" value="Não"
                                    required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio2">Não</label>
                            </div>
                        </div>
                    </div>
                    <div className="lineForms">
                        <div>
                            <p className="tituloForms">Você já possui cadastro?</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Cadastro" id="inlineRadio1"
                                    value="Responsável" required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio1">Responsável por uma horta</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Cadastro" id="inlineRadio2"
                                    value="Voluntário" required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio2">Voluntário</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Cadastro" id="inlineRadio3"
                                    value="Comunidade" required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio3">Comunidade</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Cadastro" id="inlineRadio4" value="Não"
                                    required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio4">Não possuo cadastro</label>
                            </div>
                        </div>
                    </div>
                    <div className="lineForms">
                        <div>
                            <p className="tituloForms">Qual o assunto da mensagem?</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio1" value="Reclamação"
                                    required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio1">Reclamação</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio2" value="Dúvida"
                                    required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio2">Dúvida</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio3" value="Sugestão"
                                    required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio3">Sugestão</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio4" value="Dica"
                                    required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio4">Dica</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio4" value="Elogio"
                                    required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio4">Elogio</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio4" value="Denúncia"
                                    required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio4">Denúncia</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio4" value="Outros"
                                    required />
                                <label className="form-check-label campoControle" htmlFor="inlineRadio4">Outros</label>
                            </div>
                        </div>
                    </div>
                    <div className="lineForms">
                        <div className="campo100">
                            <label htmlFor="textMensagem" className="tituloForms">Mensagem</label>
                            <textarea
                                className="form-control campoControle"
                                id="textMensagem"
                                rows="3"
                                maxLength="500"
                                value={mensagem}    // Este campo apresenta a mensagem armazenada na constante
                                onChange={(e) => setMensagem(e.target.value)}     // Sempre que for digitado algo, o novo texto é considerado e salvo na constante, por meio do setMensagem
                                required></textarea>
                            <p className="contCaracteres mt-2 mb-0"><span>{mensagem.length}</span>/500 caracteres</p>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btnForms">Enviar</button>
                    </div>
                </form>
                <div className="formsFale">
                    <div className="lineForms">
                        <div className="caixaContato">
                            <p className="tituloForms">Prefere mandar um e-mail ou conversa com um atendente?</p>
                            <div>
                                <p className="faleAtendenteText">
                                    <a href="https://wa.me/5531985085780" target="_blank">
                                    <i className="bi bi-whatsapp faleAtendenteIcon"></i>
                                    +55 31 98508-5780
                                </a></p>
                                <p className="faleAtendenteText">
                                    <a href="https://wa.me/5531985085780" target="_blank">
                                    <i className="bi bi-telephone faleAtendenteIcon"></i>
                                    +55 31 98508-5780
                                </a></p>
                                <p className="faleAtendenteText">
                                    <a href="https://wa.me/5531985085780" target="_blank">
                                    <i className="bi bi-envelope faleAtendenteIcon"></i>
                                    hortamapsolucao@gmail.com
                                </a></p>
                            </div>
                        </div>
                        <div className="caixaContato">
                            <p className="tituloForms">Você também pode acessar nossas redes sociais:</p>
                            <div>
                                <a href="https://www.instagram.com/hortamap/" target="_blank"><i
                                    className="bi bi-instagram redesFale"></i></a>
                                <a href="https://www.linkedin.com" target="_blank"><i className="bi bi-linkedin redesFale"></i></a>
                                <a href="https://www.youtube.com/@HortaMapSolucao" target="_blank"><i
                                    className="bi bi-youtube redesFale"></i></a>
                                <a href="https://www.tiktok.com" target="_blank"><i className="bi bi-tiktok redesFale"></i></a>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </>
    )
}
