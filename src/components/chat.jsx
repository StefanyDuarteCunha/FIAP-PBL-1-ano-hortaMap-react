import { useState } from 'react';
import Markdown from 'react-markdown';  // biblioteca utilizada para que o sistema receba a mensagem do Gemini e identifique os Markdowns, e consiga tratá-los antes da visualiação do usuário.
import '../css/style.css';

function Chat() {
    const [listaMensagens, setListaMensagens] = useState([]);  // variáveis que receberão a lista de mensagens, e suas inclusões. Inicialmente, ela começa em branco.
    const [mensagemUsuario, setMensagemUsuario] = useState('');  // variáveis do campo de input do usuário
    const [carregando, setCarregando] = useState(false);  // variáveis para repassar um feedback ao usuário enquanto o modelo de LLM carrega sua mensagem. Inicialmente, é false, pois não há nada carregando.

    const enviarMensagem = async (e) => {  // o async é utilizado para algo que demora, sem travar o navegador.
        e.preventDefault();  // impede que a página inteira recarregue.
        if (!mensagemUsuario.trim() || carregando) return;  // impede o envio de mensagens em branco ou apenas com espaços.

        const novaPergunta = { role: 'user', content: mensagemUsuario };  // a mensagem do usuário é atribuída a skill 'user'.
        const historicoAtualizado = [...listaMensagens, novaPergunta];  // atualiza o histórico com a nova pergunta em uma copia da lista de mensagens.

        setListaMensagens(historicoAtualizado);  // salva a nova copia na lista de mensagens.
        setMensagemUsuario('');  // limpa a caixa de mensagens do usuário.
        setCarregando(true);  // inicia a mensagem de carregamento enquanto o LLM trabalha.

        try {
            // Converte o histórico para o formato nativo do Gemini
            const contents = historicoAtualizado.map((msg) => ({  // traduz o histórico de mensagens naquele formato que o LLM interpreta.
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }],
            }));

            const respostaHttp = await fetch('/api/chat', { // chama a sua própria rota segura na Vercel. Este formato foi adotado, para impedir o vazamento da chave de api utilizada.
                method: 'POST',  // realiza envio de dados.
                headers: {
                    'Content-Type': 'application/json',  // pacote chega em formato json.
                },
                body: JSON.stringify({ contents }),  // leva apenas o conteúdo de texto.
            });

            const dados = await respostaHttp.json();  // recebe a resposta do servidor e traduz para o js.

            if (!respostaHttp.ok) {
                throw new Error(dados.error || 'Erro na requisição');  // em caso de erro, o sistema leva para o bloco 'catch'
            }

            setListaMensagens((prev) => [  // inclui a resposta da IA no histórico, caso tudo corra corretamente.
                ...prev,
                { role: 'assistant', content: dados.text },
            ]);
        } catch (erro) {  // fluxo que o código entra caso o retorno do LLM não seja adequado.
            // console.error('Erro ao comunicar com a API:', erro);  // utilizado para validar o fluxo de construção do código.
            setListaMensagens((prev) => [
                ...prev,
                { role: 'assistant', content: 'Desculpe, ocorreu um erro ao gerar a resposta.' },   // mensagem que o usuário recebe.
            ]);
        } finally {
            setCarregando(false);  // independente do fluxo que o código seguir - try ou catch - o encerramento da função passa por este bloco, removendo a mensagem de carregamento do LLM.
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