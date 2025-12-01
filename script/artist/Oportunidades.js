ReactDOM.render(
    <div className="menu-suspenso">
        <div className="logo-busca">
            <div className="logo">
                <a href="/pages/artist/feed-artist.html">
                    <img src="/assets/logotipo-branco.png" alt="" />
                </a>
            </div>
            <div className="busca">
                <input placeholder="Buscar perfis..." />
                <a href=""><i className="bi bi-search"></i></a>
            </div>
        </div>

        <div className="barra-logout">
            <div className="barra-tarefas">
                <a href="/pages/artist/feed-artist.html"><i className="bi bi-house"></i></a>
                <a href="/pages/artist/oportunidade-artist.html"><i className="bi bi-briefcase"></i></a>
                <a href="/pages/artist/notificacoes-artist.html"><i className="bi bi-bell"></i></a>
                <a href="/pages/artist/mensagens-artist.html"><i className="bi bi-chat"></i></a>
                <a href="/pages/artist/perfil-artist.html"><i className="bi bi-person"></i></a>
            </div>

            <div className="logout">
                <a href="/pages/login.html"><i className="bi bi-box-arrow-right"></i></a>
            </div>
        </div>
    </div>,
    document.getElementById("menu-suspenso")
);


function PaginaOportunidades() {
    const vagas = [
        {
            id: 1,
            imagem: "../../assets/artista-oportunidade/vagaPop.jpg",
            titulo: "Vocalista para banda pop",
            produtora: "Banda Aurora Pop",
            cidade: "São Paulo, SP",
            modalidade: "Presencial",
            salario: "R$ 4.000 - R$ 6.000 (por mês)",
            prazo: "20/02/2026",
            nota: 4.8,
            status: "Aberto",
            publicado: "Publicado 1 dia atrás",

            resumo: "Procuramos vocalista para banda pop autoral com agenda ativa em casas de shows e eventos corporativos.",

            descricaoCompleta:
                "A Banda Aurora Pop está em busca de um(a) vocalista principal para integrar o projeto de forma fixa. A banda possui repertório autoral e covers, com foco em apresentações em casas de shows, festivais e eventos fechados. Procuramos alguém com presença de palco, afinação consistente e boa interação com o público.",

            tipoContratacao: "Contrato fixo com cachê mensal",

            requisitosObrigatorios: [
                "Experiência mínima de 2 anos como vocalista principal",
                "Boa afinação e extensão vocal dentro do pop",
                "Disponibilidade para ensaios 2x por semana em São Paulo",
                "Facilidade de trabalhar em grupo e receber feedback"
            ],

            requisitosDesejaveis: [
                "Experiência com gravação em estúdio",
                "Noções de inglês para cantar músicas internacionais",
                "Experiência prévia em bandas de pop/rock",
                "Presença de palco e carisma"
            ],

            entregasEsperadas: [
                "Participação em todos os ensaios combinados",
                "Atuação em shows e eventos da banda",
                "Disponibilidade para gravações de clipes e materiais de divulgação"
            ],

            competencias: [
                "Afinação consistente",
                "Presença de palco",
                "Leitura básica de cifras",
                "Interpretação vocal"
            ],

            beneficios: [
                "Participação em gravações profissionais",
                "Exposição em redes sociais e plataformas digitais",
                "Oportunidade de crescimento junto com a banda",
                "Ambiente profissional e colaborativo"
            ]
        },
        {
            id: 2,
            imagem: "../../assets/artista-oportunidade/vagaForro.jpeg",
            titulo: "Cantor(a) de forró para casa de shows",
            produtora: "Casa de Shows Lua Nordestina",
            cidade: "Campina Grande, PB",
            modalidade: "Presencial",
            salario: "R$ 300 - R$ 500 por noite",
            prazo: "12/12/2025",
            nota: 4.6,
            status: "Aberto",
            publicado: "Publicado 3 dias atrás",

            resumo: "Casa de shows tradicional procura cantor(a) de forró para apresentações semanais ao vivo.",

            descricaoCompleta:
                "A Lua Nordestina, casa de shows referência em forró pé de serra e forró estilizado, está procurando um(a) cantor(a) para se apresentar semanalmente. É importante ter domínio de repertório tradicional e atual, boa comunicação com o público e energia de palco.",

            tipoContratacao: "Cachê por show",

            requisitosObrigatorios: [
                "Experiência com repertório de forró",
                "Boa dicção e interpretação de letras nordestinas",
                "Disponibilidade para apresentações noturnas (quinta a sábado)",
                "Pontualidade e compromisso com horários"
            ],

            requisitosDesejaveis: [
                "Experiência prévia em casas de shows",
                "Repertório próprio autoral (diferencial)",
                "Capacidade de improviso com a banda",
                "Carisma e interação com o público"
            ],

            entregasEsperadas: [
                "Performar sets de 2 a 3 horas por noite",
                "Participar de ensaios pontuais",
                "Divulgar eventos em redes sociais (quando possível)"
            ],

            competencias: [
                "Voz adaptada ao forró",
                "Controle de respiração",
                "Presença de palco",
                "Boa memória de letras"
            ],

            beneficios: [
                "Agenda recorrente de shows",
                "Possibilidade de fixar parceria de longo prazo",
                "Ambiente com estrutura de som profissional"
            ]
        },
        {
            id: 3,
            imagem: "../../assets/artista-oportunidade/vagaSertanejo.webp",
            titulo: "Vocalista sertanejo universitário",
            produtora: "Dupla & Produções Sertanejas",
            cidade: "Goiânia, GO",
            modalidade: "Presencial",
            salario: "A combinar (por show + participação)",
            prazo: "25/02/2026",
            nota: 4.7,
            status: "Aberto",
            publicado: "Publicado 5 dias atrás",

            resumo: "Buscamos vocalista para projeto de sertanejo universitário com foco em bares e eventos universitários.",

            descricaoCompleta:
                "Produtora especializada em sertanejo está formando nova banda para circuito universitário. O foco é tocar repertório de sertanejo universitário atual, com possibilidade de músicas autorais no futuro. Procuramos alguém com perfil jovem, boa afinação e facilidade em lidar com público jovem.",

            tipoContratacao: "Cachê por show + bônus por performance",

            requisitosObrigatorios: [
                "Conhecimento de repertório atual de sertanejo universitário",
                "Disponibilidade para viagens em fins de semana",
                "Experiência em palco (mesmo que em projetos menores)",
                "Boa presença visual condizente com o estilo"
            ],

            requisitosDesejaveis: [
                "Experiência com dupla sertaneja (1ª ou 2ª voz)",
                "Capacidade de fazer segunda voz em algumas músicas",
                "Habilidade de falar com o público entre músicas",
                "Participação ativa em redes sociais (diferencial)"
            ],

            entregasEsperadas: [
                "Participação em ensaios semanais",
                "Shows em bares, festas universitárias e pequenos eventos",
                "Colaboração na definição de repertório"
            ],

            competencias: [
                "Afinação",
                "Interpretação sertaneja",
                "Carisma no palco",
                "Resistência vocal para sets longos"
            ],

            beneficios: [
                "Exposição em diferentes cidades",
                "Possibilidade de crescimento do projeto",
                "Rede de contatos no meio sertanejo"
            ]
        },
        {
            id: 4,
            imagem: "../../assets/artista-oportunidade/vagaGospel.avif",
            titulo: "Backing vocal para artista gospel",
            produtora: "Ministério Som da Graça",
            cidade: "Belo Horizonte, MG",
            modalidade: "Presencial / Eventual online",
            salario: "R$ 1.500 - R$ 2.500 por mês (projetos recorrentes)",
            prazo: "05/03/2026",
            nota: 4.9,
            status: "Aberto",
            publicado: "Publicado 7 dias atrás",

            resumo: "Ministério de louvor em expansão busca backing vocal para apresentações ao vivo e gravações em estúdio.",

            descricaoCompleta:
                "O Ministério Som da Graça atua com louvor contemporâneo e está em fase de expansão de agenda, incluindo gravações, conferências e cultos especiais. Buscamos backing vocal com experiência em harmonias, boa noção de dinâmica musical e compromisso com o propósito do ministério.",

            tipoContratacao: "Por projeto, com possibilidade de fixo",

            requisitosObrigatorios: [
                "Experiência prévia como backing vocal",
                "Boa noção de harmonias (segunda e terceira voz)",
                "Disponibilidade para ensaios e cultos especiais",
                "Compromisso com horários e ensaios"
            ],

            requisitosDesejaveis: [
                "Experiência com gravação em estúdio",
                "Conhecimento de repertório gospel contemporâneo",
                "Capacidade de adaptação de tom e arranjos",
                "Participação anterior em ministérios de louvor"
            ],

            entregasEsperadas: [
                "Participar de ensaios semanais",
                "Atuar em gravações ao vivo e em estúdio",
                "Contribuir com ideias de arranjos vocais"
            ],

            competencias: [
                "Afinação",
                "Harmonia vocal",
                "Trabalho em equipe",
                "Sensibilidade musical"
            ],

            beneficios: [
                "Oportunidade de participar de projetos gravados",
                "Ambiente de trabalho com propósito",
                "Possibilidade de crescimento dentro do ministério"
            ]
        }
    ];

    const [vagaSelecionada, SetvagaSelecionada] = React.useState(null);

    return (
        <div className="conteudo-oportunidades">

            {!vagaSelecionada && (
                <div>
                    <section className="section-oportunidades">
                        <div className="oportunidades-title">
                            <h1 className="text-title">Oportunidades</h1>
                            <p className="text-subtitle">
                                Encontre sua próxima oportunidade profissional
                            </p>
                        </div>
                    </section>

                    <section className="section-oportunidades2">
                        <form className="oportunidades2-busca">
                            <i class="bi bi-search"></i>
                            <input
                                className="buscar"
                                type="text"
                                placeholder="Buscar oportunidades..."
                            />
                            <div className="icon-select-wrapper">
                                <i class="bi bi-building"></i>
                                <select className="modalidade">
                                    <option value="todasModalidade">Todas Modalidades</option>
                                    <option value="remoto">Remoto</option>
                                    <option value="hibrido">Híbrido</option>
                                    <option value="presencial">Presencial</option>
                                </select>
                            </div>
                        </form>
                    </section>

                    <div className="lista-vagas">
                        {vagas.map((vaga) => (
                            <section
                                key={vaga.id}
                                className="card-vaga"
                                onClick={() => SetvagaSelecionada(vaga)}
                            >
                                <div className="vaga-imagem">
                                    <img src={vaga.imagem} alt={vaga.titulo} />
                                </div>

                                <div className="conteudo-vaga">
                                    <div className="vaga-cabecalho">
                                        <h1 className="vaga-titulo">{vaga.titulo}</h1>
                                        <p className="vaga-produtora">{vaga.produtora}</p>
                                    </div>

                                    <div className="vaga-infos">
                                        <span><i className="bi bi-geo-alt"></i>{vaga.cidade}</span>
                                        <span><i className="bi bi-people"></i>{vaga.modalidade}</span>
                                        <span><i className="bi bi-cash-stack"></i>{vaga.salario}</span>
                                        <span><i className="bi bi-calendar-event"></i>Prazo: {vaga.prazo}</span>
                                    </div>

                                    <p className="vaga-descricao">{vaga.resumo}</p>

                                    <div className="vaga-reqisitos">
                                        {vaga.requisitosObrigatorios.map((req, index) => (
                                            <span key={index} className="chip">
                                                {req}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="vaga-rodape">
                                        <span className="vaga-publicado">{vaga.publicado}</span>
                                        <span className="vaga-status">
                                            {vaga.nota} • {vaga.status}
                                        </span>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            )}

            {vagaSelecionada && (
                <div className="detalhes-vaga">
                    <div className="detalhes-acao-topo">
                        <button
                            onClick={() => SetvagaSelecionada(null)}
                            className="botao-voltar"
                        >
                        <i class="bi bi-arrow-left"></i><h4>Voltar</h4>
                        </button>
                    </div>

                    <div className="detalhes-header-esquerda">
                        <img
                            src={vagaSelecionada.imagem}
                            alt={vagaSelecionada.titulo}
                            className="detalhes-imagem"
                        />
                        <div>
                            <h2 className="detalhes-titulo">{vagaSelecionada.titulo}</h2>
                            <p className="detalhes-produtora">{vagaSelecionada.produtora}</p>
                            <p className="detalhes-avaliacao">
                                {vagaSelecionada.nota} • {vagaSelecionada.status}
                            </p>
                        </div>
                    </div>

                    <div className="detalhes-header-direita">
                        <p>{vagaSelecionada.cidade}</p>
                        <p>{vagaSelecionada.modalidade}</p>
                        <p>{vagaSelecionada.salario}</p>
                        <p>Prazo: {vagaSelecionada.prazo}</p>
                    </div>

                    <section className="detalhes-bloco">
                        <h3>Resumo</h3>
                        <p>{vagaSelecionada.resumo}</p>
                    </section>

                    <section className="detalhes-bloco">
                        <h3>Descrição Completa</h3>
                        <p>{vagaSelecionada.descricaoCompleta}</p>
                    </section>

                    <section className="detalhes-bloco">
                        <h3>Tipo de contratação</h3>
                        <p>{vagaSelecionada.tipoContratacao}</p>
                    </section>

                    <section className="detalhes-bloco">
                        <h3>Requisitos obrigatórios</h3>
                        <ul>
                            {vagaSelecionada.requisitosObrigatorios.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="detalhes-bloco">
                        <h3>Requisitos desejáveis</h3>
                        <ul>
                            {vagaSelecionada.requisitosDesejaveis.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="detalhes-bloco">
                        <h3>Entregas esperadas</h3>
                        <ul>
                            {vagaSelecionada.entregasEsperadas.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="detalhes-bloco">
                        <h3>Ferramentas / Competências necessárias</h3>
                        <div className="detalhes-chips">
                            {vagaSelecionada.competencias.map((item, index) => (
                                <span key={index} className="chip">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="detalhes-bloco">
                        <h3>Benefícios e diferenciais</h3>
                        <ul>
                            {vagaSelecionada.beneficios.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <div className="detalhes-acao">
                        <button className="botao-candidatar">Candidatar-se</button>
                    </div>
                </div>
            )}
        </div>
    );
}

ReactDOM.render(
    <PaginaOportunidades />,
    document.getElementById("oportunidades")
);
