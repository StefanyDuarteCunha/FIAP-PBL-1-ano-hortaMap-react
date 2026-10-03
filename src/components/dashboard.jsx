import { useState } from 'react';
import '../css/style.css';
import EditarHorta from '../components/editor-horta.jsx'

export default function Dashboard() {

    const [dadosHorta, setHorta] = useState({
        nome: "Horta Comunitária Asa Norte",
        localizacao: "Asa Norte - Brasília / DF",
        responsavel: "Maria Souza",
        canteirosAtivos: 12,
        areaCultivada: 480,
        ultimaManutencao: "18/08/2026",
        statusAtual: "Necessita de irrigação",
    })

    const voluntariosCadastrados = ["Ana Beatriz", "Carlos Eduardo", "Mariana Lima", "Lucas Gabriel", "João Silva"]

    const proximoMultirao = {
        data: "25/10/2026",
        horario: "10h00",
        voluntariosConfirmados: ["Ana Beatriz", "Carlos Eduardo", "Lucas Gabriel"],
    }

    const [editando, setEditando] = useState(false);   // usado para chamar o botão de edição e controlar se a tela de edição está visivel ou não para o usuário

    function handleSalvar(novosDados) {
        setHorta(novosDados);   // atualiza o dicionário
        setEditando(false);     // fecha o modal
    }

    return (
        <>
            <div className="containerTitle">
                <div className="titlePage">
                    <p className="m-0"><span className="titleGreen">Área do </span> <span className="titleOrange">Gestor</span></p>
                </div>
                <div className="titleDetail">
                    <p className="m-0">Espaço destinado para acompanhar e monitorar a horta.</p>
                    <p className="m-0">Estoque • Voluntários • Multirões • Alertas • Produção</p>
                </div>
            </div>
            <div className="conteudo conteudo-dash">
                {/* LINHA 1 */}
                <div className="row g-3 line-dash">
                    <div className="col-md-4">
                        <div className="caixa-dash">
                            <h4 className="title-box-dash">
                                Informações da Horta
                                <button className="btn-edit-box" type="button" onClick={() => {
                                    setEditando(true)}}>
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                {editando && (
                                    <EditarHorta
                                        dados={dadosHorta}
                                        onSalvar={handleSalvar}
                                        onCancelar={() => setEditando(false)}
                                    />
                                )}
                            </h4>
                            <p className="mb-1">
                                <i className="bi bi-flower3 icon-info"></i>
                                <b>Nome:</b> {dadosHorta.nome}
                            </p>
                            <p className="mb-1">
                                <i className="bi bi-geo-alt-fill icon-info"></i>
                                <b>Localização:</b> {dadosHorta.localizacao}
                            </p>
                            <p className="mb-1">
                                <i className="bi bi-person-fill icon-info"></i>
                                <b>Responsável:</b> {dadosHorta.responsavel}
                            </p>
                            <p className="mb-1">
                                <i className="bi bi-grid-3x3-gap-fill icon-info"></i>
                                <b>Canteiros ativos:</b> {dadosHorta.canteirosAtivos}
                            </p>
                            <p className="mb-1">
                                <i className="bi bi-aspect-ratio icon-info"></i>
                                <b>Área cultivada:</b> {dadosHorta.areaCultivada} m<sup>2</sup>
                            </p>
                            <p className="mb-1">
                                <i className="bi bi-tools icon-info"></i>
                                <b>Última manutenção:</b> {dadosHorta.ultimaManutencao}
                            </p>
                            <p className="mb-1">
                                <i className="bi bi-exclamation-triangle-fill icon-info text-atencao"></i>
                                <b>Status atual:</b> <span className="text-atencao">{dadosHorta.statusAtual}</span>
                            </p>
                            <p className="mb-1">
                                <i className="bi bi-calendar-event-fill icon-info"></i>
                                <b>Próximo mutirão:</b> {proximoMultirao.data} - {proximoMultirao.horario}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="caixa-dash tabela-estoque-box">
                            <h4 className="title-box-dash mb-0">
                                Produtos em estoque
                                <button className="btn-edit-box" type="button">
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                            </h4>
                            <div className="barra-acoes">
                                <input type="text" className="input-busca" placeholder="Buscar produto..."/>
                                <button className="btn-adicionar">
                                    + Adicionar produto
                                </button>
                            </div>
                            <table className="tabela-estoque">
                                <thead>
                                    <tr>
                                        <th className="col-curta">Produto</th>
                                        <th className="col-curta">Quantidade</th>
                                        <th className="col-curta">Unidade</th>
                                        <th className="col-curta">Status</th>
                                        <th className="col-curta">Última colheita</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span className="emoji-icon emoji-table">🥬</span>Alface</td>
                                        <td className="text-center">20</td>
                                        <td className="text-center">un</td>
                                        <td><span className="status status-disponivel">Disponível</span></td>
                                        <td className="text-center">18/05/2026</td>
                                    </tr>
                                    <tr>
                                        <td><span className="emoji-icon emoji-table">🍅</span>Tomate</td>
                                        <td className="text-center">15</td>
                                        <td className="text-center">kg</td>
                                        <td><span className="status status-baixo">Baixo estoque</span></td>
                                        <td className="text-center">17/05/2026</td>
                                    </tr>
                                    <tr>
                                        <td><span className="emoji-icon emoji-table">🥕</span>Cenoura</td>
                                        <td className="text-center">8</td>
                                        <td className="text-center">kg</td>
                                        <td><span className="status status-disponivel">Disponível</span></td>
                                        <td className="text-center">16/05/2026</td>
                                    </tr>
                                    <tr>
                                        <td><span className="emoji-icon emoji-table">🧅</span>Cebolinha</td>
                                        <td className="text-center">12</td>
                                        <td className="text-center">maço</td>
                                        <td><span className="status status-disponivel">Disponível</span></td>
                                        <td className="text-center">18/05/2026</td>
                                    </tr>
                                    <tr>
                                        <td><span className="emoji-icon emoji-table">🥦</span>Couve</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">un</td>
                                        <td><span className="status status-baixo">Baixo estoque</span></td>
                                        <td className="text-center">15/05/2026</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="alerta-estoque">
                                <div className="alerta-esquerda">
                                    <p className="resumo-estoque text-atencao  mb-0"><i className="bi bi-exclamation-triangle-fill"></i><b>2 produtos com baixo estoque</b></p>
                                </div>
                                <a href="#" className="ver-todos-inline text-ver-todos">
                                    Ver todos os produtos <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* LINHA 2 */}
                <div className="row g-3 line-dash">
                    <div className="col-md-3">
                        <div className="caixa-dash voluntarios-box">
                            <h4 className="title-box-dash">
                                <span className="titulo-com-icone">Voluntários cadastrados</span>
                                <button className="btn-edit-box" type="button">
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                            </h4>
                            <div className="linha-voluntario line-voluntarios-ativos">
                                <i className="bi bi-people-fill icon-large"></i>
                                <div className="vol-info">
                                    <span className="numero">05</span>
                                    <span className="descricao">voluntários ativos</span>
                                </div>
                            </div>
                            <p className="linha-info mb-0">
                                <i className="bi bi-circle-fill icon-info"></i>
                                <b>03</b> disponíveis hoje
                            </p>
                            <p className="linha-info mb-0">
                                <i className="bi bi-calendar-event icon-info"></i>
                                <b>Mutirão:</b> {proximoMultirao.data}
                            </p>
                            <p className="linha-info mb-2">
                                <i className="bi bi-person-check-fill icon-info"></i>
                                <b>Último cadastro:</b> João Silva
                            </p>
                            <a href="#" className="ver-todos-inline text-ver-todos">
                                Ver voluntários <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="caixa-dash">
                            <h4 className="title-box-dash">
                                Próximo mutirão
                                <button className="btn-edit-box" type="button">
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                            </h4>
                            <div className="linha-voluntario line-voluntarios-ativos">
                                <i className="bi bi-calendar-event icon-large"></i>
                                <div className="vol-info">
                                    <span className="numero">{proximoMultirao.data}</span>
                                    <span className="descricao">às {proximoMultirao.horario}</span>
                                </div>
                            </div>
                            <p className="linha-info mb-3">
                                <i className="bi bi-geo-alt-fill icon-info"></i>
                                Horta Comunitária Asa Norte
                            </p>
                            <p className="linha-info mb-4">
                                <i className="bi bi-check-circle-fill icon-info"></i>
                                <b>08</b> voluntários confirmados
                            </p>
                            <a href="#" className="ver-todos-inline text-ver-todos">
                                Ver detalhes <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="caixa-dash">
                            <h4 className="title-box-dash">
                                Alertas Importantes
                                <button className="btn-edit-box" type="button">
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                            </h4>
                            <p className="linha-info mb-3">
                                <i className="bi bi-exclamation-triangle-fill text-danger icon-info"></i>
                                Estoque baixo de <b>tomate</b>
                            </p>
                            <p className="linha-info mb-3">
                                <i className="bi bi-droplet-fill text-primary icon-info"></i>
                                Irrigação pendente no <b>setor 08</b>
                            </p>
                            <p className="linha-info mb-3">
                                <i className="bi bi-person-plus-fill icon-info"></i>
                                Precisamos de <b>mais voluntários</b>
                            </p>
                            <a href="#" className="ver-todos-inline text-ver-todos">
                                Ver todos os alertas <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="caixa-dash">
                            <h4 className="title-box-dash">
                                Produção Atual
                                <button className="btn-edit-box" type="button">
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                            </h4>
                            <p className="linha-info mb-4">
                                <span className="emoji-icon emoji-info">🌱</span>
                                <span className="numero">10</span> produtos ativos
                            </p>
                            <p className="linha-info mb-4">
                                <i className="bi bi-basket icon-info"></i>
                                <span className="numero">02</span> em colheita
                            </p>
                            <p className="linha-info mb-4">
                                <i className="bi bi-calendar-week-fill icon-info"></i>
                                <span className="numero">01</span> fora de safra
                            </p>
                            <a href="#" className="ver-todos-inline text-ver-todos">
                                Ver produção <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* LINHA 3 */}
                <div className="row g-3 line-dash">
                    <div className="col-md-12">
                        <div className="caixa-dash">
                            <h4 className="title-box-dash">
                                Atividades Recentes
                                <button className="btn-edit-box" type="button">
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                            </h4>
                            <table className="table table-borderless atividades-recentes">
                                <tbody>
                                    <tr>
                                        <td className="icone"><i className="bi bi-box-seam icon-large"></i></td>
                                        <td className="line-table-atividades">
                                            <b>João Silva</b> atualizou<br></br> o estoque<br></br>
                                            <small>Hoje, 09:15</small>
                                        </td>
                                        <td className="icone"><i className="bi bi-basket-fill icon-large"></i></td>
                                        <td className="line-table-atividades">
                                            Nova colheita registrada — <br></br><b>Tomate e Alface</b><br></br>
                                            <small>Ontem, 17:30</small>
                                        </td>
                                        <td className="icone"><i className="bi bi-person-lines-fill icon-large"></i></td>
                                        <td className="line-table-atividades">
                                            2 voluntários cadastrados — <br></br><b>Maria e Pedro</b><br></br>
                                            <small>Ontem, 16:45</small>
                                        </td>
                                        <td className="icone"><i className="bi bi-calendar-event-fill icon-large"></i></td>
                                        <td>
                                            Mutirão agendado — <br></br><b>25/05/2026 às 14h</b><br></br>
                                            <small>Ontem, 15:20</small>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}
