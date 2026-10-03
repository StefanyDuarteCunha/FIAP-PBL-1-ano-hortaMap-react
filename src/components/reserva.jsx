import '../css/style.css';
import { useState } from 'react';
import React from "react";
import ModalReserva from '../components/reserva-popup.jsx'

export default function Reserva() {
    const [busca, setBusca] = useState("");

    const [produtoEmEdicao, setProdutoEmEdicao] = useState(null);

    const [mensagemSucesso, setMensagemSucesso] = useState(null);

    const [dadosHorta] = useState([
        {
        id: 1,
        nome: "Horta Comunitária Asa Norte",
        localizacao: "Asa Norte - Brasília / DF",
        },
        {
        id: 2,
        nome: "Horta Seu Antônio",
        localizacao: "SQN 211 - Brasília / DF",
        },
        {
        id: 3,
        nome: "Horta Raiz",
        localizacao: "Lago Norte CA 5 - Brasília / DF",
        },
    ]);

    const [produtosHorta, setProdutosHorta] = useState([
        {
        icon: "🥬",
        produto: "Alface",
        quantidade: "20",
        unidade: "un",
        horta: "Asa Norte",
        preco_social: "Gratuito",
        },
        {
        icon: "🥬",
        produto: "Alface",
        quantidade: "10",
        unidade: "un",
        horta: "Horta Raiz",
        preco_social: "R$ 0,25",
        },
        {
        icon: "🍅",
        produto: "Tomate",
        quantidade: "15",
        unidade: "kg",
        horta: "Horta Raiz",
        preco_social: "R$ 0,90",
        },
        {
        icon: "🥕",
        produto: "Cenoura",
        quantidade: "8",
        unidade: "kg",
        horta: "Asa Norte",
        preco_social: "R$ 0,75",
        },
        {
        icon: "🥕",
        produto: "Cenoura",
        quantidade: "17",
        unidade: "kg",
        horta: "Horta Seu Antônio",
        preco_social: "R$ 0,85",
        },
        {
        icon: "🧅",
        produto: "Cebolinha",
        quantidade: "12",
        unidade: "maço",
        horta: "Asa Norte",
        preco_social: "R$ 0,50",
        },
        {
        icon: "🧅",
        produto: "Cebolinha",
        quantidade: "18",
        unidade: "maço",
        horta: "Horta Seu Antônio",
        preco_social: "R$ 0,45",
        },
        {
        icon: "🥦",
        produto: "Couve",
        quantidade: "10",
        unidade: "un",
        horta: "Asa Norte",
        preco_social: "Gratuito",
        }
    ]);

    // FUNÇÃO QUE PROCESSA A RESERVA CONFIRMADA
    function handleConfirmarReserva(dadosReserva) {
        // 1. Atualiza o estoque reduzindo a quantidade reservada
        setProdutosHorta(prevProdutos =>
            prevProdutos.map(p => {
                if (p.produto === produtoEmEdicao.produto && p.horta === produtoEmEdicao.horta) {
                    const novaQtd = Math.max(0, Number(p.quantidade) - Number(dadosReserva.quantidade));
                    return { ...p, quantidade: String(novaQtd) };
                }
                return p;
            })
        );
        // 2. Fecha o modal
        setProdutoEmEdicao(null);
        // 3. Define a mensagem de confirmação
        setMensagemSucesso(
            `Reserva realizada com sucesso! ${dadosReserva.quantidade} ${dadosReserva.unidade} de ${dadosReserva.produtoNome} em ${dadosReserva.localRetirada}.`
        );
        // 4. Remove a mensagem automaticamente após 4 segundos
        setTimeout(() => {
            setMensagemSucesso(null);
        }, 10000);
    }

    // Filtra as hortas com base no texto digitado (busca por nome ou localização)
    const hortasFiltradas = dadosHorta.filter((horta) =>
        horta.nome.toLowerCase().includes(busca.toLowerCase()) ||
        horta.localizacao.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <>
            {mensagemSucesso && mensagemSucesso.trim() !== "" && (
            <div className="alertaSucesso">
                <span>✅ {mensagemSucesso}</span>
                <button 
                    type="button" 
                    className="btnFecharAlerta" 
                    onClick={() => setMensagemSucesso(null)}
                >
                    ✕
                </button>
            </div>
)}

            <div>
                <div className="containerTitle">
                    <div className="titlePage">
                        <p className="m-0"><span className="titleGreen">Reserva de </span> <span className="titleOrange">Produtos</span></p>
                    </div>
                    <div className="titleDetail">
                        <p className="m-0">Espaço destinado para reservas de produtos nas hortas cadastradas na plataforma.</p>
                        <p className="m-0"> Os produtos ficam reservados por até 01 hora.</p>
                    </div>
                </div>
                <div className="lineReserva">
                    <div className="containerMapa">
                        <h3>Hortas Próximas (Raio: 5km)</h3>
                        <img src="../src/img/mapa_reserva.png" alt="Ilustração horta" className="imgReserva"/>
                    </div>
                    <div className="containerBusca">
                        {/* Campo de Busca */}
                        <input type="text" placeholder="Buscar hortas..." value={busca} onChange={(e) => setBusca(e.target.value)} className="inputBusca"/>

                        {/* Lista de Hortas Filtradas */}
                        {hortasFiltradas.map((item) => (
                            <div className="cardHortas" key={item.id}>
                            <h6>{item.nome}</h6>
                            <p className="m-0">{item.localizacao}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="containerTable">
                        <table className="tableReserva">
                            <colgroup>
                                <col style={{ width: '20%' }} /> {/* Coluna Produto */}
                                <col style={{ width: '13%' }} /> {/* Coluna Quantidade */}
                                <col style={{ width: '13%' }} /> {/* Coluna Unidade */}
                                <col style={{ width: '20%' }} /> {/* Coluna Horta */}
                                <col style={{ width: '14%' }} /> {/* Coluna Preço Social */}
                                <col style={{ width: '20%' }} /> {/* Coluna Ação */}
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="titleTable">Produto</th>
                                    <th className="titleTable">Quantidade</th>
                                    <th className="titleTable">Unidade</th>
                                    <th className="titleTable">Horta</th>
                                    <th className="titleTable">Valor</th>
                                    <th className="titleTable">Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtosHorta.map((item, index) => (
                                    <tr key={index}>
                                        <td><span className="iconReserva">{item.icon}</span> {item.produto}</td>
                                        <td>{item.quantidade}</td>
                                        <td>{item.unidade}</td>
                                        <td>{item.horta}</td>
                                        <td>{item.preco_social}</td>
                                        <td>
                                            <button className="btnReserva" type="button" onClick={() => {
                                            setProdutoEmEdicao(item)}}>
                                            Reservar
                                            </button>
                                            {produtoEmEdicao && (
                                                <ModalReserva
                                                    produto={produtoEmEdicao}
                                                    onConfirmar={(dadosReserva) => {
                                                        console.log("Reserva efetuada:", dadosReserva);
                                                        setProdutoEmEdicao(null);
                                                    }}
                                                    onCancelar={() => setProdutoEmEdicao(null)}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* MODAL DE RESERVA */}
            {produtoEmEdicao && (
                <ModalReserva
                    produto={produtoEmEdicao}
                    onConfirmar={handleConfirmarReserva}
                    onCancelar={() => setProdutoEmEdicao(null)}
                />
            )}
        </>
    )
}