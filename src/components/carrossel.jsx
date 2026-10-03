import '../css/style.css';
import dash from '../img/dash.png';
import fale from '../img/fale_Conosco.png';
import horta from '../img/horta.png';
import alimento from '../img/mapa_Alimento.png';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Carrossel() {

    useEffect(() => {
        // Carrega o JavaScript do Bootstrap dinamicamente pelo CDN - foi utilizado para não precisar importar o Bootstrap via npm
        const script = document.createElement("script");      // criada uma constante para criar um elemento do tipo script
        script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";     // src conecta-se com o bootstrap
        script.async = true;    // utilizado para que o script rode em parelelo, de forma que a leitura do html é pausada apenas no momento de execução do script
        document.body.appendChild(script);   // coloca o objeto - script, neste caso - ao final da tela

        return () => {
            // Limpa o script quando o componente deixa de existir na tela
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div id="carrosselHorta" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="caixa">
                            <div className="texto">
                                <h3>Rede contra a Fome</h3>
                                <p>As hortas comunitárias e privadas são iniciativas que permitem o acesso a alimentos saudáveis e sustentáveis, sendo que as hortas comunitárias ofertam o alimento de forma gratuita, pelo envolvimento da sociedade ao entorno no cultivo, e as hortas privadas ofertam alimentos a preços sociais. <br></br><br></br>
                                Em ambas as iniciativas, a principal dificuldade enfrentada é o acesso e apoio das comunidades, principalmente pela ausência de divulgação ou pela falta de recursos. E o HortaMap veio com o objetivo de promover uma conexão entre as hortas, os responsáveis e a comunidade ao entorno.</p>
                                <div>
                                    <button type="button" className="btnForms"><a href="https://www.youtube.com/embed/8Pci9h2cy9U?si=DaQ1uK3vf-MT6VDR" target="_blank">Veja mais detalhes - Vídeo de telas</a></button>
                                </div>
                            </div>
                            <div className="video-container">
                                <iframe className="imgdireita" width="100%" height="350" src="https://www.youtube.com/embed/8Pci9h2cy9U?si=DaQ1uK3vf-MT6VDR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="caixa">
                            <div className="texto">
                                <h3>Mapeando para alimentar</h3>
                                <p>O primeiro passo para usar a solução começa no cadastro da horta. Com poucas informações, a horta já passa a fazer parte do nosso banco de dados e a comunidade consegue se conectar com a iniciativa. <br></br><br></br>
                                A partir deste cadastro, tenha acesso a um ecossistema de gerenciamento de dados, reunindo insights sobre recursos disponíveis, voluntários associados a sua horta, gestão de estoque e recursos de IA para apoiar uma produção otimizada.<br></br><br></br>
                                Com o HortaMap, você transforma dados em decisões inteligentes e fortalece o impacto da sua horta na comunidade.</p>
                                <div>
                                    <button type="button" className="btnForms"><Link to="/experimente">Registre a sua horta</Link></button>
                                </div>
                            </div>
                            <img className="imgdireita" src={dash} alt="Dashboard"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="caixa">
                            <div className="texto">
                                <h3>Entre em contato conosco</h3>
                                <p>Ficou com alguma dúvida sobre como o HortaMap funciona ou como podemos apoiar a sua iniciativa? Nossa equipe está pronta para ajudar você a dar o próximo passo, seja para cadastrar sua horta, entender melhor os recursos da plataforma ou descobrir como conectar sua comunidade à produção local.<br></br><br></br>
                                Queremos ouvir suas ideias, necessidades e desafios. Cada mensagem recebida nos ajuda a fortalecer essa rede que combate a fome e transforma territórios. Mande sua mensagem e vamos construir juntos um futuro mais verde e solidário.</p>
                                <div>
                                    <button type="button" className="btnForms"><Link to="/fale-conosco">Mande sua mensagem</Link></button>
                                </div>
                            </div>
                            <img className="imgdireita" src={fale} alt="Fale Conosco"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="caixa">
                            <div className="texto">
                                <h3>Hortas comunitárias ou hortas privadas?</h3>
                                <p>As hortas comunitárias são espaços cultivados por várias pessoas da comunidade, como moradores de um bairro ou voluntários. Todos podem participar do plantio, da colheita e do cuidado com a horta.<br></br><br></br>
                                O principal objetivo é ajudar as pessoas, promover a colaboração e facilitar o acesso a alimentos saudáveis, muitas vezes de forma gratuita ou com um custo bem baixo. <br></br><br></br>
                                Já as hortas privadas pertencem a uma pessoa, família ou organização. O acesso é mais restrito, e quem cuida decide como a horta será usada. Ela pode servir tanto para consumo próprio quanto para venda dos alimentos, sendo comum cobrar pelos produtos, mesmo que a preços acessíveis.</p>
                            </div>
                            <img className="imgdireita" src={horta} alt="Horta"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="caixa">
                            <div className="texto">
                                <h3>Como uma simples horta pode transformar sua vida e o futuro ao seu redor?</h3>
                                <p>Hortas não são só plantas: são saúde, economia, conexão e futuro. O Brasil tem espaço, clima e gente criativa de sobra. O que falta, muitas vezes, é só o primeiro passo: alguém que decide começar. <br></br><br></br>
                                Você não precisa de muito: um pequeno terreno, alguns vasos ou até um cantinho na varanda já são suficientes para transformar realidade em possibilidade.<br></br><br></br>
                                Cada horta nasce de uma escolha simples: plantar hoje pensando no amanhã.</p>
                            </div>
                            <img className="imgdireita" src={alimento} alt="Mapa Alimentae"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="caixa">
                            <div className="texto">
                                <h3>Melhorias Recentes no HortaMap  </h3>
                                <p>Como parte do nosso compromisso em aprimorar continuamente a experiência no HortaMap, realizamos uma série de melhorias importantes no formulário de contato. Os formulários foram reformulados e passam a contar com campos que demandam informações precisas e completas, evitando cadastros incorretos ou com informações inválidas. Também foram implementadas mensagens de erro mais claras em todos os campos, tornando o processo mais simples, seguro e eficiente para quem utiliza a plataforma.<br></br><br></br>
                                Na primeira iteração, implementamos um carrossel interativo na página inicial, trazendo uma navegação mais fluida e dinâmica entre os conteúdos.<br></br><br></br>
                                Na segunda iteração, houve a migração do site para React.</p>
                                <div>
                                    <button type="button" className="btnForms"><a href="https://www.youtube.com/embed/FxB5yJTmk8o?si=WlsL_5CZeozij7wh" target="_blank">Vídeo da primeira iteração</a></button>
                                    <button type="button" className="btnForms espaco"><a href="https://www.youtube.com/embed/FxB5yJTmk8o?si=WlsL_5CZeozij7wh" target="_blank">Vídeo da segunda iteração</a></button>
                                </div>
                            </div>
                            <div className="video-container">
                                <iframe className="imgdireita" width="560" height="315" src="https://www.youtube.com/embed/FxB5yJTmk8o?si=WlsL_5CZeozij7wh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carrosselHorta" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span></button>
                <button className="carousel-control-next" type="button" data-bs-target="#carrosselHorta" data-bs-slide="next"><span className="carousel-control-next-icon"></span></button>
                {/* INDICADORES */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carrosselHorta" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carrosselHorta" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carrosselHorta" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#carrosselHorta" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#carrosselHorta" data-bs-slide-to="4"></button>
                    <button type="button" data-bs-target="#carrosselHorta" data-bs-slide-to="5"></button>
                </div>
            </div>
        </>
    )
}