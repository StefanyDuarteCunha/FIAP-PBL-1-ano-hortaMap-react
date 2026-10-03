import '../css/style.css';
import { useState } from 'react';
import React from "react";

export default function CadastroHorta() {

    const [mensagem, setMensagem] = useState("");
    const [telefone, setTelefone] = useState("");

    function aplicarMascaraCadHorta(valor) {
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

    function handleTelefoneChangeCadHorta(e) {      // o (e) é um parâmetro, utilizado em funções que reagem a algum evento, como onSubmit, onClick, onChange, onKeyDown, onFocus e onBlur
        const valorDigitado = e.target.value;
        setTelefone(aplicarMascaraCadHorta(valorDigitado));
    }

    function handleSubmitCadHorta(e) {
        e.preventDefault();
        alert("Cadastro encaminhado com sucesso! Em breve enviaremos detalhes sobre o seu cadastro.");
        e.target.reset();
        setMensagem("");
        setTelefone("");
    }

    return (
        <>
            <div>
                <form className="formsCadastro" onSubmit={handleSubmitCadHorta}>
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
                                    <input type="tel" className="form-control campoControle" id="telefone" placeHolder="(xx)xxxxx-xxxx" value={telefone} onChange={handleTelefoneChangeCadHorta} minLength="11" maxLength="15" title="Digite o telefone, somente números, no formato DDD número" required />
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
                    <div className="secaoCadastro borderTop" id="dados_representante_horta">
                        <p className="identificacaoSecao mb-3"><em>Dados da horta:</em></p>
                        <div className="formularioSection">
                            <div className="lineForms">
                                <div className="campoForms">
                                    <label htmlFor="validationDefault01" className="tituloForms">Nome da horta</label>
                                    <input type="text" className="form-control campoControle" id="nomehorta" title="Digite o nome da horta" placeHolder="Digite o nome da horta" required />
                                </div>
                                <div className="campo22">
                                    <p className="tituloForms">Tipo da horta</p>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="tipohorta" id="inlineRadio1"
                                            value="comunitaria" required />
                                        <label className="form-check-label campoControle" htmlFor="inlineRadio1">Comunitária</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="tipohorta" id="inlineRadio2"
                                            value="privada" required />
                                        <label className="form-check-label campoControle" htmlFor="inlineRadio2">Privada</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="tipohorta" id="inlineRadio2"
                                            value="mista" required />
                                        <label className="form-check-label campoControle" htmlFor="inlineRadio2">Mista</label>
                                    </div>
                                </div>
                                <div className="campo20">
                                    <label htmlFor="tamanhohorta" className="tituloForms">Tamanho da horta
                                        (m²)</label>
                                    <input type="number" className="form-control campoControle" id="tamanhohorta" placeHolder="Digite o tamanho da horta" required />
                                </div>
                                <div className="campo20">
                                    <label htmlFor="cep" className="tituloForms">CEP</label>
                                    <input type="text" className="form-control campoControle" id="cep" placeHolder="00000-000" minlength="9" maxlength="9" required pattern="^\d{5}\-\d{3}$" />
                                </div>
                            </div>
                            <div className="lineForms">
                                <div className="campo17">
                                    <label htmlFor="enderecohorta" className="tituloForms">Logradouro</label>
                                    <input type="text" className="form-control campoControle" id="enderecohorta" placeHolder="Rua, Avenida, Travessa, etc" required />
                                </div>
                                <div className="campo11">
                                    <label htmlFor="numerohorta" className="tituloForms">Número</label>
                                    <input type="text" className="form-control campoControle" id="numerohorta" required />
                                </div>
                                <div className="campo17">
                                    <label htmlFor="complementohorta" className="tituloForms">Complemento</label>
                                    <input type="text" className="form-control campoControle" id="complementohorta" />
                                </div>
                                <div className="campo17">
                                    <label htmlFor="bairrohorta" className="tituloForms">Bairro</label>
                                    <input type="text" className="form-control campoControle" id="bairrohorta" required />
                                </div>
                                <div className="campo17">
                                    <label htmlFor="cidadehorta" className="tituloForms">Cidade</label>
                                    <input type="text" className="form-control campoControle" id="cidadehorta" required />
                                </div>
                                <div className="campo11">
                                    <label htmlFor="estadohorta" className="tituloForms">Estado</label>
                                    <input className="form-control campoControle" list="estados" name="estadohorta" id="estadohorta" required />
                                    <datalist id="estados">
                                        <option value="AC"></option>
                                        <option value="AL"></option>
                                        <option value="AM"></option>
                                        <option value="AP"></option>
                                        <option value="BA"></option>
                                        <option value="CE"></option>
                                        <option value="DF"></option>
                                        <option value="ES"></option>
                                        <option value="GO"></option>
                                        <option value="MA"></option>
                                        <option value="MG"></option>
                                        <option value="MS"></option>
                                        <option value="MT"></option>
                                        <option value="PA"></option>
                                        <option value="PB"></option>
                                        <option value="PE"></option>
                                        <option value="PI"></option>
                                        <option value="PR"></option>
                                        <option value="RJ"></option>
                                        <option value="RN"></option>
                                        <option value="RO"></option>
                                        <option value="RR"></option>
                                        <option value="RS"></option>
                                        <option value="SC"></option>
                                        <option value="SE"></option>
                                        <option value="SP"></option>
                                        <option value="TO"></option>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="secaoCadastro borderTop" id="dados_producao_horta">
                        <p className="identificacaoSecao mb-3"><em>Dados da produção:</em></p>
                        <div className="formularioSection">
                            <div className="lineForms">
                                <p className="identificacaoSecao mb-1">A seguir, selecione os cultivos que a horta possui, e informe a área de cultivo (em m²):</p>
                            </div>
                            <div className="lineForms">
                                <p className="identificacaoSecao mt-1 mb-1"><u><i>Folhas e Verduras:</i></u></p>
                            </div>
                            <div className="gridProdutos">
                                {/* Agrião */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="agriao" />
                                    <label htmlFor="agriao" className="produtoForms">Agrião</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Alecrim */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="alecrim" />
                                    <label htmlFor="alecrim" className="produtoForms mr-2">Alecrim</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Alface */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="alface" />
                                    <label htmlFor="alface" className="produtoForms">Alface</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Camomila */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="camomila" />
                                    <label htmlFor="camomila" className="produtoForms">Camomila</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Capim-limão */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="capim-limao" />
                                    <label htmlFor="capim-limao" className="produtoForms">Capim-limão</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Cebolinha */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="cebolinha" />
                                    <label htmlFor="cebolinha" className="produtoForms">Cebolinha</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Coentro */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="coentro" />
                                    <label htmlFor="coentro" className="produtoForms">Coentro</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Couve */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="couve" />
                                    <label htmlFor="couve" className="produtoForms">Couve</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Couve-flor */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="couve-flor" />
                                    <label htmlFor="couve-flor" className="produtoForms">Couve-flor</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Erva-doce */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="erva-doce" />
                                    <label htmlFor="erva-doce" className="produtoForms">Erva-doce</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Espinafre */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="espinafre" />
                                    <label htmlFor="espinafre" className="produtoForms">Espinafre</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Hortelã */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="hortela" />
                                    <label htmlFor="hortela" className="produtoForms">Hortelã</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Manjericão */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="manjericao" />
                                    <label htmlFor="manjericao" className="produtoForms">Manjericão</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Mostarda */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="mostarda" />
                                    <label htmlFor="mostarda" className="produtoForms">Mostarda</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Ora-pro-nóbis */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="ora-pro-nobis" />
                                    <label htmlFor="ora-pro-nobis" className="produtoForms">Ora-pro-nóbis</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Rúcula */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="rucula" />
                                    <label htmlFor="rucula" className="produtoForms">Rúcula</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Salsinha */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="salsinha" />
                                    <label htmlFor="salsinha" className="produtoForms">Salsinha</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Taioba */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="taioba" />
                                    <label htmlFor="taioba" className="produtoForms">Taioba</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                            </div>
                            <div className="lineForms">
                                <div className="produtoOutro">
                                    <input type="checkbox" className="form-check-input" id="outros" />
                                    <label htmlFor="outros" className="produtoForms">Outros</label>
                                    {/* Campo extra para nome do produto */}
                                    <input type="text" className="form-control campoControle nome-outro" placeHolder="Qual produto?" disabled/>
                                    {/* Campo de área */}
                                    <input type="number" className="form-control campoControle nome-outro" placeHolder="m²" disabled/>
                                </div>
                            </div>
                            <div className="lineForms">
                                <p className="identificacaoSecao mt-4 mb-0"><u><i>Legumes e Raízes:</i></u></p>
                            </div>
                            <div className="gridProdutos">
                                {/* Abobrinha */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="abobrinha" />
                                    <label htmlFor="abobrinha" className="produtoForms">Abobrinha</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Alho */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="alho" />
                                    <label htmlFor="alho" className="produtoForms">Alho</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Alho-poró */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="alho-poro" />
                                    <label htmlFor="alho-poro" className="produtoForms">Alho-poró</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Berinjela */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="berinjela" />
                                    <label htmlFor="berinjela" className="produtoForms">Berinjela</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Beterraba */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="beterraba" />
                                    <label htmlFor="beterraba" className="produtoForms">Beterraba</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Cebola */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="cebola" />
                                    <label htmlFor="cebola" className="produtoForms">Cebola</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Cenoura */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="cenoura" />
                                    <label htmlFor="cenoura" className="produtoForms">Cenoura</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Nabo */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="nabo" />
                                    <label htmlFor="nabo" className="produtoForms">Nabo</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Pepino */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="pepino" />
                                    <label htmlFor="pepino" className="produtoForms">Pepino</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Pimentão */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="pimentao" />
                                    <label htmlFor="pimentao" className="produtoForms">Pimentão</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Rabanete */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="rabanete" />
                                    <label htmlFor="rabanete" className="produtoForms">Rabanete</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Tomate */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="tomate" />
                                    <label htmlFor="tomate" className="produtoForms">Tomate</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                            </div>
                            <div className="lineForms">
                                <div className="produtoOutro">
                                    <input type="checkbox" className="form-check-input" id="outros" />
                                    <label htmlFor="outros" className="produtoForms">Outros</label>
                                    {/* Campo extra para nome do produto */}
                                    <input type="text" className="form-control campoControle nome-outro" placeHolder="Qual produto?" disabled/>
                                    {/* Campo de área */}
                                    <input type="number" className="form-control campoControle nome-outro" placeHolder="m²" disabled/>
                                </div>
                            </div>
                            <div className="lineForms">
                                <p className="identificacaoSecao mt-4 mb-0"><u><i>Grãos, Sementes e Leguminosas:</i></u></p>
                            </div>
                            <div className="gridProdutos">
                                {/* Ervilha */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="ervilha" />
                                    <label htmlFor="ervilha" className="produtoForms">Ervilha</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Feijão */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="feijao" />
                                    <label htmlFor="feijao" className="produtoForms">Feijão</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Grão-de-bico */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="grao-de-bico" />
                                    <label htmlFor="grao-de-bico" className="produtoForms">Grão-de-bico</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Milho */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="milho" />
                                    <label htmlFor="milho" className="produtoForms">Milho</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                            </div>
                            <div className="lineForms">
                                <div className="produtoOutro">
                                    <input type="checkbox" className="form-check-input" id="outros" />
                                    <label htmlFor="outros" className="produtoForms">Outros</label>
                                    {/* Campo extra para nome do produto */}
                                    <input type="text" className="form-control campoControle nome-outro" placeHolder="Qual produto?" disabled/>
                                    {/* Campo de área */}
                                    <input type="number" className="form-control campoControle nome-outro" placeHolder="m²" disabled/>
                                </div>
                            </div>
                            <div className="lineForms">
                                <p className="identificacaoSecao mt-4 mb-0"><u><i>Frutas:</i></u></p>
                            </div>
                            <div className="gridProdutos">
                                {/* Acerola */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="acerola" />
                                    <label htmlFor="acerola" className="produtoForms">Acerola</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Amora */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="amora" />
                                    <label htmlFor="amora" className="produtoForms">Amora</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Framboesa */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="framboesa" />
                                    <label htmlFor="framboesa" className="produtoForms">Framboesa</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Laranja */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="laranja" />
                                    <label htmlFor="laranja" className="produtoForms">Laranja</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Maçã */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="maca" />
                                    <label htmlFor="maca" className="produtoForms">Maçã</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Manga */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="manga" />
                                    <label htmlFor="manga" className="produtoForms">Manga</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Maracujá */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="maracuja" />
                                    <label htmlFor="maracuja" className="produtoForms">Maracujá</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Melancia */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="melancia" />
                                    <label htmlFor="melancia" className="produtoForms">Melancia</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Melão */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="melao" />
                                    <label htmlFor="melao" className="produtoForms">Melão</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Morango */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="morango" />
                                    <label htmlFor="morango" className="produtoForms">Morango</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                                {/* Uva */}
                                <div className="produtoItem">
                                    <input type="checkbox" className="form-check-input" id="uva" />
                                    <label htmlFor="uva" className="produtoForms">Uva</label>
                                    <input type="number" className="form-control campoControle" placeHolder="m²" disabled />
                                </div>
                            </div>
                            <div className="lineForms">
                                <div className="produtoOutro">
                                    <input type="checkbox" className="form-check-input" id="outros" />
                                    <label htmlFor="outros" className="produtoForms">Outros</label>
                                    {/* Campo extra para nome do produto */}
                                    <input type="text" className="form-control campoControle nome-outro" placeHolder="Qual produto?" disabled/>
                                    {/* Campo de área */}
                                    <input type="number" className="form-control campoControle nome-outro" placeHolder="m²" disabled/>
                                </div>
                            </div>
                            <div className="lineForms">
                                <p className="identificacaoSecao mt-4 mb-0"><u><i>Outros produtos:</i></u></p>
                            </div>
                            <div className="lineForms">
                                <div className="produtoOutro">
                                    <input type="checkbox" className="form-check-input" id="outros" />
                                    <label htmlFor="outros" className="produtoForms">Outros</label>
                                    {/* Campo extra para nome do produto */}
                                    <input type="text" className="form-control campoControle nome-outro" placeHolder="Qual produto?" disabled/>
                                    {/* Campo de área */}
                                    <input type="number" className="form-control campoControle nome-outro" placeHolder="m²" disabled/>
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