ReactDOM.render(
    <div>
        <header className="cabecalho">
            <div className="logo-area">
                <img src="assets/logotipo-sem-fundo.png" alt="stage nexus" className="logo-imagem"></img>
                <span className="logo-texto">Stage Nexus</span>
            </div>

            <nav className="navegacao">
                <a href="pages/login.html" className="link-simples">Login</a>
                <a href="pages/cadastro.html" className="botao-nav">Cadastre-se</a>
            </nav>
        </header>
        <section className="secao-hero">
            <div className="hero-conteudo">
                <h1 className="hero-titulo">Encontre oportunidades, talentos e conexões no universo musical.</h1>

                <p className="hero-subtitulo">
                    O Stage Nexus conecta artistas e produtores em um ambiente pensado para divulgar trabalhos,
                    encontrar projetos e organizar toda a comunicação em um só lugar.
                </p>

                <div className="hero-acoes">
                    <a href="pages/login.html" className="botao-primario">Já tenho conta</a>
                    <a href="pages/cadastro.html" className="botao-secundario">Quero me cadastrar</a>
                </div>

                <p className="hero-informacao">Leva menos de 2 minutos para começar.</p>
            </div>
        </section>
        <section className="secao-sobre">
            <h1 className="sobre-titulo">Conectando artistas e produtores</h1>

            <p className="sobre-texto">
                O Stage Nexus é uma plataforma criada para aproximar talentos e oportunidades.
                Aqui, artistas podem apresentar seus trabalhos e produtores encontram exatamente
                o que procuram para seus projetos. Tudo isso de forma simples, rápida e organizada.
            </p>

            <p className="sobre-texto">
                Seja você um artista buscando visibilidade ou um produtor em busca de novos talentos,
                o Stage Nexus facilita o caminho e torna as conexões mais eficientes.
            </p>
        </section>
        <section className="secao-beneficios">
            <div className="beneficio-card">
                <h2 className="beneficio-titulo">Para artistas</h2>
                <p className="beneficio-texto">
                    Crie seu perfil, apresente seus projetos, receba propostas e seja encontrado por
                    produtores que realmente buscam o seu estilo.
                </p>
            </div>

            <div className="beneficio-card">
                <h2 className="beneficio-titulo">Para produtores</h2>
                <p className="beneficio-texto">
                    Encontre artistas filtrando por gênero, localização e perfil.
                    Organize oportunidades e contatos em um único painel.
                </p>
            </div>

            <div className="beneficio-card">
                <h2 className="beneficio-titulo">Gestão centralizada</h2>
                <p className="beneficio-texto">
                    Centralize mensagens, notificações e propostas em um fluxo simples,
                    sem precisar ficar pulando entre vários aplicativos.
                </p>
            </div>
        </section>
        <footer className="footer">
            <p className="footer-texto">Stage Nexus &copy; 2025 — Conectando artistas e produtores.</p>
            <p className="footer-texto-menor">Projeto acadêmico. Plataforma em desenvolvimento.</p>
        </footer>
    </div>,
    document.getElementById("home-deslogado")
);