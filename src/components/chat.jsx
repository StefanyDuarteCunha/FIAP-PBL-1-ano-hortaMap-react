import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import '../css/style.css';

// Inicializa o SDK oficial do Google
const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_MINHA_CHAVE_API,
    httpOptions: { apiVersion: 'v1beta' },
});

function Chat() {
    const [listaMensagens, setListaMensagens] = useState([]);
    const [mensagemUsuario, setMensagemUsuario] = useState('');
    const [carregando, setCarregando] = useState(false);

    const enviarMensagem = async (e) => {
        e.preventDefault();
        if (!mensagemUsuario.trim() || carregando) return;

        const novaPergunta = { role: 'user', content: mensagemUsuario };
        const historicoAtualizado = [...listaMensagens, novaPergunta];

        setListaMensagens(historicoAtualizado);
        setMensagemUsuario('');
        setCarregando(true);

        try {
            // Converte o histórico para o formato nativo do Gemini ('user' e 'model')
            const contents = historicoAtualizado.map((msg) => ({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }],
            }));

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: contents,
                config: {
                    systemInstruction: 'Seja direto, objetivo e conciso. Responda em no máximo 3 parágrafos curtos ou tópicos rápidos.',
                },
            });

            setListaMensagens((prev) => [
                ...prev,
                { role: 'assistant', content: response.text },
            ]);
        } catch (erro) {
            console.error('Erro ao comunicar com a API:', erro);
            setListaMensagens((prev) => [
                ...prev,
                { role: 'assistant', content: 'Desculpe, ocorreu um erro ao gerar a resposta.' },
            ]);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="chat-container">
            <div className="containerTitle">
                <div className="titlePage">
                    <p className="m-0"><span className="titleGreen">My</span> <span className="titleOrange">Chat</span></p>
                </div>
                <div className="titleDetail">
                    <p className="m-0">Está com dúvidas sobre como plantar ou cuidar de uma determinada planta? Ou como aproveitar melhor o alimento?</p>
                    <p className="m-0">Faça uma pergunta no campo abaixo.</p>
                </div>
            </div>
            <div className="chat-conteudo">
                <div className="mensagens-box">
                    {listaMensagens.map((msg, index) => (
                        <div
                            key={index}
                            className={`mensagem ${msg.role === 'user' ? 'usuario' : 'assistente'}`}
                        >
                            <strong>{msg.role === 'user' ? 'Você: ' : 'MyChat: '}</strong>
                            <Markdown>{msg.content}</Markdown>
                        </div>
                    ))}
                    {carregando && <div className="mensagem assistente"><em>Digitando...</em></div>}
                </div>

                <form onSubmit={enviarMensagem} className="input-form input-container-chat">
                    <input
                        type="text"
                        placeholder="Escreva sua mensagem aqui"
                        value={mensagemUsuario}
                        onChange={(e) => setMensagemUsuario(e.target.value)}
                        disabled={carregando}
                        className="mychat-input"
                    />
                    <button type="submit" disabled={carregando} className="btnForms">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Chat;