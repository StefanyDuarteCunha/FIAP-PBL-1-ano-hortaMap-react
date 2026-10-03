import { useState } from 'react';
import '../css/style.css';

export default function EditorHorta({ dados, onSalvar, onCancelar }) {

    const [form, setForm] = useState(dados);

    function handleChange(e) {
        const nomeCampo = e.target.name;
        const valorCampo = e.target.value;

        setForm({  // o setForm capta o formulário
            ...form,   // este elemento copia tudo o que já está dentro do formulário
            [nomeCampo]: valorCampo  // ele muda apenas o campo especificado, salvando tudo de volta no formulário
        });
    }

    return (
        <div className="modal">
            <div className="conteudoModal">
                <h2 className="mb-4"><span className="titleModal1">Editar </span><span className="titleModal2">Dados da Horta</span></h2>
                <label className="labelPopup">
                    Nome:
                    <input className="inputPopup"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                    />
                </label>

                <label className="labelPopup">
                    Localização:
                    <input className="inputPopup"
                        name="localizacao"
                        value={form.localizacao}
                        onChange={handleChange}
                    />
                </label>

                <label className="labelPopup">
                    Responsável:
                    <input className="inputPopup"
                        name="responsavel"
                        value={form.responsavel}
                        onChange={handleChange}
                    />
                </label>

                <label className="labelPopup">
                    Canteiros Ativos:
                    <input className="inputPopup"
                        name="canteirosAtivos"
                        value={form.canteirosAtivos}
                        onChange={handleChange}
                    />
                </label>

                <label className="labelPopup">
                    Área Cultivada:
                    <input className="inputPopup"
                        name="areaCultivada"
                        value={form.areaCultivada}
                        onChange={handleChange}
                    />
                </label>

                <label className="labelPopup">
                    Última Manutenção:
                    <input className="inputPopup"
                        name="ultimaManutencao"
                        value={form.ultimaManutencao}
                        onChange={handleChange}
                    />
                </label>

                <label className="labelPopup">
                    Status Atual:
                    <input className="inputPopup"
                        name="statusAtual"
                        value={form.statusAtual}
                        onChange={handleChange}
                    />
                </label>
                <div className="botoesPopup">
                    <button className="btnSalvar" onClick={() => onSalvar(form)}>Salvar</button>
                    <button className="btnCancelar" onClick={onCancelar}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}