import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  // Aceita apenas requisições POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Lê a chave secreta no servidor (sem o prefixo VITE_)
  const apiKey = process.env.MINHA_CHAVE_API;
  if (!apiKey) {
    return res.status(500).json({ error: 'Chave de API não configurada no servidor.' });
  }

  try {
    const { contents } = req.body;

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: { apiVersion: 'v1beta' },
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction:
          'Seja direto, objetivo e conciso. Responda em no máximo 3 parágrafos curtos ou tópicos rápidos.',
      },
    });

    return res.status(200).json({ text: response.text });
  } catch (erro) {
    console.error('Erro no servidor ao chamar Gemini:', erro);
    return res.status(500).json({ error: 'Erro ao gerar resposta da IA.' });
  }
}