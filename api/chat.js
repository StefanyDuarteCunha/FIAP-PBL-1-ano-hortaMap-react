import { GoogleGenAI } from '@google/genai';  // importação da biblioteca do gemini, para uso da chave do LLM.

export default async function handler(req, res) {
  // Aceita apenas requisições POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });  // o sistema permite apenas o método de requisição POST.
  }

  // Lê a chave secreta no servidor
  const apiKey = process.env.MINHA_CHAVE_API;  // busca a minha chave - no vercel está na configuração privada, e no VSCode está em um arquivo .env que está declarado no arquivo .gitignore para impedir vazamento da minha chave.
  if (!apiKey) {
    return res.status(500).json({ error: 'Chave de API não configurada no servidor.' });    // mensagem exibida na falta de chave de API do LLM.
  }

  try {
    const { contents } = req.body;  // recebe as mensagens encaminhadas pelo chat.jsx

    const ai = new GoogleGenAI({  // funcionamento do LLM, chamando a credencial da API
      apiKey,
      httpOptions: { apiVersion: 'v1beta' },
    });

    const response = await ai.models.generateContent({    // apresenta o modelo adotado, o foco em entregar o conteúdo para que a IA tenha contexto e instruções sobre o modo de resposta.
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction:
          'Seja direto, objetivo e conciso. Responda em no máximo 3 parágrafos curtos ou tópicos rápidos.',
      },
    });

    return res.status(200).json({ text: response.text });
  } catch (erro) {
    // console.error('Erro no servidor ao chamar Gemini:', erro);  // utilizado para validar o fluxo de construção do código.
    return res.status(500).json({ error: 'Erro ao gerar resposta da IA.' });  // mensagem que o usuário recebe.
  }
}