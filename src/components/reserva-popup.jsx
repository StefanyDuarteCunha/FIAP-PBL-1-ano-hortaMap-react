import { useState } from 'react';
import '../css/style.css';

export default function ModalReserva({ produto, onConfirmar, onCancelar }) {

    // Inicializa o estado com as informações do produto selecionado
    const [form, setForm] = useState({
        produtoNome: produto?.produto || 'Alface',
        quantidade: 1,
        unidade: produto?.unidade || 'un',
        localRetirada: produto?.horta || produto?.localRetirada || 'Horta Asa Norte, Bloco C'
    });

    // Função para atualizar os dados dinamicamente no formulário
    function handleChange(e) {
        const nomeCampo = e.target.name;
        const valorCampo = e.target.value;

        setForm({
            ...form,
            [nomeCampo]: valorCampo
        });
    }

    return (
        <div className="modalOverlay">
            <div className="conteudoModalReserva">
                {/* Título com destaque de cor no nome do produto */}
                <h2 className="tituloModalReserva">
                    Confirmação de Reserva - <span className="nomeDestaque">{form.produtoNome}</span>
                </h2>

                {/* Detalhes do Produto */}
                <p className="itemModal">
                    <strong>Produto:</strong> {form.produtoNome}
                </p>

                {/* Campo de Seleção de Quantidade */}
                <div className="campoQuantidade">
                    <label htmlFor="quantidade">
                        <strong>Quantidade a Reservar:</strong>
                    </label>
                    <input
                        type="number"
                        id="quantidade"
                        name="quantidade"
                        min="1"
                        max={produto?.quantidade || 20}
                        value={form.quantidade}
                        onChange={handleChange}
                        className="inputQuantidade"
                    />
                    <span className="unidadeTexto">{form.unidade}</span>
                </div>

                {/* Local de Retirada */}
                <p className="itemModal mb-4">
                    <strong>Local de Retirada:</strong> {form.localRetirada}
                </p>

                {/* Aviso do Tempo de Validade */}
                <div className="avisoReserva">
                    <p className="tempoAviso mb-4">
                        <span className="iconeRelogio">🕒 </span> 
                        <strong>Sua reserva expira em: </strong>
                        <span className="tempoDestaque">60:00 minutos (1 hora)</span>
                    </p>
                    <p className="subAviso">
                        Se não for retirado, o item retornará ao estoque
                    </p>
                </div>

                {/* Botões de Ação */}
                <div className="botoesPopup">
                    <button 
                        className="btnConfirmarReserva" 
                        type="button" 
                        onClick={() => onConfirmar(form)}
                    >
                        Confirmar Reserva
                    </button>
                    <button 
                        className="btnCancelarReserva" 
                        type="button" 
                        onClick={onCancelar}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}