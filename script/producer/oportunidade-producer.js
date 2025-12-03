

function PaginaOportunidadesProdutor() {

    const produtores = [
        {
            id: 1,
            nome: "Seu jorge",
            funcao: "Cantor MPB",
            avatar: "../../assets/produtor-oportunidade/seuJorge.jpg",
            banner1: "../../assets/produtor-oportunidade/seu-jorge-2.png",
            banner2: "../../assets/produtor-oportunidade/seuJorge.jpg",
            banner3: "../../assets/produtor-oportunidade/seu-jorge-3.jpeg",
            nota: 4.9,
            qtdAvaliacoes: 45,
            qtdTrabalhos: 127,
            descricaoCurta:
                "Cantor MPB profissional com 15 anos de experiência em shows e gravações",
            estilos: ["MPB"],
            cidade: "São Paulo, SP",
            faixaPreco: "R$ 50.000 - R$ 100.000",
            status: "Disponível",
            statusTipo: "disponivel"
        },
        {
            id: 2,
            nome: "Júlia Vocalist",
            funcao: "Cantora Gospel",
            avatar: "../../assets/produtor-oportunidade/mulherAvatar2.webp",
            banner1: "../../assets/produtor-oportunidade/banner3.jpg",
            banner2: "../../assets/produtor-oportunidade/banner4.jpg",
            banner3: "../../assets/produtor-oportunidade/mulherAvatar2.webp",
            nota: 4.1,
            qtdAvaliacoes: 23,
            qtdTrabalhos: 40,
            descricaoCurta:
                "Cantora e compositora especializada em musica gospel",
            estilos: ["Gospel", "Compositora"],
            cidade: "Rio de Janeiro, RJ",
            faixaPreco: "R$ 3.000 - R$ 8.000",
            status: "Disponibilidade Limitada",
            statusTipo: "limitada"
        },
        {
            id: 3,
            nome: "Madonna",
            funcao: "Cantora de pop",
            avatar: "../../assets/produtor-oportunidade/mulherAvatar1.jpg",
            banner1: "../../assets/produtor-oportunidade/madonna1.jpg",
            banner2: "../../assets/produtor-oportunidade/madonna3.jpg",
            banner3: "../../assets/produtor-oportunidade/mulherAvatar1.jpg",
            nota: 4.6,
            qtdAvaliacoes: 150,
            qtdTrabalhos: 300,
            descricaoCurta:
                "Cantora e compositora especializada em MPB e música popular",
            estilos: ["Vocal", "MPB", "Pop", "Soul"],
            cidade: "Rio de Janeiro, RJ",
            faixaPreco: "R$ 500.000 - R$ 1.000.000",
            status: "Ocupada",
            statusTipo: "ocupada"
        },
        {
            id: 4,
            nome: "Wesley Safadão",
            funcao: "Cantor fórro",
            avatar: "../../assets/produtor-oportunidade/wesleyAvatar.jpg",
            banner1: "../../assets/produtor-oportunidade/wesley1.jpg",
            banner2: "../../assets/produtor-oportunidade/wesley2.jpeg",
            banner3: "../../assets/produtor-oportunidade/wesley3.webp",
            nota: 4.9,
            qtdAvaliacoes: 97,
            qtdTrabalhos: 200,
            descricaoCurta:
                "Cantor e compositor de fórro, um velho conhecido de vocês",
            estilos: ["Fórro", "Arrocha", "Brega"],
            cidade: "Rio de Janeiro, RJ",
            faixaPreco: "R$ 100.000 - R$ 500.000",
            status: "Disponivel",
            statusTipo: "disponivel"
        },
    ];

    function enviarConvite(produtor) {
        alert(`Convite enviado para ${produtor.nome}!`);
    }

    return (
        <div className="conteudo-oportunidades-produtor">

            <section className="section-oportunidades">
                <div className="oportunidades-title">
                    <h1 className="text-title">Encontre Artistas</h1>
                    <p className="text-subtitle">
                        Descubra e conecte-se com artistas talentosos para seus projetos
                    </p>
                </div>
            </section>

            <section className="section-oportunidades2">
                <form className="oportunidades2-busca">
                    <i className="bi bi-search"></i>
                    <input
                        className="buscar"
                        type="text"
                        placeholder="Buscar por nome, categoria ou habilidade..."
                    />
                    <div className="icon-select-wrapper">
                        <i className="bi bi-collection"></i>
                        <select className="categoria">
                            <option value="categorias">Todas as categorias</option>
                            <option value="forro">Forró</option>
                            <option value="sertanejo">Sertanejo</option>
                            <option value="gospel">Gospel</option>
                            <option value="pop">POP</option>
                            <option value="funk">Funk</option>
                            <option value="arrocha">Arrocha</option>
                        </select>

                        <i className="bi bi-circle-half"></i>
                        <select className="disponibilidade">
                            <option value="disponibilidade">Todas</option>
                            <option value="disponivel">Disponível</option>
                            <option value="disponibilidade-limitada">Disponibilidade limitada</option>
                            <option value="ocupada">Ocupada</option>
                        </select>
                    </div>
                </form>
            </section>

            <div className="lista-produtores">
                {produtores.map((produtor) => (
                    <section key={produtor.id} className="card-produtor">

                        <div className="card-produtor-banners">
                            <img src={produtor.banner1} alt="" />
                            <img src={produtor.banner2} alt="" />
                            <img src={produtor.banner3} alt="" />
                        </div>

                        <div className="card-produtor-body">

                            <div className="card-produtor-header">
                                <img
                                    src={produtor.avatar}
                                    alt={produtor.nome}
                                    className="card-produtor-avatar"
                                />

                                <div className="card-produtor-info">
                                    <h2>{produtor.nome}</h2>
                                    <p className="card-produtor-funcao">{produtor.funcao}</p>

                                    <div className="card-produtor-rating">
                                        <i className="bi bi-star-fill"></i>
                                        <span>{produtor.nota}</span>
                                        <span><i className="bi bi-star"></i>{produtor.qtdAvaliacoes}</span>
                                        <span><i className="bi bi-briefcase"></i>{produtor.qtdTrabalhos}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="card-produtor-descricao">
                                {produtor.descricaoCurta}
                            </p>

                            <div className="card-produtor-estilos">
                                {produtor.estilos.map((estilo, index) => (
                                    <span key={index} className="chip">
                                        {estilo}
                                    </span>
                                ))}
                                <span className="chip chip-mais">+1</span>
                            </div>

                            <div className="card-produtor-infos">
                                <p><i className="bi bi-geo-alt"></i> {produtor.cidade}</p>
                                <p><i className="bi bi-music-note-beamed"></i> {produtor.faixaPreco}</p>
                            </div>

                            <div className="card-produtor-status-wrapper">
                                <span className={`card-produtor-status pill-${produtor.statusTipo}`}>
                                    <span className="status-bolinha"></span>
                                    {produtor.status}
                                </span>
                            </div>

                            <div className="card-produtor-acoes">
                                <button
                                    className="btn-enviar-convite"
                                    onClick={() => enviarConvite(produtor)}
                                >
                                    <i className="bi bi-send"></i> Enviar convite
                                </button>

                                <button className="btn-ver-perfil"
                                onClick={(() => alert("Perfil não esta registrado ainda!"))}>
                                    Ver perfil
                                </button>
                            </div>

                        </div>

                    </section>
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(
    <PaginaOportunidadesProdutor />,
    document.getElementById("oportunidade-produtor")
);
